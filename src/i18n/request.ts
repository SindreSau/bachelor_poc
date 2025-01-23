import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // The typically corresponds ot the '[locale]' part of the URL
  let locale = await requestLocale;

  // ensure that valid locale is being used
  if (!locale || !routing.locales.includes(locale as 'en' | 'nb')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
