'use client'

import React, { useState } from 'react'
import BackgroundBlur from './BackgroundBlur'
import MobileNav from './MobileNav'
import SidebarNav from './SidebarNav'
import TopNav from './TopNav'

type Props = {
  children: React.ReactNode
}

export default function ClientsShell({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleToggleSidebar() {
    setSidebarOpen((value) => !value)
  }

  function handleCloseSidebar() {
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen text-on-surface bg-background">
      <SidebarNav isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      <main className="flex-1 md:ml-[280px] min-h-screen">
        <TopNav onMenuClick={handleToggleSidebar} />
        <div className="pt-24 pb-20 md:pb-8 px-gutter">{children}</div>
      </main>
      <MobileNav />
      <BackgroundBlur />
    </div>
  )
}
