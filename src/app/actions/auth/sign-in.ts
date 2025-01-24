'use server';
import { SignInFormValues } from '@/components/auth/signin-form';
import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';

export default async function signInAction(data: SignInFormValues) {
  try {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      return { error: result.error };
    }
  } catch (err) {
    const error = err as AuthError;

    if (error.type === 'CredentialsSignin') {
      return { error: 'Invalid email or password' };
    }

    return { error: error.message };
  }
}
