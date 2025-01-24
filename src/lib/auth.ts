import { PrismaAdapter } from '@auth/prisma-adapter';
import { comparePasswordHash, getUserFromDbByEmail } from '@/utils/auth-functions';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }

        const dbUser = await getUserFromDbByEmail(email);
        if (!dbUser?.password) return null;

        const isMatch = await comparePasswordHash(password, dbUser.password);
        if (!isMatch) return null;

        return {
          id: dbUser.id,
          email: dbUser.email,
          name: dbUser.name,
        };
      },
    }),
  ],
});
