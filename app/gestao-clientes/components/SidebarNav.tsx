import React from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  icon: string
  href: string
  active?: boolean
  filled?: boolean
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
  { label: 'Clients', icon: 'group', href: '/gestao-clientes', active: true, filled: true },
  { label: 'Team', icon: 'engineering', href: '#' },
  { label: 'Scheduling', icon: 'calendar_month', href: '#' },
  { label: 'Financial', icon: 'payments', href: '#' },
]

const footerItems: NavItem[] = [
  { label: 'Settings', icon: 'settings', href: '/account-settings' },
  { label: 'Support', icon: 'help', href: '#' },
]

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const className = item.active
    ? 'text-on-secondary-container bg-secondary-container rounded-lg px-4 py-3 flex items-center gap-3 transition-colors active:scale-95 duration-150'
    : 'text-on-primary-container/70 hover:text-on-primary-container hover:bg-primary-fixed-variant/10 rounded-lg px-4 py-3 flex items-center gap-3 transition-colors'

  return (
    <Link className={className} href={item.href} onClick={onClick}>
      <span className="material-symbols-outlined" style={item.filled ? { fontVariationSettings: '"FILL" 1' } : undefined}>
        {item.icon}
      </span>
      <span className="font-body-md">{item.label}</span>
    </Link>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarNav({ isOpen, onClose }: Props) {
  const className = [
    'fixed left-0 top-0 h-screen w-[280px] flex-col bg-primary dark:bg-primary-container shadow-md z-40 py-md',
    isOpen ? 'flex inset-0 w-full z-[60]' : 'hidden',
    'md:flex',
  ].join(' ')

  return (
    <aside id="sidebar" className={className}>
      <div className="px-gutter mb-xl">
        <h1 className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary-container tracking-tight">
          ServicePro Ops
        </h1>
        <p className="font-body-md text-body-md text-on-primary-container/80">Enterprise Admin</p>
      </div>
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <NavLink key={item.label} item={item} onClick={onClose} />
        ))}
      </nav>
      <div className="mt-auto px-2 pt-md border-t border-on-primary-container/10">
        {footerItems.map((item) => (
          <NavLink key={item.label} item={item} onClick={onClose} />
        ))}
        <Link
          className="mt-md px-4 flex items-center gap-3 hover:opacity-90 transition-opacity"
          href="/account-settings"
          onClick={onClose}
        >
          <img
            alt="User Profile Avatar"
            className="w-10 h-10 rounded-full border-2 border-primary-fixed-dim"
            data-alt="A professional close-up portrait of a mid-40s male operations manager with a confident expression, set against a blurred modern office background. The lighting is soft and corporate, emphasizing a clean and authoritative atmosphere consistent with a high-end service management system."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhIpCeJl0EytSEtIQeloDoWZjFNSS-HNocEL9CpOw2KaP1jGv8aWqkbFazNZhF4tGajWY_YjC3k0UmRrVVqLNkID4J0wfNJmaf5tlpK5ERgqREGAi8iD_WZfKUH0K7pHU5S_B3jQgRgTEwyDqNhP9ufQYPQTifnEVPL7hl5FHOj7huHYC1ArwJIXuHiiPnmo_6Wx0lE6pBFCueJCfrQCqPweavMpFYIGd6erlq1jmsH_ROjdeRRnfUKsXP8iSReixML-w6JBpNO6C_"
          />
          <div>
            <p className="font-label-md text-on-primary text-xs font-bold leading-none">Ricardo Silva</p>
            <p className="text-[10px] text-on-primary-container mt-1">Admin Geral</p>
          </div>
        </Link>
      </div>
    </aside>
  )
}
