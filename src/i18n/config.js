import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'de',
  // lng: i18n.options.lng,
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    de: {
      translations: require('./locales/de/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'de'];

export default i18n;
