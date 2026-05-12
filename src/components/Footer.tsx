import { useTranslation } from "react-i18next";
import { BRAND_NAME } from "../brand";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/35 bg-paper py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <p className="max-w-md font-serif text-lg italic leading-relaxed text-ink/80 md:text-xl">{t("footer.tagline")}</p>
        <div className="flex flex-col gap-2 font-sans text-sm text-muted md:items-end md:text-base">
          <p className="font-medium not-italic tracking-wide text-ink/70">
            © {year} {BRAND_NAME}
          </p>
          <p className="text-muted/90">{t("footer.rights")}</p>
          <a href="#privacy" className="transition-colors hover:text-ink">
            {t("footer.privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
}
