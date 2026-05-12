import { useTranslation } from "react-i18next";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { contactLinks } from "../../data/images";
import { SplitLines } from "../motion/SplitLines";

type HeroProps = {
  imageUrl: string;
};

export function Hero({ imageUrl }: HeroProps) {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const titleRaw = t("hero.title", { returnObjects: true });
  const titleLines = Array.isArray(titleRaw) ? titleRaw : [String(titleRaw)];
  const marqueeItems = t("hero.marqueeItems", { returnObjects: true }) as string[];

  const mouseNormX = useMotionValue(0);
  const mouseNormY = useMotionValue(0);
  const mouseSpringX = useSpring(mouseNormX, { stiffness: 28, damping: 22, mass: 0.35 });
  const mouseSpringY = useSpring(mouseNormY, { stiffness: 28, damping: 22, mass: 0.35 });
  const mouseParallaxX = useTransform(mouseSpringX, [-0.5, 0.5], reduce ? [0, 0] : [-18, 18]);
  const mouseParallaxY = useTransform(mouseSpringY, [-0.5, 0.5], reduce ? [0, 0] : [-12, 12]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mouseNormX.set(e.clientX / window.innerWidth - 0.5);
      mouseNormY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseNormX, mouseNormY, reduce]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.08]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-28 md:pt-36"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          style={{ x: mouseParallaxX, y: mouseParallaxY }}
          className="absolute -left-[6%] -top-[6%] h-[112%] w-[112%] max-w-none"
        >
          <motion.div
            className="h-full w-full"
            animate={reduce ? undefined : { scale: [1, 1.06] }}
            transition={reduce ? undefined : { duration: 28, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          >
            <img src={imageUrl} alt={t("hero.imageAlt")} className="h-full w-full object-cover" loading="eager" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/72 via-ink/30 to-paper/10" />
      <div className="absolute inset-0 -z-10 bg-accent/[0.05] mix-blend-multiply" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_0_min(50vw,480px)_rgba(0,0,0,0.48)]"
      />
      {!reduce ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      ) : null}

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <p className="hero-kicker font-sans text-[10px] font-medium uppercase tracking-[0.38em] text-paper/80 md:text-xs">
            {t("hero.index")}
          </p>
          <p className="hidden text-right font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-paper/55 md:block md:text-xs">
            {t("hero.operator")}
          </p>
        </div>

        <h1 className="mt-10 max-w-[20ch] font-serif text-[clamp(2.75rem,9vw,6.5rem)] font-normal leading-[0.98] tracking-tight text-paper text-balance md:max-w-[22ch]">
          <SplitLines lines={titleLines} delay={0.08} />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl font-sans text-lg font-normal leading-relaxed text-paper/90 md:mt-12 md:text-xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-start gap-5 md:mt-16 md:flex-row md:items-center md:gap-10"
        >
          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-paper/65 bg-paper/12 px-8 py-4 text-base font-medium tracking-wide text-paper backdrop-blur-[2px] transition-colors duration-700 ease-calm hover:bg-paper hover:text-ink md:text-lg"
          >
            <span>{t("hero.cta")}</span>
            <span aria-hidden className="inline-block transition-transform duration-700 ease-calm group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#manifest"
            className="group inline-flex border-b border-paper/35 pb-1 text-base font-normal tracking-wide text-paper/75 transition-colors duration-700 ease-calm hover:border-paper hover:text-paper md:text-lg"
          >
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>
      </div>

      {!reduce && marqueeItems.length > 0 ? (
        <div className="relative z-10 mt-16 w-full overflow-hidden border-t border-paper/15 bg-ink/25 py-4 backdrop-blur-[2px] md:mt-20">
          <motion.div
            className="flex w-max gap-12 whitespace-nowrap px-6 font-sans text-xs font-medium uppercase tracking-[0.4em] text-paper/55 md:gap-16 md:px-10 md:text-sm"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems, ...marqueeItems].map((label, i) => (
              <span key={`${i}-${label}`}>{label}</span>
            ))}
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
