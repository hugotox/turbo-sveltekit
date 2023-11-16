import type { Handle } from '@sveltejs/kit'
import { auth } from 'backend'

export const handle: Handle = async ({ event, resolve }) => {
  const authInstance = auth.handleRequest(event)
  const session = await authInstance.validate()
  const { locals } = event

  locals.authRequest = authInstance

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      const themeMode = session?.user?.preferencesJson?.theme ?? 'light'
      return html.replace('%theme-mode%', themeMode)
    },
  })
}
