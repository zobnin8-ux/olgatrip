import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { galleryImages } from "../../data/images";

const SPLIT = Math.ceil(galleryImages.length / 2);
const ROW_A = galleryImages.slice(0, SPLIT);
const ROW_B = galleryImages.slice(SPLIT);

function MarqueeRow({
  images,
  direction,
  durationSec,
  rowClassName,
}: {
  images: readonly string[];
  direction: "left" | "right";
  durationSec: number;
  rowClassName: string;
}) {
  const animClass = direction === "left" ? "gallery-marquee-left" : "gallery-marquee-right";

  return (
    <div className={`gallery-marquee-wrap relative w-full overflow-hidden ${rowClassName}`}>
      <div
        className={`gallery-marquee-animated flex h-full w-max items-stretch gap-3 px-6 will-change-transform md:gap-4 md:px-10 ${animClass}`}
        style={{ animationDuration: `${durationSec}s` }}
      >
        {images.map((src) => (
          <div
            key={`a-${src}`}
            className="relative h-full w-[64vw] shrink-0 overflow-hidden rounded-[3px] sm:w-[44vw] md:w-[min(28vw,320px)]"
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        ))}
        {images.map((src) => (
          <div
            key={`b-${src}`}
            className="relative h-full w-[64vw] shrink-0 overflow-hidden rounded-[3px] sm:w-[44vw] md:w-[min(28vw,320px)]"
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GalleryFilm() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id="gallery" className="relative bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-paper/50">{t("gallery.label")}</p>
          <h2 className="mt-6 font-serif text-4xl">{t("gallery.title")}</h2>
          <p className="mt-4 text-paper/70">{t("gallery.body")}</p>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {galleryImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-[3px]">
                <img src={src} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="relative bg-ink text-paper">
      <style>{`
        @keyframes gallery-marquee-left-kf {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes gallery-marquee-right-kf {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
        .gallery-marquee-left {
          animation-name: gallery-marquee-left-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .gallery-marquee-right {
          animation-name: gallery-marquee-right-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (hover: hover) and (pointer: fine) {
          .gallery-marquee-wrap:hover > .gallery-marquee-animated {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 pb-8 pt-24 md:px-10 md:pb-10 md:pt-28">
        <div className="flex items-end gap-6">
          <div className="h-px flex-1 origin-left bg-paper/25" />
          <p className="shrink-0 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-paper/45 md:text-xs">
            {t("gallery.label")}
          </p>
        </div>
        <h2 className="mt-8 max-w-2xl font-serif text-[clamp(2rem,5vw,3.75rem)] font-normal leading-[1.05]">
          {t("gallery.title")}
        </h2>
        <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-paper/65 md:text-base">{t("gallery.body")}</p>
      </div>

      <div className="flex flex-col gap-4 pb-24 md:gap-5 md:pb-28">
        <MarqueeRow images={ROW_A} direction="left" durationSec={78} rowClassName="h-[30vh] min-h-[180px] md:h-[38vh] md:min-h-0" />
        <MarqueeRow images={ROW_B} direction="right" durationSec={92} rowClassName="h-[24vh] min-h-[150px] md:h-[30vh] md:min-h-0" />
      </div>
    </section>
  );
}
