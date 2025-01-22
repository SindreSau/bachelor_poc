'use client';

import { createApplication } from '@/lib/actions';

export default function Form() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-black'>
      <form action={createApplication} className='rounded bg-black p-6 shadow-md'>
        <h1 className='mb-4 text-xl font-bold'>Simple Form</h1>

        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold' htmlFor='firstName'>
            First Name
          </label>
          <input
            className='w-full rounded border p-2'
            id='firstName'
            name='firstName'
            type='text'
            placeholder='Enter your first name'
          />
        </div>

        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='w-full rounded border p-2'
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Enter your last name'
          />
        </div>

        <button
          type='submit'
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
