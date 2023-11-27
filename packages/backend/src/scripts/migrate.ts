#!/usr/bin/node
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { db } from '../db-client'

const runAllMigrations = async () => {
  await migrate(db, { migrationsFolder: 'drizzle' })

  console.log('Migrations applied!')
  process.exit(0)
}

runAllMigrations()
