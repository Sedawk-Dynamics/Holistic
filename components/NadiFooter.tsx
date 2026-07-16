import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { CONTACT, LOGO, ROUTES } from "@/lib/site";

/** Footer used by the Nadi Nakshatra Astrology page — three columns, page-local links. */
export function NadiFooter() {
  return (
    <footer>
      <div className="ftop" />
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <img src={LOGO} alt="HHPF" />
            <p>
              The science of precise life prediction — Nadi Nakshatra Astrology, taught
              and practised at the Holistic Healing Pathways Foundation.
            </p>
            <SocialLinks />
          </div>
          <div className="fcol">
            <h4>This Page</h4>
            <a href="#science">The Science</a>
            <a href="#predict">What It Predicts</a>
            <a href="#course">The Course</a>
            <a href="#enrol">Pricing</a>
          </div>
          <div className="fcol">
            <h4>Foundation</h4>
            <Link href={ROUTES.home}>Home</Link>
            <a href="#about">Dr. Nikunj Walia</a>
            <Link href={ROUTES.contact}>Contact</Link>
            <a href={CONTACT.websiteHref}>{CONTACT.website}</a>
          </div>
        </div>
        <div className="fbar">
          <p>© 2026 Holistic Healing Pathways Foundation. All rights reserved.</p>
          <p>Next batch · 27 June 2026</p>
        </div>
      </div>
    </footer>
  );
}
