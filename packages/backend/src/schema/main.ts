import { InferSelectModel, sql } from 'drizzle-orm'
import { pgTable, text, bigint, index } from 'drizzle-orm/pg-core'

export const timestamps = {
  createdAt: text('created_at'), //.default(sql`(strftime('%Y-%m-%dT%H:%M:%SZ'))`),
  updatedAt: text('updated_at'), //.default(sql`(strftime('%Y-%m-%dT%H:%M:%SZ'))`),
}

export interface UserPreferences {
  theme?: 'light' | 'dark'
}

export const users = pgTable('users', {
  id: text('id').primaryKey(),

  email: text('email').unique().notNull(), // email is unique because will be used for login
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: text('phone'),
  title: text('title'),
  preferencesJson: text('preferences_json'),
  role: text('role', { enum: ['client', 'admin'] }),

  ...timestamps,
})

export type SelectUser = InferSelectModel<typeof users>

export const userSessions = pgTable(
  'user_sessions',
  {
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => users.id),
    activeExpires: bigint('active_expires', {
      mode: 'bigint',
    }).notNull(),
    idleExpires: bigint('idle_expires', {
      mode: 'bigint',
    }).notNull(),
  },
  (table) => ({
    userSessionsUserIdIdx: index('user_sessions__user_id__idx').on(
      table.userId
    ),
  })
)

export type SelectSession = InferSelectModel<typeof userSessions>

export const userKeys = pgTable(
  'user_keys',
  {
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => users.id),
    hashedPassword: text('hashed_password'),
  },
  (table) => ({
    userKeysUserIdIdx: index('user_keys__user_id_idx').on(table.userId),
  })
)
