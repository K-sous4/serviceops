import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { mfaSettingRepository, userRepository } from '@/lib/repositories'
import { AccountShell, FooterBar, MfaCard, PageHeader, PersonalInfoCard, SecurityCard } from './components'
import { updateMfaAction, updatePasswordAction, updatePersonalInfoAction } from './actions'

export default async function AccountSettingsPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('mock_session')

  if (!session) {
    redirect('/login')
  }

  const sessionValue = session.value
  const users = await userRepository.list({
    where: {
      OR: [{ username: sessionValue }, { email: sessionValue }],
    },
    take: 1,
  })

  const user =
    users[0] ??
    (await userRepository.create({
      username: sessionValue,
      email: sessionValue === 'admin' ? 'admin@serviceops.local' : sessionValue,
      fullName: 'Admin User',
      role: 'Administrator',
    }))

  const mfaSettings = await mfaSettingRepository.listByUser(user.id)
  const activeMfa = mfaSettings.find((setting) => setting.enabled)?.method ?? 'auth_app'

  const updatePersonalInfo = updatePersonalInfoAction.bind(null, user.id)
  const updatePassword = updatePasswordAction.bind(null, user.id)
  const updateMfa = updateMfaAction.bind(null, user.id)

  return (
    <AccountShell>
      <PageHeader />
      <div className="grid grid-cols-12 gap-md items-start">
        <div className="col-span-12 lg:col-span-7 space-y-md">
          <PersonalInfoCard
            action={updatePersonalInfo}
            fullName={user.fullName ?? 'Admin User'}
            role={user.role ?? 'Administrator'}
            email={user.email ?? ''}
          />
          <SecurityCard action={updatePassword} lastChangedAt={user.updatedAt} />
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-md">
          <MfaCard action={updateMfa} activeMethod={activeMfa} enabled={mfaSettings.some((setting) => setting.enabled)} />
        </div>
      </div>
      <FooterBar />
    </AccountShell>
  )
}
