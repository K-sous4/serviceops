import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class ServiceOrderRepository {
  create(data: Prisma.ServiceOrderCreateInput) {
    return prisma.serviceOrder.create({ data })
  }

  findById(id: string) {
    return prisma.serviceOrder.findUnique({ where: { id } })
  }

  list(args: Prisma.ServiceOrderFindManyArgs = {}) {
    return prisma.serviceOrder.findMany(args)
  }

  countByStatus(status: string) {
    return prisma.serviceOrder.count({ where: { status } })
  }

  update(id: string, data: Prisma.ServiceOrderUpdateInput) {
    return prisma.serviceOrder.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.serviceOrder.delete({ where: { id } })
  }
}
