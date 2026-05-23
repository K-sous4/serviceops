import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class UserSessionRepository {
  create(data: Prisma.UserSessionCreateInput) {
    return prisma.userSession.create({ data })
  }

  findById(id: string) {
    return prisma.userSession.findUnique({ where: { id } })
  }

  listByUser(userId: string) {
    return prisma.userSession.findMany({ where: { userId } })
  }

  delete(id: string) {
    return prisma.userSession.delete({ where: { id } })
  }
}
