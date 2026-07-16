"use client";

import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

/**
 * An <img> that removes itself if the file is missing, leaving the container's
 * own background showing rather than a broken-image icon.
 */
export function HideOnErrorImg({ alt, ...rest }: Props) {
  return (
    <img
      alt={alt}
      {...rest}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
