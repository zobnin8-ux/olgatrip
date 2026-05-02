import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function FormatSection() {
  const { t } = useTranslation();
  const items = t("format.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section id="format" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
            {t("format.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink md:text-5xl">
            {t("format.title")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <div className="flex h-full flex-col border-t border-line pt-8">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
