import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function FormatSection() {
  const { t } = useTranslation();
  const items = t("format.items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section id="format" className="section-breathe-tight bg-paper">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-mist">
            {t("format.label")}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 font-serif text-3xl leading-tight text-ink md:text-5xl">
            {t("format.title")}
          </h2>
        </Reveal>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + 0.07 * i}>
              <div>
                <h3 className="font-serif text-2xl text-ink md:text-3xl">{item.title}</h3>
                <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-muted md:text-lg">
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
