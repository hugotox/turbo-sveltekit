import { error } from '@sveltejs/kit'

export const CLIENT_ROLE = 'client'

/**
 * Validates the session is still active and the user has the role of `client`.
 *
 * Throws a 403 error if the session is expired, or if the user has the wrong role.
 */
export const validateSession = async (locals: App.Locals) => {
  const session = await locals.authRequest.validate()
  if (!session || session?.user.role !== CLIENT_ROLE) {
    locals.authRequest.setSession(null)
    throw error(403)
  }
}
