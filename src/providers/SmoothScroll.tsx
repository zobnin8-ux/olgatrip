import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const root = document.documentElement;
    root.classList.add("lenis", "lenis-smooth");
    const lenis = new Lenis({
      duration: 1.12,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      anchors: true,
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      root.classList.remove("lenis", "lenis-smooth");
    };
  }, [reduce]);

  return <>{children}</>;
}
