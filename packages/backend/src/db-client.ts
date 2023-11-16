import { drizzle } from 'drizzle-orm/libsql'
import { createClient, type Client } from '@libsql/client'

const dbClients: Record<string, Client> = {}

/**
 * Returns the libSQL client based on the given URL
 * It creates a new client if not already in the pool.
 */
export const getDBClient = (dbUrl?: string) => {
  const url = dbUrl ?? String(process.env.DATABASE_URL)
  const authToken = String(process.env.DATABASE_AUTH_TOKEN)
  if (!dbClients[url]) {
    dbClients[url] = createClient({
      url,
      authToken,
    })
  }
  return dbClients[url]!
}

/**
 * Returns the Drizzle instance connected to the main database.
 */
export const getMainDB = () => {
  const client = getDBClient()
  return drizzle(client)
}
