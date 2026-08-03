import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { FormNoticeButton } from "@/components/FormNoticeButton";
import { CONTACT } from "@/lib/site";
import "./mental-health.css";

export const metadata: Metadata = {
  title: "Mental Health Therapy | Holistic Healing Pathways Foundation",
  description:
    "Mental Health Therapy at Holistic Healing Pathways Foundation - professional, confidential one-on-one support for anxiety, stress, low confidence, and emotional well-being. You don't have to walk this path alone.",
};

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

const HELP_TAGS = [
  "Anxiety & Worry",
  "Stress & Burnout",
  "Low Mood & Sadness",
  "Low Confidence",
  "Sleep Difficulties",
  "Relationship Strain",
  "Anger & Irritability",
  "Emotional Overwhelm",
  "Life Transitions",
  "Grief & Loss",
];

const STEPS = [
  {
    n: "1",
    h: "Reach Out",
    p: "Book your first session, online or in person. No prior experience needed, and no judgment.",
  },
  {
    n: "2",
    h: "Be Heard",
    p: "In a warm, confidential talk, we explore what you're carrying and what you'd like to feel.",
  },
  {
    n: "3",
    h: "A Personal Plan",
    p: "Together we shape a supportive approach - building clarity, resilience, and healthier patterns.",
  },
  {
    n: "4",
    h: "Ongoing Support",
    p: "We walk beside you as you grow, until you feel steady, supported, and strong.",
  },
];

const INTERESTS = [
  "Mental Health Therapy",
  "Bach Flower Therapy",
  "Nadi Nakshatra Astrology",
  "Training / Courses",
  "General Inquiry",
];

