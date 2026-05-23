import React from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  icon: string
  href: string
  active?: boolean
}

const items: NavItem[] = [
  { label: 'Jobs', icon: 'assignment', href: '/dashboard', active: true },
  { label: 'Map', icon: 'map', href: '#' },
  { label: 'Forms', icon: 'description', href: '/gestao-clientes' },
  { label: 'Account', icon: 'person', href: '/account-settings' },
]

function MobileNavItem({ item }: { item: NavItem }) {
  const className = item.active
    ? 'flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1'
    : 'flex flex-col items-center justify-center text-on-surface-variant'

  return (
    <Link className={className} href={item.href}>
      <span className="material-symbols-outlined" data-icon={item.icon}>
        {item.icon}
      </span>
      <span className="font-label-sm text-label-sm">{item.label}</span>
    </Link>
  )
}

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 bg-surface-container-lowest border-t border-outline-variant shadow-lg md:hidden">
      {items.map((item) => (
        <MobileNavItem key={item.label} item={item} />
      ))}
    </nav>
  )
}
