'use client';

import validatePdf from '@/app/actions/pdf/validate-pdf';
import { FormValues, PdfUploadForm } from './pdf-upload';

export default function PdfValidationClient() {
  const onFileChange = () => {
    return;
  };

  const onSubmit = async (data: FormValues) => {
    const validation = await validatePdf(data.cv);
    console.log(validation);
  };

  return <PdfUploadForm onFileChange={onFileChange} onSubmit={onSubmit} />;
}
