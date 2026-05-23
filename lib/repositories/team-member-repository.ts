import { prisma } from '@/lib/db'

export class TeamMemberRepository {
  add(teamId: string, technicianId: string) {
    return prisma.teamMember.create({ data: { teamId, technicianId } })
  }

  remove(teamId: string, technicianId: string) {
    return prisma.teamMember.delete({
      where: { teamId_technicianId: { teamId, technicianId } },
    })
  }

  listByTeam(teamId: string) {
    return prisma.teamMember.findMany({ where: { teamId } })
  }
}
