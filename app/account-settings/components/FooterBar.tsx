import React from 'react'

export default function FooterBar() {
  return (
    <div className="pt-lg flex justify-between items-center border-t border-outline-variant">
      <div className="flex gap-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary cursor-pointer">Privacy Policy</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary cursor-pointer">Terms of Service</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-[16px]">info</span>
        <span className="font-label-sm text-label-sm">Session valid for 4h 22m</span>
      </div>
    </div>
  )
}
