import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
// import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Home | Dashboard', // Dynamic titles do not work on same level as layout.tsx
  description: 'Home page',
};

export default function Home() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
