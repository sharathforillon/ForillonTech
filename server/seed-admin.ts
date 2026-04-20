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
    const ADMIN_USERNAME = "sharathadmin";
    const ADMIN_PASSWORD = "forillonadmin2026$";

    const hashedPassword = await hashPassword(ADMIN_PASSWORD);
    const existing = await db.select().from(users).where(eq(users.username, ADMIN_USERNAME));

    if (existing.length > 0) {
      // Always reset the password on every seed run
      await db.update(users).set({ password: hashedPassword }).where(eq(users.username, ADMIN_USERNAME));
      console.log("✅ Admin password reset successfully");
    } else {
      await db.insert(users).values({ username: ADMIN_USERNAME, password: hashedPassword });
      console.log("✅ Admin user created successfully");
    }

    console.log(`Username: ${ADMIN_USERNAME}`);
    console.log(`Password: ${ADMIN_PASSWORD}`);
  } catch (error) {
    console.error("❌ Failed to seed admin user:", error);
  }
}

seedAdmin();
