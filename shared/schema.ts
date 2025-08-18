import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactRecords = pgTable("contact_records", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const partnershipRecords = pgTable("partnership_records", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  jobTitle: text("job_title").notNull(),
  companyName: text("company_name").notNull(),
  companySize: text("company_size").notNull(),
  industry: text("industry").notNull(),
  website: text("website"),
  partnershipType: jsonb("partnership_type").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactRecordSchema = createInsertSchema(contactRecords).omit({
  id: true,
  createdAt: true,
});

export const insertPartnershipRecordSchema = createInsertSchema(partnershipRecords).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactRecord = typeof contactRecords.$inferSelect;
export type InsertContactRecord = z.infer<typeof insertContactRecordSchema>;
export type PartnershipRecord = typeof partnershipRecords.$inferSelect;
export type InsertPartnershipRecord = z.infer<typeof insertPartnershipRecordSchema>;

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
  description: z.string().optional(),
});

export type PartnershipInquiry = z.infer<typeof partnershipInquirySchema>;
