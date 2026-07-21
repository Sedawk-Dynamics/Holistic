import type { ReactNode } from "react";

export type PredictTopic = {
  /** URL segment under /nadi-nakshatra-astrology/ */
  slug: string;
  /** Short form, used on the card. */
  title: string;
  /** Full form, used as the page's <h1> and <title>. */
  fullTitle: string;
  /** One-line summary shown on the card. */
  teaser: string;
  /** Page body. Add paragraphs here and the topic page picks them up. */
  body?: string[];
  /**
   * Card artwork. Defaults to `/images/predict/<slug>.jpg` — drop a file there
   * and it appears. Until one exists the card falls back to the gradient tile.
   */
  image?: string;
  icon: ReactNode;
};

export const topicImage = (t: PredictTopic) =>
  t.image ?? `/images/predict/${t.slug}.jpg`;

/**
 * Slugs that have a hand-built page under their own folder. The generic [slug]
 * route must skip these so it doesn't prerender a second, conflicting page.
 */
export const DEDICATED_SLUGS = new Set([
  "career-guidance",
  "financial-prosperity",
  "education-guidance",
  "litigation-guidance",
  "property-guidance",
  "vehicle-guidance",
  "health-guidance",
  "travel-guidance",
  "marriage-guidance",
  "relationship-guidance",
  "divorce-guidance",
  "corporate-guidance",
  "longevity-guidance",
  "birth-time-rectification",
  "muhurat-guidance",
  "remedial-measures",
]);

export const PREDICT_TOPICS: PredictTopic[] = [
  {
    slug: "career-guidance",
    title: "Career Guidance",
    fullTitle: "Career Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Suitable profession, job vs business, foreign opportunities, growth periods, and change windows.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
  {
    slug: "financial-prosperity",
    title: "Financial Prosperity",
    fullTitle: "Financial Prosperity Through Nadi Nakshatra Astrology",
    teaser:
      "Wealth creation windows, investment periods, risk cycles, and expansion timing.",
    icon: (
      <>
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </>
    ),
  },
  {
    slug: "education-guidance",
    title: "Education Guidance",
    fullTitle: "Education Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Stream selection, higher-study timing, competitive-exam windows, and periods of obstruction.",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      </>
    ),
  },
  {
    slug: "marriage-guidance",
    title: "Marriage Guidance",
    fullTitle: "Marriage Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Timing, nature of partner, compatibility, relationship dynamics, and potential challenges.",
    icon: (
      <path d="M2 9.5a5.5 5.5 0 0 1 9.59-3.68.56.56 0 0 0 .82 0A5.5 5.5 0 0 1 22 9.5c0 2.3-1.5 4-3 5.5l-5.5 5.3a2 2 0 0 1-3 0L5 15c-1.5-1.5-3-3.2-3-5.5" />
    ),
  },
  {
    slug: "property-guidance",
    title: "Property Guidance",
    fullTitle: "Property Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Purchase and sale timing, ancestral property, disputes, and the windows for construction.",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    slug: "vehicle-guidance",
    title: "Vehicle Guidance",
    fullTitle: "Vehicle Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Acquisition timing, suitable choices, and the cautioned periods for accidents and loss.",
    icon: (
      <>
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
        <path d="M9 17h6" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
  },
  {
    slug: "health-guidance",
    title: "Health Guidance",
    fullTitle: "Health Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Vulnerable organs, onset periods, recovery windows, and preventive timing.",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    slug: "travel-guidance",
    title: "Travel Guidance",
    fullTitle: "Travel Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Foreign settlement, relocation timing, short and long journeys, and their outcomes.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
      </>
    ),
  },
  {
    slug: "litigation-guidance",
    title: "Litigation Guidance",
    fullTitle: "Litigation Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Case outcome, favourable timing, settlement windows, and the periods to avoid escalation.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="m5 7-3 6h6Z" />
        <path d="m19 7-3 6h6Z" />
        <path d="M8 21h8" />
      </>
    ),
  },
  {
    slug: "relationship-guidance",
    title: "Relationship Guidance",
    fullTitle: "Relationship Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Bonds with family, friends and colleagues, karmic patterns, and the periods of strain.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    slug: "divorce-guidance",
    title: "Divorce & Separation",
    fullTitle: "Divorce & Relationship Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Separation timing, reconciliation windows, legal outcomes, and the way forward.",
    icon: (
      <>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="m12 13-1-1 2-2-3-3 2-2" />
      </>
    ),
  },
  {
    slug: "corporate-guidance",
    title: "Corporate Guidance",
    fullTitle: "Corporate Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Partnerships, expansion timing, hiring windows, litigation risk, and growth cycles.",
    icon: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </>
    ),
  },
  {
    slug: "longevity-guidance",
    title: "Longevity Guidance",
    fullTitle: "Longevity Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Lifespan indicators, critical periods, and the timing of health interventions.",
    icon: (
      <>
        <path d="M5 22h14M5 2h14" />
        <path d="M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4a2 2 0 0 0-.6 1.4V22" />
        <path d="M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4a2 2 0 0 0 .6-1.4V2" />
      </>
    ),
  },
  {
    slug: "birth-time-rectification",
    title: "Birth Time Rectification",
    fullTitle: "Birth Time Rectification Through Nadi Nakshatra Astrology",
    teaser:
      "Your precise birth time derived from life events, so every prediction rests on a correct chart.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    slug: "muhurat-guidance",
    title: "Muhurat Guidance",
    fullTitle: "Muhurat Guidance Through Nadi Nakshatra Astrology",
    teaser:
      "Auspicious timing for marriage, business launch, property, travel, and ceremonies.",
    icon: (
      <>
        <path d="M8 2v4M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </>
    ),
  },
  {
    slug: "remedial-measures",
    title: "Remedial Measures",
    fullTitle: "Personalized Remedial Measures Through Nadi Nakshatra Astrology",
    teaser:
      "Remedies matched to your chart — mantras, gemstones, charity, and their correct timing.",
    icon: (
      <>
        <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18.4l1.9-5.8 5.8-1.9-5.8-1.9z" />
        <path d="M5 3v4M19 17v4M3 5h4M17 19h4" />
      </>
    ),
  },
];

export const getTopic = (slug: string) =>
  PREDICT_TOPICS.find((t) => t.slug === slug);
