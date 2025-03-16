import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ma from "./locales/ma.json";

i18n
  .use(initReactI18next) // Integrates with React
  .init({
    resources: {
      en: { translation: en },
      ma: { translation: ma },
    },
    lng: localStorage.getItem("language") || "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

export default i18n;
