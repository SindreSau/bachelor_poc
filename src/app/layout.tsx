import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* ===== SIDEBAR+TOPBAR ===== */}

                {/* ===== MAIN ===== */}
                <main className='container mx-auto mt-2'>{children}</main>
            </body>
        </html>
    );
}
