import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { FormNoticeButton } from "@/components/FormNoticeButton";
import { CONTACT } from "@/lib/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us | Holistic Healing Pathways Foundation",
  description:
    "About Holistic Healing Pathways Foundation - our story, mission, vision, values, founder Dr. Nikunj Walia, and the three pathways of Bach Flower Therapy, Nadi Astrology, and Mental Health Therapy.",
};

const FOUNDER_PHOTO = "/images/dr-nikunj-walia.jpeg";

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

const FACTS = [
  { n: "3", t: "Pathways" },
  { n: "25+", t: "Years" },
  { n: "700+", t: "Lives Touched" },
];

const MVV = [
  {
    k: "01 — Mission",
    lbl: "To heal & guide",
    p: "To provide specialized, ethical services in Bach Flower Therapy, Nadi Astrology, and Mental Health Therapy - helping individuals address emotional challenges, gain life insights, and improve overall well-being through focused, personalized guidance.",
  },
  {
    k: "02 — Vision",
    lbl: "To empower globally",
    p: "To become a globally recognized platform for holistic healing and education - empowering individuals to heal themselves and contribute to a more conscious and harmonious world.",
  },
  {
    k: "03 — Values",
    lbl: "To stay true",
    p: "Rooted in compassion, awareness, and authenticity. We integrate ancient wisdom with modern psychology to empower individuals toward inner healing, balance, and conscious living.",
  },
];

const WHY = [
  {
    n: "01",
    h: "Three Services, One Platform",
    p: "Bach Flower Therapy, Nadi Astrology, and Mental Health Therapy as independent, focused services.",
  },
  {
    n: "02",
    h: "Clarity in Approach",
    p: "Each service has its own methodology and depth - no mixing, no confusion, only authentic guidance.",
  },
  {
    n: "03",
    h: "Personalized Consultations",
    p: "Every individual is unique. Guidance is tailored to your specific concerns and circumstances.",
  },
  {
    n: "04",
    h: "Professional & Ethical",
    p: "Confidentiality, integrity, and a responsible approach across every consultation and programme.",
  },
  {
    n: "05",
    h: "Consultation + Training",
    p: "Beyond services, structured programmes empower you to learn, grow, and practice professionally.",
  },
  {
    n: "06",
    h: "Safe & Supportive Space",
    p: "A non-judgmental, respectful environment where you can openly share and seek guidance.",
  },
];

const PATHWAYS = [
  {
    pn: "01",
    href: "/#services",
    h: "Bach Flower Therapy",
    p: "Natural emotional balance through 38 flower essences.",
  },
  {
    pn: "02",
    href: "/nadi-nakshatra-astrology",
    h: "Nadi Nakshatra Astrology",
    p: "Precise life prediction and timing from your birth chart.",
  },
  {
    pn: "03",
    href: "/mental-health",
    h: "Mental Health Therapy",
    p: "Confidential support for clarity, resilience, and strength.",
  },
];

const TEAM: {
  initials: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  photoAlt?: string;
  avStyle?: CSSProperties;
}[] = [
  {
    initials: "NW",
    name: "Dr. Nikunj Walia",
    role: "Founder & Director",
    bio: "25+ years integrating astrology, flower therapy, and psychology to guide transformation.",
    photo: FOUNDER_PHOTO,
    photoAlt: "Dr. Nikunj Walia",
  },
  {
    initials: "NW",
    name: "Nandni Walia",
    role: "Therapist & Counsellor",
    bio: "Supports clients through emotional consultation and personalized remedy guidance.",
    avStyle: { background: "linear-gradient(135deg,var(--gold),var(--gold-light))" },
  },
  {
    initials: "SW",
    name: "Shreyasi Walia",
    role: "Wellness Coach & Trainer",
    bio: "Leads workshops and training, helping individuals learn and grow.",
    avStyle: { background: "linear-gradient(135deg,var(--green),#3D9B1C)" },
  },
];

