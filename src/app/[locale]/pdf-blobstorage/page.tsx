import React from 'react';
import { Metadata } from 'next';
import PdfBlobClient from '@/components/pdf/pdf-blob-client';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PDF Blobstorage',
  description: 'PDF storage proof of consept',
};

export default function PdfStorage() {
  return (
    <>
      <h1>PDF Blob storage</h1>
      <span>
        Go to the page that{' '}
        <Link
          className='mb-4 text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white'
          href='/pdf-blobstorage/display'
        >
          displays
        </Link>{' '}
        the PDF
      </span>
      <PdfBlobClient />
    </>
  );
}
