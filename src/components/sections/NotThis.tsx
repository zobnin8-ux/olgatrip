import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function NotThis() {
  const { t } = useTranslation();
  return (
    <section id="not-this" className="section-breathe bg-paper">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-mist">
            {t("notThis.label")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-10 font-serif text-3xl leading-[1.15] text-ink text-balance md:text-5xl md:leading-tight">
            {t("notThis.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-12 max-w-xl text-lg font-light leading-relaxed text-muted md:text-xl">
            {t("notThis.body")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-14 max-w-xl text-base font-light italic leading-relaxed text-ink/85 md:text-lg">
            {t("notThis.closing")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
