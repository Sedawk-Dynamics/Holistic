import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { CONTACT, LEGAL_LINKS, LMS_URL, LOGO, ROUTES } from "@/lib/site";

/** Gold on a translucent tile — same treatment as the home footer's contact rows. */
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
      <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
      <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/** Footer used by About, Psychology, Contact and the legal pages. */
export function SiteFooter() {
  return (
    <footer>
      <div className="ftop" />
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <img src={LOGO} alt="HHPF" />
            <p>
              Empowering lives through holistic healing — integrating ancient wisdom
              with modern psychology for emotional well-being and inner peace.
            </p>
            <SocialLinks />
          </div>
          <div className="fcol">
            <h4>Pathways</h4>
            <Link href="/#services">Bach Flower Therapy</Link>
            <Link href={ROUTES.nadi}>Nadi Nakshatra Astrology</Link>
            <Link href={ROUTES.psychology}>Psychology</Link>
            <Link href="/#products">Shop</Link>
          </div>
          <div className="fcol">
            <h4>Explore</h4>
            <Link href={ROUTES.home}>Home</Link>
            <Link href={ROUTES.about}>About</Link>
            <a href={LMS_URL}>Login</a>
            <Link href={ROUTES.contact}>Contact</Link>
          </div>
          <div className="fcol fconnect">
            <h4>Connect</h4>
            <a href={CONTACT.phoneHref} className="row">
              <span className="ic">
                <PhoneIcon />
              </span>
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="row">
              <span className="ic">
                <MailIcon />
              </span>
              {CONTACT.email}
            </a>
            <a href={CONTACT.websiteHref} className="row">
              <span className="ic">
                <GlobeIcon />
              </span>
              {CONTACT.website}
            </a>
            <a href="#" className="row">
              <span className="ic">
                <PinIcon />
              </span>
              Noida, UP · India
            </a>
          </div>
        </div>
        <div className="fbar">
          <p>© 2026 Holistic Healing Pathways Foundation. All rights reserved.</p>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
