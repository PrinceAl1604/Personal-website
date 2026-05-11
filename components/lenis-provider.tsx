"use client";

/**
 * Lenis temporarily disabled while we diagnose runtime crashes.
 * Native scroll only for now. Re-enable once root cause is confirmed.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
