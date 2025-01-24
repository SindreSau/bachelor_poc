'use server';

import db from '@/lib/db';

export async function getAllUsers() {
  const users = await db.user.findMany();

  return users;
}

export async function getAllUsersWithRole() {
  const users = await db.user.findMany({
    include: {
      role: true,
    },
  });

  return users;
}
