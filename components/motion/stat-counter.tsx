"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
};

/**
 * Simple stat counter — pure JS with requestAnimationFrame.
 * Starts at 0, eases up to `to` when the element scrolls into view.
 * No motion library involvement so it can't be the source of runtime issues.
 */
export function StatCounter({ to, suffix = "+", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          const tick = (now: number) => {
            const elapsed = (now - start) / 1000;
            const t = Math.min(elapsed / duration, 1);
            setValue(Math.floor(easeOut(t) * to));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span
        className="font-[var(--font-display)] font-black tracking-[-0.06em] leading-[0.76]"
        style={{ fontSize: "clamp(4rem, 12vw, var(--text-stat))" }}
      >
        {value}
      </span>
      <span
        className="font-[var(--font-display)] font-black tracking-[-0.06em] leading-[0.76] text-accent"
        style={{ fontSize: "clamp(4rem, 12vw, var(--text-stat))" }}
      >
        {suffix}
      </span>
    </span>
  );
}
