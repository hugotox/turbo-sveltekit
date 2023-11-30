import { auth } from 'backend'
import type { PageServerLoad } from './$types'
import { redirect, type Actions, fail } from '@sveltejs/kit'
import { LuciaError } from 'lucia'

export const load = (async ({ url }) => {
  return {
    next: url.searchParams.get('next'),
  }
}) satisfies PageServerLoad

export const actions: Actions = {
  login: async ({ request, locals }) => {
    const data = await request.formData()
    const username = String(data.get('username')) ?? ''
    const password = String(data.get('password')) ?? ''
    const next = String(data.get('next')) ?? '/'
    if (username && password) {
      try {
        // find user by key
        // and validate password
        const key = await auth.useKey(
          'username',
          username.toLowerCase(),
          password
        )
        const session = await auth.createSession({
          userId: key.userId,
          attributes: {},
        })
        locals.authRequest.setSession(session) // set session cookie
      } catch (e) {
        if (
          e instanceof LuciaError &&
          (e.message === 'AUTH_INVALID_KEY_ID' ||
            e.message === 'AUTH_INVALID_PASSWORD')
        ) {
          // user does not exist
          // or invalid password
          return fail(400, {
            message: 'Incorrect username or password',
          })
        }
        return fail(500, {
          message: 'An unknown error occurred',
        })
      }
      throw redirect(303, next)
    }
  },

  logout: async ({ locals }) => {
    const session = await locals.authRequest.validate()
    if (!session) return fail(401)
    await auth.invalidateSession(session.sessionId) // invalidate session
    locals.authRequest.setSession(null) // remove cookie
    throw redirect(302, '/')
  },
}
