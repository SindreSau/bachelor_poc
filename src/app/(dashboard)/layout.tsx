import type { Metadata } from 'next';
import { AppSidebar } from '@/components/Layout/app-sidebar';
import { Header } from '@/components/Header/header';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard', // Fallback title
  },
  description:
    'A dashboard with "pages" dedicated to testing various libraries and features before implementing them in the main project.',
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    return redirect('/sign-in');
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div className='flex w-full flex-col'>
        <Header />
        <main className='container mx-auto w-full flex-grow p-4'>{children}</main>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
