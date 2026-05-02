import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function NotThis() {
  const { t } = useTranslation();
  return (
    <section id="not-this" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("notThis.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink text-balance md:text-5xl">
            {t("notThis.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {t("notThis.body")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl border-l-2 border-accent/60 pl-6 text-base italic leading-relaxed text-ink md:text-lg">
            {t("notThis.closing")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
