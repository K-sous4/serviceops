import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

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
