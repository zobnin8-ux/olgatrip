import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    place: string;
  }>;

  return (
    <section id="testimonials" className="section-breathe bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="section-label">{t("testimonials.label")}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 max-w-2xl font-serif text-4xl leading-tight text-ink md:max-w-3xl md:text-5xl lg:text-6xl">
            {t("testimonials.title")}
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-20 md:mt-28 md:grid-cols-3 md:gap-12">
          {items.map((item, i) => (
            <Reveal key={item.name + item.place} delay={0.1 + 0.07 * i}>
              <blockquote className="flex h-full flex-col">
                <p className="flex-1 font-serif text-2xl font-normal leading-snug text-ink md:text-3xl">
                  {item.quote}
                </p>
                <footer className="mt-10 text-base font-normal text-muted">
                  <span className="text-ink">{item.name}</span>
                  <span> — {item.place}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
