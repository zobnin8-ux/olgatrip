import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function ExperienceFlow() {
  const { t } = useTranslation();
  const steps = t("flow.steps", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  return (
    <section id="flow" className="bg-paper2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
            {t("flow.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-snug text-ink md:text-5xl">
            {t("flow.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t("flow.intro")}
          </p>
        </Reveal>

        <div className="mt-16 space-y-12 md:mt-24 md:space-y-16">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.12 + 0.05 * i}>
              <article className="grid gap-4 border-t border-line pt-10 md:grid-cols-12 md:gap-10 md:pt-12">
                <div className="md:col-span-4">
                  <p className="font-serif text-2xl text-ink md:text-3xl">{step.title}</p>
                </div>
                <p className="md:col-span-7 md:col-start-6 text-base leading-relaxed text-muted md:text-lg">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
