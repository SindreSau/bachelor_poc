'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useTranslations } from 'next-intl';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['application/pdf'];

const formSchema = z.object({
  cv: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, 'File size must be less than 5MB.')
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), 'Only PDF files are accepted.'),
});

export type FormValues = z.infer<typeof formSchema>;

interface PdfUploadFormProps {
  onFileChange: (file: File) => void;
  onSubmit: (data: FormValues) => void;
}

export const PdfUploadForm: React.FC<PdfUploadFormProps> = ({ onFileChange, onSubmit }) => {
  const t = useTranslations('pdf.upload');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function bytesToMB(bytes: number) {
    return (bytes / 1024 / 1024).toFixed(2);
  }

  //   const t = useTranslations('HomePage');
  // return <h1>{t('title')}</h1>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='cv'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('label')}</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='.pdf'
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.onChange(file);
                      onFileChange(file);
                    }
                  }}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>
              <FormDescription>
                {t('description', { size: bytesToMB(MAX_FILE_SIZE) })}{' '}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>{t('submit')}</Button>
      </form>
    </Form>
  );
};
