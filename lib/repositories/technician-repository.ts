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

  countByStatus(status: string) {
    return prisma.technician.count({ where: { status } })
  }

  update(id: string, data: Prisma.TechnicianUpdateInput) {
    return prisma.technician.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.technician.delete({ where: { id } })
  }
}
