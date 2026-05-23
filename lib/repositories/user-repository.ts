import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class UserRepository {
  create(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data })
  }

  findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }

  list(args: Prisma.UserFindManyArgs = {}) {
    return prisma.user.findMany(args)
  }

  update(id: string, data: Prisma.UserUpdateInput) {
    return prisma.user.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.user.delete({ where: { id } })
  }
}