export default function MentalHealthPage() {
  return (
    <div className="p-mental-health">
      <ScrollProgress />
      <Header />

      {/* ===== HERO ===== */}
      <section className="mh-hero" id="home">
        <div className="wrap">
          <div className="breath" aria-hidden="true" />
          <p className="eyebrow">Mental Health Therapy</p>
          <h1 style={{ marginTop: 14 }}>
            You don&apos;t have to walk
            <span className="l2 ggold">this path alone.</span>
          </h1>
          <p className="sub">
            Professional, confidential support for your emotional and mental well-being - a
            safe, non-judgmental space to find clarity, resilience, and inner strength.
          </p>
          <div className="acts">
            <a href="#contact" className="btn btn-primary">
              Book a Session
            </a>
            <a href="#support" className="btn btn-ghost">
              How We Help
            </a>
          </div>
        </div>
      </section>

      {/* ===== A SPACE TO HEAL ===== */}
      <section className="soft-band">
        <div className="wrap">
          {/* `in` is this band's own layout class; it collides with the reveal
              state class, so this block lands already revealed. As in source. */}
          <Reveal className="in">
            <span className="eyebrow">A Space to Heal</span>
            <h2 style={{ marginTop: 12 }}>
              Your mental health <span className="ggold ital">matters</span>
            </h2>
            <p>
              Life can feel overwhelming. Unresolved emotions, stress, and inner conflicts
              quietly shape our experiences and relationships. You don&apos;t have to carry it
              alone - we offer compassionate support in a space where you can simply be heard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section id="support">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">What We Help With</span>
            <h2>
              Support for life&apos;s <span className="ggold ital">heavier moments</span>
            </h2>
            <p>
              No matter how long you&apos;ve struggled, healing is always possible with the
              right support.
            </p>
          </Reveal>
          <Reveal className="help-cloud">
            {HELP_TAGS.map((tag) => (
              <span className="htag" key={tag}>
                <i />
                {tag}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== HOW WE SUPPORT YOU ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">How We Support You</span>
            <h2>
              Care designed around <span className="ggold ital">you</span>
            </h2>
          </Reveal>
          <div className="zig">
            <Reveal className="zrow">
              <div className="zpanel" style={{ background: "linear-gradient(160deg,#EFE7FB,#fff)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.4">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="ztext">
                <div className="k">01 · One-on-One</div>
                <h3>Individual Therapy</h3>
                <p>
                  Private sessions in a safe, nurturing space. Your therapist walks beside you
                  on your unique path to healing and self-discovery - at your pace, on your
                  terms.
                </p>
              </div>
            </Reveal>
            <Reveal className="zrow">
              <div className="zpanel" style={{ background: "linear-gradient(160deg,#FBF1DE,#fff)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="1.4">
                  <path d="M12 18V5" />
                  <path d="M15 13a4 4 0 0 1-3-4 4 4 0 0 1-3 4" />
                  <path d="M17.6 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.6 1.5" />
                  <path d="M18 18a4 4 0 0 0 2-7.46" />
                  <path d="M6 18a4 4 0 0 1-2-7.46" />
                </svg>
              </div>
              <div className="ztext">
                <div className="k">02 · Practical Tools</div>
                <h3>Guided Growth</h3>
                <p>
                  Clear guidance for personal growth and mental clarity - helping you understand
                  your patterns, build healthier responses, and feel more in control of your
                  inner world.
                </p>
              </div>
            </Reveal>
            <Reveal className="zrow">
              <div className="zpanel" style={{ background: "linear-gradient(160deg,#E9F5DF,#fff)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3D9B1C" strokeWidth="1.4">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.59-3.68.56.56 0 0 0 .82 0A5.5 5.5 0 0 1 22 9.5c0 2.3-1.5 4-3 5.5l-5.5 5.3a2 2 0 0 1-3 0L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <div className="ztext">
                <div className="k">03 · Whole-Person</div>
                <h3>Holistic Wellness</h3>
                <p>
                  Mental health support that integrates with our healing pathways - nourishing
                  mind, body, and spirit together for lasting, balanced well-being.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== YOUR JOURNEY ===== */}
      <section>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Your Journey</span>
            <h2>
              From first session to <span className="ggold ital">lasting strength</span>
            </h2>
          </Reveal>
          <div className="stepline">
            {STEPS.map((step, i) => (
              <Reveal className="scard" key={step.n} delay={stagger(i)}>
                <div className="sn">{step.n}</div>
                <h4>{step.h}</h4>
                <p>{step.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED QUOTE ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="featq">
            <div className="qm">“</div>
            <p className="big">
              After years of struggling alone, I finally felt heard. It is not about fixing what
              is broken - it is about growing stronger.
            </p>
            <div className="by">
              Priya A.<span>Personal Growth · HHPF Client</span>
            </div>
          </Reveal>
          <p
            style={{
              textAlign: "center",
              marginTop: 30,
              color: "rgba(61,21,120,.45)",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            Sample testimonial - replace with a real client&apos;s words before going live.
          </p>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>
              A space that feels <span className="ggold ital">truly safe</span>
            </h2>
          </Reveal>
          <div className="why-strip">
            <Reveal className="wstrip">
              <div className="wi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h4>Safe &amp; Confidential</h4>
              <p>A private, non-judgmental space to share openly.</p>
            </Reveal>
            <Reveal className="wstrip" delay={1}>
              <div className="wi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                  <path d="m15.5 12.9 1.5 8.5L12 18.7 7 21.4l1.5-8.5" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>
              <h4>Professional &amp; Ethical</h4>
              <p>Responsible practice rooted in genuine care.</p>
            </Reveal>
            <Reveal className="wstrip" delay={2}>
              <div className="wi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4>Personalized</h4>
              <p>Guidance shaped around your circumstances.</p>
            </Reveal>
            <Reveal className="wstrip" delay={3}>
              <div className="wi">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                </svg>
              </div>
              <h4>Holistic</h4>
              <p>Care connected to healing and astrology.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== YOUR GUIDE ===== */}
      <section className="alt" id="guide">
        <div className="wrap">
          <Reveal className="guide">
            <div className="ga">
              <img src="/images/dr-nikunj-walia.jpeg" alt="Dr. Nikunj Walia" />
              NW
            </div>
            <div>
              <span className="eyebrow">Your Guide</span>
              <h3 style={{ marginTop: 8 }}>Dr. Nikunj Walia</h3>
              <div className="gr">Founder &amp; Director</div>
              <p>
                With 25+ years across mental health therapy, Bach Flower Therapy, and holistic
                guidance, Dr. Walia brings both professional depth and genuine warmth to every
                session - walking beside you toward clarity and strength.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <Reveal className="wrap cta-inner">
          <span className="eyebrow">Take the First Step</span>
          <h2>
            Every journey begins with
            <br />a single, <span className="ital">brave step.</span>
          </h2>
          <p>
            We are here to walk beside you - through the valleys and toward the light. Reach out
            today for a warm, judgment-free conversation.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-gold">
              Book a Session
            </a>
            <a href="#support" className="btn btn-glass">
              See How We Help
            </a>
          </div>
        </Reveal>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <Reveal className="contact-left">
            <span className="eyebrow">Get in Touch</span>
            <h2>Book a free consultation</h2>
            <p className="lead">
              Reach out today - online or in person, in Noida. No prior experience needed, just
              bring what you&apos;re carrying. We reply within 24 hours.
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
              <span>E-26, Sector-41, Noida - 201301, UP</span>
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
                  <label htmlFor="mh-name">Full Name *</label>
                  <input id="mh-name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="mh-phone">Phone</label>
                  <input id="mh-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="mh-email">Email *</label>
                <input id="mh-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="field">
                <label htmlFor="mh-interest">I&apos;m interested in</label>
                <select id="mh-interest" defaultValue={INTERESTS[0]}>
                  {INTERESTS.map((interest) => (
                    <option key={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="mh-message">Message</label>
                <textarea
                  id="mh-message"
                  rows={3}
                  placeholder="Tell us what you'd like to work on..."
                />
              </div>
              <FormNoticeButton>Send My Request →</FormNoticeButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
