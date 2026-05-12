import { useEffect, type RefObject } from "react";
import { calendlyUrl } from "../data/images";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const calendlyScriptId = "calendly-widget-script";

export function useCalendlyWidget(widgetRef: RefObject<HTMLDivElement | null>) {
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
  }, [widgetRef]);
}
