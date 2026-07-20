import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { NadiFooter } from "@/components/NadiFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { PREDICT_TOPICS, getTopic, topicImage } from "@/lib/predict";
import { CONTACT, ROUTES } from "@/lib/site";

/**
 * A flexible topic page: the caller supplies an ordered list of sections, so
 * pages whose structure doesn't match the fixed TopicPage template (Birth Time
 * Rectification, Muhurat, Remedial Measures) can compose freely. Reuses the same
 * cg-* styles and hero/closing as TopicPage, so the look stays identical.
 */

export type Help = { icon: ReactNode; h: string; p: string; list?: string[]; note?: string };

export type Section =
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "cards"; eyebrow: string; title: ReactNode; intro?: string; items: Help[]; note?: string }
  | { kind: "chips"; eyebrow: string; title: ReactNode; intro?: string; items: string[]; note?: string }
  | { kind: "checklist"; eyebrow: string; title: ReactNode; intro?: string; items: string[]; note?: string }
  | { kind: "steps"; eyebrow: string; title: ReactNode; intro?: string; items: { h: string; p?: string }[]; note?: string }
  | { kind: "questions"; title: ReactNode; items: string[] }
  | { kind: "holistic"; title?: ReactNode; intro: string; items: string[]; note?: string }
  | { kind: "whyus"; title: ReactNode; items: string[]; note?: string }
  | { kind: "disclaimer"; title?: string; text: string };

export type ShellContent = {
  slug: string;
  tagline: string;
  heroBadge?: string;
  metaDescription: string;
  sections: Section[];
  closing: { p: string; quote: string };
};

export function makeShellMetadata(content: ShellContent): Metadata {
  const topic = getTopic(content.slug)!;
  return {
    title: `${topic.fullTitle} | HHPF`,
    description: content.metaDescription,
    alternates: { canonical: `${ROUTES.nadi}/${topic.slug}` },
  };
}

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Bullet = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const stagger = (i: number, per: number) => {
  const step = i % per;
  return step === 0 ? undefined : (Math.min(step, 3) as 1 | 2 | 3);
};

/** Light sections alternate white / violet; these two never do. */
const isLight = (s: Section) => s.kind !== "disclaimer";

