import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

export const supportedLngs = ["ru", "en"] as const;
export type AppLang = (typeof supportedLngs)[number];

export function isAppLang(value: string): value is AppLang {
  return (supportedLngs as readonly string[]).includes(value);
}

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
