"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an <img> actually loaded.
 *
 * `onError` alone is not enough: server-rendered images often finish failing
 * before React hydrates, so the event fires with no handler attached. The mount
 * check catches those — a decoded image always reports a non-zero naturalWidth.
 */
export function useImageStatus() {
  const ref = useRef<HTMLImageElement>(null);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (el?.complete && el.naturalWidth === 0) setOk(false);
  }, []);

  return { ref, ok, onError: () => setOk(false) };
}
