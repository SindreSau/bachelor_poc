'use client';

import { createApplication } from '@/lib/actions';
import FileUpload from './file-upload';

export default function ApplicationForm() {
  return (
    <form action={createApplication}>
      <div className='mb-6 grid gap-6 md:grid-cols-2'>
        <div>
          <label
            htmlFor='firstName'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            First name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Last name
          </label>
          <input
            type='text'
            id='lastName'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            name='lastName'
            placeholder='Doe'
            required
          />
        </div>

        <FileUpload/>

      </div>

      <button
        type='submit'
        className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
      >
        Submit
      </button>
    </form>
  );
}
