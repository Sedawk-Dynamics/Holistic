"use client";

import { useEffect, useState, type CSSProperties } from "react";

const DOT_COUNT = 14;

/** Slowly bobbing dots scattered across the contact section. */
export function ContactParticles() {
  const [dots, setDots] = useState<CSSProperties[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: DOT_COUNT }, (_, i) => {
        const size = 2 + Math.random() * 5;
        return {
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 2 ? "rgba(200,154,43,.5)" : "rgba(184,165,229,.4)",
          animation: `float ${5 + Math.random() * 5}s ease-in-out ${
            Math.random() * 3
          }s infinite`,
        };
      }),
    );
  }, []);

  return (
    <div id="particles">
      {dots.map((style, i) => (
        <div key={i} className="cdot" style={style} />
      ))}
    </div>
  );
}
