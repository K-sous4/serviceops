import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class ScheduleRepository {
  create(data: Prisma.ScheduleCreateInput) {
    return prisma.schedule.create({ data })
  }

  listByTechnician(technicianId: string) {
    return prisma.schedule.findMany({ where: { technicianId } })
  }

  list(args: Prisma.ScheduleFindManyArgs = {}) {
    return prisma.schedule.findMany(args)
  }
}
