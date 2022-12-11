import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function main() {
  const password = '123456789'
  const hashPassword = await bcrypt.hash(password, 10)

  await prisma.admin.upsert({
    where: { email: 'admin@test.test' },
    create: {
      email: 'admin@test.test',
      name: 'Admin Test',
      password: hashPassword,
    },
    update: {},
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
