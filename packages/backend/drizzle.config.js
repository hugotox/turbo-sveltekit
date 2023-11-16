/** @type { import("drizzle-kit").Config } */
export default {
  schema: './src/schema/index.ts',
  out: './drizzle',
  driver: 'libsql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
}
