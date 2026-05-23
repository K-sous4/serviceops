import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class MfaSettingRepository {
  create(data: Prisma.MfaSettingCreateInput) {
    return prisma.mfaSetting.create({ data })
  }

  listByUser(userId: string) {
    return prisma.mfaSetting.findMany({ where: { userId } })
  }

  update(id: string, data: Prisma.MfaSettingUpdateInput) {
    return prisma.mfaSetting.update({ where: { id }, data })
  }
}
