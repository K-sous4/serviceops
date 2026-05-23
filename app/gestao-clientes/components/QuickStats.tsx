import React from 'react'

type StatCard = {
  label: string
  value: string
  icon: string
  iconClassName: string
}

const stats: StatCard[] = [
  {
    label: 'Total de Clientes',
    value: '1,284',
    icon: 'group',
    iconClassName: 'bg-primary/10 text-primary',
  },
  {
    label: 'Clientes Ativos',
    value: '1,156',
    icon: 'person_check',
    iconClassName: 'bg-green-100 text-green-700',
  },
  {
    label: 'Novos este mês',
    value: '+24',
    icon: 'trending_up',
    iconClassName: 'bg-secondary-container/10 text-secondary',
  },
]

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 border border-[#E2E8F0] rounded-xl flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.iconClassName}`}>
            <span className="material-symbols-outlined">{stat.icon}</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant font-medium">{stat.label}</p>
            <p className="text-headline-md font-bold text-primary">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
