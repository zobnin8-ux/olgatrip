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
    <section id="trips" className="bg-paper2 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
            {t("trips.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink md:text-5xl">
            {t("trips.title")}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 md:mt-24 md:grid-cols-2 md:gap-x-10 md:gap-y-16 md:px-10">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.06 * i}>
            <article className="group flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={tripImages[i] ?? tripImages[0]}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.1s] ease-calm group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">{item.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted md:text-lg">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit text-sm font-medium text-accent underline-offset-4 transition-opacity hover:opacity-80"
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
