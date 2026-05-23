import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class TechnicianRepository {
  create(data: Prisma.TechnicianCreateInput) {
    return prisma.technician.create({ data })
  }

  findById(id: string) {
    return prisma.technician.findUnique({ where: { id } })
  }

  list(args: Prisma.TechnicianFindManyArgs = {}) {
    return prisma.technician.findMany(args)
  }

  async countByStatus(status: string) {
    try {
      return await prisma.technician.count({ where: { status } })
    } catch (error) {
      console.error('[TechnicianRepository.countByStatus] failed', { status, error })
      throw error
    }
  }

  update(id: string, data: Prisma.TechnicianUpdateInput) {
    return prisma.technician.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.technician.delete({ where: { id } })
  }
}
