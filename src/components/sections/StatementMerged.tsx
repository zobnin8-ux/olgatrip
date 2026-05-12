import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export function StatementMerged() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const steps = t("flow.steps", { returnObjects: true }) as Array<{ title: string; text: string }>;
  const formatItems = t("format.items", { returnObjects: true }) as Array<{ title: string; text: string }>;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lift = useTransform(scrollYProgress, [0.08, 0.35], reduce ? [0, 0] : [28, 0]);
  const fade = useTransform(scrollYProgress, [0.05, 0.22], reduce ? [1, 1] : [0, 1]);
  const lineX = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={ref}
      id="manifest"
      className="relative overflow-hidden bg-ink py-28 text-paper md:py-40 lg:py-52"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end gap-6">
          <motion.div style={{ scaleX: lineX }} className="h-px flex-1 origin-left bg-paper/35" />
          <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-paper/55 md:text-xs">
            {t("statement.meta")}
          </p>
        </div>

        <motion.div style={{ y: lift, opacity: fade }} className="mt-16 md:mt-20">
          <h2 className="max-w-[18ch] font-serif text-[clamp(2.35rem,6.2vw,4.75rem)] font-normal leading-[1.05] tracking-tight text-balance text-paper">
            {t("notThis.title")}
          </h2>
          <p className="mt-12 max-w-2xl font-sans text-lg font-normal leading-relaxed text-paper/88 md:text-xl">
            {t("notThis.body")}
          </p>
          <p className="mt-10 max-w-xl font-serif text-xl font-normal italic leading-relaxed text-paper/80 md:text-2xl">
            {t("notThis.closing")}
          </p>
        </motion.div>

        <div className="mt-24 border-t border-paper/15 pt-16 md:mt-32 md:pt-24">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-accent/90 md:text-xs">
            {t("flow.label")}
          </p>
          <p className="mt-6 max-w-xl font-serif text-3xl leading-tight text-paper/95 md:text-4xl">{t("flow.title")}</p>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-paper/75 md:text-lg">{t("flow.intro")}</p>

          <div className="mt-14 grid gap-px bg-paper/10 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.title} className="bg-ink p-8 md:p-10">
                <p className="font-serif text-2xl text-paper md:text-3xl">{s.title}</p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-paper/70 md:text-base">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-paper/15 pt-16 md:mt-32 md:pt-24">
          <h3 className="max-w-xl font-serif text-3xl leading-tight text-paper md:text-[2.35rem]">{t("community.title")}</h3>
          <p className="mt-8 max-w-2xl border-l border-accent/50 pl-8 font-sans text-base leading-relaxed text-paper/78 md:text-lg">
            {t("community.body")}
          </p>
          <p className="mt-6 max-w-2xl pl-8 font-sans text-sm italic leading-relaxed text-paper/60 md:text-base">
            {t("community.note")}
          </p>
        </div>

        <div className="mt-24 border-t border-paper/15 pt-16 md:mt-32 md:pt-24">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-paper/50 md:text-xs">
            {t("format.label")}
          </p>
          <p className="mt-5 font-serif text-3xl text-paper md:text-4xl">{t("format.title")}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {formatItems.map((it) => (
              <div key={it.title}>
                <p className="font-serif text-xl text-paper md:text-2xl">{it.title}</p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-paper/65 md:text-base">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
