import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { galleryImages } from "../../data/images";

export function GalleryFilm() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineGrow = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -maxShift]);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.scrollWidth - window.innerWidth;
      setMaxShift(Math.max(0, w));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (reduce) {
    return (
      <section id="gallery" className="relative bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-paper/50">{t("gallery.index")}</p>
          <h2 className="mt-6 font-serif text-4xl">{t("gallery.title")}</h2>
          <p className="mt-4 text-paper/70">{t("gallery.body")}</p>
          <div className="mt-12 columns-1 gap-3 sm:columns-2">
            {galleryImages.map((src) => (
              <div key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-[3px]">
                <img src={src} alt="" className="w-full" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="gallery" className="relative min-h-[300vh] bg-ink text-paper">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl shrink-0 px-6 pb-10 md:px-10">
          <div className="flex items-end gap-6">
            <motion.div style={{ scaleX: lineGrow }} className="h-px flex-1 origin-left bg-paper/25" />
            <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-paper/45 md:text-xs">
              {t("gallery.index")}
            </p>
          </div>
          <h2 className="mt-8 max-w-2xl font-serif text-[clamp(2rem,5vw,3.75rem)] font-normal leading-[1.05]">{t("gallery.title")}</h2>
          <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-paper/65 md:text-base">{t("gallery.body")}</p>
        </div>

        <div className="relative min-h-0 flex-1">
          <motion.div ref={trackRef} style={{ x }} className="absolute left-0 top-1/2 flex h-[min(62vh,520px)] -translate-y-1/2 gap-4 px-6 md:gap-5 md:px-10">
            {galleryImages.map((src) => (
              <div key={src} className="h-full w-[72vw] shrink-0 overflow-hidden rounded-[3px] md:w-[38vw]">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
