import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Holistic Healing Pathways Foundation",
  description:
    "Refund, cancellation, and rescheduling policy for astrology consultations, healing sessions, digital reports, workshops, and training programs at Holistic Healing Pathways Foundation.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "general-policy",
    title: "General Policy",
    body: (
      <>
        <p>
          All astrology consultations, reports, healing sessions, and digital
          services provided by Dr. Nikunj Walia / Holistic Healing Pathways
          Foundation are <b>time-based professional services</b>, not physical
          products.
        </p>
        <p>
          Therefore, once a booking is confirmed, the fee is considered{" "}
          <b>non-refundable</b>.
        </p>
      </>
    ),
  },
  {
    id: "client-cancellations",
    title: "Cancellation by Client",
    body: (
      <>
        <h3>a) Live Consultations (Online or In-Person)</h3>
        <ul>
          <li>
            Cancellations made <b>24 hours before</b> the scheduled time →
            free rescheduling only
          </li>
          <li>
            Cancellations made <b>within 24 hours</b> → no refund
          </li>
          <li>
            No-show / missed appointment → no refund, no rescheduling
          </li>
        </ul>
        <h3>b) Emergency or Last-Minute Requests</h3>
        <p>No refund applies due to priority booking.</p>
      </>
    ),
  },
  {
    id: "rescheduling",
    title: "Rescheduling Policy",
    body: (
      <>
        <p>You may reschedule <b>one time</b> without extra charges if:</p>
        <ul>
          <li>You inform us at least 24 hours in advance, and</li>
          <li>A suitable slot is available.</li>
        </ul>
        <p>More than one rescheduling will require a new booking.</p>
      </>
    ),
  },
  {
    id: "digital-reports",
    title: "Digital Reports (PDF, Charts, Remedies, Guidance Notes)",
    body: (
      <>
        <p>Once the report preparation has started:</p>
        <ul>
          <li>No refund will be provided.</li>
          <li>
            Corrections are provided only for technical or calculation errors,
            not for differences in expectations or predictions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "workshops-courses",
    title: "Workshops, Courses & Training Programs",
    body: (
      <>
        <p>
          Fees are <b>non-refundable</b> once the seat is confirmed. If you
          cannot attend, you may request:
        </p>
        <ul>
          <li>Transfer to the next batch (if available), or</li>
          <li>Transfer of your seat to another person (inform in advance).</li>
        </ul>
      </>
    ),
  },
  {
    id: "incorrect-information",
    title: "Incorrect Information From Client",
    body: (
      <>
        <p>
          If wrong birth details or incomplete information is provided:
        </p>
        <ul>
          <li>No refund will be issued.</li>
          <li>A correction fee may apply if data needs to be reprocessed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-guarantee",
    title: "Service Guarantee",
    body: (
      <>
        <p>
          Astrology, healing, and emotional wellness consultations are
          subjective, interpretive services. We do not guarantee outcomes,
          results, or accuracy as per legal guidelines.
        </p>
        <div className="callout">
          <p>Therefore, no refund will be issued based on:</p>
          <ul>
            <li>Disagreement with predictions</li>
            <li>Delay in results</li>
            <li>Unmet expectations</li>
            <li>Personal dissatisfaction</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "technical-issues",
    title: "Technical Issues",
    body: (
      <>
        <p>If a session is interrupted due to:</p>
        <ul>
          <li>Network issues</li>
          <li>Power failure</li>
          <li>Platform error</li>
        </ul>
        <p>
          A fresh slot will be arranged at <b>no extra cost</b>. Refund will
          not be issued.
        </p>
      </>
    ),
  },
  {
    id: "practitioner-cancellations",
    title: "Cancellation by the Practitioner",
    body: (
      <>
        <p>
          If Dr. Nikunj Walia needs to cancel or reschedule due to an
          emergency:
        </p>
        <ul>
          <li>A new appointment will be provided, or</li>
          <li>A full refund will be issued (rare cases only).</li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of Policy",
    body: (
      <>
        <p>By booking any service, the client agrees to:</p>
        <ul>
          <li>This Refund &amp; Cancellation Policy</li>
          <li>
            Our <a href={ROUTES.terms}>Terms of Service</a>
          </li>
          <li>
            That astrology/healing is a guidance-based support system, not an
            exact science
          </li>
        </ul>
      </>
    ),
  },
];

export default function RefundCancellationPolicyPage() {
  return (
    <LegalPage
      titleLead="Refund &"
      titleAccent="Cancellation Policy"
      sub="Our consultations, healing sessions, reports, and training programs are time-based professional services. This policy explains how bookings, rescheduling, cancellations, and refunds are handled."
      updated="29 July 2026"
      sections={SECTIONS}
      related={[
        {
          href: ROUTES.terms,
          label: "Terms of Service",
          desc: "The terms that govern our consultations, training programs, and website.",
        },
        {
          href: ROUTES.privacy,
          label: "Privacy Policy",
          desc: "How we collect, use, and protect your personal information.",
        },
      ]}
    />
  );
}
