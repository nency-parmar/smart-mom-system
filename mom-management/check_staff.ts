import { PrismaClient } from './lib/generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  const staff = await prisma.staff.findMany();
  console.log(JSON.stringify(staff, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
