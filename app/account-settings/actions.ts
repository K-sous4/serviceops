'use server'

import { revalidatePath } from 'next/cache'
import { mfaSettingRepository, userRepository } from '@/lib/repositories'

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export async function updatePersonalInfoAction(userId: string, formData: FormData) {
  const fullName = getFormValue(formData, 'fullName')
  const email = getFormValue(formData, 'email')
  const role = getFormValue(formData, 'role')

  await userRepository.update(userId, {
    fullName: fullName || null,
    email: email || null,
    role: role || null,
  })

  revalidatePath('/account-settings')
}

export async function updatePasswordAction(userId: string, formData: FormData) {
  const newPassword = getFormValue(formData, 'newPassword')
  const confirmPassword = getFormValue(formData, 'confirmPassword')

  if (!newPassword || newPassword !== confirmPassword) {
    return
  }

  await userRepository.update(userId, {
    passwordHash: newPassword,
  })

  revalidatePath('/account-settings')
}

export async function updateMfaAction(userId: string, formData: FormData) {
  const method = getFormValue(formData, 'method') || 'auth_app'
  const enabled = getFormValue(formData, 'enabled') === 'true'

  const existing = await mfaSettingRepository.listByUser(userId)
  const current = existing.find((setting) => setting.method === method)

  if (current) {
    await mfaSettingRepository.update(current.id, { enabled })
  } else {
    await mfaSettingRepository.create({
      method,
      enabled,
      user: { connect: { id: userId } },
    })
  }

  await Promise.all(
    existing
      .filter((setting) => setting.method !== method && setting.enabled)
      .map((setting) => mfaSettingRepository.update(setting.id, { enabled: false })),
  )

  revalidatePath('/account-settings')
}
