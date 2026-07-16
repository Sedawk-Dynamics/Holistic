"use client";

import { useEffect, useState, type CSSProperties } from "react";

const COLORS = ["#C89A2B", "#B8A5E5", "#3D1578", "#76C043"];
const PETAL_COUNT = 10;

/**
 * Petals drifting down through the hero. Positions are random, so they are
 * generated after mount — rendering them on the server would not match.
 */
export function HeroPetals() {
  const [petals, setPetals] = useState<CSSProperties[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, (_, i) => {
        const size = 6 + Math.random() * 8;
        return {
          left: `${Math.random() * 100}%`,
          width: size,
          height: size,
          background: COLORS[i % COLORS.length],
          borderRadius: "50% 0 50% 50%",
          animationDuration: `${9 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * 8}s`,
        };
      }),
    );
  }, []);

  return (
    <>
      {petals.map((style, i) => (
        <div key={i} className="petal" style={style} />
      ))}
    </>
  );
}
