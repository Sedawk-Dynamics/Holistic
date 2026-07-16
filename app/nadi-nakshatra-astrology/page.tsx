import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { Header } from "@/components/Header";
import { NadiFooter } from "@/components/NadiFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { FormNoticeButton } from "@/components/FormNoticeButton";
import { CONTACT } from "@/lib/site";
import "./nadi.css";

export const metadata: Metadata = {
  title: "Nadi Nakshatra Astrology — The Science of Precise Life Prediction | HHPF",
  description:
    "Nadi Nakshatra Astrology with Dr. Nikunj Walia — the science of precise life prediction. Personal readings and a structured course built on the 27 Nakshatras and planetary linkages. Next batch 27 June 2026.",
};

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

function Check({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Nakshatra markers laid around a circle, starting at twelve o'clock.
 * `bigEvery` of 0 is falsy, so the inner ring never gets a `big` dot.
 */
function dots(count: number, radiusPct: number, bigEvery: number) {
  return Array.from({ length: count }, (_, i) => {
    const ang = (i / count) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + radiusPct * Math.cos(ang);
    const y = 50 + radiusPct * Math.sin(ang);
    return (
      <span
        key={i}
        className={bigEvery && i % bigEvery === 0 ? "nk big" : "nk"}
        style={{ left: `${x}%`, top: `${y}%` }}
      />
    );
  });
}

const GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

const HERO_FACTS = [
  { n: "27", t: "Nakshatras" },
  { n: "25+", t: "Years' experience" },
  { n: "27 Jun", t: "Next batch 2026" },
];

const SCIENCE: { icon: ReactNode; h: string; p: string }[] = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </>
    ),
    h: "Beyond Traditional Systems",
    p: "A modern, evidence-based approach rooted in mathematics, not mythology — reproducible and logical at every step.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    h: "Your Birth Data is the Key",
    p: "Exact date, time, and place of birth unlock a precise cosmic map unique to you — the clock and calendar never lie.",
  },
  {
    icon: (
      <>
        <path d="M12 2 4 7v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    h: "Most Reliable Navigation",
    p: "The most dependable system for life guidance — offering clarity on career, health, and relationships, with timing.",
  },
];

const WHAT_IS_NADI = [
  {
    mt: "27 Fields",
    h: "Nakshatras",
    p: "27 cosmic energy fields forming the structural backbone of every prediction.",
  },
  {
    mt: "Links",
    h: "Planetary Linkages",
    p: "The intricate connections between planets that activate specific life events.",
  },
  {
    mt: "Soul",
    h: "Karmic Patterns",
    p: "Soul-level imprints that shape the nature and timing of life experiences.",
  },
  {
    mt: "When",
    h: "Event Timing",
    p: "Pinpoint identification of when events are destined to unfold — astrology's rarest skill.",
  },
];

const FORMULA_STEPS: { icon: ReactNode; k: string; h: string }[] = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    k: "Begin",
    h: "Planet",
  },
  {
    icon: <path d="m12 2 2.4 5.2 5.6.8-4 4 .9 5.6-4.9-2.6L7.1 17.6l.9-5.6-4-4 5.6-.8z" />,
    k: "sits in",
    h: "Nakshatra",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
      </>
    ),
    k: "ruled by",
    h: "Nakshatra Lord",
  },
  {
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8 8l8 8" />
      </>
    ),
    k: "forms a",
    h: "Linkage",
  },
  {
    icon: <path d="M5 12h14M13 6l6 6-6 6" />,
    k: "producing",
    h: "Life Event",
  },
];

