import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { CONTACT, LMS_URL, LOGO, ROUTES } from "@/lib/site";

/** Footer used by About, Mental Health and Contact. */
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
            <Link href={ROUTES.mentalHealth}>Mental Health Therapy</Link>
            <Link href="/#products">Shop</Link>
          </div>
          <div className="fcol">
            <h4>Explore</h4>
            <Link href={ROUTES.home}>Home</Link>
            <Link href={ROUTES.about}>About</Link>
            <a href={LMS_URL}>Login</a>
            <Link href={ROUTES.contact}>Contact</Link>
          </div>
          <div className="fcol">
            <h4>Connect</h4>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <a href={CONTACT.websiteHref}>{CONTACT.website}</a>
            <a href="#">Noida, UP · India</a>
          </div>
        </div>
        <div className="fbar">
          <p>© 2026 Holistic Healing Pathways Foundation. All rights reserved.</p>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
