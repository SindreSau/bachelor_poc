import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { AppSidebar } from '@/components/Layout/app-sidebar';
import { Header } from '@/components/Header/header';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Wait for next tick to ensure params are ready
  await Promise.resolve();

  const locale = params?.locale || routing.defaultLocale;

  if (!routing.locales.includes(locale as 'en' | 'nb')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <AppSidebar />
      <div className='flex w-full flex-col'>
        <Header />
        <main className='container mx-auto w-full flex-grow p-4'>{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
