import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { founderImage } from "../../data/images";

type Fact = { value: string; label: string };

export function Founder() {
  const { t } = useTranslation();
  const facts = t("founder.facts", { returnObjects: true }) as Fact[];

  return (
    <section id="founder" className="section-breathe bg-paper">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:gap-14 md:px-10">
        <Reveal className="md:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden rounded-[2px]">
              <img
                src={founderImage}
                alt={t("founder.imageAlt")}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 text-sm font-normal text-muted">
              {t("founder.name")}
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="section-label-accent">{t("founder.label")}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-10 font-serif text-4xl leading-[1.12] text-ink text-balance md:text-5xl lg:text-6xl">
              {t("founder.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-10 max-w-xl text-lg font-normal leading-relaxed text-ink/90 md:text-xl">
              {t("founder.body")}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg font-normal italic leading-relaxed text-ink/90 md:text-xl">
              {t("founder.signoff")}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-line/60 pt-10 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={`${fact.value}-${fact.label}`}>
                  <dt className="font-serif text-3xl text-ink md:text-4xl">{fact.value}</dt>
                  <dd className="mt-2 text-sm font-normal uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
