import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { founderImage } from "../../data/images";

type Fact = { value: string; label: string };

export function FounderEditorial() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const facts = t("founder.facts", { returnObjects: true }) as Fact[];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0.1, 0.45], reduce ? [1, 1] : [1.06, 1]);

  return (
    <section ref={ref} id="founder" className="bg-paper py-28 md:py-36 lg:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-muted md:text-xs">
          {t("founder.index")}
        </p>

        <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:row-span-1">
            <div className="md:sticky md:top-28">
              <motion.figure style={{ scale: imgScale }} className="origin-top">
                <div className="overflow-hidden rounded-[3px] shadow-[0_40px_120px_-40px_rgba(58,54,51,0.35)]">
                  <img
                    src={founderImage}
                    alt={t("founder.imageAlt")}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-5 font-serif text-2xl text-ink md:text-3xl">{t("founder.name")}</figcaption>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.28em] text-muted">{t("founder.operator")}</p>
              </motion.figure>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-accent md:text-xs">
              {t("founder.label")}
            </p>
            <h2 className="mt-8 font-serif text-[clamp(2.1rem,4.8vw,3.75rem)] font-normal leading-[1.08] tracking-tight text-ink text-balance">
              {t("founder.title")}
            </h2>
            <p className="mt-10 max-w-xl font-sans text-lg font-normal leading-relaxed text-ink/88 md:text-xl">
              {t("founder.body")}
            </p>
            <p className="mt-8 max-w-xl font-serif text-xl font-normal italic leading-relaxed text-ink/85 md:text-2xl">
              {t("founder.signoff")}
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-10 border-t border-line/70 pt-12 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={`${fact.value}-${fact.label}`}>
                  <dt className="font-serif text-4xl text-ink md:text-5xl">{fact.value}</dt>
                  <dd className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted md:text-xs">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
