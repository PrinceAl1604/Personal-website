"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scroll — defensive version.
 *
 * Guarantees:
 * - Skips entirely if the user prefers reduced motion
 * - Wraps init in try/catch so a Lenis failure can't crash the page
 * - Tracks the latest frameId on every iteration so cleanup actually
 *   cancels the in-flight callback (prevents the original RAF leak)
 * - Dynamic import so SSR/hydration doesn't trip on `window`
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frameId = 0;
    let stopped = false;
    let cleanup = () => {};

    import("lenis")
      .then(({ default: Lenis }) => {
        if (stopped) return;
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

          cleanup = () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
          };
        } catch (err) {
          console.warn("[Lenis] init failed, falling back to native scroll:", err);
        }
      })
      .catch((err) => {
        console.warn("[Lenis] failed to load module:", err);
      });

    return () => {
      stopped = true;
      cleanup();
    };
  }, []);

  return <>{children}</>;
}
