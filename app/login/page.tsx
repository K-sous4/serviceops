"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormField, FormLabel, TextInput, Checkbox } from '../components'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const login = String(formData.get('login') ?? '')
    const password = String(formData.get('password') ?? '')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ login, password }),
      })

      if (!response.ok) {
        setError('Credenciais inválidas. Use admin / admin123.')
        return
      }

      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      setError('Falha ao autenticar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center p-gutter relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-fixed rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-fixed rounded-full blur-[150px]"></div>
        </div>

        <div className="w-full max-w-[440px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col items-center mb-lg">
            <div className="mb-sm p-base bg-primary-container rounded-xl shadow-lg">
              <span className="material-symbols-outlined text-[40px] text-on-primary" style={{ fontVariationSettings: `"FILL" 1` }}>
                precision_manufacturing
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight">ServicePro Ops</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-base">Enterprise Service Order Portal</p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden p-xl">
            <form className="space-y-md" onSubmit={handleSubmit}>
              <FormField
                label={
                  <FormLabel htmlFor="login" className="font-label-md text-label-md text-on-surface">
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    Login
                  </FormLabel>
                }
              >
                <TextInput id="login" name="login" placeholder="admin" required />
              </FormField>

              <FormField
                label={
                  <div className="flex justify-between items-center">
                    <FormLabel htmlFor="password" className="font-label-md text-label-md text-on-surface">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      Password
                    </FormLabel>
                    <a className="font-label-md text-label-md text-secondary hover:underline transition-all" href="#">Forgot password?</a>
                  </div>
                }
              >
                <div className="relative group">
                  <TextInput
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </FormField>

              {error ? (
                <div className="bg-error-container text-on-error-container text-sm rounded-lg px-3 py-2">
                  {error}
                </div>
              ) : null}

              <div className="flex items-center gap-xs">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="font-body-md text-body-md text-on-surface-variant cursor-pointer select-none">Remember this device for 30 days</label>
              </div>

              <button type="submit" className={`w-full h-12 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm shadow-sm transition-all duration-200 hover:bg-secondary-container hover:shadow-md active:scale-[0.98] ${loading ? 'opacity-70 pointer-events-none' : ''}`}>
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Login to Dashboard
                    <span className="material-symbols-outlined text-[18px]">login</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-lg pt-md border-t border-outline-variant">
              <p className="font-body-md text-body-md text-on-surface-variant text-center">Don't have an enterprise account? <a className="text-secondary font-semibold hover:underline" href="#">Contact Administrator</a></p>
            </div>
          </div>

          <div className="mt-lg flex justify-center gap-md font-label-sm text-label-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <span className="opacity-30">•</span>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <span className="opacity-30">•</span>
            <a className="hover:text-primary transition-colors" href="#">System Status</a>
          </div>
        </div>
      </div>

      <footer className="flex flex-col md:flex-row justify-between items-center px-gutter py-md w-full border-t border-outline-variant dark:border-outline bg-surface-container-lowest dark:bg-background z-20">
        <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-primary-container">© 2024 ServicePro Ops Enterprise. All rights reserved.</span>
        <div className="flex gap-md mt-sm md:mt-0">
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer">Security Policy</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer">Terms of Service</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer">Privacy</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer">Contact Support</a>
        </div>
      </footer>
    </main>
  )
}
