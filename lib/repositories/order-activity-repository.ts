import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class OrderActivityRepository {
  create(data: Prisma.OrderActivityCreateInput) {
    return prisma.orderActivity.create({ data })
  }

  listByOrder(orderId: string) {
    return prisma.orderActivity.findMany({ where: { orderId } })
  }

  list(args: Prisma.OrderActivityFindManyArgs = {}) {
    return prisma.orderActivity.findMany(args)
  }
}
