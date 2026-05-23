import React from 'react'

type SummaryCardProps = {
  icon: string
  iconClassName: string
  rightSlot: React.ReactNode
  label: string
  value: string
  linkText: string
}

type SummaryValues = {
  activeOrders: number
  pendingQuotes: number
  techniciansInField: number
  monthlyRevenue: number
}

type TrendBadgeProps = {
  icon: string
  text: string
  className: string
}

const messages = [
  {
    name: 'João Santos',
    time: '10 min atrás',
    text: 'Cheguei no local para a manutenção da elétrica.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC11TcYNEy4Cman0e4-4bGhS6C6PWxE6o6DGbmMbSaweLCROSr6F32fyOu27LeJEpjs02qTCwygkOB0r0Fy-14XRkO0JLAZ_3Kl9GiAs9DTrmEMzT0svbaj4LzdCO1wgs0pc8vGed7LnLk0sMcq1LGIbqJcSrBjazJmLzVBL_lCSlcAl43cNu35nMbeJSS6xp1tAgbutP8iUppSxUP7zW5jY8rxes3B09rpNSz8VbjYYlYXoDKkApbyvZV3KlCSmIGYxbiZQgrotUIz',
  },
  {
    name: 'Ana Oliveira',
    time: '45 min atrás',
    text: 'A peça para a instalação residencial está em falta no estoque.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLqzr2Jkn8STp9bjIgHMXH1LrPGJXjSpMxW3kNiVXtlzAUNH1tNvPsCbOXDztfEsiWO5hIP27HdtyEODclqJuKI493_nPKel4BT9qgem0gr98ftKuGuPtNaZshK_UVLz5q3yPzvKdPLCwDZVgAyZ_F_V0RxFJIbjLYkAHdP0sPtrRh_IIgqszW7CXc38XSXyYF97UXnHrURXDQJedpdjeFH4p1KBP6iF5QRx-4X1AArwawyfmDNUlnHTduOYuO7Cbho-VnO-5c0xcV',
  },
]

function TrendBadge({ icon, text, className }: TrendBadgeProps) {
  return (
    <span className={`font-label-md text-label-md flex items-center gap-1 ${className}`}>
      <span className="material-symbols-outlined text-[14px]" data-icon={icon}>
        {icon}
      </span>
      {text}
    </span>
  )
}

function SummaryCard({ icon, iconClassName, rightSlot, label, value, linkText }: SummaryCardProps) {
  return (
    <div className="bg-white p-sm border border-outline-variant rounded-xl shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${iconClassName}`}>
          <span className="material-symbols-outlined" data-icon={icon}>
            {icon}
          </span>
        </div>
        {rightSlot}
      </div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-1">{label}</p>
      <h3 className="font-display-lg text-display-lg text-primary">{value}</h3>
      <div className="mt-4 pt-4 border-t border-outline-variant flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-label-sm text-label-sm text-secondary cursor-pointer">{linkText}</span>
      </div>
    </div>
  )
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
        <img
          alt="Tech"
          className="object-cover"
          data-alt="Close-up avatar of a professional technician in a field uniform, smiling confidently. Soft industrial lighting in the background creates a systematic and reliable vibe."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC11TcYNEy4Cman0e4-4bGhS6C6PWxE6o6DGbmMbSaweLCROSr6F32fyOu27LeJEpjs02qTCwygkOB0r0Fy-14XRkO0JLAZ_3Kl9GiAs9DTrmEMzT0svbaj4LzdCO1wgs0pc8vGed7LnLk0sMcq1LGIbqJcSrBjazJmLzVBL_lCSlcAl43cNu35nMbeJSS6xp1tAgbutP8iUppSxUP7zW5jY8rxes3B09rpNSz8VbjYYlYXoDKkApbyvZV3KlCSmIGYxbiZQgrotUIz"
        />
      </div>
      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
        <img
          alt="Tech"
          className="object-cover"
          data-alt="A portrait of a young female service engineer with professional equipment visible, looking sharp and systematic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLqzr2Jkn8STp9bjIgHMXH1LrPGJXjSpMxW3kNiVXtlzAUNH1tNvPsCbOXDztfEsiWO5hIP27HdtyEODclqJuKI493_nPKel4BT9qgem0gr98ftKuGuPtNaZshK_UVLz5q3yPzvKdPLCwDZVgAyZ_F_V0RxFJIbjLYkAHdP0sPtrRh_IIgqszW7CXc38XSXyYF97UXnHrURXDQJedpdjeFH4p1KBP6iF5QRx-4X1AArwawyfmDNUlnHTduOYuO7Cbho-VnO-5c0xcV"
        />
      </div>
      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center bg-surface-container text-[8px] font-bold">
        +5
      </div>
    </div>
  )
}

function RecentMessagesCard() {
  return (
    <div className="bg-white p-sm border border-outline-variant rounded-xl shadow-sm col-span-1 md:col-span-2 lg:col-span-4 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-label-md text-label-md font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-sm" data-icon="chat">
            chat
          </span>
          Mensagens Recentes
        </h3>
        <span className="text-secondary font-label-sm text-label-sm cursor-pointer hover:underline">Ver todas</span>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.name}
            className="flex items-center gap-3 border-b border-outline-variant/30 pb-3 last:border-0 last:pb-0"
          >
            <img alt={`Avatar ${message.name}`} className="w-10 h-10 rounded-full object-cover" src={message.avatar} />
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <p className="font-label-md text-label-md font-bold text-primary">{message.name}</p>
                <span className="text-[10px] text-on-surface-variant opacity-60">{message.time}</span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-1">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatCount(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value)
}

function formatRevenue(value: number) {
  if (value >= 1000) {
    return `R$ ${(value / 1000).toFixed(1)}k`
  }

  return `R$ ${value.toFixed(2)}`
}

export default function SummaryGrid({ summary }: { summary: SummaryValues }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-sm">
      <SummaryCard
        icon="assignment"
        iconClassName="bg-secondary/10 text-secondary"
        rightSlot={<TrendBadge icon="trending_up" text="+12%" className="text-green-600" />}
        label="Ordens Ativas"
        value={formatCount(summary.activeOrders)}
        linkText="Ver todas"
      />
      <SummaryCard
        icon="request_quote"
        iconClassName="bg-tertiary-fixed text-on-tertiary-fixed"
        rightSlot={<TrendBadge icon="schedule" text="Urgente" className="text-amber-600" />}
        label="Orçamentos Pendentes"
        value={formatCount(summary.pendingQuotes)}
        linkText="Revisar fila"
      />
      <SummaryCard
        icon="engineering"
        iconClassName="bg-green-100 text-green-700"
        rightSlot={<AvatarStack />}
        label="Técnicos em Campo"
        value={formatCount(summary.techniciansInField)}
        linkText="Ver mapa"
      />
      <SummaryCard
        icon="payments"
        iconClassName="bg-primary-fixed-dim text-primary"
        rightSlot={<TrendBadge icon="arrow_upward" text="+8.5%" className="text-green-600" />}
        label="Receita Mensal"
        value={formatRevenue(summary.monthlyRevenue)}
        linkText="Ver financeiro"
      />
      <RecentMessagesCard />
    </div>
  )
}
