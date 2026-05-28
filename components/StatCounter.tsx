"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type StatCounterProps = {
  value: number;
  label: string;
  suffix?: string;
};

export function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, reduced]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={reduced ? false : { opacity: 0, scale: 0.95 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="stat-card__value">
        {reduced ? value : display}
        {suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </motion.div>
  );
}
