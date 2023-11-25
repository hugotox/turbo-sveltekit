#!/usr/bin/node
import { migrate } from 'drizzle-orm/libsql/migrator'
import { getMainDB } from '../db-client'

const runAllMigrations = async () => {
  const mainDb = getMainDB()
  await migrate(mainDb, { migrationsFolder: 'drizzle' })

  console.log('Migrations applied!')
  process.exit(0)
}

runAllMigrations()
