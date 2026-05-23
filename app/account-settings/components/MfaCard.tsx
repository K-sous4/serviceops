import React from 'react'

type Props = {
  activeMethod: string
  enabled: boolean
  action: (formData: FormData) => void
}

export default function MfaCard({ activeMethod, enabled, action }: Props) {
  const isAuthApp = activeMethod === 'auth_app'
  const isEmail = activeMethod === 'email'

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] h-full">
      <div className="flex items-center gap-3 mb-lg">
        <span className="material-symbols-outlined text-secondary">verified_user</span>
        <h3 className="font-headline-sm text-headline-sm text-primary">Multi-Factor Authentication</h3>
      </div>
      <form action={action} className="space-y-lg">
        <input type="hidden" name="enabled" value="true" />
        <div className="space-y-sm">
          <label className="block cursor-pointer">
            <input type="radio" name="method" value="auth_app" defaultChecked={isAuthApp} className="sr-only peer" />
            <div className="flex items-center justify-between p-sm rounded-xl border border-outline-variant transition-colors peer-checked:border-secondary peer-checked:bg-secondary/5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">phonelink_lock</span>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">Authenticator App</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Secure codes via Google or Authy</p>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-secondary transition-opacity ${
                  enabled && isAuthApp ? 'opacity-100' : 'opacity-0 peer-checked:opacity-100'
                }`}
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
            </div>
          </label>
          <label className="block cursor-pointer">
            <input type="radio" name="method" value="email" defaultChecked={isEmail} className="sr-only peer" />
            <div className="flex items-center justify-between p-sm rounded-xl border border-outline-variant transition-colors peer-checked:border-secondary peer-checked:bg-secondary/5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">mail</span>
                <div>
                  <p className="font-label-md text-label-md text-primary">Email Authentication</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">One-time codes sent to inbox</p>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-secondary transition-opacity ${
                  enabled && isEmail ? 'opacity-100' : 'opacity-0 peer-checked:opacity-100'
                }`}
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
            </div>
          </label>
        </div>
        <div className="bg-surface-container p-lg rounded-xl flex flex-col items-center text-center gap-md">
          <div className="qr-gradient p-2 rounded-lg shadow-lg">
            <div className="w-32 h-32 bg-white p-2 rounded flex items-center justify-center">
              <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1">
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-transparent"></div>
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-transparent"></div>
                <div className="bg-primary"></div>
                <div className="bg-transparent"></div>
                <div className="bg-transparent"></div>
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-primary"></div>
                <div className="bg-transparent"></div>
                <div className="bg-transparent"></div>
                <div className="bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-label-md text-label-md text-primary">Scan QR Code</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant max-w-[240px]">
              Open your authenticator app and scan this code to sync your account.
            </p>
          </div>
          <div className="w-full space-y-2">
            <input
              className="w-full text-center border border-outline-variant rounded-lg px-4 py-3 font-headline-sm tracking-[0.5em] focus:border-secondary outline-none"
              maxLength={6}
              placeholder="Enter 6-digit code"
              type="text"
              name="otp"
            />
            <button type="submit" className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md font-bold uppercase tracking-wider">
              Verify & Enable
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 px-sm text-on-error">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <p className="font-label-sm text-label-sm">Disabling MFA significantly reduces account security.</p>
        </div>
      </form>
    </section>
  )
}
