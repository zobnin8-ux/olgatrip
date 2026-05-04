import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function Community() {
  const { t } = useTranslation();
  return (
    <section id="community" className="section-breathe bg-paper2">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="section-label-accent">{t("community.label")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-10 font-serif text-4xl leading-[1.12] text-ink text-balance md:text-5xl md:leading-tight lg:text-6xl">
            {t("community.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-12 max-w-xl text-xl font-normal leading-relaxed text-ink/90 md:max-w-2xl md:text-2xl">
            {t("community.body")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-14 max-w-xl text-lg font-normal leading-relaxed text-ink/90 md:max-w-2xl md:text-xl">
            {t("community.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
