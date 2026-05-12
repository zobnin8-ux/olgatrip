import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { visualImages } from "../../data/images";

export function VisualCinematic() {
  const { t } = useTranslation();
  const items = t("visual.items", { returnObjects: true }) as Array<{ caption: string; alt: string }>;
  const reduce = useReducedMotion();

  return (
    <section id="scenes" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-20 md:px-10 md:pt-28">
        <div className="flex items-end gap-6">
          <div className="h-px flex-1 bg-line" />
          <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-muted md:text-xs">
            {t("visual.index")}
          </p>
        </div>
        <h2 className="mt-8 max-w-xl font-serif text-3xl leading-tight text-ink md:text-5xl">{t("visual.label")}</h2>
      </div>

      <div className="mt-6 space-y-0">
        {items.map((item, i) => (
          <SceneFrame
            key={item.alt}
            src={visualImages[i] ?? visualImages[0]}
            caption={item.caption}
            alt={item.alt}
            reduce={!!reduce}
            alignRight={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function SceneFrame({
  src,
  caption,
  alt,
  reduce,
  alignRight,
}: {
  src: string;
  caption: string;
  alt: string;
  reduce: boolean;
  alignRight: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.15, 0.45, 0.75], reduce ? [1, 1, 1] : [1.08, 1, 1.02]);
  const bright = useTransform(scrollYProgress, [0.2, 0.5], reduce ? [0.35, 0.35] : [0.5, 0.28]);

  return (
    <figure ref={ref} className="relative isolate min-h-[88svh] w-full overflow-hidden md:min-h-[92svh]">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <motion.div style={{ opacity: bright }} className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <figcaption
        className={`absolute bottom-0 left-0 right-0 p-8 pb-14 md:p-14 md:pb-20 ${alignRight ? "md:text-right" : ""}`}
      >
        <p
          className={`max-w-3xl font-serif text-[clamp(1.35rem,3.6vw,2.75rem)] font-normal leading-snug text-paper ${alignRight ? "md:ml-auto" : ""}`}
        >
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
