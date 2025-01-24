import { hash, genSalt, compare } from 'bcryptjs';
import db from '@/lib/db';

export async function saltAndHashPassword(password: string) {
  const salt = await genSalt(10);
  const passwordHash = await hash(password, salt);
  return passwordHash;
}

export async function getUserFromDbByEmail(email: string) {
  const user = await db.user.findFirst({
    where: {
      email,
    },
  });
  return user;
}

export async function comparePasswordHash(password: string, passwordHash: string) {
  const isMatch = await compare(password, passwordHash);
  return isMatch;
}
