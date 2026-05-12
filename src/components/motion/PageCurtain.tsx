import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const KEY = "cc_curtain_once";

export function PageCurtain() {
  const reduce = useReducedMotion();
  const [skip, setSkip] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) === "1";
    } catch {
      return false;
    }
  });

  if (reduce || skip) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[120] bg-paper"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.82, ease: [0.76, 0, 0.12, 1] }}
      onAnimationComplete={() => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {
          /* ignore */
        }
        setSkip(true);
      }}
    />
  );
}
