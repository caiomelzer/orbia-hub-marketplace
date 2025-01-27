import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from './locales/pt-BR.json';
import esAR from './locales/es-AR.json';

export const getCountryFromHostname = () => {
  const hostname = window.location.hostname;
  
  // Map de subdomínios para países
  const countryMap: Record<string, string> = {
    'argentina': 'AR',
    'brasil': 'BR',
    // Adicione mais países aqui conforme necessário
  };

  // Para desenvolvimento local, usar Brasil como padrão
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'BR';
  }

  // Extrair o subdomínio
  const subdomain = hostname.split('.')[0];
  return countryMap[subdomain] || 'BR'; // BR como fallback
};

export const getDefaultLanguage = () => {
  const country = getCountryFromHostname();
  
  // Map de países para idiomas
  const languageMap: Record<string, string> = {
    'AR': 'es-AR',
    'BR': 'pt-BR',
    // Adicione mais idiomas aqui conforme necessário
  };

  return languageMap[country] || 'pt-BR';
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