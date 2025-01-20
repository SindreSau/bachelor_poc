import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { AppSidebar } from '@/components/Layout/app-sidebar';
import { Header } from '@/components/Header/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard', // Fallback title
  },
  description:
    'A dashboard with "pages" dedicated to testing various libraries and features before implementing them in the main project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <AppSidebar />
          <div className='flex w-full flex-col'>
            <Header />
            <main className='container mx-auto w-full flex-grow p-4'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
