import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { tripImages } from "../../data/images";

export function TripsGrid() {
  const { t } = useTranslation();
  const items = t("trips.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    cta: string;
  }>;

  return (
    <section id="trips" className="section-breathe bg-paper2">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="section-label">{t("trips.label")}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 max-w-3xl font-serif text-4xl leading-tight text-ink md:max-w-4xl md:text-5xl lg:text-6xl">
            {t("trips.title")}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-20 px-6 md:mt-28 md:grid-cols-2 md:gap-x-12 md:gap-y-24 md:px-10">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.08 + 0.05 * i}>
            <article className="group flex flex-col">
              <div className="overflow-hidden rounded-[2px]">
                <img
                  src={tripImages[i] ?? tripImages[0]}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-calm group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 flex flex-1 flex-col">
                <h3 className="font-serif text-3xl text-ink md:text-4xl">{item.title}</h3>
                <p className="mt-4 flex-1 text-lg font-normal leading-relaxed text-ink/85 md:text-xl">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit border-b border-transparent pb-0.5 text-base font-medium text-accent transition-[border-color] duration-700 hover:border-accent/60"
                >
                  {item.cta}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
