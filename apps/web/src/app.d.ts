/* eslint-disable @typescript-eslint/ban-types */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="lucia" />

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      authRequest: import('lucia').AuthRequest
      user: import('lucia').User | undefined
    }
    // interface PageData {}
    // interface Platform {}
  }

  namespace Lucia {
    type Auth = import('backend').Auth
    type DatabaseUserAttributes = {}
    type DatabaseSessionAttributes = {}
  }
}

export {}
