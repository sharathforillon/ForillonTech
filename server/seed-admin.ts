import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import { db } from "./db";
import { users } from "@shared/schema";
import { eq } from "drizzle-orm";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seedAdmin() {
  try {
    // Check if admin user already exists
    const existingAdmin = await db.select().from(users).where(eq(users.username, "sharathadmin"));
    
    if (existingAdmin.length > 0) {
      console.log("Admin user already exists");
      return;
    }

    // Create admin user with hashed password
    const hashedPassword = await hashPassword("sharathadmin");
    
    await db.insert(users).values({
      username: "sharathadmin",
      password: hashedPassword,
    });

    console.log("✅ Admin user created successfully");
    console.log("Username: sharathadmin");
    console.log("Password: sharathadmin");
    
  } catch (error) {
    console.error("❌ Failed to create admin user:", error);
  }
}

// Run the seed function
seedAdmin();