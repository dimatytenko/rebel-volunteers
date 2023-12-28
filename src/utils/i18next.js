import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import ukCommon from '../locales/uk/common.json';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    resources: {
      en: {
        common: enCommon,
      },
      uk: {
        common: ukCommon,
      },
    },
    whitelist: ['en', 'uk'],
    debug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
