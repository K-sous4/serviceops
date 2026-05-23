'use client'

import React from 'react'

type Props = {
  onMenuClick: () => void
}

export default function TopNav({ onMenuClick }: Props) {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] h-16 bg-surface dark:bg-background border-b border-outline-variant dark:border-outline z-30 flex items-center px-gutter">
      <div className="flex items-center gap-4 w-full">
        <button type="button" className="md:hidden text-primary p-2" aria-label="Abrir menu" onClick={onMenuClick}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-headline-sm text-headline-sm font-black text-primary dark:text-primary-fixed hidden sm:block">
          Service Order Manager
        </span>
        <div className="flex-1 flex justify-start md:ml-12">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="Pesquisar clientes..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-xs">
          <button type="button" className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all active:opacity-80">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button type="button" className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all active:opacity-80">
            <span className="material-symbols-outlined">history</span>
          </button>
          <button type="button" className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all active:opacity-80">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  )
}
