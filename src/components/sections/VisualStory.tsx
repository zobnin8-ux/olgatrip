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
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
            {t("visual.label")}
          </p>
        </Reveal>
      </div>

      <div className="space-y-24 md:space-y-32">
        {items.map((item, i) => (
          <Reveal key={item.alt} delay={0.02 * i}>
            <figure className="mx-auto max-w-[1400px]">
              <div className="overflow-hidden">
                <img
                  src={visualImages[i] ?? visualImages[0]}
                  alt={item.alt}
                  className="h-[55vw] max-h-[80vh] w-full object-cover transition-transform duration-[1.2s] ease-calm hover:scale-[1.02] md:h-[48vw]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mx-auto max-w-3xl px-6 pt-8 text-center font-sans text-lg leading-relaxed text-muted md:px-10 md:text-xl">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
