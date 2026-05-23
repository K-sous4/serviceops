import React from 'react'
import SidebarNav from './SidebarNav'
import TopNav from './TopNav'

type Props = {
  children: React.ReactNode
}

export default function AccountShell({ children }: Props) {
  return (
    <div className="min-h-screen text-on-surface bg-background">
      <SidebarNav />
      <TopNav />
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="max-w-[1100px] mx-auto p-md space-y-md">{children}</div>
      </main>
    </div>
  )
}