function Head({ eyebrow, title, intro, dark }: { eyebrow: string; title: ReactNode; intro?: string; dark?: boolean }) {
  return (
    <Reveal className="head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={dark ? { color: "#fff" } : undefined}>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

function renderSection(s: Section, alt: string, key: number) {
  switch (s.kind) {
    case "prose":
      return (
        <section key={key} className={`${alt}cg-intro`}>
          <div className="wrap">
            {s.paragraphs.map((para, i) => (
              <Reveal key={i} as="p" className={i === 0 ? "cg-intro-lead" : undefined} delay={i === 0 ? undefined : 1}>
                {para}
              </Reveal>
            ))}
          </div>
        </section>
      );

    case "cards":
      return (
        <section key={key} className={`${alt}cg-helps`}>
          <div className="wrap">
            <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
            <div className="cg-help-grid">
              {s.items.map((item, i) => (
                <Reveal key={item.h} className="cg-help" delay={stagger(i, 2)}>
                  <div className="cg-help-in">
                    <div className="cg-help-ic">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <h3>{item.h}</h3>
                    <p>{item.p}</p>
                    {item.list && (
                      <ul className="cg-help-list">
                        {item.list.map((li) => (
                          <li key={li}>
                            <Bullet />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.note && <p className="cg-help-note">{item.note}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "chips":
      return (
        <section key={key} className={`${alt}cg-ideal`}>
          <div className="wrap">
            <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
            <Reveal className="cg-chips">
              {s.items.map((item) => (
                <span key={item} className="cg-chip">
                  <i />
                  {item}
                </span>
              ))}
            </Reveal>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "checklist":
      return (
        <section key={key} className={`${alt}cg-incl`}>
          <div className="wrap">
            <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
            <Reveal className="cg-incl-card">
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <span className="cg-tick">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "steps":
      return (
        <section key={key} className={`${alt}cg-steps-sec`}>
          <div className="wrap">
            <Head eyebrow={s.eyebrow} title={s.title} intro={s.intro} />
            <div className="cg-steps">
              {s.items.map((item, i) => (
                <Reveal key={item.h} className="cg-step" delay={stagger(i, 2)}>
                  <span className="cg-step-n">{String(i + 1).padStart(2, "0")}</span>
                  <div className="cg-step-b">
                    <h4>{item.h}</h4>
                    {item.p && <p>{item.p}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "questions":
      return (
        <section key={key} className={`${alt}cg-q`}>
          <div className="wrap">
            <Head eyebrow="Your Questions" title={s.title} />
            <div className="cg-q-grid">
              {s.items.map((q, i) => (
                <Reveal key={q} className="cg-qi" delay={stagger(i, 2)}>
                  <span className="cg-qm">?</span>
                  {q}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "holistic":
      return (
        <section key={key} className={`${alt}cg-holistic`}>
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Our Approach</span>
              <h2>
                {s.title ?? (
                  <>
                    Our <span className="ggold ital">holistic approach</span>
                  </>
                )}
              </h2>
              <p>{s.intro}</p>
            </Reveal>
            <Reveal className="cg-chips">
              {s.items.map((item) => (
                <span key={item} className="cg-chip">
                  <i />
                  {item}
                </span>
              ))}
            </Reveal>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "whyus":
      return (
        <section key={key} className={`${alt}cg-why`}>
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Why Us</span>
              <h2>{s.title}</h2>
            </Reveal>
            <div className="cg-why-grid">
              {s.items.map((item, i) => (
                <Reveal key={item} className="cg-why-item" delay={stagger(i, 2)}>
                  <span className="cg-why-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="cg-why-t">{item}</span>
                </Reveal>
              ))}
            </div>
            {s.note && (
              <Reveal as="p" className="cg-why-note">
                {s.note}
              </Reveal>
            )}
          </div>
        </section>
      );

    case "disclaimer":
      return (
        <section key={key} className="cg-disc-sec">
          <div className="wrap">
            <Reveal className="cg-disc">
              <span className="cg-disc-ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </span>
              <div>
                <b>{s.title ?? "Important Note"}</b>
                <p>{s.text}</p>
              </div>
            </Reveal>
          </div>
        </section>
      );
  }
}

export function TopicShell({ content }: { content: ShellContent }) {
  const topic = getTopic(content.slug)!;
  const others = PREDICT_TOPICS.filter((t) => t.slug !== topic.slug);
  const badge = content.heroBadge ?? topic.title;

  let light = 0;

  return (
    <div className="p-nadi">
      <ScrollProgress />
      <Header shopHref={`${ROUTES.nadi}#enrol`} />

      {/* ===== HERO ===== */}
      <section className="cg-hero">
        <div className="wrap cg-hero-grid">
          <div className="cg-hero-copy">
            <Link href={`${ROUTES.nadi}#predict`} className="cg-crumb">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Nadi Nakshatra Astrology
            </Link>
            <h1>{topic.fullTitle}</h1>
            <p className="cg-tagline ital">{content.tagline}</p>
            <p className="cg-lead">{topic.teaser}</p>
            <div className="cg-actions">
              <Link href={ROUTES.contact} className="btn btn-primary">
                Book a Consultation
              </Link>
              <a href={CONTACT.phoneHref} className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="cg-hero-art" aria-hidden="true">
            <span className="cg-ring" />
            <div className="cg-photo">
              <img src={topicImage(topic)} alt="" />
              <span className="cg-photo-veil" />
            </div>
            <span className="cg-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {topic.icon}
              </svg>
              {badge}
            </span>
          </div>
        </div>
      </section>

      {/* ===== ORDERED SECTIONS ===== */}
      {content.sections.map((s, i) => {
        const alt = isLight(s) ? (light++ % 2 === 1 ? "alt " : "") : "";
        return renderSection(s, alt, i);
      })}

      {/* ===== CLOSING CTA ===== */}
      <section className="cg-close">
        <div className="wrap">
          <Reveal className="cg-close-in">
            <span className="eyebrow">Begin Your Journey</span>
            <h2>
              Book your <span className="ital">consultation</span>
            </h2>
            <p>{content.closing.p}</p>
            <div className="cg-close-actions">
              <Link href={ROUTES.contact} className="btn btn-gold">
                Book a Consultation
              </Link>
              <a href={CONTACT.whatsappHref} className="btn btn-glass">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.99 16.34a2 2 0 0 1 .1 1.17l-1.07 3.29a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.1.09 10 10 0 1 0-4.78-4.72" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="cg-close-contact">
              <span className="cg-who">Dr. Nikunj Walia</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <span className="cg-org">Holistic Healing Pathways Foundation</span>
            </div>
          </Reveal>

          <Reveal className="cg-quote" delay={1}>
            <span className="cg-quote-mark">&ldquo;</span>
            <blockquote>{content.closing.quote}</blockquote>
          </Reveal>
        </div>
      </section>

      {/* ===== OTHER TOPICS ===== */}
      <section className="vsiblings">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Explore Further</span>
            <h2>
              Other areas of <span className="ggold ital">guidance</span>
            </h2>
          </Reveal>
          <Reveal className="vsib-grid">
            {others.map((other) => (
              <Link key={other.slug} href={`${ROUTES.nadi}/${other.slug}`} className="vsib">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {other.icon}
                </svg>
                {other.title}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <NadiFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