export default function AboutPage() {
  return (
    <div className="p-about">
      <ScrollProgress />
      <Header />

      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero" id="home">
        <div className="wrap">
          <span className="u" />
          <p className="eyebrow">Holistic Healing Pathways Foundation</p>
          <h1 style={{ marginTop: 14 }}>
            Healing that <span className="ital ggold">begins within.</span>
          </h1>
          <p className="sub">
            We guide you on a journey of inner healing and self-discovery - integrating
            ancient sciences like Nadi Astrology and Bach Flower Therapy with modern
            psychology to restore balance, clarity, and emotional well-being.
          </p>
          <div className="acts">
            <a href="#contact" className="btn btn-primary">
              Begin Your Journey
            </a>
            <a href="#pathways" className="btn btn-ghost">
              Our Pathways
            </a>
          </div>
          <Reveal className="facts-inline">
            {FACTS.map((fact) => (
              <div key={fact.t}>
                <div className="n">{fact.n}</div>
                <div className="t">{fact.t}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section>
        <div className="wrap story2">
          <Reveal className="stick">
            <span className="eyebrow">Our Story</span>
            <h2>Ancient wisdom, modern understanding</h2>
          </Reveal>
          <Reveal className="flow" delay={1}>
            <p className="lead">
              We believe true healing begins within - and that unresolved emotions quietly
              shape our health, our choices, and our path.
            </p>
            <p>
              Holistic Healing Pathways Foundation combines ancient sciences like Nadi
              Astrology and Bach Flower Therapy with modern psychology to decode emotional
              patterns and life challenges. We help individuals understand the
              mind-emotion-body connection, enabling deep healing, clarity, and personal
              transformation.
            </p>
            <p>
              Through personalized consultations and structured training, we empower people
              to realign their inner state, transform their own lives, and support others on
              their journey - creating a more conscious, harmonious world, one person at a
              time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== MISSION, VISION & VALUES ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">What We Stand For</span>
            <h2>
              Mission, vision &amp; <span className="ggold ital">values</span>
            </h2>
          </Reveal>
          <div className="mvv-rows">
            {MVV.map((row) => (
              <Reveal key={row.k} className="mvv-row">
                <div className="lbl">
                  <span className="k">{row.k}</span>
                  {row.lbl}
                </div>
                <p>{row.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section id="founder">
        <div className="wrap founder-feat">
          <Reveal className="ff-img">
            <img src={FOUNDER_PHOTO} alt="Dr. Nikunj Walia, Founder" />
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">A Message from the Founder</span>
            <p className="q" style={{ marginTop: 14 }}>
              &quot;This foundation is not just about healing - it is about awakening
              awareness and empowering individuals to live consciously.&quot;
            </p>
            <p>
              Over the years, I have witnessed how unresolved emotions and inner conflicts
              shape our experiences, our health, and our life path. Through the integration
              of ancient sciences with modern psychological understanding, we help
              individuals gain clarity, heal deeply, and move forward with confidence and
              purpose.
            </p>
            <div className="sig">Dr. Nikunj Walia</div>
            <div className="sigrole">Founder &amp; Director · 25+ Years&apos; Experience</div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section className="alt">
        <div className="wrap">
          <Reveal className="head" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Why Families Trust Us</span>
            <h2>
              Built on <span className="ggold ital">trust &amp; depth</span>
            </h2>
          </Reveal>
          <div className="why-list">
            {WHY.map((item) => (
              <Reveal key={item.n} className="why-item">
                <div className="wn">{item.n}</div>
                <div>
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PATHWAYS ===== */}
      <section id="pathways">
        <div className="wrap">
          <Reveal className="head" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Our Three Pathways</span>
            <h2>
              Choose where your <span className="ggold ital">healing begins</span>
            </h2>
          </Reveal>
          <div className="pathindex">
            {PATHWAYS.map((path) => (
              <Reveal key={path.pn} as={Link} href={path.href} className="pix">
                <div className="pn">{path.pn}</div>
                <div>
                  <h3>{path.h}</h3>
                  <p>{path.p}</p>
                </div>
                <div className="arr">→</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="alt" id="team">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Meet the Team</span>
            <h2>
              Compassionate guides on <span className="ggold ital">your journey</span>
            </h2>
          </Reveal>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} className="tm" delay={stagger(i)}>
                <div className="av" style={member.avStyle}>
                  {member.photo && <img src={member.photo} alt={member.photoAlt} />}
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p>{member.bio}</p>
              </Reveal>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              color: "rgba(61,21,120,.45)",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            Team roles are indicative - update with each member&apos;s exact title and bio.
          </p>
        </div>
      </section>

      {/* ===== VALUES RIBBON ===== */}
      <section className="ribbon">
        <Reveal className="wrap">
          <span className="eyebrow">Our Values</span>
          <div className="words">
            <span className="w">Compassion</span>
            <span className="dot" />
            <span className="w">Awareness</span>
            <span className="dot" />
            <span className="w">Authenticity</span>
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
              Whether you&apos;re exploring healing for the first time or deepening your
              practice through training, reach out for a warm, judgment-free conversation.
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
                  <label htmlFor="about-name">Full Name *</label>
                  <input id="about-name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="about-phone">Phone</label>
                  <input id="about-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="about-email">Email *</label>
                <input id="about-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="field">
                <label htmlFor="about-interest">I&apos;m interested in</label>
                <select id="about-interest" defaultValue="General Inquiry">
                  <option>General Inquiry</option>
                  <option>Mental Health Therapy</option>
                  <option>Bach Flower Therapy</option>
                  <option>Nadi Nakshatra Astrology</option>
                  <option>Training / Courses</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="about-message">Message</label>
                <textarea
                  id="about-message"
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
