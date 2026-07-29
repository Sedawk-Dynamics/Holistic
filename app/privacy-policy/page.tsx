import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Holistic Healing Pathways Foundation",
  description:
    "How Holistic Healing Pathways Foundation collects, uses, and protects your personal information across our consultations, therapy sessions, training programs, and website.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>
          Holistic Healing Pathways Foundation (&ldquo;we&rdquo;,
          &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your
          privacy and ensuring the security of your personal information. We may
          collect the following types of information when you use our website
          and services:
        </p>
        <h3>Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Contact details (phone number, email address)</li>
          <li>Date, time, and place of birth (for astrology consultations)</li>
          <li>Information shared during consultations or therapy sessions</li>
        </ul>
        <h3>Technical Information</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Website usage data (cookies, analytics)</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use your information for:</p>
        <ul>
          <li>Providing consultation and therapy services</li>
          <li>Delivering training programs and course access</li>
          <li>Responding to inquiries and support requests</li>
          <li>Improving our website and services</li>
          <li>
            Sending updates, course details, or promotional communication
            (only if consent is given)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Sensitive Information",
    body: (
      <>
        <p>
          We respect the sensitive nature of your personal and emotional
          information:
        </p>
        <ul>
          <li>
            All consultation and therapy discussions are treated as{" "}
            <b>strictly confidential</b>
          </li>
          <li>
            We do not share your personal details without your consent, except
            where required by law
          </li>
          <li>Your data is handled with care and professionalism</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    body: (
      <>
        <p>
          We do <b>not sell, rent, or trade</b> your personal information. We
          may share information only in the following cases:
        </p>
        <ul>
          <li>
            With trusted service providers (for website hosting, payment
            processing, etc.)
          </li>
          <li>When required by law or legal authorities</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    body: (
      <p>
        We implement appropriate security measures to protect your data from
        unauthorized access, misuse, or disclosure. However, no online system is
        completely secure, and we encourage users to share information
        responsibly.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    body: (
      <>
        <p>Our website may use cookies to:</p>
        <ul>
          <li>Improve user experience</li>
          <li>Analyze website traffic</li>
        </ul>
        <p>You can choose to disable cookies through your browser settings.</p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <p>
        Our website may contain links to external websites. We are not
        responsible for the privacy practices or content of those third-party
        sites.
      </p>
    ),
  },
  {
    id: "consent",
    title: "User Consent",
    body: (
      <p>
        By using our website and services, you agree to the terms of this
        Privacy Policy.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date, and continued use of
        our services implies acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      titleLead="Privacy"
      titleAccent="Policy"
      sub="Your trust is sacred to us. This policy explains how Holistic Healing Pathways Foundation collects, uses, and safeguards your personal information across our consultations, therapy sessions, training programs, and website."
      updated="29 July 2026"
      sections={SECTIONS}
      related={[
        {
          href: ROUTES.terms,
          label: "Terms of Service",
          desc: "The terms that govern our consultations, training programs, and website.",
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
