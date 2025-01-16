'use client';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // When mounted on client, show the switcher.
    // This prevents the switcher from being rendered on the server.
    useEffect(() => setMounted(true), []);

    return (
        <button
            className='flex items-center justify-center gap-2'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && (
                <>
                    {resolvedTheme === 'dark' ? (
                        <Sun className={cn('border border-accent rounded-lg p-1 ' + className)} />
                    ) : (
                        <Moon className={cn('border border-accent rounded-lg p-1 ' + className)} />
                    )}
                </>
            )}
        </button>
    );
};

export default ThemeSwitcher;
