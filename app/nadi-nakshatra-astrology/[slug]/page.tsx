import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { NadiFooter } from "@/components/NadiFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { PREDICT_TOPICS, DEDICATED_SLUGS, getTopic } from "@/lib/predict";
import { ROUTES } from "@/lib/site";
import "../nadi.css";

type Params = { params: Promise<{ slug: string }> };

/**
 * Slugs in DEDICATED_SLUGS have their own hand-built page under their own folder,
 * which wins the route; leaving them here too would prerender a second,
 * conflicting page.
 */
export function generateStaticParams() {
  return PREDICT_TOPICS.filter((t) => !DEDICATED_SLUGS.has(t.slug)).map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.fullTitle} | HHPF`,
    description: topic.teaser,
    alternates: { canonical: `${ROUTES.nadi}/${topic.slug}` },
  };
}

export default async function TopicPage({ params }: Params) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const others = PREDICT_TOPICS.filter((t) => t.slug !== topic.slug);

  return (
    <div className="p-nadi">
      <ScrollProgress />
      <Header shopHref={`${ROUTES.nadi}#enrol`} />

      <section className="vhero">
        <div className="wrap">
          <div className="vmark">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {topic.icon}
            </svg>
          </div>
          <span className="eyebrow">Nadi Nakshatra Astrology</span>
          <h1>{topic.fullTitle}</h1>
          <p className="lead">{topic.teaser}</p>
        </div>
      </section>

      <section className="vbody">
        <div className="wrap">
          {topic.body?.map((para, i) => (
            <Reveal key={i} as="p" delay={i === 0 ? undefined : 1}>
              {para}
            </Reveal>
          ))}

          <Reveal className={topic.body?.length ? "vnav" : "vnav vnav-bare"}>
            <Link href={ROUTES.contact} className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link href={`${ROUTES.nadi}#predict`} className="btn btn-ghost">
              ← All Guidance Areas
            </Link>
          </Reveal>
        </div>
      </section>

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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
