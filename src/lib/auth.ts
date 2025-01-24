import { PrismaAdapter } from '@auth/prisma-adapter';
import { comparePasswordHash, getUserFromDbByEmail } from '@/utils/auth-functions';
import NextAuth, { User } from 'next-auth';
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.roleId = user.roleId as string | null;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.roleId = token.roleId as string | undefined;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        const email = credentials?.email;
        const password = credentials?.password;

        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }

        const dbUser = await getUserFromDbByEmail(email);
        if (!dbUser?.password) return null;

        const isMatch = await comparePasswordHash(password, dbUser.password);
        if (!isMatch) return null;

        // Convert null to undefined for roleId to match User type
        return {
          id: dbUser.id,
          email: dbUser.email,
          name: dbUser.name,
          image: dbUser.image,
          roleId: dbUser.roleId ?? undefined, // Convert null to undefined
        };
      },
    }),
  ],
});
