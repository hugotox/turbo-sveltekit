# turbo-sveltekit

A fullstack Sveltekit project.

## Getting started

1. Install all dependencies from root level:

```bash
npm install
```

2. Create a .env file with the following keys and provide the correct values:

```
# Used to encrypt tokens
SECRET_KEY="secret-key-here"
ENCRYPTION_METHOD="aes-256-cbc"

# Turso db
# DATABASE_URL="libsql://my-database.domain.turso.io"
# DATABASE_AUTH_TOKEN="turso-token-here"

# Local SQLite
DATABASE_URL="file:///Users/user/turso-sveltekit/packages/backend/db.sqlite"
DATABASE_AUTH_TOKEN=""
```

## Run the webapp

```bash
npm run dev
```

## Run the storybook

```bash
npm run storybook
```

## Run eslint

```bash
npm run lint
```

## Format code

```bash
npm run format
```

## Make a production build

```bash
npm run build
```

## Check versions consistency

Validates package version consistency across the repo.

Uses [check-dependency-version-consistency](https://www.npmjs.com/package/check-dependency-version-consistency) via `npx`.

```bash
npm run npm run check-versions
```

## Check updates

Checks for updates of dependencies across the repo.

Uses [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) via `npx`.

```bash
npm run check-updates
```
