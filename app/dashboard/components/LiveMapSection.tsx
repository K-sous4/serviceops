import React from 'react'

type MapMarker = {
  name: string
  status: string
  icon: string
  topClass: string
  leftClass: string
  borderClass: string
  iconClass: string
  statusClass: string
  ping?: boolean
}

type RegionItem = {
  name: string
  description: string
  note?: string
  colorClass: string
  muted?: boolean
}

const markers: MapMarker[] = [
  {
    name: 'Carlos Silva',
    status: 'No local',
    icon: 'engineering',
    topClass: 'top-[30%]',
    leftClass: 'left-[40%]',
    borderClass: 'border-green-500',
    iconClass: 'text-green-600',
    statusClass: 'text-green-600',
    ping: true,
  },
  {
    name: 'Ana Oliveira',
    status: 'Em trânsito',
    icon: 'local_shipping',
    topClass: 'top-[60%]',
    leftClass: 'left-[25%]',
    borderClass: 'border-secondary',
    iconClass: 'text-secondary',
    statusClass: 'text-secondary',
  },
  {
    name: 'Rodrigo Souza',
    status: 'Em trânsito',
    icon: 'local_shipping',
    topClass: 'top-[45%]',
    leftClass: 'left-[70%]',
    borderClass: 'border-secondary',
    iconClass: 'text-secondary',
    statusClass: 'text-secondary',
  },
]

const regionItems: RegionItem[] = [
  {
    name: 'Carlos Silva',
    description: 'Manutenção Preventiva #492',
    note: 'Tempo no local: 45min',
    colorClass: 'bg-green-500',
  },
  {
    name: 'Ana Oliveira',
    description: 'Instalação Residencial #503',
    note: 'Previsão: 12min para chegada',
    colorClass: 'bg-secondary',
  },
  {
    name: 'Paulo Mendes',
    description: 'Finalizou turno',
    colorClass: 'bg-outline',
    muted: true,
  },
]

function MapMarkerItem({ marker }: { marker: MapMarker }) {
  return (
    <div className={`absolute ${marker.topClass} ${marker.leftClass} group cursor-pointer`} style={{ transform: 'translate(-50%, -50%)' }}>
      <div className="relative">
        {marker.ping ? <div className="absolute -inset-4 bg-green-500/20 rounded-full animate-ping"></div> : null}
        <div
          className={`w-10 h-10 bg-white border-2 ${marker.borderClass} rounded-full flex items-center justify-center shadow-lg relative z-10 transition-transform group-hover:scale-110`}
        >
          <span className={`material-symbols-outlined text-sm ${marker.iconClass}`} data-icon={marker.icon}>
            {marker.icon}
          </span>
        </div>
        <div className="absolute left-12 top-0 bg-white px-3 py-1.5 rounded-lg border border-outline-variant shadow-sm w-max hidden group-hover:block transition-all">
          <p className="font-label-md text-label-md text-primary font-bold">{marker.name}</p>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${marker.statusClass}`}>{marker.status}</p>
        </div>
      </div>
    </div>
  )
}

export default function LiveMapSection() {
  return (
    <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-[500px]">
      <div
        className="flex-grow relative bg-slate-100 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-40 select-none">
          <div className="w-full h-full border-4 border-dashed border-slate-200 rounded-full scale-150 animate-pulse"></div>
          <div className="w-1/2 h-1/2 border-4 border-dashed border-slate-200 rounded-full absolute rotate-45"></div>
        </div>
        {markers.map((marker) => (
          <MapMarkerItem key={`${marker.name}-${marker.status}`} marker={marker} />
        ))}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant shadow-sm flex items-center gap-2">
          <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
          <span className="font-label-md text-label-md font-bold text-primary">Mapa de Técnicos em Tempo Real</span>
        </div>
      </div>
      <div className="w-full md:w-80 border-l border-outline-variant flex flex-col h-full bg-white">
        <div className="p-md border-b border-outline-variant bg-surface-container-low">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Ativos na Região</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">São Paulo - Setor Central</p>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="p-md space-y-md">
            {regionItems.map((item) => (
              <div key={item.name} className={`flex items-start gap-3 ${item.muted ? 'opacity-50' : ''}`}>
                <div className={`w-2 h-2 mt-2 rounded-full ${item.colorClass}`}></div>
                <div>
                  <p className="font-label-md text-label-md font-bold text-primary">{item.name}</p>
                  <p className="text-xs text-on-surface-variant">{item.description}</p>
                  {item.note ? <p className="text-[10px] text-on-surface-variant opacity-60 mt-1">{item.note}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-md bg-surface-container-low">
          <button className="w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]" data-icon="my_location">
              my_location
            </span>
            Centralizar Mapa
          </button>
        </div>
      </div>
    </div>
  )
}
