import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'

export class TeamRepository {
  create(data: Prisma.TeamCreateInput) {
    return prisma.team.create({ data })
  }

  findById(id: string) {
    return prisma.team.findUnique({ where: { id } })
  }

  list(args: Prisma.TeamFindManyArgs = {}) {
    return prisma.team.findMany(args)
  }

  update(id: string, data: Prisma.TeamUpdateInput) {
    return prisma.team.update({ where: { id }, data })
  }

  delete(id: string) {
    return prisma.team.delete({ where: { id } })
  }
}
