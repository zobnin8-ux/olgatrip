import { useTranslation } from "react-i18next";
import { BRAND_NAME } from "../brand";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/40 bg-paper py-14">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-sm font-light text-mist md:flex-row md:items-center md:px-10">
        <p>
          © {year} {BRAND_NAME}. {t("footer.rights")}.
        </p>
        <a href="#privacy" className="transition-colors hover:text-ink">
          {t("footer.privacy")}
        </a>
      </div>
    </footer>
  );
}
