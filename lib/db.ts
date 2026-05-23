import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

function pickFromKeys(env: NodeJS.ProcessEnv, keys: string[]) {
  for (const key of keys) {
    const value = env[key]
    if (value) {
      return { key, value }
    }
  }
  return null
}

function findBySuffix(env: NodeJS.ProcessEnv, suffixes: string[], exclude = new Set<string>()) {
  const keys = Object.keys(env)
  for (const suffix of suffixes) {
    const match = keys.find((key) => !exclude.has(key) && key.endsWith(suffix) && env[key])
    if (match) {
      return { key: match, value: env[match] as string }
    }
  }
  return null
}

function resolveDatabaseUrl(env: NodeJS.ProcessEnv) {
  return (
    pickFromKeys(env, ['DATABASE_URL', 'POSTGRES_PRISMA_URL', 'POSTGRES_URL']) ||
    findBySuffix(env, ['_DATABASE_URL', '_POSTGRES_PRISMA_URL', '_POSTGRES_URL'], new Set(['DATABASE_URL_UNPOOLED']))
  )
}

const resolvedDatabaseUrl = resolveDatabaseUrl(process.env)

if (resolvedDatabaseUrl && !process.env.DATABASE_URL) {
  process.env.DATABASE_URL = resolvedDatabaseUrl.value
  console.info(`[db] DATABASE_URL resolved from ${resolvedDatabaseUrl.key}`)
}

// Enable verbose Prisma logs by setting DEBUG_PRISMA=true.
const prismaClient = globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.DEBUG_PRISMA === 'true' ? ['query', 'warn', 'error'] : ['warn', 'error'],
  })

if (!process.env.DATABASE_URL) {
  console.error('[db] Missing DATABASE_URL env var')
}

export const prisma = prismaClient

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
