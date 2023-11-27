import { input, password } from '@inquirer/prompts'
import { auth } from '../lucia'

const first = await input({ message: 'First name:' })
const last = await input({ message: 'Last name:' })
const email = await input({ message: 'Email address:' })
const pwd = await password({ message: 'Password:' })

try {
  await auth.createUser({
    key: {
      providerId: 'username',
      providerUserId: email,
      password: pwd,
    },
    attributes: {
      email,
      first_name: first,
      last_name: last,
      preferences_json: null,
      role: 'client',
    },
  })
} catch (e) {
  if (e instanceof Error) {
    if (
      e.message.includes('SQLITE_CONSTRAINT_UNIQUE') ||
      e.message.includes('users_email_unique')
    ) {
      console.log('Email already exist!')
    }
    console.log(e.message)
  }
  process.exit(1)
}
console.log('Done!')
process.exit(0)
