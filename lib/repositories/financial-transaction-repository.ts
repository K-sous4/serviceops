import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class FinancialTransactionRepository {
  create(data: Prisma.FinancialTransactionCreateInput) {
    return prisma.financialTransaction.create({ data })
  }

  listByOrder(orderId: string) {
    return prisma.financialTransaction.findMany({ where: { orderId } })
  }

  list(args: Prisma.FinancialTransactionFindManyArgs = {}) {
    return prisma.financialTransaction.findMany(args)
  }

  async sumAmountByStatusSince(status: string, since: Date) {
    try {
      const result = await prisma.financialTransaction.aggregate({
        _sum: { amount: true },
        where: {
          status,
          createdAt: { gte: since },
        },
      })

      const amount = result._sum.amount
      return amount ? Number(amount) : 0
    } catch (error) {
      console.error('[FinancialTransactionRepository.sumAmountByStatusSince] failed', {
        status,
        since: since.toISOString(),
        error,
      })
      throw error
    }
  }
}
