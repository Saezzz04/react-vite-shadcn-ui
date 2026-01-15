import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import en from "./locales/en.json";
import es from "./locales/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],

    detection: {
      // Orden de detección de idioma
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      // Caches del idioma detectado
      caches: ["localStorage"],
      // Parámetro de query string
      lookupQuerystring: "lng",
      // Key en localStorage
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
