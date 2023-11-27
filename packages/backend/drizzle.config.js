/** @type { import("drizzle-kit").Config } */
export default {
  schema: './src/schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
}
