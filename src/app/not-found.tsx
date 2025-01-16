import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-primary'>404</h1>
                <p className='text-xl text-muted-foreground mt-4'>Page Not Found</p>
                <Link
                    href='/'
                    className='mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark'>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
