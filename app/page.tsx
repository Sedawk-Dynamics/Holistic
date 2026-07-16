import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HomeFooter } from "@/components/HomeFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal, RevealScope } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroPetals } from "@/components/HeroPetals";
import { ContactParticles } from "@/components/ContactParticles";
import { FormNoticeButton } from "@/components/FormNoticeButton";
import { HideOnErrorImg } from "@/components/HideOnErrorImg";
import { CONTACT } from "@/lib/site";
import "./home.css";

export const metadata: Metadata = {
  title: "Holistic Healing Pathways Foundation | Healing, Astrology & Psychology",
  description:
    "Holistic Healing Pathways Foundation integrates Nadi Astrology and Bach Flower Therapy with modern psychology to decode emotional patterns and guide deep healing, clarity, and personal transformation.",
};

/** Home reveals slightly later than the other pages. */
const REVEAL_THRESHOLD = 0.12;
const COUNT = { steps: 60, interval: 22, threshold: 0.5 } as const;

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => (i === 0 ? undefined : (i as 1 | 2 | 3));

function Check({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FlowerIcon({ size, stroke, width }: { size: number; stroke: string; width: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
    </svg>
  );
}

const STATS = [
  { to: 700, suffix: "+", label: "Lives Touched", sub: "Healed naturally" },
  { to: 38, label: "Flower Remedies", sub: "Dr. Bach's system" },
  { to: 3, label: "Specialized Paths", sub: "Under one roof" },
  { to: 100, suffix: "%", label: "Natural & Ethical", sub: "Safe for all ages" },
];

const MARQUEE_CHIPS = [
  "Stress Management",
  "Anxiety Relief",
  "Fear & Phobias",
  "Anger Management",
  "Sleep Support",
  "Confidence Building",
  "Relationship Healing",
  "Depression Support",
];

const WHY = [
  {
    n: "01",
    h: "Three Services, One Platform",
    p: "Bach Flower Therapy, Nadi Astrology, and Mental Health Therapy as independent, focused services — choose exactly what you need.",
  },
  {
    n: "02",
    h: "Clarity in Approach",
    p: "Each service has its own methodology and depth. No mixing, no confusion — only authentic, effective guidance.",
  },
  {
    n: "03",
    h: "Personalized Consultations",
    p: "Every individual is unique. Guidance is tailored to your specific concerns and circumstances.",
  },
  {
    n: "04",
    h: "Professional & Ethical",
    p: "We maintain confidentiality, integrity, and a responsible approach across every consultation and program.",
  },
  {
    n: "05",
    h: "Consultation + Training",
    p: "Beyond services, structured training programs empower you to learn, grow, and practice professionally.",
  },
  {
    n: "06",
    h: "Safe & Supportive Space",
    p: "A non-judgmental, respectful environment where you can openly share and seek the guidance you deserve.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Bach Flower consultation helped me understand emotions I'd carried for years. Within weeks I felt calmer and more in control of my anxiety.",
    initials: "RS",
    name: "Ritu S.",
    role: "Emotional Wellness Client",
  },
  {
    quote:
      "The Nadi astrology session gave me clarity on a career decision I'd been stuck on for months. The guidance was honest, warm, and practical.",
    initials: "AK",
    name: "Arjun K.",
    role: "Astrology Consultation Client",
  },
  {
    quote:
      "The therapy sessions gave me a safe, non-judgmental space to finally talk. I left every session feeling lighter and genuinely supported.",
    initials: "MP",
    name: "Meera P.",
    role: "Mental Health Therapy Client",
  },
];

export default function HomePage() {
  return (
    <RevealScope threshold={REVEAL_THRESHOLD}>
      <div className="p-home">
        <ScrollProgress />
        <Header brandHref="#home" shopHref="#products" />

        {/* ===== HERO ===== */}
        <section className="hero" id="home" style={{ padding: 0 }}>
          <div className="wrap hero-grid">
            <div>
              <span className="hero-badge">
                <FlowerIcon size={14} stroke="#3D1578" width={1.6} />
                True healing begins within
              </span>
              <h1>
                <span className="word">Holistic</span> <span className="word">Healing</span>{" "}
                <span className="word gold">Pathways</span>
              </h1>
              <div className="hero-tag">
                Healing · Astrology · Bach Flower Therapy · Psychology
              </div>
              <p className="lead">
                We blend ancient sciences like Nadi Astrology and Bach Flower Therapy with
                modern psychology to decode your emotional patterns and life challenges —
                guiding you toward deep healing, clarity, and lasting transformation.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  Discover Our Paths
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Book a Free Consultation
                </a>
              </div>
              <div className="hero-paths">
                <span>
                  <i style={{ background: "var(--purple)" }} />
                  Bach Flower Therapy
                </span>
                <span>
                  <i style={{ background: "var(--gold)" }} />
                  Nadi Astrology
                </span>
                <span>
                  <i style={{ background: "var(--green)" }} />
                  Mental Health Therapy
                </span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="glow" />
              <div className="ring r1" />
              <div className="ring r2" />
              <img className="hero-photo" src="/images/hero-flower-light.png" alt="" />
              <div className="float-chip fc1">
                <span className="dot" style={{ background: "rgba(118,192,67,.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#76C043" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  </svg>
                </span>
                100% Natural
              </div>
              <div className="float-chip fc2">
                <span className="dot" style={{ background: "rgba(200,154,43,.15)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </span>
                Zero Side Effects
              </div>
              <div className="float-chip fc3">
                <span className="dot" style={{ background: "rgba(61,21,120,.1)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </span>
                700+ Lives Touched
              </div>
            </div>
          </div>
          <HeroPetals />
        </section>

        {/* ===== STATS ===== */}
        <section className="stats">
          <div className="wrap stat-grid">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} className="stat" delay={stagger(i)}>
                <CountUp className="num" to={stat.to} suffix={stat.suffix} {...COUNT} />
                <div className="lbl">{stat.label}</div>
                <div className="sub">{stat.sub}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services">
          <div className="blob" />
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Three Paths, One Platform</span>
              <h2>
                Choose the Support <span className="gold">You Need</span>
              </h2>
              <p>
                Each service is practiced with its own methodology and depth — no mixing, no
                confusion — ensuring authentic, focused guidance for emotional healing, life
                direction, and mental wellbeing.
              </p>
            </Reveal>
            <div className="svc-grid">
              <Reveal as="article" className="svc">
                <div className="svc-img">
                  <img src="/images/wild-flowers.jpg" alt="Wild flowers" />
                  <div
                    className="veil"
                    style={{ background: "linear-gradient(180deg,rgba(61,21,120,.05),rgba(61,21,120,.45))" }}
                  />
                  <span className="tag" style={{ color: "var(--purple)" }}>
                    Consultation &amp; Training
                  </span>
                </div>
                <div className="svc-body">
                  <div
                    className="svc-ico"
                    style={{ background: "linear-gradient(135deg,var(--purple),var(--purple-mid))" }}
                  >
                    <FlowerIcon size={26} stroke="#fff" width={1.7} />
                  </div>
                  <h3>Bach Flower Therapy</h3>
                  <p>
                    A gentle, natural system that eases fear, anxiety, stress, anger, and low
                    confidence through 38 flower essences.
                  </p>
                  <ul>
                    <li>
                      <Check stroke="#3D1578" />
                      Personalized emotional consultation
                    </li>
                    <li>
                      <Check stroke="#3D1578" />
                      Remedy selection for your state
                    </li>
                    <li>
                      <Check stroke="#3D1578" />
                      Training: Level 1, 2 &amp; Advanced
                    </li>
                  </ul>
                  <a href="#contact" className="svc-link" style={{ color: "var(--purple)" }}>
                    Begin healing →
                  </a>
                </div>
              </Reveal>

              <Reveal as="article" className="svc" delay={1}>
                <div className="svc-img">
                  <img src="/images/starry-night.jpg" alt="Starry night sky" />
                  <div
                    className="veil"
                    style={{ background: "linear-gradient(180deg,rgba(200,154,43,.05),rgba(42,13,86,.55))" }}
                  />
                  <span className="tag" style={{ color: "var(--gold)" }}>
                    Consultation &amp; Training
                  </span>
                </div>
                <div className="svc-body">
                  <div
                    className="svc-ico"
                    style={{ background: "linear-gradient(135deg,var(--gold),var(--gold-light))" }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7">
                      <path d="m12 2 3 6.5 7 1-5 5 1 7-6-3.3L6 21.5l1-7-5-5 7-1z" />
                    </svg>
                  </div>
                  <h3>Nadi Nakshatra Astrology</h3>
                  <p>
                    Deep insights into your life path, timing, and key decisions, drawn from
                    your birth details — for true clarity.
                  </p>
                  <ul>
                    <li>
                      <Check stroke="#C89A2B" />
                      Career, marriage, health &amp; finances
                    </li>
                    <li>
                      <Check stroke="#C89A2B" />
                      Muhurat &amp; life prediction
                    </li>
                    <li>
                      <Check stroke="#C89A2B" />
                      Courses, beginner to advanced
                    </li>
                  </ul>
                  <a href="#contact" className="svc-link" style={{ color: "var(--gold)" }}>
                    Seek guidance →
                  </a>
                </div>
              </Reveal>

              <Reveal as="article" className="svc" delay={2}>
                <div className="svc-img">
                  <img src="/images/meditation.jpg" alt="Peaceful meditation" />
                  <div
                    className="veil"
                    style={{ background: "linear-gradient(180deg,rgba(118,192,67,.05),rgba(61,21,120,.5))" }}
                  />
                  <span className="tag" style={{ color: "var(--green)" }}>
                    Consultation
                  </span>
                </div>
                <div className="svc-body">
                  <div className="svc-ico" style={{ background: "linear-gradient(135deg,var(--green),#3D9B1C)" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7">
                      <path d="M12 18V5" />
                      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                      <path d="M17.6 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.6 1.5" />
                      <path d="M18 18a4 4 0 0 0 2-7.46" />
                      <path d="M6 18a4 4 0 0 1-2-7.46" />
                    </svg>
                  </div>
                  <h3>Mental Health Therapy</h3>
                  <p>
                    Professional, confidential support for emotional challenges — building
                    clarity, resilience, and inner strength.
                  </p>
                  <ul>
                    <li>
                      <Check stroke="#3D9B1C" />
                      One-on-one therapy sessions
                    </li>
                    <li>
                      <Check stroke="#3D9B1C" />
                      Anxiety, stress &amp; confidence
                    </li>
                    <li>
                      <Check stroke="#3D9B1C" />
                      Safe, confidential environment
                    </li>
                  </ul>
                  <a href="#contact" className="svc-link" style={{ color: "var(--green)" }}>
                    Find support →
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="marquee">
              <div className="marquee-track">
                {[0, 1].map((pass) =>
                  MARQUEE_CHIPS.map((chip) => (
                    <span className="chip" key={`${pass}-${chip}`}>
                      <i />
                      {chip}
                    </span>
                  )),
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about">
          <div className="wrap">
            <div className="about-grid">
              <Reveal>
                <span className="eyebrow">About the Foundation</span>
                <h2>
                  Where Inner Healing <span className="gold">Becomes a Way of Life</span>
                </h2>
                <p>
                  Holistic Healing Pathways Foundation combines ancient wisdom and modern
                  psychology to help individuals understand their emotional patterns, heal from
                  within, and achieve balance and clarity.
                </p>
                <p>
                  Through personalized consultations and structured training, we empower people
                  to transform their own lives — and to support others on their healing journey.
                </p>
                <div className="chiprow">
                  <div>
                    <div className="k">Founded by</div>
                    <div className="v">Dr. Nikunj Walia</div>
                  </div>
                  <div>
                    <div className="k">Based in</div>
                    <div className="v">Noida, India</div>
                  </div>
                  <div>
                    <div className="k">Reach</div>
                    <div className="v">India &amp; Online</div>
                  </div>
                </div>
              </Reveal>
              <Reveal className="about-visual" delay={1}>
                <div className="ring" />
                <img src="/images/about-illustration.png" alt="38 Bach Flower remedies mandala" />
                <div className="quote-card">
                  <p>
                    “The action of the flower essences raises our vibrations and opens up our
                    channels.”
                  </p>
                  <span>— Dr. Edward Bach</span>
                </div>
              </Reveal>
            </div>

            <div className="mvv">
              <Reveal className="mvv-card">
                <div className="ring2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                    <path d="M22 12h-2.5a2 2 0 0 0-1.9 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.5 12H2" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide specialized, ethical services in Bach Flower Therapy, Nadi
                  Astrology, and Mental Health Therapy — helping individuals address emotional
                  challenges, gain life insights, and improve wellbeing.
                </p>
              </Reveal>
              <Reveal className="mvv-card" delay={1}>
                <div className="ring2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                    <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a globally recognized platform for holistic healing and education —
                  empowering individuals to heal themselves and contribute to a more conscious,
                  harmonious world.
                </p>
              </Reveal>
              <Reveal className="mvv-card" delay={2}>
                <div className="ring2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D1578" strokeWidth="1.7">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.59-3.68.56.56 0 0 0 .82 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.49 5.31a2 2 0 0 1-3 .02L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </div>
                <h3>Our Values</h3>
                <p>
                  Rooted in compassion, awareness, and authenticity. We integrate ancient wisdom
                  with modern psychology to empower inner healing, balance, and conscious living.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== WHY ===== */}
        <section id="why">
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                Why Choose Us
              </span>
              <h2>
                A Practice Built on <span className="gold">Trust &amp; Depth</span>
              </h2>
              <p>
                We don&apos;t just offer services — we offer a clear, ethical, supportive space
                where real transformation can take root.
              </p>
            </Reveal>
            <div className="why-grid">
              {WHY.map((item, i) => (
                <Reveal key={item.n} className="why-card" delay={stagger(i % 3)}>
                  <div className="why-num">{item.n}</div>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS ===== */}
        <section id="products">
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Healing Products</span>
              <h2>
                Natural Remedies, <span className="gold">Crafted with Care</span>
              </h2>
              <p>
                Customized blends and healing tools to support your wellbeing between sessions
                and beyond.
              </p>
            </Reveal>
            <div className="prod-grid">
              <Reveal className="prod">
                <div className="prod-img">
                  <img src="/images/bach-flower-remedies.jpg" alt="" />
                </div>
                <div className="prod-body">
                  <h4>Bach Flower Remedies</h4>
                  <p>Customized essence blends matched to your unique emotional state.</p>
                </div>
              </Reveal>
              <Reveal className="prod" delay={1}>
                <div className="prod-img">
                  {/* Source image 404s upstream; drop a file at this path to restore it. */}
                  <HideOnErrorImg src="/images/healing-oil.jpg" alt="" />
                </div>
                <div className="prod-body">
                  <h4>Healing Oil</h4>
                  <p>A soothing Bach Flower blend to calm and restore everyday balance.</p>
                </div>
              </Reveal>
              <Reveal className="prod" delay={2}>
                <div className="prod-img">
                  <img src="/images/hair-growth-oil.jpg" alt="" />
                </div>
                <div className="prod-body">
                  <h4>Hair Growth Oil</h4>
                  <p>An Ayurvedic Jadibuti formulation to nourish and strengthen hair.</p>
                </div>
              </Reveal>
              <Reveal className="prod" delay={3}>
                <div className="prod-img">
                  <img src="/images/pain-relief-oil.jpg" alt="" />
                </div>
                <div className="prod-body">
                  <h4>Pain Relief Oil</h4>
                  <p>A targeted Bach Flower blend formulated for natural relief.</p>
                </div>
              </Reveal>
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: 30,
                color: "rgba(61,21,120,.55)",
                fontSize: 14,
              }}
            >
              Also available: educational materials, course content, workshops, webinars &amp;
              healing resources.
            </p>
          </div>
        </section>

        {/* ===== FOUNDER ===== */}
        <section id="founder">
          <div className="wrap">
            <Reveal className="founder-card">
              <div className="founder-photo">
                <img src="/images/dr-nikunj-walia.jpeg" alt="" />
                <div className="nameplate">
                  <b>Dr. Nikunj Walia</b>
                  <span>Founder &amp; Director</span>
                </div>
              </div>
              <div className="founder-body">
                <div className="qm">“</div>
                <p>
                  True healing begins within. Over the years, I have witnessed how unresolved
                  emotions and inner conflicts shape our experiences, our health, and our life
                  path. By integrating ancient sciences like Nadi Astrology and Bach Flower
                  Therapy with modern psychology, we help individuals gain clarity, heal deeply,
                  and move forward with confidence and purpose. This foundation is not just about
                  healing — it is about awakening awareness, empowering individuals, and creating
                  a more conscious and balanced society.
                </p>
                <div className="founder-sign">Dr. Nikunj Walia</div>
                <div className="founder-role">Founder &amp; Director</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="testimonials">
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">Stories of Healing</span>
              <h2>
                Real People, <span className="gold">Real Transformation</span>
              </h2>
              <p>Every journey is unique, and every story matters.</p>
            </Reveal>
            <div className="tst-grid">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} className="tst" delay={stagger(i)}>
                  <div className="stars">★★★★★</div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="who">
                    <div className="av">{t.initials}</div>
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: 26,
                color: "rgba(61,21,120,.45)",
                fontSize: 13,
                fontStyle: "italic",
              }}
            >
              Sample testimonials — replace with your clients&apos; real words before going live.
            </p>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact">
          <ContactParticles />
          <div className="wrap contact-grid">
            <Reveal>
              <span
                className="hero-badge"
                style={{
                  background: "rgba(200,154,43,.15)",
                  borderColor: "rgba(200,154,43,.3)",
                  color: "var(--gold)",
                }}
              >
                Begin Your Journey
              </span>
              <h2>
                Take the First Step <br />
                <span className="gold">Toward True Healing</span>
              </h2>
              <p className="lead">
                Whether you&apos;re exploring therapy for the first time or deepening your
                practice through training, we&apos;re here to guide you. Reach out for a warm,
                judgment-free conversation.
              </p>
              <div className="ci">
                <div className="box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                    <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39" />
                  </svg>
                </div>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
              <div className="ci">
                <div className="box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                    <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </div>
              <div className="ci">
                <div className="box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>{CONTACT.address}</span>
              </div>
              <div className="ci">
                <div className="box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89A2B" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span>{CONTACT.hours}</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="form">
                <h3>Book a Free Consultation</h3>
                <p className="sub">We&apos;ll get back to you within 24 hours.</p>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" type="text" placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="field">
                  <label htmlFor="interest">I&apos;m interested in</label>
                  <select id="interest" defaultValue="Bach Flower Therapy">
                    <option>Bach Flower Therapy</option>
                    <option>Nadi Nakshatra Astrology</option>
                    <option>Mental Health Therapy</option>
                    <option>Training / Courses</option>
                    <option>Healing Products</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us what you're experiencing or what you'd like to achieve..."
                  />
                </div>
                <FormNoticeButton>
                  Send My Request
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </FormNoticeButton>
              </div>
            </Reveal>
          </div>
        </section>

        <HomeFooter />
        <BackToTop showAfter={600} />
      </div>
    </RevealScope>
  );
}
