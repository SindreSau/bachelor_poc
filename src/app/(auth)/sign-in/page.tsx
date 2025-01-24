import { SignInForm } from '@/components/auth/signin-form';

export default function SignInPage() {
  return (
    <div className='flex min-h-screen flex-col items-center p-4 pt-12 md:pt-24'>
      <div className='mb-8'>
        <h1 className='text-center text-2xl font-bold'>Welcome!</h1>
        <p className='text-center'>Please sign in using your provided credentials.</p>
      </div>
      <SignInForm />
    </div>
  );
}
