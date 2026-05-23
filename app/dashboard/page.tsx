import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { financialTransactionRepository, serviceOrderRepository, technicianRepository } from '@/lib/repositories'
import { ActivitiesTable, DashboardShell, LiveMapSection, PageHeader, SummaryGrid } from './components'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('mock_session')

  if (!session) {
    redirect('/login')
  }

  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)

  const [activeOrders, pendingQuotes, techniciansInField, monthlyRevenue] = await Promise.all([
    serviceOrderRepository.countByStatus('active'),
    serviceOrderRepository.countByStatus('quote_pending'),
    technicianRepository.countByStatus('in_field'),
    financialTransactionRepository.sumAmountByStatusSince('paid', monthStart),
  ])

  return (
    <DashboardShell>
      <PageHeader />
      <SummaryGrid
        summary={{
          activeOrders,
          pendingQuotes,
          techniciansInField,
          monthlyRevenue,
        }}
      />
      <LiveMapSection />
      <ActivitiesTable />
    </DashboardShell>
  )
}
