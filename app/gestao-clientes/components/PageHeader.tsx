import React from 'react'

export default function PageHeader() {
  return (
    <>
      <nav className="mb-sm flex items-center gap-2 text-on-surface-variant">
        <span className="font-label-md text-label-md">Dashboard</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="font-label-md text-label-md text-secondary font-bold">Gestão de Clientes</span>
      </nav>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-lg">
        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-primary">Gestão de Clientes</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Visualize e gerencie todos os clientes registrados no sistema.
          </p>
        </div>
        <button className="bg-[#3B82F6] text-white px-6 py-[10px] rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#2563EB] active:scale-95 transition-all">
          <span className="material-symbols-outlined">person_add</span>
          <span>Novo Cliente</span>
        </button>
      </div>
    </>
  )
}
