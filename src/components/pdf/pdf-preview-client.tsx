'use client';
import React, { useState } from 'react';
import { PDFPreview } from '@/components/pdf/pdf-viewer';
import { PdfUploadForm } from '@/components/pdf/pdf-upload';

export default function PdfPreviewClient() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = async (file: File) => {
        setFile(file);
    };

    return (
        <div className='space-y-8'>
            <PdfUploadForm onFileChange={handleFileChange} />
            {file && <PDFPreview file={file} />}
        </div>
    );
}
