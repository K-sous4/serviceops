import React from 'react';

export default function LandingPage() {

  return (
    <main className="bg-background text-on-surface min-h-screen">
        <header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 z-50"> 
          <div className="max-w-[1440px] mx-auto px-gutter h-16 flex items-center justify-between">
            <div className="font-headline-md text-headline-md font-bold text-primary">
              ServicePro Ops
            </div>
            <nav className="hidden md:flex gap-md items-center">
              <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-base py-base" href="#">Inicio</a>
              <a className="text-on-surface-variant text-secondary font-bold  border-b-2 border-secondary hover:bg-surface-container-low transition-colors px-base py-base" href="#">Planos</a>
              <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-base py-base" href="#">Soluções</a>
              <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-base py-base" href="#">Sobre</a>
            </nav>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary cursor-pointer">help</span>
              <span className="material-symbols-outlined text-primary cursor-pointer">security</span>
              <button className="bg-secondary text-on-secondary px-sm py-xs rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all"> Entrar</button>
            </div>  
          </div>
        </header>

        <div className="max-w-[1440px] mx-auto px-gutter py-xl">

        </div>

    </main>
  );
}