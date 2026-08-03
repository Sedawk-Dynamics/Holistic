/** Footer mark. White, because every footer sits on the dark purple band. */
export const LOGO = "/images/hhwhite.png";
/** Horizontal wordmark used in the fixed header; footers keep the square mark. */
export const LOGO_HEADER = "/images/hh-horizontal.png";
export const LOGO_ALT = "Holistic Healing Pathways Foundation";

export const ROUTES = {
  home: "/",
  about: "/about",
  nadi: "/nadi-nakshatra-astrology",
  psychology: "/psychology",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  refund: "/refund-cancellation-policy",
} as const;

/** Contact e-mail shown on the legal pages (Privacy, Terms, Refund & Cancellation). */
export const LEGAL_EMAIL = {
  address: "info@hhpf.in",
  href: "mailto:info@hhpf.in",
} as const;

/** Policy links shown in every footer's bottom bar. */
export const LEGAL_LINKS = [
  { href: ROUTES.privacy, label: "Privacy Policy" },
  { href: ROUTES.terms, label: "Terms of Service" },
  { href: ROUTES.refund, label: "Cancellation Policy" },
] as const;




export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.about, label: "About" },
  {
    href: "https://bachflowertherapy.hhpf.in/",
    label: "Bach Flower",
    external: true,
  },
  {
    href: "https://nadi-nakshatra.vercel.app/",
    label: "Nadi Astrology",
    external: true,
  },
  { href: ROUTES.psychology, label: "Psychology" },
  { href: ROUTES.contact, label: "Contact" },
];

export const LMS_URL = "https://lms.hhpf.in/";

export const CONTACT = {
  phone: "+91 98714 68883",
  phoneHref: "tel:+919871468883",
  whatsappHref: "https://wa.me/919871468883",
  email: "info@hhpf.in",
  emailHref: "mailto:info@hhpf.in",
  website: "www.hhpf.in",
  websiteHref: "https://www.hhpf.in",
  address: "E-26, Sector-41, Noida — 201301, Gautam Buddha Nagar, UP",
  hours: "Open daily · 10:00 AM – 8:00 PM",
} as const;

export const FOOTER_BLURB =
  "Empowering lives through holistic healing — integrating ancient wisdom with modern psychology for emotional wellbeing and inner peace.";

/** Shown by the enquiry forms when a submission would otherwise go nowhere. */
export const FORM_NOTICE =
  "Thank you! Connect this form to your email or a service like Formspree to receive enquiries at info@hhpf.in";
