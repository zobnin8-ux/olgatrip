import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isAppLang } from "../i18n/i18n";
import { BRAND_NAME } from "../brand";

export function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  if (!lang || !isAppLang(lang)) {
    return <Navigate to="/ru" replace />;
  }

  useEffect(() => {
    void i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.title = `${BRAND_NAME} — Olga Trip`;
  }, [lang, i18n]);

  return <Outlet />;
}
