import React from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  icon: string
  href: string
  active?: boolean
}

const primaryNav: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
  { label: 'Clients', icon: 'group', href: '/gestao-clientes' },
  { label: 'Team', icon: 'engineering', href: '#' },
  { label: 'Scheduling', icon: 'calendar_month', href: '#' },
  { label: 'Financial', icon: 'payments', href: '#' },
]

const secondaryNav: NavItem[] = [
  { label: 'Settings', icon: 'settings', href: '/account-settings', active: true },
  { label: 'Support', icon: 'help', href: '#' },
]

function NavLink({ item }: { item: NavItem }) {
  const className = item.active
    ? 'text-on-secondary-container bg-secondary-container rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-colors'
    : 'text-on-primary-container/70 hover:text-on-primary-container hover:bg-primary-fixed-variant/10 rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-colors'

  return (
    <Link className={className} href={item.href}>
      <span className="material-symbols-outlined">{item.icon}</span>
      <span className="font-body-md">{item.label}</span>
    </Link>
  )
}

export default function SidebarNav() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-primary dark:bg-primary-container shadow-md flex flex-col py-md z-50">
      <div className="px-gutter mb-lg">
        <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ServicePro Ops</h1>
        <p className="font-body-md text-body-md text-on-primary-container opacity-80">Enterprise Admin</p>
      </div>
      <nav className="flex-grow space-y-1">
        {primaryNav.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </nav>
      <div className="mt-auto pt-md">
        {secondaryNav.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </div>
    </aside>
  )
}
