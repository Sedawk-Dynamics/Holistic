"use client";

import type { ImgHTMLAttributes } from "react";
import { useImageStatus } from "./useImageStatus";

type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

/**
 * An <img> that removes itself if the file is missing, leaving the container's
 * own background showing rather than a broken-image icon.
 */
export function HideOnErrorImg({ alt, ...rest }: Props) {
  const { ref, ok, onError } = useImageStatus();
  if (!ok) return null;
  return <img ref={ref} alt={alt} {...rest} onError={onError} />;
}
