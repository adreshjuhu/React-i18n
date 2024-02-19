import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from "./locale/en.json";
import ptJSON from "./locale/pt.json";
import sanskritJSON from "./locale/sanskrit.json";
import hnJSON from "./locale/hn.json";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { ...enJSON },
    pt: { ...ptJSON },
    sanskrit: { ...sanskritJSON },
    hn: { ...hnJSON },
  },
  backend: {
    // Configure the Backend options
    loadPath: '/locale/{{lng}}.json', // Path to the translation files
  },
  detection: {
    // Configure the LanguageDetector options
    order: ['localStorage','cookie', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
});
