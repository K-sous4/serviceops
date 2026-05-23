import React from 'react'

export default function PageHeader() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <nav className="flex gap-2 mb-2">
          <span className="font-label-md text-label-md text-on-surface-variant">Principal</span>
          <span className="font-label-md text-label-md text-on-surface-variant">/</span>
          <span className="font-label-md text-label-md text-secondary">Dashboard</span>
        </nav>
        <h1 className="font-display-lg text-display-lg text-primary">Dashboard Administrativo</h1>
      </div>
      <div className="hidden md:flex gap-3">
        <button className="px-4 py-2 border border-outline text-primary font-label-md text-label-md rounded-lg flex items-center gap-2 hover:bg-surface-container-low transition-all">
          <span className="material-symbols-outlined" data-icon="filter_list">
            filter_list
          </span>
          Filtros
        </button>
        <button className="px-4 py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg flex items-center gap-2 hover:opacity-90 shadow-sm transition-all active:scale-95">
          <span className="material-symbols-outlined" data-icon="download">
            download
          </span>
          Exportar Relatório
        </button>
      </div>
    </div>
  )
}
