import React from 'react'

type ClientRow = {
  initials: string
  badgeClass: string
  name: string
  document: string
  location: string
  phone: string
  status: string
  statusClass: string
  statusDotClass: string
}

const clients: ClientRow[] = [
  {
    initials: 'AC',
    badgeClass: 'bg-primary-fixed text-primary',
    name: 'Ana Carolina Silva',
    document: '123.456.789-00',
    location: 'São Paulo - SP',
    phone: '(11) 98765-4321',
    status: 'Ativo',
    statusClass: 'bg-green-100 text-green-700',
    statusDotClass: 'bg-green-500',
  },
  {
    initials: 'BM',
    badgeClass: 'bg-secondary-fixed text-secondary',
    name: 'Bruno Matos',
    document: '98.765.432/0001-99',
    location: 'Rio de Janeiro - RJ',
    phone: '(21) 91234-5678',
    status: 'Inativo',
    statusClass: 'bg-amber-100 text-amber-700',
    statusDotClass: 'bg-amber-500',
  },
  {
    initials: 'CP',
    badgeClass: 'bg-tertiary-fixed text-tertiary-fixed-dim',
    name: 'Carlos Pereira Ltda',
    document: '45.678.901/0001-12',
    location: 'Curitiba - PR',
    phone: '(41) 3344-5566',
    status: 'Ativo',
    statusClass: 'bg-green-100 text-green-700',
    statusDotClass: 'bg-green-500',
  },
  {
    initials: 'DS',
    badgeClass: 'bg-slate-200 text-slate-600',
    name: 'Daniela Soares',
    document: '111.222.333-44',
    location: 'Belo Horizonte - MG',
    phone: '(31) 99988-7766',
    status: 'Ativo',
    statusClass: 'bg-green-100 text-green-700',
    statusDotClass: 'bg-green-500',
  },
]

export default function ClientsTable() {
  return (
    <section className="bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="px-gutter py-md border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="font-headline-sm text-headline-sm font-semibold text-primary">Lista de Clientes</h3>
        <div className="flex items-center gap-2">
          <button type="button" className="px-3 py-1.5 border border-outline-variant rounded-lg text-label-md flex items-center gap-2 hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filtrar
          </button>
          <button type="button" className="px-3 py-1.5 border border-outline-variant rounded-lg text-label-md flex items-center gap-2 hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Exportar
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Nome</th>
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">CPF/CNPJ</th>
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Cidade/Estado</th>
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Telefone</th>
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-gutter py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {clients.map((client) => (
              <tr key={client.name} className="hover:bg-slate-50 transition-colors group">
                <td className="px-gutter py-xs">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${client.badgeClass}`}>
                      {client.initials}
                    </div>
                    <span className="font-body-md font-semibold text-primary">{client.name}</span>
                  </div>
                </td>
                <td className="px-gutter py-xs font-body-md text-on-surface-variant">{client.document}</td>
                <td className="px-gutter py-xs font-body-md text-on-surface-variant">{client.location}</td>
                <td className="px-gutter py-xs font-body-md text-on-surface-variant">{client.phone}</td>
                <td className="px-gutter py-xs">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${client.statusClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${client.statusDotClass}`}></span>
                    {client.status}
                  </span>
                </td>
                <td className="px-gutter py-xs">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      className="p-1.5 hover:bg-secondary-container/20 text-secondary rounded-lg transition-all"
                      title="Ver Detalhes"
                    >
                      <span className="material-symbols-outlined text-xl">visibility</span>
                    </button>
                    <button
                      type="button"
                      className="p-1.5 hover:bg-slate-200 text-on-surface-variant rounded-lg transition-all"
                      title="Editar"
                    >
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-gutter py-md border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-label-md text-on-surface-variant">
          Mostrando <span className="font-bold">1</span> a <span className="font-bold">10</span> de{' '}
          <span className="font-bold">128</span> clientes
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 border border-outline-variant rounded-lg text-on-surface-variant disabled:opacity-50 hover:bg-surface-container-low transition-all"
            disabled
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <div className="flex items-center gap-1">
            <button type="button" className="w-10 h-10 flex items-center justify-center bg-secondary text-white rounded-lg font-bold text-label-md">
              1
            </button>
            <button type="button" className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-lg font-medium text-label-md">
              2
            </button>
            <button type="button" className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-lg font-medium text-label-md">
              3
            </button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button type="button" className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-lg font-medium text-label-md">
              13
            </button>
          </div>
          <button type="button" className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}
