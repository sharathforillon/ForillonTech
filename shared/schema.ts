import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Partnership inquiry schema (for validation only, not stored in DB)
export const partnershipInquirySchema = z.object({
  // Contact Information
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  
  // Company Information
  companyName: z.string().min(1, "Company name is required"),
  companySize: z.string().min(1, "Company size is required"),
  industry: z.string().min(1, "Industry is required"),
  website: z.string().optional(),
  
  // Partnership Details
  partnershipType: z.array(z.string()).min(1, "Select at least one partnership type"),
  projectBudget: z.string().min(1, "Project budget is required"),
  timeline: z.string().min(1, "Timeline is required"),
  description: z.string().min(10, "Please provide a detailed description (minimum 10 characters)"),
});

export type PartnershipInquiry = z.infer<typeof partnershipInquirySchema>;
