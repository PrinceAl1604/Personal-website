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
    console.error("Stack:", error.stack);
    console.error("Digest:", error.digest);
  }, [error]);

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: 760 }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            marginBottom: 12,
          }}
        >
          Something broke.
        </h1>
        <p style={{ color: "rgb(139,139,139)", marginBottom: 16 }}>
          <strong style={{ color: "#fff" }}>{error.name}:</strong>{" "}
          <code style={{ color: "#ff2056" }}>{error.message}</code>
        </p>
        {error.digest ? (
          <p
            style={{
              color: "rgb(139,139,139)",
              fontFamily: "monospace",
              fontSize: 12,
              marginBottom: 16,
            }}
          >
            Digest: {error.digest}
          </p>
        ) : null}
        {error.stack ? (
          <pre
            style={{
              color: "rgb(112,112,112)",
              fontFamily: "monospace",
              fontSize: 11,
              lineHeight: 1.5,
              padding: 16,
              background: "rgb(22,22,22)",
              borderRadius: 10,
              maxHeight: 320,
              overflow: "auto",
              whiteSpace: "pre-wrap",
              marginBottom: 24,
            }}
          >
            {error.stack}
          </pre>
        ) : null}
        <button
          onClick={reset}
          style={{
            background: "#ff2056",
            color: "#000",
            border: 0,
            padding: "12px 24px",
            borderRadius: 100,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
