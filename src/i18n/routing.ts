import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // list of locales that are supported
  locales: ['en', 'nb'],

  // default:
  defaultLocale: 'en',
});

// wrappers around Next.js' navigation APIs that will consider routing config
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
