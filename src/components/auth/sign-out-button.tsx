'use client';

import { signOutAction } from '@/app/actions/auth/sign-out';

export default function SignOutButton() {
  return (
    <button onClick={signOutAction} className='w-full'>
      Sign out
    </button>
  );
}
