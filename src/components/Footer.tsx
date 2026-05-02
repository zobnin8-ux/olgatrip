import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:px-10">
        <p>
          © {year} {t("brand")}. {t("footer.rights")}.
        </p>
        <a href="#privacy" className="transition-colors hover:text-ink">
          {t("footer.privacy")}
        </a>
      </div>
    </footer>
  );
}
