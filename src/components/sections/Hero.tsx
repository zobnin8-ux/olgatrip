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
  const titleRaw = t("hero.title", { returnObjects: true });
  const titleLines = Array.isArray(titleRaw) ? titleRaw : [String(titleRaw)];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 56]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.05]);

  const fadeUp = {
    initial: reduce ? undefined : { opacity: 0, y: 22 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-end pb-20 pt-28 md:pb-32 md:pt-36"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <img
          src={imageUrl}
          alt={t("hero.imageAlt")}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-ink/28 to-paper/15" />
      <div className="absolute inset-0 -z-10 bg-accent/[0.07] mix-blend-multiply" />

      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <motion.p
          className="mb-8 max-w-xl text-[0.65rem] font-medium uppercase tracking-[0.42em] text-paper/75"
          {...fadeUp}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.kicker")}
        </motion.p>

        <h1 className="max-w-[14ch] font-serif text-4xl leading-[1.08] tracking-tight text-paper text-balance md:max-w-none md:text-6xl lg:text-7xl">
          {titleLines.map((line, i) => (
            <motion.span
              key={`${i}-${line}`}
              className="block"
              {...fadeUp}
              transition={{
                duration: 1.45,
                delay: 0.12 + i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-10 max-w-md text-base font-light leading-relaxed text-paper/80 md:text-lg"
          {...fadeUp}
          transition={{ duration: 1.35, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1.25, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-16"
        >
          <a
            href="#contact"
            className="group inline-flex border-b border-paper/40 pb-1 text-sm font-normal tracking-wide text-paper transition-colors duration-700 ease-calm hover:border-paper hover:text-paper"
          >
            <span className="relative">
              {t("hero.cta")}
              <span className="ml-1 inline-block transition-transform duration-700 ease-calm group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
