import PdfValidationClient from '@/components/pdf/pdf-validation-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF Validation',
  description: 'PDF Validation page',
};

export default function PdfValidation() {
  return (
    <>
      <h1>PDF Validation</h1>
      <PdfValidationClient />
    </>
  );
}
