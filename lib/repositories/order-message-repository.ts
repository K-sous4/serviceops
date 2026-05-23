import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class OrderMessageRepository {
  create(data: Prisma.OrderMessageCreateInput) {
    return prisma.orderMessage.create({ data })
  }

  listByOrder(orderId: string) {
    return prisma.orderMessage.findMany({ where: { orderId } })
  }

  list(args: Prisma.OrderMessageFindManyArgs = {}) {
    return prisma.orderMessage.findMany(args)
  }
}