const PREDICT: { icon: ReactNode; h: string; p: string }[] = [
  {
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    h: "Career & Business",
    p: "Suitable profession, job vs business, foreign opportunities, growth periods, and change windows.",
  },
  {
    icon: (
      <path d="M2 9.5a5.5 5.5 0 0 1 9.59-3.68.56.56 0 0 0 .82 0A5.5 5.5 0 0 1 22 9.5c0 2.3-1.5 4-3 5.5l-5.5 5.3a2 2 0 0 1-3 0L5 15c-1.5-1.5-3-3.2-3-5.5" />
    ),
    h: "Marriage",
    p: "Timing, nature of partner, compatibility, relationship dynamics, and potential challenges.",
  },
  {
    icon: (
      <>
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3 21c0-3 2.5-5 6-5s6 2 6 5M15 21c0-2 1-3.5 3-3.5" />
      </>
    ),
    h: "Children & Family",
    p: "Childbirth timing, relationship with children, education patterns, and family karma.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4" />
      </>
    ),
    h: "Finance & Wealth",
    p: "Wealth creation windows, investment periods, risk cycles, and expansion timing.",
  },
  {
    icon: <path d="M12 3v18M5 8c3 0 7 1 7 4M19 8c-3 0-7 1-7 4" />,
    h: "Spiritual Growth",
    p: "Life-purpose revelation, awakening timing, and the soul's evolutionary direction.",
  },
];

const CASES = [
  {
    num: "1",
    h: "Career Stagnation Resolved",
    p: "A professional in their mid-thirties felt stuck despite years of effort. Analysis revealed a Nakshatra configuration suppressing growth — and the precise period of its activation. Within six months, an unexpected opportunity arrived exactly as predicted, leading to a significant promotion.",
  },
  {
    num: "2",
    h: "Marriage Timing Confirmed",
    p: "A client anxious about delayed marriage was told the planetary linkages would activate within a specific 18-month window. Marriage occurred within that period — and the partner's nature, described through Nakshatra traits, was accurate in remarkable detail.",
  },
  {
    num: "3",
    h: "Business Expansion Predicted",
    p: "A business owner uncertain about expansion was shown a specific growth period approaching. The advised timing proved correct — revenue doubled within the predicted window, with cautioned periods manifesting their challenges exactly as warned.",
  },
];

const STATS: { to: number; suffix?: string; h: string; p: string }[] = [
  {
    to: 27,
    h: "Nakshatras to Master",
    p: "A complete, structured system — finite, learnable, and profoundly deep.",
  },
  {
    to: 25,
    suffix: "+",
    h: "Years of Experience",
    p: "Every teaching grounded in decades of real-world chart practice by Dr. Walia.",
  },
  {
    to: 3,
    suffix: "x",
    h: "Prediction Confidence",
    p: "Students consistently report a dramatic rise in making specific, timed predictions.",
  },
];

const TIMELINE = [
  {
    n: "1",
    h: "Foundation",
    p: "Vedic chart basics, the role of Nakshatras, and the core principles that distinguish Nadi from conventional astrology.",
  },
  {
    n: "2",
    h: "The 27 Nakshatras",
    p: "In-depth study of all 27 Nakshatras — their lords, significations, karmic themes, and predictive applications.",
  },
  {
    n: "3",
    h: "Planetary Linkages",
    p: "The Nadi methodology of tracing planetary connections through Nakshatras to identify specific life events.",
  },
  {
    n: "4",
    h: "Timing Techniques",
    p: "Stellar-based dasha systems and transit analysis for precise event timing — the most sought-after skill.",
  },
  {
    n: "5",
    h: "Practical Cases",
    p: "Live chart analysis, supervised predictions, and case-study discussions — building confidence with every session.",
  },
];

const MASTER = [
  {
    mt: "Precision",
    h: "12 Signs & 150 Divisions",
    p: "Master the Nadi sub-divisions that make microscopic planetary accuracy possible.",
  },
  {
    mt: "Rulership",
    h: "27 Nakshatra Lords",
    p: "Understand each star's ruling force and how it shapes personality, karma, and prediction.",
  },
  {
    mt: "Timing",
    h: "Dasha · Bhukti · Antra",
    p: "Calculate and interpret nested time cycles for pinpoint event timing.",
  },
  {
    mt: "Decoding",
    h: "Sub-Lord Identification",
    p: "Locate the exact sub-lord for any planet and decode what it promises for the native.",
  },
];

