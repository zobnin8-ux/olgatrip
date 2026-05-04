import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { visualImages } from "../../data/images";

export function VisualStory() {
  const { t } = useTranslation();
  const items = t("visual.items", { returnObjects: true }) as Array<{
    caption: string;
    alt: string;
  }>;

  return (
    <section id="stories" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-20">
        <Reveal>
          <p className="section-label">{t("visual.label")}</p>
        </Reveal>
      </div>

      <div className="space-y-36 pt-16 md:space-y-48 md:pt-24">
        {items.map((item, i) => (
          <Reveal key={item.alt} delay={0.08 + i * 0.04}>
            <figure className="mx-auto max-w-[min(92vw,1200px)]">
              <div className="overflow-hidden rounded-[2px]">
                <img
                  src={visualImages[i] ?? visualImages[0]}
                  alt={item.alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-calm hover:scale-[1.015] md:aspect-[16/9] md:max-h-[78vh]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mx-auto max-w-2xl px-2 pt-12 text-center font-sans text-lg font-normal leading-relaxed text-ink/85 md:pt-16 md:text-xl">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <div className="h-12 md:h-20" aria-hidden />
    </section>
  );
}
