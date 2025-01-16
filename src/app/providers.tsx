'use client';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
        </ThemeProvider>
    );
}
