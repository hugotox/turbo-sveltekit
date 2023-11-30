import { type Handle, redirect } from '@sveltejs/kit'
import { LOGIN_URL, LANDING_URL } from '$lib/route-settings'
import { auth } from 'backend'

export const handle: Handle = async ({ event, resolve }) => {
  const authRequest = auth.handleRequest(event)
  const session = await authRequest.validate()
  const { locals, url } = event
  const isLoginPage = url.pathname.startsWith(LOGIN_URL)

  locals.authRequest = authRequest
  locals.user = session?.user

  // validate session and redirect to login when necessary
  if (!session && !isLoginPage) {
    throw redirect(303, `${LOGIN_URL}?next=${url.pathname}`)
  } else if (session && isLoginPage) {
    throw redirect(303, LANDING_URL)
  }
  if (session?.sessionId && session?.user.role !== 'client') {
    await auth.invalidateSession(session.sessionId)
    locals.authRequest.setSession(null)
    throw redirect(302, LANDING_URL)
  }
  if (url.pathname === '/') {
    throw redirect(302, LANDING_URL)
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      const themeMode = session?.user?.preferencesJson?.theme ?? 'light'
      return html.replace('%theme-mode%', themeMode)
    },
  })
}
