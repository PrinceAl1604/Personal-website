"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif", margin: 0, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ maxWidth: 640 }}>
          <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.04em", marginBottom: 12 }}>
            Something broke.
          </h1>
          <p style={{ color: "rgb(139,139,139)", marginBottom: 24 }}>
            Error: <code style={{ color: "#ff2056" }}>{error.message}</code>
            {error.digest ? ` · digest: ${error.digest}` : ""}
          </p>
          <button
            onClick={reset}
            style={{ background: "#ff2056", color: "#000", border: 0, padding: "12px 24px", borderRadius: 100, fontWeight: 600, cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
