import React from 'react'
import MobileNav from './MobileNav'
import SidebarNav from './SidebarNav'
import TopNav from './TopNav'

type Props = {
  children: React.ReactNode
}

export default function DashboardShell({ children }: Props) {
  return (
    <div className="flex h-screen overflow-hidden text-on-background">
      <SidebarNav />
      <main className="flex-grow md:ml-[280px] h-full flex flex-col relative overflow-hidden bg-background">
        <TopNav />
        <div className="flex-grow overflow-y-auto p-gutter pb-xl md:pb-gutter">
          <div className="max-w-container-max mx-auto space-y-lg">
            {children}
          </div>
        </div>
        <MobileNav />
      </main>
    </div>
  )
}
