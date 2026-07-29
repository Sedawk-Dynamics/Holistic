import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT, LEGAL_EMAIL, ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Holistic Healing Pathways Foundation",
  description:
    "Terms and conditions for using the consultation and training services of Holistic Healing Pathways Foundation — Bach Flower Therapy, Nadi Astrology, and Psychological Mental Health Therapy.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <>
        <p>
          Holistic Healing Pathways Foundation (&ldquo;we&rdquo;,
          &ldquo;our&rdquo;, &ldquo;us&rdquo;) provides consultation and
          training services in Bach Flower Therapy, Nadi Astrology, and
          Psychological Mental Health Therapy.
        </p>
        <p>
          By using our website, booking a consultation, or enrolling in any
          training program, you agree to comply with and be bound by these
          Terms of Service.
        </p>
      </>
    ),
  },
  {
    id: "nature-of-services",
    title: "Nature of Services",
    body: (
      <>
        <p>Our services include:</p>
        <ul>
          <li>Bach Flower Therapy (consultation &amp; training)</li>
          <li>Nadi Astrology (consultation &amp; training)</li>
          <li>Psychological Mental Health Therapy (consultation)</li>
        </ul>
        <div className="callout">
          <p>
            <b>Important:</b> Bach Flower Therapy and Nadi Astrology are
            complementary, guidance-based services. Psychological support is
            provided for mental and emotional well-being. These services are{" "}
            <b>
              not a substitute for medical diagnosis, psychiatric treatment, or
              emergency care
            </b>
            .
          </p>
        </div>
      </>
    ),
  },
  {
    id: "user-responsibility",
    title: "User Responsibility",
    body: (
      <>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Use services responsibly and ethically</li>
          <li>
            Not misuse or reproduce any training content without permission
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "appointments",
    title: "Appointments & Consultations",
    body: (
      <ul>
        <li>All consultations are by prior appointment only</li>
        <li>Timely availability is expected from both sides</li>
        <li>
          Delays or missed appointments may be rescheduled at our discretion
        </li>
      </ul>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <ul>
        <li>All fees must be paid in advance unless otherwise agreed</li>
        <li>
          Prices for consultations and courses are subject to change without
          prior notice
        </li>
        <li>
          Payment once made is subject to our{" "}
          <a href={ROUTES.refund}>Refund &amp; Cancellation Policy</a>
        </li>
      </ul>
    ),
  },
  {
    id: "training-programs",
    title: "Training Programs",
    body: (
      <ul>
        <li>
          Course content is for personal learning and professional development
        </li>
        <li>
          Unauthorized recording, sharing, or redistribution is strictly
          prohibited
        </li>
        <li>
          Certification (if provided) is based on the completion criteria set
          by us
        </li>
      </ul>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          We maintain strict confidentiality of your personal and
          consultation-related information. However:
        </p>
        <ul>
          <li>Users are responsible for their own data shared online</li>
          <li>We are not liable for breaches beyond our control</li>
        </ul>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <ul>
        <li>
          We do not guarantee specific outcomes from consultations or training
        </li>
        <li>
          Decisions made based on our guidance are the sole responsibility of
          the user
        </li>
        <li>
          We are not liable for any direct or indirect consequences arising
          from the use of our services
        </li>
      </ul>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        All website content, course material, and resources are the
        intellectual property of Holistic Healing Pathways Foundation. No part
        may be copied, reproduced, or distributed without written permission.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <p>
        Our website may include links to external websites. We are not
        responsible for their content or practices.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modifications",
    body: (
      <p>
        We reserve the right to update or modify these Terms of Service at any
        time. Continued use of our services implies acceptance of any changes.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These Terms of Service are governed by the laws of India, and any
        disputes shall be subject to the jurisdiction of the appropriate
        courts.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <div className="callout">
        <p>
          Our services are intended for guidance, emotional support, and
          personal development purposes only. They are{" "}
          <b>not a replacement for medical, legal, or psychiatric advice</b>.
          Please consult a qualified professional where necessary. For any
          queries, contact us at{" "}
          <a href={LEGAL_EMAIL.href}>{LEGAL_EMAIL.address}</a> or{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      </div>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      titleLead="Terms of"
      titleAccent="Service"
      sub="The terms and conditions that govern your use of Holistic Healing Pathways Foundation's website, consultations in Bach Flower Therapy, Nadi Astrology, and Mental Health Therapy, and our training programs."
      updated="29 July 2026"
      sections={SECTIONS}
      related={[
        {
          href: ROUTES.privacy,
          label: "Privacy Policy",
          desc: "How we collect, use, and protect your personal information.",
        },
        {
          href: ROUTES.refund,
          label: "Refund & Cancellation Policy",
          desc: "How bookings, rescheduling, cancellations, and refunds are handled.",
        },
      ]}
    />
  );
}
