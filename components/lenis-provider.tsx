"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll — defensive version.
 *
 * Guarantees:
 * - Skips entirely if the user prefers reduced motion
 * - Wraps init in try/catch so a Lenis failure can't crash the page
 * - Tracks the latest frameId every iteration so cleanup actually
 *   cancels the in-flight callback (the bug that took the site down).
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frameId = 0;
    let stopped = false;

    try {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        if (stopped) return;
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };
      frameId = requestAnimationFrame(raf);

      return () => {
        stopped = true;
        cancelAnimationFrame(frameId);
        lenis.destroy();
      };
    } catch (err) {
      console.warn("[Lenis] init failed, falling back to native scroll:", err);
    }
  }, []);

  return <>{children}</>;
}
