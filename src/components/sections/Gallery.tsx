import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { galleryImages } from "../../data/images";

export function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="section-breathe bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="section-label">{t("gallery.label")}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 max-w-3xl font-serif text-4xl leading-tight text-ink md:max-w-4xl md:text-5xl lg:text-6xl">
            {t("gallery.title")}
          </h2>
        </Reveal>
        <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-ink/85 md:text-xl">
          {t("gallery.body")}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:mt-20 md:px-10">
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-3 md:columns-3 md:gap-4">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="mb-3 break-inside-avoid overflow-hidden rounded-[2px] md:mb-4"
            >
              <img
                src={src}
                alt=""
                className="h-auto w-full object-cover transition-transform duration-[1.2s] ease-calm hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
