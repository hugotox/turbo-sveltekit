import { redirect } from '@sveltejs/kit'
import { LOGIN_URL, LANDING_URL } from '$lib/route-settings'
import type { LayoutServerLoad } from './$types'
import { auth } from 'backend'
import { CLIENT_ROLE } from '$lib/auth/validateSession'

// the whole app is dynamic, so we don't want to pre-render
export const prerender = false

// Global server side layout, attaches the user from the session to the data object.
export const load = (async ({ locals, url }) => {
  // reading `url` here has a side effect of running this function on every client side navigation
  // https://github.com/sveltejs/kit/issues/6315#issuecomment-1363284611
  const isLoginPage = url.pathname.startsWith(LOGIN_URL)
  const session = await locals.authRequest.validate()

  // validate session and redirect to login when necessary
  if (!session && !isLoginPage) {
    throw redirect(303, `${LOGIN_URL}?next=${url.pathname}`)
  } else if (session && isLoginPage) {
    throw redirect(303, LANDING_URL)
  }
  if (session?.sessionId && session?.user.role !== CLIENT_ROLE) {
    await auth.invalidateSession(session.sessionId)
    locals.authRequest.setSession(null)
    throw redirect(302, LANDING_URL)
  }
  if (url.pathname === '/') {
    throw redirect(302, LANDING_URL)
  }

  return {
    user: session?.user,
  }
}) satisfies LayoutServerLoad
