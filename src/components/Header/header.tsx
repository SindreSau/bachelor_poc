'use client';

import { SidebarTrigger } from '../ui/sidebar';
import ThemeSwitcher from './theme-switcher';

export const Header = () => {
    return (
        <header className='bg-sidebar/60 py-1 px-2 flex justify-between items-center'>
            {/* LEFT SIDE OF HEADER */}
            <SidebarTrigger />

            {/* RIGHT SIDE OF HEADER */}
            <div className='flex'>
                <ThemeSwitcher />
            </div>
        </header>
    );
};