const AUDIENCE = [
  {
    h: "Astrologers",
    p: "Add Nakshatras and Nadi methodology to elevate accuracy and stand out in a crowded field.",
  },
  {
    h: "Healers & Therapists",
    p: "Integrate astrological insight with your practice for a more holistic understanding of clients.",
  },
  {
    h: "Coaches & Counsellors",
    p: "Offer a cosmic framework that contextualises challenges and empowers purposeful decisions.",
  },
  {
    h: "Spiritual Seekers",
    p: "Deepen self-understanding, explore your karmic blueprint, and accelerate your evolution.",
  },
];

const WELLBEING = [
  {
    h: "Energy Awareness",
    p: "Some Nakshatras carry heightened sensitivity, others robust endurance. Knowing your nature helps you honour rather than override your limits.",
  },
  {
    h: "Emotional Balance",
    p: "Your Moon Nakshatra offers compassionate insight into emotional triggers, needs, and the conditions under which you truly thrive.",
  },
  {
    h: "A Gentle Complement",
    p: "Always a supportive reflection tool — never a replacement for professional medical, psychological, or therapeutic care.",
  },
];

const FSPECS = [
  { b: "Nadi Nakshatra Astrology", s: "Specialist in Nakshatra-based event timing" },
  { b: "Bach Flower Therapy", s: "Certified practitioner & educator" },
  { b: "Mental Health Therapy", s: "Psychological awareness, holistically applied" },
  { b: "Founder — HHPF", s: "Building a global community of healers" },
];

const WHY_HHPF = [
  {
    h: "Structured Curriculum",
    p: "Every module carefully sequenced — from foundations to advanced prediction — so no one is left behind.",
  },
  {
    h: "Personal Mentoring",
    p: "Direct guidance from Dr. Nikunj Walia ensures your questions are answered and learning is personalised.",
  },
  {
    h: "Lifetime Community",
    p: "Join a growing community of practitioners — ongoing discussion, peer learning, and continued mentorship.",
  },
  {
    h: "Holistic Integration",
    p: "Taught alongside healing and counselling — practitioners who guide with both precision and compassion.",
  },
];

const PRICES: {
  variant: string;
  ribbon?: string;
  tag: string;
  h: string;
  amt: string;
  stroke: string;
  features: string[];
  cta: string;
  ctaClass: string;
}[] = [
  {
    variant: "feat",
    ribbon: "Most Popular",
    tag: "Certification Course",
    h: "Nadi Nakshatra Astrology",
    amt: "₹65,000",
    stroke: "#E0B84A",
    features: [
      "Full 5-stage structured curriculum",
      "All 27 Nakshatras & planetary linkages",
      "Live case analysis & supervised practice",
      "Personal mentoring by Dr. Walia",
      "Lifetime community & support",
    ],
    cta: "Enrol in the Course",
    ctaClass: "btn",
  },
  {
    variant: "std",
    tag: "Personal Reading",
    h: "Nadi Prediction",
    amt: "₹3,100",
    stroke: "#C89A2B",
    features: [
      "Your own Nadi Nakshatra chart, read in full",
      "Event-specific guidance with timing",
      "Career, marriage, finance & more",
      "Read by a certified practitioner",
    ],
    cta: "Book a Reading",
    ctaClass: "btn btn-ghost",
  },
];

