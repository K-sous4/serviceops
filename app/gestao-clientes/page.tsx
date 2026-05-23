import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ClientsShell, ClientsTable, PageHeader, QuickStats } from './components'

export default async function ClientsPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('mock_session')

  if (!session) {
    redirect('/login')
  }

  return (
    <ClientsShell>
      <PageHeader />
      <div className="grid grid-cols-1 gap-gutter">
        <ClientsTable />
        <QuickStats />
      </div>
    </ClientsShell>
  )
}
