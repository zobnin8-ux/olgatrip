import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useCalendlyWidget } from "../../hooks/useCalendlyWidget";

export function BookingShell() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const widgetRef = useRef<HTMLDivElement>(null);
  useCalendlyWidget(widgetRef);

  const frameRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "center center"],
  });
  const reveal = useTransform(scrollYProgress, [0, 0.4], reduce ? [1, 1] : [0.88, 1]);
  const frameY = useTransform(scrollYProgress, [0, 0.35], reduce ? [0, 0] : [22, 0]);

  return (
    <section id="booking" ref={frameRef} className="bg-paper py-28 md:py-36 lg:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end gap-6">
          <div className="h-px flex-1 bg-line" />
          <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-muted md:text-xs">
            {t("booking.index")}
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-accent md:text-xs">{t("booking.label")}</p>
            <h2 className="mt-6 font-serif text-[clamp(1.85rem,3.4vw,2.75rem)] font-normal leading-tight text-ink">
              {t("booking.title")}
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed text-ink/85 md:text-lg">{t("booking.body")}</p>
            <p className="mt-8 border-l border-line pl-6 font-sans text-sm leading-relaxed text-muted md:text-base">{t("booking.note")}</p>
          </div>

          <motion.div style={{ opacity: reveal, y: frameY }} className="lg:col-span-8">
            <div className="rounded-[3px] bg-ink/[0.04] p-[2px] shadow-[0_50px_120px_-55px_rgba(58,54,51,0.45)] ring-1 ring-ink/10">
              <div className="rounded-[2px] bg-paper2/80 p-3 md:p-5">
                <div className="overflow-hidden rounded-[2px] border border-line/60 bg-paper">
                  <div ref={widgetRef} className="min-h-[700px] w-full" aria-label={t("booking.title")} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
