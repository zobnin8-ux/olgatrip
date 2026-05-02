import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { contactLinks } from "../data/images";
import { BRAND_NAME } from "../brand";

const nav = [
  { to: "#flow", key: "flow" as const },
  { to: "#stories", key: "stories" as const },
  { to: "#trips", key: "trips" as const },
  { to: "#contact", key: "contact" as const },
];

export function Header() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const other = lang === "en" ? "ru" : "en";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:gap-6 md:px-10">
        <a
          href="#hero"
          className="font-serif text-xl tracking-tight text-ink transition-colors duration-500 ease-calm hover:text-accent md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {BRAND_NAME}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.key}
              href={item.to}
              className="transition-colors duration-500 ease-calm hover:text-ink"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-accent transition-opacity hover:opacity-80 sm:inline"
          >
            DM
          </a>
          <button
            type="button"
            className="text-sm font-medium text-muted md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("nav.close") : t("nav.menu")}
          </button>
          <Link
            to={`/${other}`}
            className="text-sm font-medium uppercase tracking-widest text-ink transition-colors duration-500 hover:text-accent"
            onClick={() => setOpen(false)}
          >
            {other}
          </Link>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`border-t border-line/60 bg-paper/95 md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm font-medium text-muted">
          {nav.map((item) => (
            <a
              key={item.key}
              href={item.to}
              className="py-2 transition-colors hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
