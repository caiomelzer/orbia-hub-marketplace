import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from './locales/pt-BR.json';
import esAR from './locales/es-AR.json';

const getDefaultLanguage = () => {
  const hostname = window.location.hostname;
  if (hostname.startsWith('argentina.')) {
    return 'es-AR';
  }
  // Treat localhost as brazil subdomain
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'pt-BR';
  }
  return 'pt-BR';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR,
      },
      'es-AR': {
        translation: esAR,
      },
    },
    lng: getDefaultLanguage(),
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;