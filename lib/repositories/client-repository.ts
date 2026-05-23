import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class ClientRepository {
  create(data: Prisma.ClientCreateInput) {
    return prisma.client.create({ data })
  }

  findById(id: string) {
    return prisma.client.findUnique({ where: { id } })
  }

  list(args: Prisma.ClientFindManyArgs = {}) {
    return prisma.client.findMany(args)
  }

  update(id: string, data: Prisma.ClientUpdateInput) {
    return prisma.client.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.client.delete({ where: { id } })
  }
}
