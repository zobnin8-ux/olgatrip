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

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo: replace with API / form service
    console.info("lead", Object.fromEntries(new FormData(e.currentTarget)));
  }

  return (
    <section id="contact" className="bg-paper2 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              {t("cta.label")}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-3xl leading-snug text-ink md:text-4xl lg:text-5xl">
              {t("cta.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {t("cta.body")}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
                {t("cta.channels.title")}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={contactLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline-offset-4 transition-colors hover:text-accent"
                  >
                    {t("cta.channels.instagram")}
                  </a>
                </li>
                <li>
                  <a
                    href={contactLinks.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline-offset-4 transition-colors hover:text-accent"
                  >
                    {t("cta.channels.telegram")}
                  </a>
                </li>
                <li>
                  <a
                    href={contactLinks.email}
                    className="text-ink underline-offset-4 transition-colors hover:text-accent"
                  >
                    {t("cta.channels.email")}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
          <form
            onSubmit={onSubmit}
            className="border border-line bg-paper p-6 shadow-[0_1px_0_rgba(43,40,36,0.04)] md:p-8"
          >
            <div className="space-y-5">
              <label className="block text-sm text-muted">
                <span className="mb-1 block text-ink">{t("cta.form.name")}</span>
                <input
                  name="name"
                  required
                  className="mt-1 w-full border border-line bg-paper2 px-3 py-2 text-ink outline-none ring-accent/0 transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block text-sm text-muted">
                <span className="mb-1 block text-ink">{t("cta.form.email")}</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border border-line bg-paper2 px-3 py-2 text-ink outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block text-sm text-muted">
                <span className="mb-1 block text-ink">{t("cta.form.interest")}</span>
                <select
                  name="interest"
                  className="mt-1 w-full border border-line bg-paper2 px-3 py-2 text-ink outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20"
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
              <label className="block text-sm text-muted">
                <span className="mb-1 block text-ink">{t("cta.form.message")}</span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 w-full resize-y border border-line bg-paper2 px-3 py-2 text-ink outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors duration-500 ease-calm hover:bg-accentDeep"
            >
              {t("cta.form.submit")}
            </button>
            <p className="mt-4 text-xs leading-relaxed text-muted">{t("cta.form.note")}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
