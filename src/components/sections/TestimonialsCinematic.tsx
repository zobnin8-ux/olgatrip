import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type Item = { quote: string; name: string; place: string };

export function TestimonialsCinematic() {
  const reduce = useReducedMotion();
  if (reduce) return <TestimonialsStatic />;
  return <TestimonialsScroll />;
}

function TestimonialsStatic() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Item[];

  return (
    <section id="testimonials" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{t("testimonials.index")}</p>
        <p className="mt-6 font-serif text-2xl text-ink md:text-3xl">{t("testimonials.label")}</p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-ink md:text-4xl">{t("testimonials.title")}</h2>
        <div className="mt-16 space-y-16">
          {items.map((item) => (
            <figure key={item.quote}>
              <blockquote className="max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted">
                {item.name} / {item.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsScroll() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Item[];
  const ref = useRef<HTMLElement>(null);
  const n = items.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} id="testimonials" className="relative h-[220vh] bg-paper">
      <div className="sticky top-0 h-[100svh]">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-10">
          <div className="flex items-end gap-6">
            <div className="h-px flex-1 bg-line" />
            <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-muted md:text-xs">
              {t("testimonials.index")}
            </p>
          </div>
          <p className="mt-10 font-serif text-2xl text-ink/90 md:text-3xl">{t("testimonials.label")}</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-ink md:text-4xl">{t("testimonials.title")}</h2>

          <div className="relative mt-14 min-h-[42vh] md:min-h-[46vh]">
            {items.map((item, i) => (
              <QuoteSlide key={item.quote} item={item} index={i} total={n} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSlide({
  item,
  index,
  total,
  progress,
}: {
  item: Item;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [28, 0, -20]);

  return (
    <motion.figure style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <blockquote className="max-w-4xl font-serif text-[clamp(1.5rem,4.2vw,2.85rem)] font-normal leading-snug text-ink">
        {item.quote}
      </blockquote>
      <figcaption className="mt-10 font-sans text-sm uppercase tracking-[0.22em] text-muted md:text-base">
        {item.name}
        <span className="mx-3 text-line">/</span>
        {item.place}
      </figcaption>
    </motion.figure>
  );
}
