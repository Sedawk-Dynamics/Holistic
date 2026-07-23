export const LOGO = "/images/hh-logo.png";
export const LOGO_ALT = "Holistic Healing Pathways Foundation";

export const ROUTES = {
  home: "/",
  about: "/about",
  nadi: "/nadi-nakshatra-astrology",
  mentalHealth: "/mental-health",
  contact: "/contact",
} as const;




export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.nadi, label: "Nadi Astrology" },
  { href: ROUTES.mentalHealth, label: "Mental Health" },
  {
    href: "https://bachflowertherapy.hhpf.in/",
    label: "Bach Flower",
    external: true,
  },
  { href: ROUTES.contact, label: "Contact" },
];

export const LMS_URL = "https://lms.hhpf.in/";

export const CONTACT = {
  phone: "+91 98714 68883",
  phoneHref: "tel:+919871468883",
  whatsappHref: "https://wa.me/919871468883",
  email: "nikunjhhp@gmail.com",
  emailHref: "mailto:nikunjhhp@gmail.com",
  website: "www.hhpf.in",
  websiteHref: "https://www.hhpf.in",
  address: "E-26, Sector-41, Noida — 201301, Gautam Buddha Nagar, UP",
  hours: "Open daily · 10:00 AM – 8:00 PM",
} as const;

export const FOOTER_BLURB =
  "Empowering lives through holistic healing — integrating ancient wisdom with modern psychology for emotional wellbeing and inner peace.";

/** Shown by the enquiry forms when a submission would otherwise go nowhere. */
export const FORM_NOTICE =
  "Thank you! Connect this form to your email or a service like Formspree to receive enquiries at nikunjhhp@gmail.com";
