import React from 'react'

export default function TopNav() {
  return (
    <header className="h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter shrink-0 z-40">
      <div className="flex items-center gap-4 flex-grow">
        <h2 className="font-headline-sm text-headline-sm font-black text-primary">Service Order Manager</h2>
        <div className="hidden md:flex relative ml-8 w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-body-md font-body-md focus:ring-2 focus:ring-secondary/20"
            placeholder="Buscar ordens, técnicos ou clientes..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-on-surface-variant">
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-all relative">
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-all relative">
          <span className="material-symbols-outlined" data-icon="chat">
            chat
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-surface-container-high p-1 pr-3 rounded-full transition-all">
          <img
            alt="User Profile Avatar"
            className="w-8 h-8 rounded-full object-cover"
            data-alt="A professional portrait of a senior operations manager in a well-lit modern corporate office. The manager is a middle-aged man with a focused and authoritative expression, wearing a crisp navy blue shirt. The background shows soft-focus architectural glass elements and subtle greenery, emphasizing a systematic and professional corporate environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxpmQi3DLmsxZe8cCsQdeYyRGc6As7Y7DcCZbouePhcObQfZRc12XrfoQZ8XJbpZ2jaaSKwkYRMbRilLXrgbMLGTWHhoz-sfutt3c9YcJDF8JX_2Eh5kELKWq2fA4k1fi1CU8Ibw58TAyEtqAXY28jLaBqKwNjt8wN3K-gWA050f4oglPtIxUrjCkz7YlsY-w8zSZe43zexdBZFKfyBiWlYoEhvEKMO3x6lra1U26OC1A06UswMbwyhgs_YNxxk4jO1oKIl_5O5UT"
          />
          <span className="material-symbols-outlined text-outline" data-icon="account_circle">
            account_circle
          </span>
        </div>
      </div>
    </header>
  )
}
