import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { FormNoticeButton } from "@/components/FormNoticeButton";
import { CONTACT, ROUTES } from "@/lib/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Holistic Healing Pathways Foundation",
  description:
    "Contact Holistic Healing Pathways Foundation - book a session for Bach Flower Therapy, Nadi Nakshatra Astrology, or Mental Health Therapy. Noida and online worldwide. Call +91 98714 68883.",
};

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

const LEARN_MORE_STYLE = {
  color: "var(--gold)",
  fontWeight: 600,
  fontSize: 14,
  display: "inline-block",
  marginTop: 14,
};

const PATHWAYS: { href: string; icon: ReactNode; title: string; body: string }[] = [
  {
    href: "/#services",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      </svg>
    ),
    title: "Bach Flower Therapy",
    body: "Natural emotional balance through 38 flower essences.",
  },
  {
    href: ROUTES.nadi,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="1.6">
        <path d="m12 2 3 6.5 7 1-5 5 1 7-6-3.3L6 21.5l1-7-5-5 7-1z" />
      </svg>
    ),
    title: "Nadi Nakshatra Astrology",
    body: "Precise life prediction and timing from your birth chart.",
  },
  {
    href: ROUTES.mentalHealth,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D9B1C" strokeWidth="1.6">
        <path d="M12 18V5" />
        <path d="M15 13a4 4 0 0 1-3-4 4 4 0 0 1-3 4" />
        <path d="M17.6 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.6 1.5" />
        <path d="M18 18a4 4 0 0 0 2-7.46" />
        <path d="M6 18a4 4 0 0 1-2-7.46" />
      </svg>
    ),
    title: "Mental Health Therapy",
    body: "Confidential support for clarity, resilience, and strength.",
  },
];

const FAQ = [
  {
    q: "Do I need any prior experience to book a session?",
    a: "Not at all. Whether it's therapy, a Bach Flower consultation, or an astrology reading, no prior knowledge is needed - just come as you are.",
  },
  {
    q: "Are sessions available online?",
    a: "Yes. We offer both in-person sessions in Noida and online consultations worldwide, so you can connect from wherever you are.",
  },
  {
    q: "Is everything kept confidential?",
    a: "Absolutely. Every consultation is held in a safe, private, and non-judgmental space. Your trust and privacy matter deeply to us.",
  },
  {
    q: "How soon will you respond?",
    a: "We aim to reply to every message within 24 hours. For urgent matters, calling or WhatsApp is the fastest way to reach us.",
  },
  {
    q: "What are your working hours?",
    a: "We're available daily from 10:00 AM to 8:00 PM. You can book a session at a time that suits you within these hours.",
  },
];

export default function ContactPage() {
  return (
    <div className="p-contact">
      <ScrollProgress />
      <Header bookHref="#contact" />

      {/* ===== HERO ===== */}
      <section className="chero" id="home">
        <div className="wrap">
          <span className="u" />
          <p className="eyebrow">Get in Touch</p>
          <h1 style={{ marginTop: 14 }}>
            Let&apos;s begin your <span className="ital ggold">healing journey.</span>
          </h1>
          <p className="sub">
            Whether you&apos;re booking a session, enquiring about a course, or just have a
            question - reach out for a warm, judgment-free conversation. We reply within 24
            hours.
          </p>
          <div className="qchips">
            <a href={CONTACT.phoneHref} className="qchip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
              </svg>
              Call us
            </a>
            <a href={CONTACT.emailHref} className="qchip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              Email us
            </a>
            <a href={CONTACT.whatsappHref} className="qchip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                <path d="M2.99 16.34a2 2 0 0 1 .1 1.17l-1.07 3.29a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.1.09 10 10 0 1 0-4.78-4.72" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <Reveal className="contact-left">
            <span className="eyebrow">Reach Us Directly</span>
            <h2>We&apos;re here to help</h2>
            <p className="lead">
              Online or in person, in Noida. No prior experience needed - just bring whatever
              you&apos;re carrying.
            </p>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
                </svg>
              </div>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </div>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </div>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>E-26, Sector-41, Noida - 201301, Gautam Buddha Nagar, UP</span>
            </div>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span>Open daily · 10:00 AM - 8:00 PM</span>
            </div>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                </svg>
              </div>
              <a href={CONTACT.websiteHref}>{CONTACT.website}</a>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="form">
              <h3>Send us a message</h3>
              <p className="s">We&apos;ll get back to you within 24 hours.</p>
              <div className="frow">
                <div className="field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input id="contact-name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email *</label>
                <input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="field">
                <label htmlFor="contact-interest">I&apos;m interested in</label>
                <select id="contact-interest" defaultValue="Mental Health Therapy">
                  <option>Mental Health Therapy</option>
                  <option>Bach Flower Therapy</option>
                  <option>Nadi Nakshatra Astrology</option>
                  <option>Training / Courses</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us what you'd like to work on..."
                />
              </div>
              <FormNoticeButton>Send My Request →</FormNoticeButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PATHWAYS ===== */}
      <section id="pathways">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Not Sure Where to Start?</span>
            <h2>
              Choose a <span className="ggold ital">pathway</span>
            </h2>
            <p>Tell us which feels right - or ask us, and we&apos;ll gently guide you.</p>
          </Reveal>
          <div className="grid3">
            {PATHWAYS.map((path, i) => (
              <Reveal
                key={path.href}
                as={Link}
                href={path.href}
                className="card"
                delay={stagger(i)}
                style={{ display: "block" }}
              >
                <div className="ic">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
                <span style={LEARN_MORE_STYLE}>Learn more →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Before You Reach Out</span>
            <h2>
              Frequently asked <span className="ggold ital">questions</span>
            </h2>
          </Reveal>
          <Reveal className="faq">
            {FAQ.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
