import { PrismaClient, Prisma, RoleType } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const sa_password = await hash(process.env.SUPERADMIN_PASSWORD || 'password', 10);
  const a_password = await hash('password', 10);

  // First, create roles and store their IDs
  const roleData: Prisma.RoleCreateInput[] = [
    {
      name: RoleType.SUPERADMIN,
    },
    {
      name: RoleType.ADMIN,
    },
  ];

  // Create roles and store them to get their IDs
  const roles = await Promise.all(
    roleData.map((role) =>
      prisma.role.create({
        data: role,
      })
    )
  );

  // Find the role IDs
  const superadminRole = roles.find((role) => role.name === RoleType.SUPERADMIN);
  const adminRole = roles.find((role) => role.name === RoleType.ADMIN);

  if (!superadminRole || !adminRole) {
    throw new Error('Failed to create roles');
  }

  const userData: Prisma.UserCreateInput[] = [
    {
      email: 'superadmin@example.com',
      firstname: 'Super',
      lastname: 'Admin',
      password: sa_password,
      role: {
        connect: {
          id: superadminRole.id,
        },
      },
    },
    {
      email: 'admin@example.com',
      firstname: 'User',
      lastname: 'Admin',
      password: a_password,
      role: {
        connect: {
          id: adminRole.id,
        },
      },
    },
  ];

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
