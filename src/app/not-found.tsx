import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-primary'>404</h1>
        <p className='mt-4 text-xl text-muted-foreground'>Page Not Found</p>
        <Link
          href='/'
          className='hover:bg-primary-dark mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-white shadow-md'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
