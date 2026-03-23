const { PrismaClient } = require('./lib/generated/prisma/client.js');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const staff = await prisma.staff.findMany();
    console.log(JSON.stringify(staff, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
