'use client';
import React, { useState } from 'react';
import { PdfUploadForm } from '@/components/pdf/pdf-upload';
import { uploadPdf } from '@/app/actions/pdf/upload-pdf';

export default function PdfBlobClient() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleFileChange = async (file: File) => {
    setFile(file);
  };

  async function onSubmit() {
    if (!file) {
      return;
    }
    const url = await uploadPdf(file);

    if (url) {
      console.log('PDF uploaded', url);
      setUploadUrl(url); // Set the URL to display
    } else {
      console.log('Failed to upload PDF');
    }
  }

  const handleCopyClick = () => {
    if (uploadUrl) {
      navigator.clipboard.writeText(uploadUrl).then(() => {
        setCopySuccess('URL copied to clipboard!');
        setTimeout(() => setCopySuccess(null), 2000); // Clear the message after 2 seconds
      });
    }
  };

  return (
    <div className='space-y-8'>
      <PdfUploadForm onFileChange={handleFileChange} onSubmit={onSubmit} />
      {uploadUrl && (
        <div>
          <p onClick={handleCopyClick} style={{ cursor: 'pointer', color: 'blue' }}>
            Uploaded PDF URL: {uploadUrl}
          </p>
          {copySuccess && <p>{copySuccess}</p>}
        </div>
      )}
    </div>
  );
}
