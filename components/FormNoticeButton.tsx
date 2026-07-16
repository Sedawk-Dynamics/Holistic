"use client";

import type { ReactNode } from "react";
import { FORM_NOTICE } from "@/lib/site";

/**
 * Submit button for the enquiry forms. The forms are not wired to a backend
 * yet, so this just tells the visitor how to reach the foundation.
 */
export function FormNoticeButton({ children }: { children: ReactNode }) {
  return (
    <button className="btn" onClick={() => alert(FORM_NOTICE)}>
      {children}
    </button>
  );
}
