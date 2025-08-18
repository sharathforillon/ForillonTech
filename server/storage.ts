import { users, contactRecords, partnershipRecords, type User, type InsertUser, type ContactRecord, type InsertContactRecord, type PartnershipRecord, type InsertPartnershipRecord } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact records
  createContactRecord(record: InsertContactRecord): Promise<ContactRecord>;
  getAllContactRecords(): Promise<ContactRecord[]>;
  
  // Partnership records
  createPartnershipRecord(record: InsertPartnershipRecord): Promise<PartnershipRecord>;
  getAllPartnershipRecords(): Promise<PartnershipRecord[]>;
  
  sessionStore: session.SessionStore;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.SessionStore;

  constructor() {
    this.sessionStore = new PostgresSessionStore({ pool, createTableIfMissing: true });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactRecord(record: InsertContactRecord): Promise<ContactRecord> {
    const [contactRecord] = await db
      .insert(contactRecords)
      .values(record)
      .returning();
    return contactRecord;
  }

  async getAllContactRecords(): Promise<ContactRecord[]> {
    return await db.select().from(contactRecords).orderBy(contactRecords.createdAt);
  }

  async createPartnershipRecord(record: InsertPartnershipRecord): Promise<PartnershipRecord> {
    const [partnershipRecord] = await db
      .insert(partnershipRecords)
      .values(record)
      .returning();
    return partnershipRecord;
  }

  async getAllPartnershipRecords(): Promise<PartnershipRecord[]> {
    return await db.select().from(partnershipRecords).orderBy(partnershipRecords.createdAt);
  }
}

export const storage = new DatabaseStorage();
