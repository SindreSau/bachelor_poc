'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // When mounted on client, show the switcher.
    // This prevents the switcher from being rendered on the server.
    useEffect(() => setMounted(true), []);

    const classes = ' w-[24px] h-[24px] border border-accent rounded-lg p-1';

    return (
        <button
            className='flex items-center space-x-1'
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {mounted && <>{resolvedTheme === 'dark' ? <Sun className={classes} /> : <Moon className={classes} />}</>}
        </button>
    );
};

export default ThemeSwitcher;
