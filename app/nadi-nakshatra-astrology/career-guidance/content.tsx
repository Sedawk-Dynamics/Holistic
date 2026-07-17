import type { ReactNode } from "react";

/**
 * Copy for the Career Guidance page. Edit here — page.tsx only lays it out.
 */

export const TAGLINE = "Discover Your True Career Path";

export const INTRO = [
  "Choosing the right career is one of the most important decisions in life. Many people work hard but still struggle with job dissatisfaction, frequent changes, financial instability, or lack of recognition. Often, the issue is not effort—it is choosing a path that is not aligned with one's natural destiny.",
  "Nadi Nakshatra Astrology provides deep insights into your career potential by analyzing your birth chart, Nakshatra, planetary strengths, karmic patterns, and favorable timing. Instead of relying on guesswork, it helps you make informed career decisions based on your unique cosmic blueprint.",
  "At Holistic Healing Pathways Foundation, we combine ancient Nadi wisdom with practical career guidance to help you build a successful, meaningful, and prosperous professional life.",
];

export type HelpItem = { icon: ReactNode; h: string; p: string; list?: string[] };

export const HELPS: HelpItem[] = [
  {
    // Target — natural talents.
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    h: "Discover Your Natural Talents",
    p: "Understand your inborn abilities, strengths, personality, and professional potential.",
  },
  {
    // Compass — choosing a direction.
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
    h: "Choose the Right Career",
    p: "Identify careers that align with your planetary strengths instead of following trends.",
  },
  {
    icon: (
      <>
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </>
    ),
    h: "Career Growth & Promotions",
    p: "Know the most favorable periods for promotions, leadership roles, and salary growth.",
  },
  {
    // Rocket — launching a venture.
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
    h: "Business or Job?",
    p: "Understand whether your horoscope supports:",
    list: [
      "Employment",
      "Business",
      "Partnership",
      "Freelancing",
      "Entrepreneurship",
      "Government Service",
    ],
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
      </>
    ),
    h: "Foreign Career Opportunities",
    p: "Analyze possibilities for:",
    list: ["Overseas jobs", "International business", "Migration", "Remote global careers"],
  },
  {
    // Coins — financial stability.
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </>
    ),
    h: "Financial Stability",
    p: "Identify career paths that bring long-term income, wealth creation, and financial security.",
  },
  {
    // Alert — root causes of obstacles.
    icon: (
      <>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </>
    ),
    h: "Career Challenges",
    p: "Understand the root causes behind:",
    list: [
      "Job loss",
      "Workplace politics",
      "Delayed promotions",
      "Frequent job changes",
      "Lack of recognition",
      "Professional stress",
    ],
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    h: "Career Timing",
    p: "Find the best periods for:",
    list: [
      "Changing jobs",
      "Starting a business",
      "Promotions",
      "Investments",
      "Career expansion",
      "Retirement planning",
    ],
  },
];

export const QUESTIONS = [
  "Which career is best for me?",
  "Should I do a job or start a business?",
  "When will I get a promotion?",
  "Is this the right time to change my job?",
  "Why am I facing repeated career setbacks?",
  "Will I get a government job?",
  "Is foreign employment indicated?",
  "Which industry suits me best?",
  "Will my business succeed?",
  "Which direction should I choose for long-term success?",
  "What are my strongest earning years?",
  "How can I improve professional stability?",
];

export const IDEAL_FOR = [
  "Students choosing careers",
  "Fresh graduates",
  "Working professionals",
  "Entrepreneurs",
  "Business owners",
  "Government job aspirants",
  "Corporate executives",
  "Professionals planning overseas careers",
  "Individuals considering career changes",
  "Start-up founders",
];

export const INCLUDES = [
  "Comprehensive Birth Chart Analysis",
  "Nadi Nakshatra Career Reading",
  "Suitable Career & Industry Selection",
  "Job vs Business Guidance",
  "Promotion & Growth Timing",
  "Foreign Career Analysis",
  "Financial Prosperity Assessment",
  "Career Compatibility Analysis",
  "Personalized Remedial Measures",
  "Practical Action Plan for Career Success",
];

export const REMEDIES = {
  intro:
    "When career obstacles arise due to planetary influences, we provide personalized remedies such as:",
  items: [
    "Gemstone recommendations (only when suitable)",
    "Mantras and spiritual practices",
    "Charity (Daan)",
    "Planetary strengthening remedies",
    "Muhurat for career decisions",
    "Daily practices for confidence and success",
    "Meditation and mindset guidance",
  ],
  note: "All remedies are personalized according to your horoscope.",
};

export const WHY_US = [
  "Traditional Nadi Nakshatra Astrology",
  "Personalized Career Analysis",
  "Practical & Actionable Guidance",
  "Ethical and Confidential Consultations",
  "Scientific Interpretation of Ancient Wisdom",
  "Holistic Approach combining Astrology, Spirituality & Personal Growth",
];

export const CLOSING = {
  p: "Take the guesswork out of your professional journey. Discover your strengths, choose the right career path, and make confident decisions with the wisdom of Nadi Nakshatra Astrology.",
  quote:
    "Your birth chart doesn't limit your future—it reveals the path where your highest potential can unfold.",
};
