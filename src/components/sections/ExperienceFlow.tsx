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
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-mist">
            {t("flow.label")}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-10 font-serif text-3xl leading-tight text-ink md:text-5xl">
            {t("flow.title")}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted">{intro}</p>
          </Reveal>
        ) : null}

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + 0.06 * i}>
              <article>
                <p className="font-serif text-2xl text-ink/90 md:text-3xl">{step.title}</p>
                <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-muted md:text-lg">
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
