import Link from "next/link";
import type { ReactNode } from "react";
import { SocialLinks } from "./SocialLinks";
import { CONTACT, FOOTER_BLURB, LOGO, LOGO_ALT, ROUTES } from "@/lib/site";

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href}>
      <Arrow />
      {children}
    </Link>
  );
}

/** Footer used by the home page — the only one with the newsletter sign-up. */
export function HomeFooter() {
  return (
    <footer>
      <div className="ftop" />
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <img src={LOGO} alt={LOGO_ALT} />
            <p>{FOOTER_BLURB}</p>
            <SocialLinks networks={["Facebook", "Instagram", "YouTube", "X"]} />
          </div>

          <div className="fcol">
            <h4>Quick Links</h4>
            <ArrowLink href="#home">Home</ArrowLink>
            <ArrowLink href="#about">About</ArrowLink>
            <ArrowLink href="#services">Services</ArrowLink>
            <ArrowLink href="#products">Products</ArrowLink>
            <ArrowLink href="#testimonials">Testimonials</ArrowLink>
            <ArrowLink href={ROUTES.contact}>Contact</ArrowLink>
          </div>

          <div className="fcol">
            <h4>Our Services</h4>
            <ArrowLink href="#services">Bach Flower Therapy</ArrowLink>
            <ArrowLink href="#services">Nadi Nakshatra Astrology</ArrowLink>
            <ArrowLink href="#services">Mental Health Therapy</ArrowLink>
            <ArrowLink href="#services">Training &amp; Courses</ArrowLink>
            <ArrowLink href="#products">Healing Products</ArrowLink>
          </div>

          <div className="fcol fconnect">
            <h4>Connect With Us</h4>
            <a href={CONTACT.phoneHref} className="row" style={{ marginBottom: 14 }}>
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
                </svg>
              </span>
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="row" style={{ marginBottom: 14 }}>
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
              {CONTACT.email}
            </a>
            <div className="row">
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Noida, UP &amp; Online Worldwide
            </div>
            <div className="news">
              <label htmlFor="newsletter-email">Healing Insights Newsletter</label>
              <div className="nrow">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  aria-label="Newsletter email"
                />
                <button aria-label="Subscribe">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fdivider" />
        <div className="fbar">
          <p>© 2026 Holistic Healing Pathways Foundation. All rights reserved.</p>
          <div className="fl">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
