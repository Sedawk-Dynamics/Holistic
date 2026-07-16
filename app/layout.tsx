import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Weights are listed explicitly to match what the original pages requested from
// Google Fonts. Discrete `wght@400;500;…` values return static instances, not a
// variable font — loading these as variable shifts text metrics and reflows the
// page, so keep them pinned.
const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hhpf.in"),
  title: "Holistic Healing Pathways Foundation | Healing, Astrology & Psychology",
  description:
    "Holistic Healing Pathways Foundation integrates Nadi Astrology and Bach Flower Therapy with modern psychology to decode emotional patterns and guide deep healing, clarity, and personal transformation.",
  icons: { icon: "/images/hh-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The script below adds `has-js` to this element before React hydrates, so
    // its className legitimately differs from what the server rendered.
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Must land before first paint so revealed content is not briefly
            visible. Without JS the class never lands and everything stays shown. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('has-js')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
