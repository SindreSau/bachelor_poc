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
    title: 'Bachelor POC',
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
                    <div className='flex flex-col w-full'>
                        <Header />
                        <main className='container mx-auto p-4 flex-grow w-full'>{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
