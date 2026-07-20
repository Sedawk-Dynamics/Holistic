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

/** One "How it helps" card. `list` renders as gold-bulleted sub-items. */
export type Help = { icon: ReactNode; h: string; p: string; list?: string[] };

/** An optional chip section (e.g. Education's "Suitable Educational Fields"). */
export type ChipSection = { eyebrow: string; title: ReactNode; intro?: string; items: string[] };

export type TopicContent = {
  /** Must match a PREDICT_TOPICS slug — drives the hero image, title and siblings. */
  slug: string;
  /** Sits under the <h1>, in gold italic. */
  tagline: string;
  /** Text shown on the hero badge chip. Defaults to the topic's short title. */
  heroBadge?: string;
  metaDescription: string;

  intro: string[];

  helpsEyebrow: string;
  helpsTitle: ReactNode;
  helps: Help[];

  /** Optional extra chip section, rendered between Questions and Ideal For. */
  extra?: ChipSection;

  questionsTitle: ReactNode;
  questions: string[];

  idealIntro?: string;
  idealFor: string[];

  includesTitle: ReactNode;
  includes: string[];

  remedies: { title?: ReactNode; intro: string; items: string[]; note: string };

  /** Optional "Our Holistic Approach" block — intro + modality chips + closing line. */
  holistic?: { title?: ReactNode; intro: string; items: string[]; note?: string };

  whyTitle: ReactNode;
  whyUs: string[];
  whyNote?: string;

  /** Optional "Important Note" disclaimer, rendered as a muted callout before the CTA. */
  disclaimer?: { title?: string; text: string };

  closing: { p: string; quote: string };
};

export function makeTopicMetadata(content: TopicContent): Metadata {
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

/** Row-at-a-time reveal delay: first card in a row has none. */
const stagger = (i: number, per: number) => {
  const step = i % per;
  return step === 0 ? undefined : (Math.min(step, 3) as 1 | 2 | 3);
};

export function TopicPage({ content }: { content: TopicContent }) {
  const topic = getTopic(content.slug)!;
  const others = PREDICT_TOPICS.filter((t) => t.slug !== topic.slug);
  const badge = content.heroBadge ?? topic.title;

  // Alternate white / violet backgrounds across the prose sections in render
  // order, so no two neighbours share a background whether or not `extra` exists.
  let light = 0;
  const alt = () => (light++ % 2 === 1 ? "alt " : "");
  const introAlt = alt();
  const helpsAlt = alt();
  const questionsAlt = alt();
  const extraAlt = content.extra ? alt() : "";
  const idealAlt = alt();
  const includesAlt = alt();
  const holisticAlt = content.holistic ? alt() : "";
  const whyAlt = alt();

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

      {/* ===== INTRO ===== */}
      <section className={`${introAlt}cg-intro`}>
        <div className="wrap">
          {content.intro.map((para, i) => (
            <Reveal key={i} as="p" className={i === 0 ? "cg-intro-lead" : undefined} delay={i === 0 ? undefined : 1}>
              {para}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== HOW IT HELPS ===== */}
      <section className={`${helpsAlt}cg-helps`}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">{content.helpsEyebrow}</span>
            <h2>{content.helpsTitle}</h2>
          </Reveal>
          <div className="cg-help-grid">
            {content.helps.map((item, i) => (
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUESTIONS ===== */}
      <section className={`${questionsAlt}cg-q`}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Your Questions</span>
            <h2>{content.questionsTitle}</h2>
          </Reveal>
          <div className="cg-q-grid">
            {content.questions.map((q, i) => (
              <Reveal key={q} className="cg-qi" delay={stagger(i, 2)}>
                <span className="cg-qm">?</span>
                {q}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXTRA CHIP SECTION (optional) ===== */}
      {content.extra && (
        <section className={`${extraAlt}cg-ideal`}>
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">{content.extra.eyebrow}</span>
              <h2>{content.extra.title}</h2>
              {content.extra.intro && <p>{content.extra.intro}</p>}
            </Reveal>
            <Reveal className="cg-chips">
              {content.extra.items.map((item) => (
                <span key={item} className="cg-chip">
                  <i />
                  {item}
                </span>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* ===== IDEAL FOR ===== */}
      <section className={`${idealAlt}cg-ideal`}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Who It&apos;s For</span>
            <h2>
              Ideal <span className="ggold ital">for</span>
            </h2>
            {content.idealIntro && <p>{content.idealIntro}</p>}
          </Reveal>
          <Reveal className="cg-chips">
            {content.idealFor.map((item) => (
              <span key={item} className="cg-chip">
                <i />
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className={`${includesAlt}cg-incl`}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">The Consultation</span>
            <h2>{content.includesTitle}</h2>
          </Reveal>
          <Reveal className="cg-incl-card">
            <ul>
              {content.includes.map((item) => (
                <li key={item}>
                  <span className="cg-tick">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== REMEDIES ===== */}
      <section className="cg-rem">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Remedies</span>
            <h2>{content.remedies.title ?? (
              <>
                Personalized astrological <span className="ital">remedies</span>
              </>
            )}</h2>
            <p>{content.remedies.intro}</p>
          </Reveal>
          <div className="cg-rem-grid">
            {content.remedies.items.map((item, i) => (
              <Reveal key={item} className="cg-rem-item" delay={stagger(i, 3)}>
                <span className="cg-rem-dot" />
                {item}
              </Reveal>
            ))}
          </div>
          <Reveal className="cg-rem-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            {content.remedies.note}
          </Reveal>
        </div>
      </section>

      {/* ===== HOLISTIC APPROACH (optional) ===== */}
      {content.holistic && (
        <section className={`${holisticAlt}cg-holistic`}>
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Our Approach</span>
              <h2>
                {content.holistic.title ?? (
                  <>
                    Our <span className="ggold ital">holistic approach</span>
                  </>
                )}
              </h2>
              <p>{content.holistic.intro}</p>
            </Reveal>
            <Reveal className="cg-chips">
              {content.holistic.items.map((item) => (
                <span key={item} className="cg-chip">
                  <i />
                  {item}
                </span>
              ))}
            </Reveal>
            {content.holistic.note && (
              <Reveal as="p" className="cg-why-note">
                {content.holistic.note}
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ===== WHY US ===== */}
      <section className={`${whyAlt}cg-why`}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Why Us</span>
            <h2>{content.whyTitle}</h2>
          </Reveal>
          <div className="cg-why-grid">
            {content.whyUs.map((item, i) => (
              <Reveal key={item} className="cg-why-item" delay={stagger(i, 2)}>
                <span className="cg-why-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="cg-why-t">{item}</span>
              </Reveal>
            ))}
          </div>
          {content.whyNote && (
            <Reveal as="p" className="cg-why-note">
              {content.whyNote}
            </Reveal>
          )}
        </div>
      </section>

      {/* ===== DISCLAIMER (optional) ===== */}
      {content.disclaimer && (
        <section className="cg-disc-sec">
          <div className="wrap">
            <Reveal className="cg-disc">
              <span className="cg-disc-ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </span>
              <div>
                <b>{content.disclaimer.title ?? "Important Note"}</b>
                <p>{content.disclaimer.text}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

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
