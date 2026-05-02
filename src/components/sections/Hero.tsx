import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroProps = {
  imageUrl: string;
};

export function Hero({ imageUrl }: HeroProps) {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.06]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-end pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <img
          src={imageUrl}
          alt={t("hero.imageAlt")}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/75 via-ink/35 to-paper/20" />
      <div className="absolute inset-0 -z-10 bg-accent/10 mix-blend-multiply" />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.p
          className="mb-4 max-w-xl text-xs font-medium uppercase tracking-[0.35em] text-paper/90"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.kicker")}
        </motion.p>
        <motion.h1
          className="max-w-3xl font-serif text-4xl leading-[1.05] text-paper text-balance md:text-6xl lg:text-7xl"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-paper/90 md:text-lg"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-paper/70 bg-paper/10 px-8 py-3 text-sm font-medium tracking-wide text-paper backdrop-blur-sm transition-colors duration-500 ease-calm hover:border-paper hover:bg-paper hover:text-ink"
          >
            {t("hero.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
