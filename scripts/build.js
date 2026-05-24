const { spawnSync } = require('child_process')

function pickFromKeys(env, keys) {
  for (const key of keys) {
    const value = env[key]
    if (value) {
      return { key, value }
    }
  }
  return null
}

function findBySuffix(env, suffixes, exclude = new Set()) {
  const keys = Object.keys(env)
  for (const suffix of suffixes) {
    const match = keys.find((key) => !exclude.has(key) && key.endsWith(suffix) && env[key])
    if (match) {
      return { key: match, value: env[match] }
    }
  }
  return null
}

function resolveDatabaseUrl(env) {
  return (
    pickFromKeys(env, ['DATABASE_URL', 'POSTGRES_PRISMA_URL', 'POSTGRES_URL']) ||
    findBySuffix(env, ['_DATABASE_URL', '_POSTGRES_PRISMA_URL', '_POSTGRES_URL'], new Set(['DATABASE_URL_UNPOOLED']))
  )
}

function resolveUnpooledUrl(env) {
  return (
    pickFromKeys(env, ['DATABASE_URL_UNPOOLED', 'POSTGRES_URL_NON_POOLING']) ||
    findBySuffix(env, ['_DATABASE_URL_UNPOOLED', '_POSTGRES_URL_NON_POOLING'])
  )
}

const databaseUrl = resolveDatabaseUrl(process.env)
const unpooledUrl = resolveUnpooledUrl(process.env)

if (!databaseUrl) {
  console.error('[build] Missing database URL. Set DATABASE_URL or provide a Vercel/Neon env var.')
  process.exit(1)
}

const env = {
  ...process.env,
  DATABASE_URL: databaseUrl.value,
  DATABASE_URL_UNPOOLED: unpooledUrl?.value || databaseUrl.value,
}

if (!env.SERVICEOPS_DATABASE_URL) {
  env.SERVICEOPS_DATABASE_URL = databaseUrl.value
}

if (!env.SERVICEOPS_DATABASE_URL_UNPOOLED) {
  env.SERVICEOPS_DATABASE_URL_UNPOOLED = unpooledUrl?.value || databaseUrl.value
}

if (!env.SERVICEOPS_DATABASE_URL_DATABASE_URL) {
  env.SERVICEOPS_DATABASE_URL_DATABASE_URL = databaseUrl.value
}

if (!env.SERVICEOPS_DATABASE_URL_DATABASE_URL_UNPOOLED) {
  env.SERVICEOPS_DATABASE_URL_DATABASE_URL_UNPOOLED = unpooledUrl?.value || databaseUrl.value
}

console.log(`[build] DATABASE_URL <- ${databaseUrl.key}`)
if (unpooledUrl?.value) {
  console.log(`[build] DATABASE_URL_UNPOOLED <- ${unpooledUrl.key}`)
} else {
  console.warn('[build] DATABASE_URL_UNPOOLED not set; using DATABASE_URL as fallback')
}

if (!process.env.SERVICEOPS_DATABASE_URL) {
  console.log('[build] SERVICEOPS_DATABASE_URL <- resolved DATABASE_URL')
}

if (!process.env.SERVICEOPS_DATABASE_URL_UNPOOLED) {
  console.log('[build] SERVICEOPS_DATABASE_URL_UNPOOLED <- resolved DATABASE_URL_UNPOOLED')
}

if (!process.env.SERVICEOPS_DATABASE_URL_DATABASE_URL) {
  console.log('[build] SERVICEOPS_DATABASE_URL_DATABASE_URL <- resolved DATABASE_URL')
}

if (!process.env.SERVICEOPS_DATABASE_URL_DATABASE_URL_UNPOOLED) {
  console.log('[build] SERVICEOPS_DATABASE_URL_DATABASE_URL_UNPOOLED <- resolved DATABASE_URL_UNPOOLED')
}

function run(command) {
  const result = spawnSync(command, { stdio: 'inherit', env, shell: true })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

run('prisma generate')
run('prisma migrate deploy')
run('next build')
