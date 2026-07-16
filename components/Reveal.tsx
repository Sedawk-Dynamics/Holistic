"use client";

import {
  createContext,
  use,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

/** Fraction of the element that must be visible before it reveals. */
const ThresholdContext = createContext(0.1);

export function RevealScope({
  threshold,
  children,
}: {
  threshold: number;
  children: ReactNode;
}) {
  return <ThresholdContext value={threshold}>{children}</ThresholdContext>;
}

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Stagger step: 1 → 0.1s, 2 → 0.2s, 3 → 0.3s. */
  delay?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Fades and lifts its content into place the first time it scrolls into view.
 * Renders visible and un-transformed until `.has-js` lands on <html>, so the
 * content is still readable if the page never hydrates.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delay,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const threshold = use(ThresholdContext);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const classes = ["reveal", delay ? `d${delay}` : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
