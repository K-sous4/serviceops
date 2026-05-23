const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const ACTIVE_ORDERS = 148
const QUOTE_ORDERS = 42
const TECHNICIANS_IN_FIELD = 28

const clientsSeed = [
  {
    name: 'Condominio Solar',
    docNumber: '123.456.789-00',
    city: 'Sao Paulo',
    state: 'SP',
    phone: '(11) 98765-4321',
    status: 'active',
  },
  {
    name: 'Maria Fernandes',
    docNumber: '98.765.432/0001-99',
    city: 'Rio de Janeiro',
    state: 'RJ',
    phone: '(21) 91234-5678',
    status: 'active',
  },
  {
    name: 'Escola Pingo de Gente',
    docNumber: '45.678.901/0001-12',
    city: 'Curitiba',
    state: 'PR',
    phone: '(41) 3344-5566',
    status: 'active',
  },
  {
    name: 'Clinica Dr. Paulo',
    docNumber: '111.222.333-44',
    city: 'Belo Horizonte',
    state: 'MG',
    phone: '(31) 99988-7766',
    status: 'active',
  },
  {
    name: 'Supermercado Preco Bom',
    docNumber: '22.333.444/0001-55',
    city: 'Campinas',
    state: 'SP',
    phone: '(19) 98877-6655',
    status: 'inactive',
  },
]

