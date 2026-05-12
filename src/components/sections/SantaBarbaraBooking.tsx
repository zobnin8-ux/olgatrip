import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { calendlyUrl } from "../../data/images";
import { Reveal } from "../motion/Reveal";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const calendlyScriptId = "calendly-widget-script";

export function SantaBarbaraBooking() {
  const { t } = useTranslation();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountWidget = () => {
      if (!widgetRef.current || !window.Calendly) return;
      widgetRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widgetRef.current,
      });
    };

    const existingScript = document.getElementById(calendlyScriptId);
    if (existingScript) {
      mountWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = calendlyScriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = mountWidget;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="booking" className="section-breathe bg-paper">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="section-label-accent">{t("booking.label")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-10 font-serif text-4xl leading-[1.12] text-ink text-balance md:text-5xl lg:text-6xl">
              {t("booking.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg font-normal leading-relaxed text-ink/90 md:text-xl">
              {t("booking.body")}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-lg text-base font-normal leading-relaxed text-muted">
              {t("booking.note")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="overflow-hidden border border-line/60 bg-paper2/45">
            <div
              ref={widgetRef}
              className="min-h-[700px] w-full"
              aria-label={t("booking.title")}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
