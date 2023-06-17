import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const ns = ['translation'];
const supportedLanguages = ['en', 'nl'];

const resources = ns.reduce((acc, nameSpace) => {
  supportedLanguages.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      [nameSpace]: require(`../public/locales/${lng}/${nameSpace}.json`),
    };
  });
  return acc;
}, {});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: false,
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: supportedLanguages,
    resources,
    updateMissing: true,
    saveMissing: true,
    preload: true,
  });

export default i18n;