import React from 'react';
import PdfPreviewClient from '@/components/pdf/pdf-preview-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PDF Preview',
    description: 'PDF Preview proof of consept',
};

export default function PdfPreview() {
    return (
        <div className='space-y-8'>
            <PdfPreviewClient />
        </div>
    );
}
