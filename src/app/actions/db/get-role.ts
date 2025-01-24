'use server';
import db from '@/lib/db';

export default async function getRoleByRoleId(roleId: string) {
  const role = await db.role.findFirst({
    where: {
      id: roleId,
    },
  });

  return role;
}
