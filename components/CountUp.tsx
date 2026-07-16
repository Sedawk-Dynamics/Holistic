"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  className?: string;
  /** How many increments to reach `to`. Fewer steps → chunkier jumps. */
  steps?: number;
  /** Milliseconds between increments. */
  interval?: number;
  threshold?: number;
};

/** Counts from 0 up to `to` the first time it scrolls into view. */
export function CountUp({
  to,
  suffix = "",
  className,
  steps = 45,
  interval = 24,
  threshold = 0.6,
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Held as text, not a number: the suffix only appears once counting starts,
  // so the resting state is a bare "0".
  const [text, setText] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          const step = Math.max(1, Math.ceil(to / steps));
          let current = 0;
          timer = setInterval(() => {
            current += step;
            if (current >= to) {
              current = to;
              clearInterval(timer);
            }
            setText(`${current}${suffix}`);
          }, interval);
        }
      },
      { threshold },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [to, suffix, steps, interval, threshold]);

  return (
    <div ref={ref} className={className}>
      {text}
    </div>
  );
}
