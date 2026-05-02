import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function Community() {
  const { t } = useTranslation();
  return (
    <section id="community" className="bg-paper2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("community.label")}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink md:text-5xl">
            {t("community.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {t("community.body")}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
            {t("community.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
