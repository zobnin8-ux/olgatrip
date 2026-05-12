import { useTranslation } from "react-i18next";
import { Reveal } from "../motion/Reveal";
import { contactLinks } from "../../data/images";

type Channel = {
  key: "telegram" | "whatsapp" | "instagram" | "facebook";
  href: string;
  meta?: string;
};

const channels: Channel[] = [
  { key: "telegram", href: contactLinks.telegram, meta: "@OlgaTripp" },
  { key: "whatsapp", href: contactLinks.whatsapp, meta: "+1 650 704 6231" },
  { key: "instagram", href: contactLinks.instagram, meta: "@OlgaTrip" },
  { key: "facebook", href: contactLinks.facebook },
];

export function FinalCta() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-breathe bg-paper2">
      <div className="mx-auto grid max-w-5xl gap-20 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="section-label-accent">{t("cta.label")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-10 font-serif text-4xl font-normal leading-[1.12] text-ink md:text-5xl lg:text-[2.85rem]">
              {t("cta.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-lg font-normal leading-relaxed text-ink/90 md:text-xl">
              {t("cta.body")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <div className="space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.key}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 border border-line/60 bg-paper/60 px-6 py-5 transition-colors duration-700 ease-calm hover:border-accent/60 hover:bg-paper md:px-8 md:py-6"
              >
                <span className="font-serif text-2xl text-ink transition-colors duration-700 group-hover:text-accent md:text-3xl">
                  {t(`cta.channels.${channel.key}`)}
                </span>
                <span className="flex items-center gap-3 text-sm font-normal text-muted md:text-base">
                  {channel.meta ? <span>{channel.meta}</span> : null}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-700 ease-calm group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-md text-sm font-normal leading-relaxed text-muted md:text-base">
            {t("cta.channels.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
