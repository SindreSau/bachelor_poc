'use client';

import { SidebarTrigger } from '../ui/sidebar';
import CustomAvatar from './custom-avatar';
import ThemeSwitcher from './theme-switcher';
import { LanguageSwitcher } from './language-switcher';

export const Header = () => {
  return (
    <header className='flex items-center justify-between bg-sidebar/60 px-2 py-1'>
      {/* LEFT SIDE OF HEADER */}
      <SidebarTrigger />

      {/* RIGHT SIDE OF HEADER */}
      <div className='flex items-center justify-center gap-2'>
        <LanguageSwitcher className='h-8 w-8' />
        <ThemeSwitcher className='h-8 w-8' />
        <CustomAvatar />
      </div>
    </header>
  );
};
