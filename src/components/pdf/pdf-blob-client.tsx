'use client';
import React, { useState } from 'react';
import { PdfUploadForm } from '@/components/pdf/pdf-upload';
import { uploadPdf } from '@/app/server/actions/upload-pdf';

export default function PdfBlobClient() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (file: File) => {
    setFile(file);
  };
  async function onSubmit() {
    if (!file) {
      return;
    }
    const uploaded = await uploadPdf(file);

    if (uploaded) {
      console.log('PDF uploaded');
    } else {
      console.log('Failed to upload PDF');
    }
  }

  return (
    <div className='space-y-8'>
      <PdfUploadForm onFileChange={handleFileChange} onSubmit={onSubmit} />
    </div>
  );
}
