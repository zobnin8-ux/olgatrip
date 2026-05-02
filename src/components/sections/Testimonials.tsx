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
    <section id="testimonials" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
            {t("testimonials.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink md:text-5xl">
            {t("testimonials.title")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.name + item.place} delay={0.08 * i}>
              <blockquote className="flex h-full flex-col border-t border-line pt-8">
                <p className="flex-1 font-serif text-xl leading-relaxed text-ink md:text-2xl">
                  “{item.quote}”
                </p>
                <footer className="mt-8 text-sm text-muted">
                  <span className="font-medium text-ink">{item.name}</span>
                  <span className="text-muted"> · {item.place}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
