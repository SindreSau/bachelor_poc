'use server';

import AuthError from 'next-auth';
import { auth } from '@/lib/auth';
import { z, ZodError } from 'zod';

interface CredentialsFormData {
  email: string;
  password: string;
}

interface SigninReturnStatus {
  status: 'success' | 'error';
  message: string;
  user: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    roleId: string;
  } | null;
}

const credentialsSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export async function signInAction(data: CredentialsFormData): Promise<SigninReturnStatus> {
  try {
    const validatedData = credentialsSchema.parse(data);
    console.log('validatedData', validatedData);

    if (!validatedData.email || !validatedData.password) {
      return {
        status: 'error',
        message: 'Email and password are required',
        user: null,
      };
    }

    try {
      console.log('Attempting to authenticate user');
      const session = await auth();

      // If already authenticated, return error
      if (session) {
        return {
          status: 'error',
          message: 'Already authenticated',
          user: null,
        };
      }

      // This will trigger the authorize function in your auth configuration
      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: validatedData.email,
          password: validatedData.password,
          redirect: false,
        }),
      });

      if (!response.ok) {
        return {
          status: 'error',
          message: 'Invalid credentials',
          user: null,
        };
      }

      return {
        status: 'success',
        message: 'Successfully authenticated',
        user: await response.json(),
      };
    } catch (error) {
      console.error('Authentication error:', error);
      if (error instanceof AuthError) {
        return {
          status: 'error',
          message: 'Authentication failed',
          user: null,
        };
      }
      throw error;
    }
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessages = error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join(', ');

      return {
        status: 'error',
        message: errorMessages,
        user: null,
      };
    }

    return {
      status: 'error',
      message: 'An unexpected error occurred',
      user: null,
    };
  }
}
