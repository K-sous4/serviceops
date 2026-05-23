import React from 'react'

export default function PageHeader() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-display-lg text-display-lg text-primary">Account Settings</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Manage your personal information, security preferences, and multi-factor authentication.
      </p>
    </div>
  )
}
