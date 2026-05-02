import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { contactLinks } from "../../data/images";

const interestKeys = [
  "ocean",
  "california",
  "far",
  "bachelorette",
  "kids",
  "unsure",
] as const;

export function FinalCta() {
  const { t } = useTranslation();
  const note = t("cta.form.note");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.info("lead", Object.fromEntries(new FormData(e.currentTarget)));
  }

  return (
    <section id="contact" className="section-breathe bg-paper2">
      <div className="mx-auto grid max-w-5xl gap-20 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-accent/80">
              {t("cta.label")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-10 font-serif text-3xl font-normal leading-[1.12] text-ink md:text-4xl lg:text-[2.75rem]">
              {t("cta.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-base font-light leading-relaxed text-muted md:text-lg">
              {t("cta.body")}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-14">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-mist">
                {t("cta.channels.title")}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm font-light">
                <li>
                  <a
                    href={contactLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink/90 transition-colors duration-500 hover:text-accent"
                  >
                    {t("cta.channels.instagram")}
                  </a>
                </li>
                <li>
                  <a
                    href={contactLinks.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink/90 transition-colors duration-500 hover:text-accent"
                  >
                    {t("cta.channels.telegram")}
                  </a>
                </li>
                <li>
                  <a
                    href={contactLinks.email}
                    className="text-ink/90 transition-colors duration-500 hover:text-accent"
                  >
                    {t("cta.channels.email")}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <form
            onSubmit={onSubmit}
            className="border border-line/50 bg-paper/40 p-8 backdrop-blur-[2px] md:p-10"
          >
            <div className="space-y-6">
              <label className="block text-sm font-light text-muted">
                <span className="mb-1.5 block text-ink/90">{t("cta.form.name")}</span>
                <input
                  name="name"
                  required
                  className="mt-1 w-full border-0 border-b border-line/80 bg-transparent px-0 py-2 text-ink outline-none transition-colors placeholder:text-mist/50 focus:border-accent/60"
                />
              </label>
              <label className="block text-sm font-light text-muted">
                <span className="mb-1.5 block text-ink/90">{t("cta.form.email")}</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border-0 border-b border-line/80 bg-transparent px-0 py-2 text-ink outline-none transition-colors focus:border-accent/60"
                />
              </label>
              <label className="block text-sm font-light text-muted">
                <span className="mb-1.5 block text-ink/90">{t("cta.form.interest")}</span>
                <select
                  name="interest"
                  className="mt-1 w-full cursor-pointer border-0 border-b border-line/80 bg-transparent py-2 text-ink outline-none transition-colors focus:border-accent/60"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    —
                  </option>
                  {interestKeys.map((key) => (
                    <option key={key} value={key}>
                      {t(`cta.form.interestOptions.${key}`)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-light text-muted">
                <span className="mb-1.5 block text-ink/90">{t("cta.form.message")}</span>
                <textarea
                  name="message"
                  rows={3}
                  className="mt-1 w-full resize-y border-0 border-b border-line/80 bg-transparent px-0 py-2 text-ink outline-none transition-colors focus:border-accent/60"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-10 w-full border border-ink/20 bg-transparent py-3.5 text-sm font-normal tracking-wide text-ink transition-all duration-700 ease-calm hover:border-accent hover:text-accent"
            >
              {t("cta.form.submit")}
            </button>
            {note ? (
              <p className="mt-5 text-xs font-light leading-relaxed text-mist">{note}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
