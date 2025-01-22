'use client';

import React, { useState } from 'react';
import { PDFPreview } from '@/components/pdf/pdf-viewer';
import { getBlobPdf, listAllBlobs } from '@/app/server/actions/get-pdf';
import { deleteByUrl, deleteAll } from '@/app/server/actions/delete-pdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '../ui/separator';
import { Card } from '../ui/card';

const formSchema = z.object({
  blobUrl: z.string().url('Invalid URL'),
});

type FormValues = z.infer<typeof formSchema>;

export default function PdfBlobDisplayClient() {
  const [file, setFile] = useState<File | null>(null);
  const [allFiles, setAllFiles] = useState<string[] | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blobUrl: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const pdf = await getBlobPdf(data.blobUrl);
    setFile(pdf);
  };

  const listAllFiles = async () => {
    const files = await listAllBlobs();
    setAllFiles(files);
  };

  const handleDeleteByUrl = async (blobName: string) => {
    const blobUrl = `http://localhost:10000/devstoreaccount1/${blobName}`;

    await deleteByUrl(blobUrl);
    listAllFiles(); // Refresh the list after deletion
  };

  const handleDeleteAll = async () => {
    await deleteAll();
    setAllFiles([]); // Clear the list after deletion
  };

  return (
    <div className='space-y-8'>
      {/* Fetch by url */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='blobUrl'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blob URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Enter Blob URL' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Fetch PDF</Button>
          </form>
        </Form>
        {file && <PDFPreview file={file} />}
      </div>

      <Separator />

      {/* Fetch all files */}
      <div>
        <div className='mb-4 space-x-4'>
          <Button onClick={listAllFiles}>Fetch All PDFs</Button>
          {allFiles && allFiles.length > 0 && (
            <Button onClick={handleDeleteAll} className='mt-4'>
              Delete All PDFs
            </Button>
          )}
        </div>
        {allFiles?.length === 0 ? (
          <p>No PDFs found</p>
        ) : (
          <div>
            {allFiles?.map((pdf, index) => (
              <Card key={index} className='flex items-center justify-between px-3 py-1'>
                <p>{pdf}</p>
                <Button onClick={() => handleDeleteByUrl(pdf)}>Delete</Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
