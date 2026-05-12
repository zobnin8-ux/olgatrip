import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { contactLinks } from "../data/images";
import { BRAND_NAME } from "../brand";

const nav = [
  { to: "#manifest", key: "manifest" as const },
  { to: "#founder", key: "founder" as const },
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
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 36);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ease-calm ${
        solid ? "border-line/50 bg-paper/90 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:gap-6 md:px-10">
        <a
          href="#hero"
          className={`font-serif text-xl tracking-tight transition-colors duration-500 ease-calm md:text-2xl ${
            solid ? "text-ink hover:text-accent" : "text-paper hover:text-paper"
          }`}
          onClick={() => setOpen(false)}
        >
          {BRAND_NAME}
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex md:gap-8 md:text-[15px]">
          {nav.map((item) => (
            <a
              key={item.key}
              href={item.to}
              className={`transition-colors duration-500 ease-calm ${
                solid ? "text-ink/70 hover:text-ink" : "text-paper/80 hover:text-paper"
              }`}
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
            className={`hidden text-sm font-medium transition-opacity hover:opacity-80 sm:inline md:text-[15px] ${
              solid ? "text-accent" : "text-paper/85"
            }`}
          >
            DM
          </a>
          <button
            type="button"
            className={`text-sm font-medium md:hidden ${solid ? "text-ink/75" : "text-paper/85"}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("nav.close") : t("nav.menu")}
          </button>
          <Link
            to={`/${other}`}
            className={`text-sm font-semibold uppercase tracking-[0.22em] transition-colors duration-500 md:text-[15px] ${
              solid ? "text-ink hover:text-accent" : "text-paper hover:text-paper"
            }`}
            onClick={() => setOpen(false)}
          >
            {other}
          </Link>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`border-t backdrop-blur-lg md:hidden ${
          solid ? "border-line/40 bg-paper/95" : "border-paper/15 bg-ink/55"
        } ${open ? "block" : "hidden"}`}
      >
        <nav
          className={`mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-base font-medium ${
            solid ? "text-ink/85" : "text-paper/90"
          }`}
        >
          {nav.map((item) => (
            <a
              key={item.key}
              href={item.to}
              className="py-2 transition-colors hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
