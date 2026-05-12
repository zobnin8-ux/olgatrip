import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { contactLinks, tripImages } from "../../data/images";

export function TripsEditorial() {
  const { t } = useTranslation();
  const items = t("trips.items", { returnObjects: true }) as Array<{ title: string; description: string; cta: string }>;

  return (
    <section id="trips" className="bg-paper2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end gap-6">
          <div className="h-px flex-1 bg-line" />
          <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-muted md:text-xs">
            {t("trips.index")}
          </p>
        </div>
        <h2 className="mt-8 max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.08] text-ink">
          {t("trips.title")}
        </h2>
        <p className="mt-6 max-w-xl font-sans text-sm uppercase tracking-[0.22em] text-muted">{t("trips.label")}</p>
      </div>

      <div>
        {items.map((item, i) => (
          <TripSpread
            key={item.title}
            index={String(i + 1).padStart(2, "0")}
            title={item.title}
            description={item.description}
            cta={item.cta}
            image={tripImages[i] ?? tripImages[0]}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function TripSpread({
  index,
  title,
  description,
  cta,
  image,
  reverse,
}: {
  index: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  reverse: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0.1, 0.55], reduce ? [0, 0] : [48, -32]);
  const imgY = useTransform(scrollYProgress, [0.12, 0.6], reduce ? [0, 0] : [-24, 24]);

  return (
    <article ref={ref} className="relative border-t border-line/60 py-20 md:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute left-2 top-10 select-none font-serif text-[clamp(3.5rem,14vw,10rem)] font-light leading-none text-ink/[0.06] md:left-8 md:top-16"
      >
        {index}
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <motion.div
          style={{ y }}
          className={
            reverse
              ? "md:col-span-5 md:col-start-8 md:row-start-1"
              : "md:col-span-5 md:col-start-1 md:row-start-1"
          }
        >
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-muted">{index}</p>
          <h3 className="mt-5 font-serif text-[clamp(1.75rem,3.2vw,2.6rem)] font-normal leading-tight text-ink">{title}</h3>
          <p className="mt-6 font-sans text-base leading-relaxed text-ink/85 md:text-lg">{description}</p>
          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 border-b border-ink/25 pb-1 font-sans text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent md:text-base"
          >
            {cta}
            <span aria-hidden className="transition-transform duration-500 ease-calm group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          className={
            reverse
              ? "relative overflow-hidden rounded-[3px] md:col-span-6 md:col-start-1 md:row-start-1"
              : "relative overflow-hidden rounded-[3px] md:col-span-6 md:col-start-7 md:row-start-1"
          }
        >
          <div className="aspect-[4/5] w-full md:aspect-[5/6]">
            <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5" />
        </motion.div>
      </div>
    </article>
  );
}
