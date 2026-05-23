import React from 'react'

type Props = {
  lastChangedAt?: Date | null
  action: (formData: FormData) => void
}

function formatDate(value?: Date | null) {
  if (!value) {
    return '3 months ago'
  }

  return value.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function SecurityCard({ lastChangedAt, action }: Props) {
  const lastChangedLabel = formatDate(lastChangedAt)

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <form action={action}>
        <div className="flex items-center gap-3 mb-lg">
          <span className="material-symbols-outlined text-secondary">security</span>
          <h3 className="font-headline-sm text-headline-sm text-primary">Security</h3>
        </div>
        <div className="space-y-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">Current Password</label>
              <input
                className="w-full border border-outline-variant rounded-lg px-4 py-2 text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
                name="currentPassword"
              />
            </div>
            <div></div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">New Password</label>
              <input
                className="w-full border border-outline-variant rounded-lg px-4 py-2 text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
                name="newPassword"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">Confirm New Password</label>
              <input
                className="w-full border border-outline-variant rounded-lg px-4 py-2 text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
                name="confirmPassword"
              />
            </div>
          </div>
          <div className="pt-sm border-t border-outline-variant">
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Last changed: {lastChangedLabel}. We recommend changing your password every 6 months.
            </p>
            <button type="submit" className="mt-sm bg-surface-container-high text-primary px-sm py-2 rounded-lg font-label-md text-label-md hover:bg-outline-variant transition-colors">
              Update Password
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
