import React from 'react';
import { Metadata } from 'next';
import PdfPreviewClient from '@/components/pdf/pdf-preview-client';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'PDF Preview',
  description: 'PDF Preview proof of consept',
};

export default function PdfPreview() {
  const t = useTranslations('pdf');
  return (
    <>
      <h1>{t('title')}</h1>
      <PdfPreviewClient />
    </>
  );
}

//   const t = useTranslations('HomePage');
// return <h1>{t('title')}</h1>;
