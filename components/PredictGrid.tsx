"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useImageStatus } from "@/components/useImageStatus";
import { PREDICT_TOPICS, topicImage, type PredictTopic } from "@/lib/predict";

const PAGE_SIZE = 4;

/**
 * Shows the topic's photo, falling back to the gradient tile and its icon while
 * no artwork exists at that path yet.
 */
function TopicArt({ topic }: { topic: PredictTopic }) {
  const { ref, ok, onError } = useImageStatus();

  return (
    <div className="vcard-art">
      {ok ? (
        <>
          <img
            ref={ref}
            className="vcard-img"
            src={topicImage(topic)}
            alt=""
            loading="lazy"
            onError={onError}
          />
          <span className="vcard-veil" />
        </>
      ) : (
        <>
          <span className="vcard-ring" />
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {topic.icon}
          </svg>
        </>
      )}
    </div>
  );
}

/** Cards in a row fade in one after another; the first has no delay. */
const stagger = (i: number) => {
  const step = i % PAGE_SIZE;
  return step === 0 ? undefined : (step as 1 | 2 | 3);
};

export function PredictGrid() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const remaining = PREDICT_TOPICS.length - shown;

  return (
    <>
      <div className="vgrid">
        {PREDICT_TOPICS.slice(0, shown).map((topic, i) => (
          <Reveal
            as={Link}
            key={topic.slug}
            href={`/nadi-nakshatra-astrology/${topic.slug}`}
            className="vcard"
            delay={stagger(i)}
          >
            <TopicArt topic={topic} />
            <div className="vcard-body">
              <h4>{topic.title}</h4>
              <p>{topic.teaser}</p>
              <span className="vcard-link">
                Read More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {remaining > 0 && (
        <div className="vmore">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShown((n) => n + PAGE_SIZE)}
          >
            View More
            <span className="vmore-count">
              {remaining} more
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
