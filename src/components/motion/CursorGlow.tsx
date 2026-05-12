import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (reduce) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y]);

  if (reduce) return null;
  const coarse =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  if (coarse) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[110] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl mix-blend-multiply"
      style={{ x: sx, y: sy }}
    />
  );
}
