// https://lucia-auth.com/getting-started/#polyfill
// required for node 18 or below
import 'lucia/polyfill/node'
import { lucia } from 'lucia'
import { libsql } from '@lucia-auth/adapter-sqlite'
import { sveltekit } from 'lucia/middleware'

import { getDBClient } from './db-client'
import { SelectSession, SelectUser } from './schema/main'

export const auth = lucia({
  adapter: libsql(getDBClient(), {
    user: 'users',
    session: 'user_sessions',
    key: 'user_keys',
  }),
  env: String(process.env.NODE_ENV) === 'PROD' ? 'PROD' : 'DEV',
  middleware: sveltekit(),
  getUserAttributes: (data) => {
    const userData: SelectUser = {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      phone: data.phone,
      preferencesJson: JSON.parse(data.preferences_json),
      role: data.role,
      title: data.title,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    }
    return userData
  },
  getSessionAttributes: (data) => {
    const sessionData: SelectSession = {
      id: data.id,
      userId: data.user_id,
      activeExpires: data.active_expires,
      idleExpires: data.idle_expires,
    }
    return sessionData
  },
})

export type Auth = typeof auth
