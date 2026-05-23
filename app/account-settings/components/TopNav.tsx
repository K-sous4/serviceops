import React from 'react'

type Tab = {
  label: string
  active?: boolean
}

const tabs: Tab[] = [
  { label: 'Profile', active: true },
  { label: 'Integrations' },
  { label: 'Logs' },
]

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter z-40">
      <div className="flex items-center gap-4">
        <span className="font-headline-sm text-headline-sm font-black text-primary">Service Order Manager</span>
        <div className="h-6 w-px bg-outline-variant"></div>
        <nav className="flex gap-6 h-full items-center">
          {tabs.map((tab) => (
            <span
              key={tab.label}
              className={
                tab.active
                  ? 'font-label-md text-label-md text-secondary border-b-2 border-secondary font-bold h-16 flex items-center cursor-pointer'
                  : 'font-label-md text-label-md text-on-surface-variant font-medium hover:text-secondary cursor-pointer'
              }
            >
              {tab.label}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-on-surface-variant">
        <span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-full">notifications</span>
        <span className="material-symbols-outlined cursor-pointer hover:bg-surface-container-low p-2 rounded-full">history</span>
        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            data-alt="A professional headshot of a middle-aged male operations manager with a confident expression, wearing a navy blue polo shirt. The lighting is soft and corporate, set against a blurred modern office background with cool blue and slate grey tones, reflecting a clean and systematic design aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWekv55LR20eh5JS5jm8JcFNLumxzMZeJBEjkAwJx9tr5z-S3sxwX2_zFFuquGIMRR6kaToo5RLUD7AQHBpWy2VbJaiNnGbQqP41mRfZ6SkOHn43x3QMqARG0lK5LdWyt_TxNu6EwYUg0LFCC0b7oCK-xRibU7Pu9sxzV75hhaYpt87fa1to6gazafhgP9h7SyGC9MlKFow5TQFipLJPvLawVHITiOWW2NAetV0cHNxmtRSDqsrP3KfTE4b2xVWUHbTYu5EfZuH2L-"
          />
        </div>
      </div>
    </header>
  )
}
