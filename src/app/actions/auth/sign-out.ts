'use server';
import { signOut } from '@/lib/auth';

export async function signOutAction() {
  await signOut({
    redirect: true,
    redirectTo: '/sign-in',
  });
}
