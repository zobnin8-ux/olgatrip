import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { contactLinks, ctaBackdropImage } from "../../data/images";

type Channel = { key: "telegram" | "whatsapp" | "instagram" | "facebook"; href: string; metaKey?: string };

const channels: Channel[] = [
  { key: "telegram", href: contactLinks.telegram, metaKey: "telegramMeta" },
  { key: "whatsapp", href: contactLinks.whatsapp },
  { key: "instagram", href: contactLinks.instagram, metaKey: "instagramMeta" },
  { key: "facebook", href: contactLinks.facebook },
];

export function FinalCtaCinematic() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rise = useTransform(scrollYProgress, [0, 0.45], reduce ? [0, 0] : [40, 0]);
  const fade = useTransform(scrollYProgress, [0, 0.35], reduce ? [1, 1] : [0, 1]);

  return (
    <section ref={ref} id="contact" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <img src={ctaBackdropImage} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <motion.div style={{ y: rise, opacity: fade }} className="max-w-3xl">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-paper/50 md:text-xs">{t("cta.index")}</p>
          <h2 className="mt-8 font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.06] text-paper">{t("cta.title")}</h2>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-paper/78 md:text-lg">{t("cta.body")}</p>
        </motion.div>

        <motion.ul
          style={{ y: rise, opacity: fade }}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {channels.map((ch) => (
            <li key={ch.key}>
              <a
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col border border-paper/20 bg-paper/[0.04] px-5 py-5 transition-colors duration-500 hover:border-paper/45 hover:bg-paper/[0.09] md:px-6 md:py-6"
              >
                <span className="font-serif text-2xl text-paper md:text-3xl">{t(`cta.channels.${ch.key}`)}</span>
                {ch.metaKey ? (
                  <span className="mt-2 font-sans text-xs text-paper/50">{t(`cta.channels.${ch.metaKey}`)}</span>
                ) : null}
                <span aria-hidden className="mt-4 text-xs uppercase tracking-[0.28em] text-paper/40 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <p className="relative z-10 mt-12 max-w-xl font-sans text-sm leading-relaxed text-paper/55">{t("cta.channels.note")}</p>
      </div>
    </section>
  );
}
