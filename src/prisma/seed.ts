import { PrismaClient, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const roleData: Prisma.RoleCreateInput[] = [
  {
    id: 'superadmin-role-id',
    name: 'SUPERADMIN',
  },
  {
    id: 'admin-role-id',
    name: 'ADMIN',
  },
];

const sa_password = hash(process.env.SUPERADMIN_PASSWORD, 10);
const a_password = hash('password', 10);
const userData: Prisma.UserCreateInput[] = [
  {
    email: 'superadmin@example.com',
    firstname: 'Super',
    lastname: 'Admin',
    password: sa_password,
    role: {
      connect: { id: 'superadmin-role-id' },
    },
  },
  {
    email: 'admin@example.com',
    firstname: 'User',
    lastname: 'Admin',
    password: a_password,
    role: {
      connect: { id: 'admin-role-id' },
    },
  },
];

async function main() {
  // Create roles
  for (const role of roleData) {
    await prisma.role.create({
      data: role,
    });
  }

  // Create users
  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
