import { cookies } from 'next/headers'

type Credentials = {
  login?: string
  username?: string
  email?: string
  password?: string
  senha?: string
}

export async function POST(request: Request) {
  let data: Credentials = {}

  try {
    data = (await request.json()) as Credentials
  } catch {
    return Response.json({ ok: false, message: 'Invalid payload' }, { status: 400 })
  }

  const login = data.login ?? data.username ?? data.email ?? ''
  const password = data.password ?? data.senha ?? ''
  const isValid = login === 'admin' && password === 'admin123'

  if (!isValid) {
    return Response.json({ ok: false, message: 'Invalid credentials' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set({
    name: 'mock_session',
    value: 'admin',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
    secure: process.env.NODE_ENV === 'production',
  })

  return Response.json({ ok: true, role: 'admin' })
}
