import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { partnershipInquirySchema } from "../shared/schema";
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

  const httpServer = createServer(app);
  return httpServer;
}