export default function NadiPage() {
  return (
    <div className="p-nadi">
      <ScrollProgress />
      <Header shopHref="#enrol" />

      {/* ===== HERO ===== */}
      <section className="hero" id="home" style={{ padding: "80px 0 96px" }}>
        <div className="wrap hero-grid">
          <div>
            <span className="badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.6">
                <path d="m12 2 3 6.5 7 1-5 5 1 7-6-3.3L6 21.5l1-7-5-5 7-1z" />
              </svg>
              Nadi Nakshatra Astrology
            </span>
            <h1>
              Your destiny leaves clues.<span className="l2 ggold">Learn to read them.</span>
            </h1>
            <p className="quote">{'"The stars do not compel us — they guide us."'}</p>
            <p className="sub">
              The science of precise life prediction — built on the 27 Nakshatras and the
              planetary linkages they create. Guided by Dr. Nikunj Walia, Holistic Healing
              Pathways Foundation.
            </p>
            <div className="hero-actions">
              <a href="#enrol" className="btn btn-primary">
                Book a Personal Reading
              </a>
              <a href="#course" className="btn btn-ghost">
                Explore the Course
              </a>
            </div>
            <div className="hero-facts">
              {HERO_FACTS.map((fact) => (
                <div key={fact.t}>
                  <div className="n">{fact.n}</div>
                  <div className="t">{fact.t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="wheel" aria-hidden="true">
            <div className="ring r1" />
            <div className="ring r2" />
            <div className="ring r3" />
            <div className="glyphs" id="glyphs">
              {GLYPHS.map((g, i) => (
                <div key={g} className="glyph-h" style={{ transform: `rotate(${i * 30}deg)` }}>
                  <span className="glyph">{g}</span>
                </div>
              ))}
            </div>
            <div className="spin-slow" id="nkOuter">
              {dots(27, 49, 9)}
            </div>
            <div className="spin-rev" id="nkInner">
              {dots(12, 41, 0)}
            </div>
            <div className="wheel-core">
              <b>You</b>
              <span>Birth Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NAKSHATRA MARQUEE ===== */}
      <div className="nmar">
        <div className="nmar-track" id="nmar">
          {[0, 1].map((pass) =>
            NAKSHATRAS.map((name) => (
              <Fragment key={`${pass}-${name}`}>
                <span>{name}</span>
                <b>✦</b>
              </Fragment>
            )),
          )}
        </div>
      </div>

      {/* ===== WHY / SCIENCE ===== */}
      <section className="alt" id="science">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Why Nadi Nakshatra</span>
            <h2>
              Beyond mythology, <span className="ggold ital">into mathematics</span>
            </h2>
            <p>
              A modern, evidence-based approach that transcends conventional astrology — rooted
              in calculation, not generalisation.
            </p>
          </Reveal>
          <div className="grid3">
            {SCIENCE.map((card, i) => (
              <Reveal key={card.h} className="card" delay={stagger(i)}>
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.6">
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.h}</h3>
                <p>{card.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT IS NADI ===== */}
      <section>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">What Is Nadi Astrology</span>
            <h2>
              The pinnacle of <span className="ggold ital">Vedic prediction</span>
            </h2>
            <p>
              An advanced predictive system built entirely on the 27 Nakshatras and the complex
              web of planetary linkages they create.
            </p>
          </Reveal>
          <div className="grid4">
            {WHAT_IS_NADI.map((card, i) => (
              <Reveal key={card.h} className="card" delay={stagger(i)}>
                <div className="mt">{card.mt}</div>
                <h4>{card.h}</h4>
                <p>{card.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE FORMULA ===== */}
      <section className="formula">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">The Nadi Formula</span>
            <h2>
              How a prediction is <span className="ggold ital">derived</span>
            </h2>
            <p>
              Not guessed — derived, step by logical step, from the chart itself. Every
              prediction follows this exact chain.
            </p>
          </Reveal>
          <Reveal className="chain">
            {FORMULA_STEPS.map((step) => (
              <div className="step" key={step.h}>
                <div className="dot">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="1.7">
                    {step.icon}
                  </svg>
                </div>
                <div className="k">{step.k}</div>
                <h4>{step.h}</h4>
              </div>
            ))}
          </Reveal>
          <Reveal
            as="p"
            style={{
              textAlign: "center",
              color: "rgba(61, 21, 120, 0.6)",
              maxWidth: 680,
              margin: "0 auto",
              fontSize: 15,
            }}
          >
            This systematic chain is what separates Nadi Astrology from every other predictive
            system — specificity that other astrologers simply cannot replicate.
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT IT PREDICTS ===== */}
      <section id="predict">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">What It Can Predict</span>
            <h2>
              Event-specific guidance, <span className="ggold ital">with timing</span>
            </h2>
            <p>
              Operating at the deepest layer of the birth chart, Nadi delivers precise guidance
              across every major dimension of life.
            </p>
          </Reveal>
          <Reveal className="plist">
            {PREDICT.map((cell) => (
              <div className="pcell" key={cell.h}>
                <div className="in">
                  <div className="ic">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                      {cell.icon}
                    </svg>
                  </div>
                  <h4>{cell.h}</h4>
                  <p>{cell.p}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Nadi in Practice</span>
            <h2>
              Real predictions, <span className="ggold ital">real outcomes</span>
            </h2>
            <p>
              The true measure of any predictive system is its results. These case studies are
              drawn from real chart readings.
            </p>
          </Reveal>
          <div className="cases">
            {CASES.map((c, i) => (
              <Reveal key={c.num} className="case" delay={stagger(i)}>
                <div className="num">{c.num}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STAT BAND ===== */}
      <section className="statband">
        <div className="wrap">
          {STATS.map((stat, i) => (
            <Reveal key={stat.h} className="stat" delay={stagger(i)}>
              <CountUp className="n" to={stat.to} suffix={stat.suffix} />
              <h4>{stat.h}</h4>
              <p>{stat.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== COURSE ===== */}
      <section id="course">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Course Details</span>
            <h2>
              From foundations to <span className="ggold ital">confident prediction</span>
            </h2>
            <p>
              A comprehensive, structured programme guided by Dr. Nikunj Walia — five stages
              that build real-world skill, session by session.
            </p>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((step) => (
              <Reveal key={step.n} className="tstep">
                <div className="tn">{step.n}</div>
                <div className="tc">
                  <h4>{step.h}</h4>
                  <p>{step.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="master">
            <Reveal className="head" style={{ marginBottom: 8 }}>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>
                What you will <span className="ggold ital">master</span>
              </h2>
            </Reveal>
            <div className="grid4" style={{ marginTop: 20 }}>
              {MASTER.map((cell, i) => (
                <Reveal key={cell.h} className="mcell" delay={stagger(i)}>
                  <div className="mt">{cell.mt}</div>
                  <h4>{cell.h}</h4>
                  <p>{cell.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO + WELLBEING ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Who Should Learn</span>
            <h2>
              For anyone who works with <span className="ggold ital">people</span>
            </h2>
            <p>
              You don&apos;t need to be an expert astrologer to begin — only genuine curiosity
              and a desire to serve.
            </p>
          </Reveal>
          <div className="grid4" style={{ marginBottom: 90 }}>
            {AUDIENCE.map((card, i) => (
              <Reveal key={card.h} className="card" delay={stagger(i)}>
                <h4>{card.h}</h4>
                <p>{card.p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="head">
            <span className="eyebrow">Nakshatra &amp; Inner Well-Being</span>
            <h2>
              A personalised map of <span className="ggold ital">your rhythms</span>
            </h2>
            <p>
              In an age of overload, Nakshatra wisdom offers a quietly radical gift —
              understanding your own energy and emotional cycles.
            </p>
          </Reveal>
          <div className="grid3">
            {WELLBEING.map((card, i) => (
              <Reveal key={card.h} className="card" delay={stagger(i)}>
                <h4>{card.h}</h4>
                <p>{card.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT DR WALIA ===== */}
      <section id="about">
        <div className="wrap founder-grid">
          <Reveal className="fportrait">
            <div className="ring" />
            <div className="ini">NW</div>
            <div className="cap">
              <b>Dr. Nikunj Walia</b>
              <span>Founder · HHPF</span>
            </div>
          </Reveal>
          <Reveal className="founder-body" delay={1}>
            <span className="eyebrow">About Your Mentor</span>
            <h2>
              25+ years making ancient wisdom <span className="ggold ital">practical</span>
            </h2>
            <p>
              Dr. Nikunj Walia brings over 25 years of experience in holistic healing, teaching,
              and consultancy to every session — dedicated to making ancient wisdom accessible,
              practical, and transformative for modern seekers.
            </p>
            <div className="fspecs">
              {FSPECS.map((spec) => (
                <div className="fspec" key={spec.b}>
                  <b>{spec.b}</b>
                  <span>{spec.s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY HHPF ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Why Learn From HHPF</span>
            <h2>
              Precision <span className="ggold ital">and</span> compassion
            </h2>
            <p>
              There are many places to learn astrology. Here is why students consistently feel
              they made the right choice.
            </p>
          </Reveal>
          <div className="grid4">
            {WHY_HHPF.map((card, i) => (
              <Reveal key={card.h} className="card" delay={stagger(i)}>
                <h4>{card.h}</h4>
                <p>{card.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING / ENROL ===== */}
      <section className="pricing" id="enrol">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Begin Your Journey</span>
            <h2>
              Reserve your <span className="ggold ital">seat</span>
            </h2>
            <p>
              Limited seats ensure maximum personal attention for every student. Your birth
              chart holds the blueprint of your destiny.
            </p>
          </Reveal>
          <Reveal className="batch">
            <span className="pillb">
              <b>✦</b> Next batch starts 27 June 2026 · 2 hours every week
            </span>
          </Reveal>
          <div className="price-grid">
            {PRICES.map((tier, i) => (
              <Reveal key={tier.h} className={`price ${tier.variant}`} delay={stagger(i)}>
                {tier.ribbon ? <span className="ribbon">{tier.ribbon}</span> : null}
                <span className="tag">{tier.tag}</span>
                <h3>{tier.h}</h3>
                <div className="amt">{tier.amt}</div>
                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Check stroke={tier.stroke} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={tier.ctaClass}>
                  {tier.cta}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <Reveal className="wrap cta-inner">
          <span className="eyebrow">Your Destiny Awaits</span>
          <h2>
            Written in the <span className="ital">stars.</span>
          </h2>
          <p>
            If this has sparked something in you, that recognition is worth honouring. Unlock
            the precision of the cosmos — and learn how to read it.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-gold">
              Reserve Your Seat
            </a>
            <a href="#course" className="btn btn-glass">
              See the Curriculum
            </a>
          </div>
        </Reveal>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <Reveal className="contact-left">
            <span className="eyebrow">Contact Us</span>
            <h2>Reserve your seat today</h2>
            <p className="lead">
              Reach out to reserve a course seat or book your personal Nadi reading. We reply
              within 24 hours.
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
                </svg>
              </div>
              <a href={CONTACT.websiteHref}>{CONTACT.website}</a>
            </div>
            <div className="ci">
              <div className="b">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                  <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>E-26, Sector-41, Noida — 201301, UP</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="form">
              <h3>Reserve / Enquire</h3>
              <p className="s">Course seats are limited.</p>
              <div className="frow">
                <div className="field">
                  <label htmlFor="nadi-name">Full Name *</label>
                  <input id="nadi-name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="nadi-phone">Phone</label>
                  <input id="nadi-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="nadi-email">Email *</label>
                <input id="nadi-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="field">
                <label htmlFor="nadi-interest">I&apos;m interested in</label>
                <select id="nadi-interest" defaultValue="The Nadi Course (₹65,000)">
                  <option>The Nadi Course (₹65,000)</option>
                  <option>A Personal Reading (₹3,100)</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="nadi-message">Message</label>
                <textarea
                  id="nadi-message"
                  rows={3}
                  placeholder="Tell us your question or your birth details for a reading..."
                />
              </div>
              <FormNoticeButton>Send Request →</FormNoticeButton>
            </div>
          </Reveal>
        </div>
      </section>

      <NadiFooter />
      <BackToTop showAfter={700} />
    </div>
  );
}
