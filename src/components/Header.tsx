import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { contactLinks } from "../data/images";
import { BRAND_NAME } from "../brand";

const nav = [
  { to: "#founder", key: "founder" as const },
  { to: "#flow", key: "flow" as const },
  { to: "#trips", key: "trips" as const },
  { to: "#gallery", key: "gallery" as const },
  { to: "#booking", key: "booking" as const },
  { to: "#contact", key: "contact" as const },
];

export function Header() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const other = lang === "en" ? "ru" : "en";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-paper/70 backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:gap-6 md:px-10">
        <a
          href="#hero"
          className="font-serif text-2xl tracking-tight text-ink transition-colors duration-500 ease-calm hover:text-accent md:text-3xl"
          onClick={() => setOpen(false)}
        >
          {BRAND_NAME}
        </a>
        <nav className="hidden items-center gap-8 text-base font-medium text-ink/75 md:flex">
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
            className="hidden text-base font-medium text-accent transition-opacity hover:opacity-80 sm:inline"
          >
            DM
          </a>
          <button
            type="button"
            className="text-base font-medium text-ink/75 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("nav.close") : t("nav.menu")}
          </button>
          <Link
            to={`/${other}`}
            className="text-base font-semibold uppercase tracking-widest text-ink transition-colors duration-500 hover:text-accent"
            onClick={() => setOpen(false)}
          >
            {other}
          </Link>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`border-t border-line/35 bg-paper/80 backdrop-blur-md md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-base font-medium text-ink/80">
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