const baseTechnicians = [
  { fullName: 'Joao Santos', initials: 'JS', status: 'in_field' },
  { fullName: 'Ana Oliveira', initials: 'AO', status: 'in_field' },
  { fullName: 'Carlos Silva', initials: 'CS', status: 'in_field' },
  { fullName: 'Rodrigo Souza', initials: 'RS', status: 'in_field' },
  { fullName: 'Ricardo Souza', initials: 'RS', status: 'active' },
  { fullName: 'Paulo Mendes', initials: 'PM', status: 'inactive' },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

async function ensureClient(data) {
  const existing = await prisma.client.findFirst({
    where: data.docNumber ? { docNumber: data.docNumber } : { name: data.name },
  })

  if (existing) {
    return prisma.client.update({ where: { id: existing.id }, data })
  }

  return prisma.client.create({ data })
}

async function ensureTechnician(data) {
  const existing = await prisma.technician.findFirst({ where: { fullName: data.fullName } })

  if (existing) {
    return prisma.technician.update({ where: { id: existing.id }, data })
  }

  return prisma.technician.create({ data })
}

async function ensureOrder(data) {
  return prisma.serviceOrder.upsert({
    where: { orderNumber: data.orderNumber },
    update: data,
    create: data,
  })
}

async function ensureMessage(data) {
  const existing = await prisma.orderMessage.findFirst({
    where: {
      orderId: data.orderId,
      message: data.message,
    },
  })

  if (existing) {
    return existing
  }

  return prisma.orderMessage.create({ data })
}

async function ensureActivity(data) {
  const existing = await prisma.orderActivity.findFirst({
    where: {
      orderId: data.orderId,
      action: data.action,
    },
  })

  if (existing) {
    return existing
  }

  return prisma.orderActivity.create({ data })
}

async function ensureTransaction(data) {
  const existing = await prisma.financialTransaction.findFirst({
    where: {
      orderId: data.orderId,
      amount: data.amount,
    },
  })

  if (existing) {
    return existing
  }

  return prisma.financialTransaction.create({ data })
}

async function main() {
  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {
      email: 'admin@serviceops.local',
      fullName: 'Admin User',
      role: 'Administrator',
      passwordHash: 'admin123',
    },
    create: {
      username: 'admin',
      email: 'admin@serviceops.local',
      fullName: 'Admin User',
      role: 'Administrator',
      passwordHash: 'admin123',
    },
  })

  const clients = []
  for (const client of clientsSeed) {
    clients.push(await ensureClient(client))
  }

  const technicians = []
  for (const tech of baseTechnicians) {
    technicians.push(await ensureTechnician(tech))
  }

  const missingTechs = Math.max(0, TECHNICIANS_IN_FIELD - technicians.length)
  for (let i = 0; i < missingTechs; i += 1) {
    const fullName = `Field Tech ${i + 1}`
    technicians.push(
      await ensureTechnician({
        fullName,
        initials: getInitials(fullName),
        status: 'in_field',
      }),
    )
  }

  const featuredOrders = [
    {
      orderNumber: 'ORD-2984',
      client: 'Condominio Solar',
      title: 'Reparo Eletrico',
      status: 'completed',
      technician: 'Joao Santos',
    },
    {
      orderNumber: 'ORD-2985',
      client: 'Maria Fernandes',
      title: 'Vazamento Hidraulico',
      status: 'pending',
      technician: 'Ana Oliveira',
    },
    {
      orderNumber: 'ORD-2983',
      client: 'Escola Pingo de Gente',
      title: 'Manutencao Ar-Cond',
      status: 'in_transit',
      technician: 'Carlos Silva',
    },
    {
      orderNumber: 'ORD-2982',
      client: 'Clinica Dr. Paulo',
      title: 'Reparo de Equipamento',
      status: 'completed',
      technician: 'Ricardo Souza',
    },
    {
      orderNumber: 'ORD-2981',
      client: 'Supermercado Preco Bom',
      title: 'Checkup Semanal',
      status: 'cancelled',
      technician: 'Paulo Mendes',
    },
  ]

  for (const order of featuredOrders) {
    const client = clients.find((item) => item.name === order.client)
    const technician = technicians.find((item) => item.fullName === order.technician)
    await ensureOrder({
      orderNumber: order.orderNumber,
      title: order.title,
      status: order.status,
      client: client ? { connect: { id: client.id } } : undefined,
      technician: technician ? { connect: { id: technician.id } } : undefined,
    })
  }

  for (let i = 1; i <= ACTIVE_ORDERS; i += 1) {
    const client = clients[i % clients.length]
    const technician = technicians[i % technicians.length]
    await ensureOrder({
      orderNumber: `ORD-ACT-${String(i).padStart(4, '0')}`,
      title: `Servico Ativo ${i}`,
      status: 'active',
      client: { connect: { id: client.id } },
      technician: { connect: { id: technician.id } },
    })
  }

  for (let i = 1; i <= QUOTE_ORDERS; i += 1) {
    const client = clients[i % clients.length]
    const technician = technicians[i % technicians.length]
    await ensureOrder({
      orderNumber: `ORD-QUO-${String(i).padStart(4, '0')}`,
      title: `Orcamento ${i}`,
      status: 'quote_pending',
      client: { connect: { id: client.id } },
      technician: { connect: { id: technician.id } },
    })
  }

  const messageOrder = await prisma.serviceOrder.findUnique({ where: { orderNumber: 'ORD-2984' } })
  const messageTech = technicians.find((item) => item.fullName === 'Joao Santos')
  const messageTechTwo = technicians.find((item) => item.fullName === 'Ana Oliveira')

  if (messageOrder && messageTech) {
    await ensureMessage({
      orderId: messageOrder.id,
      senderTechnicianId: messageTech.id,
      message: 'Cheguei no local para a manutencao da eletrica.',
    })
  }

  if (messageOrder && messageTechTwo) {
    await ensureMessage({
      orderId: messageOrder.id,
      senderTechnicianId: messageTechTwo.id,
      message: 'A peca para a instalacao residencial esta em falta no estoque.',
    })
  }

  const activityOrder = await prisma.serviceOrder.findUnique({ where: { orderNumber: 'ORD-2985' } })
  if (activityOrder) {
    await ensureActivity({
      orderId: activityOrder.id,
      actorUserId: adminUser.id,
      action: 'Atualizou status para pendente',
    })
  }

  const revenueOrders = await prisma.serviceOrder.findMany({
    where: { status: 'completed' },
    take: 3,
  })

  const revenueAmounts = [32000, 25500, 26700]

  for (let i = 0; i < revenueOrders.length; i += 1) {
    await ensureTransaction({
      orderId: revenueOrders[i].id,
      amount: revenueAmounts[i] ?? 0,
      status: 'paid',
      currency: 'BRL',
    })
  }

  console.log('Dashboard seed complete')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
