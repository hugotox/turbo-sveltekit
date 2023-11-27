import { neon, neonConfig, Pool } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true

const sql = neon(process.env.DATABASE_URL!)

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(sql)
