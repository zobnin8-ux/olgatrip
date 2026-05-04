import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";

export function ExperienceFlow() {
  const { t } = useTranslation();
  const steps = t("flow.steps", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const intro = t("flow.intro");

  return (
    <section id="flow" className="section-breathe bg-paper2">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="section-label">{t("flow.label")}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
            {t("flow.title")}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-xl font-normal leading-relaxed text-ink/90 md:max-w-2xl md:text-2xl">
              {intro}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + 0.06 * i}>
              <article>
                <p className="font-serif text-3xl text-ink/95 md:text-4xl">{step.title}</p>
                <p className="mt-5 max-w-xl text-lg font-normal leading-relaxed text-ink/85 md:max-w-2xl md:text-xl">
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
