import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-serverless';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Pool: PgPool } = pg;
import ws from "ws";
import * as schema from "@shared/schema";

const dbUrl = process.env.DATABASE_URL || '';
const isLocal = dbUrl.includes('localhost') || dbUrl.includes('127.0.0.1');

let pool: any;
let db: any;

if (isLocal) {
  // Local PostgreSQL — use standard pg driver
  pool = new PgPool({ connectionString: dbUrl });
  db = drizzlePg({ client: pool, schema });
} else {
  // Neon cloud — use serverless WebSocket driver
  neonConfig.webSocketConstructor = ws;
  pool = new Pool({ connectionString: dbUrl });
  db = drizzleNeon({ client: pool, schema });
}

export { pool, db };
