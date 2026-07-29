import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "./Header";
import { SiteFooter } from "./SiteFooter";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { CONTACT } from "@/lib/site";
import "@/app/legal.css";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  /** First part of the H1, in regular style. */
  titleLead: string;
  /** Second part of the H1, italic with the gold gradient. */
  titleAccent: string;
  sub: string;
  updated: string;
  sections: LegalSection[];
  /** The other two policies, cross-linked at the bottom. */
  related: { href: string; label: string; desc: string }[];
};

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Shared shell for the Privacy, Terms and Refund & Cancellation pages. */
export function LegalPage({
  titleLead,
  titleAccent,
  sub,
  updated,
  sections,
  related,
}: LegalPageProps) {
  return (
    <div className="p-legal">
      <ScrollProgress />
      <Header />

      <section className="lhero">
        <div className="wrap">
          <span className="u" />
          <p className="eyebrow">Legal</p>
          <h1>
            {titleLead} <span className="ital ggold">{titleAccent}</span>
          </h1>
          <p className="sub">{sub}</p>
          <span className="updated">Last updated · {updated}</span>
        </div>
      </section>

      <section className="lbody">
        <div className="wrap lgrid">
          <aside className="toc" aria-label="Table of contents">
            <h4>On this page</h4>
            {sections.map((section, i) => (
              <a key={section.id} href={`#${section.id}`}>
                <span>{num(i)}</span> {section.title}
              </a>
            ))}
          </aside>

          <div className="prose">
            {sections.map((section, i) => (
              <section key={section.id} className="lsec" id={section.id}>
                <h2>
                  <span className="n">{num(i)}</span>
                  {section.title}
                </h2>
                {section.body}
              </section>
            ))}

            <div className="ccard">
              <h3>Questions about this policy?</h3>
              <p>
                We&apos;re happy to help — reach us any day between 10:00 AM and
                8:00 PM.
              </p>
              <div className="crow">
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                <a href={CONTACT.websiteHref}>{CONTACT.website}</a>
              </div>
            </div>

            <div className="related">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="rcard">
                  <b>{item.label}</b>
                  <span>{item.desc}</span>
                  <em>Read policy →</em>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
