'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const currentLang = pathname.startsWith('/nb') ? 'en' : 'nb';
    // Remove the current language prefix and replace with new one
    const newPath = pathname.replace(/^\/[^\/]+/, '/' + currentLang);
    router.push(newPath);
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleLanguage}
      className={className}
      title={pathname.startsWith('/nb') ? 'Switch to English' : 'Bytt til norsk'}
    >
      <Languages className='h-5 w-5' />
    </Button>
  );
};
