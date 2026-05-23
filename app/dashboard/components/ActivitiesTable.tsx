import React from 'react'

type ActivityRow = {
  orderId: string
  client: string
  service: string
  initials: string
  technician: string
  technicianBadgeClass: string
  status: string
  statusClass: string
  dateTime: string
}

const activities: ActivityRow[] = [
  {
    orderId: '#ORD-2984',
    client: 'Condomínio Solar',
    service: 'Reparo Elétrico',
    initials: 'JS',
    technician: 'João Santos',
    technicianBadgeClass: 'bg-secondary-fixed-dim text-on-secondary-fixed',
    status: 'Concluído',
    statusClass: 'bg-green-100 text-green-700',
    dateTime: 'Hoje, 14:20',
  },
  {
    orderId: '#ORD-2985',
    client: 'Maria Fernandes',
    service: 'Vazamento Hidráulico',
    initials: 'AO',
    technician: 'Ana Oliveira',
    technicianBadgeClass: 'bg-primary-fixed-dim text-primary',
    status: 'Pendente',
    statusClass: 'bg-amber-100 text-amber-700',
    dateTime: 'Hoje, 13:45',
  },
  {
    orderId: '#ORD-2983',
    client: 'Escola Pingo de Gente',
    service: 'Manutenção Ar-Cond',
    initials: 'CS',
    technician: 'Carlos Silva',
    technicianBadgeClass: 'bg-secondary-fixed-dim text-on-secondary-fixed',
    status: 'Em Trânsito',
    statusClass: 'bg-secondary/10 text-secondary',
    dateTime: 'Hoje, 12:30',
  },
  {
    orderId: '#ORD-2982',
    client: 'Clínica Dr. Paulo',
    service: 'Reparo de Equipamento',
    initials: 'RS',
    technician: 'Ricardo Souza',
    technicianBadgeClass: 'bg-slate-200 text-slate-700',
    status: 'Concluído',
    statusClass: 'bg-green-100 text-green-700',
    dateTime: 'Hoje, 11:15',
  },
  {
    orderId: '#ORD-2981',
    client: 'Supermercado Preço Bom',
    service: 'Checkup Semanal',
    initials: 'PM',
    technician: 'Paulo Mendes',
    technicianBadgeClass: 'bg-primary-fixed-dim text-primary',
    status: 'Cancelado',
    statusClass: 'bg-error-container text-on-error-container',
    dateTime: 'Ontem, 17:50',
  },
]

export default function ActivitiesTable() {
  return (
    <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="px-gutter py-md border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-headline-sm text-headline-sm text-primary">Atividades Recentes</h3>
        <button className="text-secondary font-label-md text-label-md hover:underline">Ver todo o histórico</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-gutter py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Ordem</th>
              <th className="px-gutter py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Cliente</th>
              <th className="px-gutter py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Técnico</th>
              <th className="px-gutter py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-gutter py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Data/Hora</th>
              <th className="px-gutter py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {activities.map((activity) => (
              <tr key={activity.orderId} className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-gutter py-4">
                  <span className="font-label-md text-label-md font-bold text-primary">{activity.orderId}</span>
                </td>
                <td className="px-gutter py-4">
                  <p className="font-body-md text-body-md text-primary font-medium">{activity.client}</p>
                  <p className="text-[11px] text-on-surface-variant">{activity.service}</p>
                </td>
                <td className="px-gutter py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${activity.technicianBadgeClass}`}>
                      {activity.initials}
                    </div>
                    <span className="font-body-md text-body-md">{activity.technician}</span>
                  </div>
                </td>
                <td className="px-gutter py-4">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase ${activity.statusClass}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-gutter py-4 text-on-surface-variant font-label-md text-label-md">{activity.dateTime}</td>
                <td className="px-gutter py-4 text-right">
                  <button className="p-1 hover:bg-surface-container rounded transition-all">
                    <span className="material-symbols-outlined text-outline" data-icon="more_vert">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
