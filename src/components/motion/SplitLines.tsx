import { motion, useReducedMotion } from "framer-motion";

type SplitLinesProps = {
  lines: string[];
  className?: string;
  delay?: number;
};

export function SplitLines({ lines, className, delay = 0 }: SplitLinesProps) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={`${i}-${line.slice(0, 12)}`} className="block overflow-hidden">
          <motion.span
            className="block translate-y-0"
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            whileInView={reduce ? undefined : { y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.25 }}
            transition={{
              duration: 1.05,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
