import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { partnershipInquirySchema, insertContactRecordSchema, insertPartnershipRecordSchema, checkboxLeadSchema } from "../shared/schema";
import { sendPartnershipInquiry } from "./email";
import { logPartnershipInquiry, generateFollowUpEmailTemplate } from "./notification";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured_image?: string;
  author?: string;
  content?: string;
  tags?: string[];
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication routes
  setupAuth(app);
  // Blog API endpoints
  app.get("/api/blog", (req, res) => {
    try {
      const blogDir = join(process.cwd(), "client/public/blog");
      
      if (!existsSync(blogDir)) {
        return res.json([]);
      }

      const files = readdirSync(blogDir).filter(file => file.endsWith('.md'));
      const posts: BlogPost[] = [];

      for (const file of files) {
        try {
          const filePath = join(blogDir, file);
          const content = readFileSync(filePath, 'utf-8');
          const { data } = matter(content);
          
          posts.push({
            slug: file.replace('.md', ''),
            title: data.title || '',
            description: data.description || '',
            category: data.category || '',
            date: data.date || '',
            featured_image: data.featured_image,
            author: data.author,
            tags: data.tags
          });
        } catch (error) {
          console.error(`Error reading blog post ${file}:`, error);
        }
      }

      // Sort by date (newest first)
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  });

  app.get("/api/blog/:slug", (req, res) => {
    try {
      const { slug } = req.params;
      const filePath = join(process.cwd(), "client/public/blog", `${slug}.md`);
      
      if (!existsSync(filePath)) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      const content = readFileSync(filePath, 'utf-8');
      const { data, content: markdownContent } = matter(content);
      
      const post: BlogPost = {
        slug,
        title: data.title || '',
        description: data.description || '',
        category: data.category || '',
        date: data.date || '',
        featured_image: data.featured_image,
        author: data.author,
        tags: data.tags,
        content: markdownContent
      };

      res.json(post);
    } catch (error) {
      console.error(`Error fetching blog post ${req.params.slug}:`, error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });

  // Partnership inquiry endpoint
  app.post("/api/partnership-inquiry", async (req, res) => {
    try {
      // Validate the request body
      const validationResult = partnershipInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: validationResult.error.issues 
        });
      }

      const inquiry = validationResult.data;
      
      // Always log the inquiry with structured formatting
      logPartnershipInquiry(inquiry);
      
      // Attempt to send email notification with fallback
      const emailSent = await sendPartnershipInquiry(inquiry);
      
      if (emailSent) {
        console.log('✅ Email sent successfully');
      } else {
        console.log('⚠️ All email services failed - inquiry logged above for manual follow-up');
        console.log('\n📧 SUGGESTED FOLLOW-UP EMAIL:');
        console.log(generateFollowUpEmailTemplate(inquiry));
        console.log('='.repeat(40));
      }

      // Always return success to user since we've logged the inquiry
      res.json({ 
        success: true, 
        message: "Partnership inquiry submitted successfully. Our team will contact you within 24 hours.",
        emailSent: emailSent
      });
      
    } catch (error) {
      console.error('Partnership inquiry error:', error);
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRecordSchema.parse(req.body);
      const record = await storage.createContactRecord(validatedData);
      res.status(201).json({ success: true, record });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  // Partnership form submission (also save to database)
  app.post("/api/partnership", async (req, res) => {
    try {
      const validatedData = insertPartnershipRecordSchema.parse(req.body);
      const record = await storage.createPartnershipRecord(validatedData);
      res.status(201).json({ success: true, record });
    } catch (error) {
      console.error("Partnership form submission error:", error);
      res.status(400).json({ error: "Invalid partnership data" });
    }
  });

  // Checkbox lead submission endpoint (handler function)
  const handleCheckboxLead = async (req: any, res: any) => {
    try {
      const validationResult = checkboxLeadSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: validationResult.error.issues 
        });
      }

      const { consent, ...leadData } = validationResult.data;
      
      const lead = await storage.createCheckboxLead(leadData);
      
      console.log('📋 New Checkbox Lead Received:', {
        id: lead.id,
        company: lead.company,
        features: lead.features,
        createdAt: lead.createdAt
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you! Our team will contact you within 24 hours.",
        leadId: lead.id
      });
    } catch (error) {
      console.error("Checkbox lead submission error:", error);
      res.status(500).json({ error: "Failed to submit lead. Please try again." });
    }
  };

  // Checkbox lead endpoints (both routes use same handler)
  app.post("/api/lead", handleCheckboxLead);
  app.post("/api/checkbox-leads", handleCheckboxLead);

  // Admin routes (protected by auth middleware)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContactRecords();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  app.get("/api/admin/partnerships", async (req, res) => {
    try {
      const partnerships = await storage.getAllPartnershipRecords();
      res.json(partnerships);
    } catch (error) {
      console.error("Error fetching partnerships:", error);
      res.status(500).json({ error: "Failed to fetch partnerships" });
    }
  });

  // CSV Export endpoints
  app.get("/api/admin/export/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContactRecords();
      
      // Create CSV content
      const headers = ['ID', 'Name', 'Email', 'Subject', 'Message', 'Date Created'];
      const csvContent = [
        headers.join(','),
        ...contacts.map(contact => [
          contact.id,
          `"${contact.name}"`,
          contact.email,
          `"${contact.subject}"`,
          `"${contact.message.replace(/"/g, '""')}"`,
          contact.createdAt?.toISOString() || ''
        ].join(','))
      ].join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');
      res.send(csvContent);
    } catch (error) {
      console.error("Error exporting contacts:", error);
      res.status(500).json({ error: "Failed to export contacts" });
    }
  });

  app.get("/api/admin/export/partnerships", async (req, res) => {
    try {
      const partnerships = await storage.getAllPartnershipRecords();
      
      // Create CSV content
      const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Job Title', 'Company', 'Company Size', 'Industry', 'Website', 'Partnership Types', 'Description', 'Date Created'];
      const csvContent = [
        headers.join(','),
        ...partnerships.map(partnership => [
          partnership.id,
          `"${partnership.firstName}"`,
          `"${partnership.lastName}"`,
          partnership.email,
          partnership.phone,
          `"${partnership.jobTitle}"`,
          `"${partnership.companyName}"`,
          `"${partnership.companySize}"`,
          `"${partnership.industry}"`,
          partnership.website || '',
          `"${Array.isArray(partnership.partnershipType) ? partnership.partnershipType.join(', ') : partnership.partnershipType}"`,
          `"${partnership.description?.replace(/"/g, '""') || ''}"`,
          partnership.createdAt?.toISOString() || ''
        ].join(','))
      ].join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=partnerships.csv');
      res.send(csvContent);
    } catch (error) {
      console.error("Error exporting partnerships:", error);
      res.status(500).json({ error: "Failed to export partnerships" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
