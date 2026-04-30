import React from "react";
import { useParams, Link } from "react-router-dom";
import FlowingLines from "../components/FlowingLines";
import { ArrowLeft } from "lucide-react";

const POLICIES = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Governance & Policies",
    body: [
      "Datapoolwaters Advisory (\"we\", \"our\", \"us\") is committed to protecting the privacy and confidentiality of anyone interacting with our website, communications, or advisory services. This notice describes what information we collect, how it is used, and the rights available to individuals under applicable data protection law.",
      {
        h: "Information we collect",
        p: "We collect information you voluntarily provide via our contact form (name, email, organisation, phone, subject, message), information generated from your use of our site (cookies, device metadata, approximate location), and information provided during engagements (contractual, project, and financial data).",
      },
      {
        h: "How we use information",
        p: "We use personal data to respond to enquiries, deliver advisory services, comply with legal obligations (including KYC/AML checks where required), and improve the performance and security of our website.",
      },
      {
        h: "Sharing & disclosure",
        p: "We do not sell personal data. We share data only with trusted subprocessors (e.g. hosting, email) under confidentiality, with regulators where legally required, and with client-nominated parties during active engagements.",
      },
      {
        h: "Your rights",
        p: "Subject to applicable law (including the Nigeria Data Protection Act and GDPR where relevant), you may request access, correction, deletion, or portability of your personal data, and you may object to or withdraw consent for certain processing.",
      },
      {
        h: "Contact",
        p: "For privacy enquiries, data subject requests, or complaints, contact advisory@datapoolwaters.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Governance & Policies",
    body: [
      "These terms govern your use of the Datapoolwaters Advisory website and any content, documentation, or tools made available through it. By accessing the site you agree to these terms.",
      {
        h: "Use of the site",
        p: "The site is provided for informational purposes only and does not constitute advisory, investment, legal, tax, or accounting advice. Any engagement with Datapoolwaters Advisory is governed by a separate written contract.",
      },
      {
        h: "Intellectual property",
        p: "All content, branding, data, models, and proprietary methodologies on this site remain the intellectual property of Datapoolwaters Advisory and its licensors and may not be copied, redistributed, or used commercially without prior written consent.",
      },
      {
        h: "No warranties",
        p: "The site is provided on an 'as-is' basis without warranty of any kind. Datapoolwaters Advisory is not liable for any losses, direct or indirect, arising from use of or reliance on the site.",
      },
      {
        h: "Governing law",
        p: "These terms are governed by the laws of the Federal Republic of Nigeria, with exclusive jurisdiction in the courts of Lagos, unless otherwise agreed in writing.",
      },
    ],
  },
  ethics: {
    title: "Code of Ethics & Professional Conduct",
    eyebrow: "Governance & Policies",
    body: [
      "Our Code of Ethics reflects the values on which Datapoolwaters Advisory operates: integrity, excellence, impact, and partnership. Every member of our team — staff, associates, and sub-advisors — is expected to uphold the following standards.",
      {
        h: "Integrity & independence",
        p: "We act with transparency, fiduciary discipline, and independence from any conflicting interest. We disclose actual or potential conflicts promptly and decline mandates where conflicts cannot be managed.",
      },
      {
        h: "Professional competence",
        p: "We apply rigorous analysis, cite sources, and clearly distinguish between fact, assumption, and opinion. Advice is provided only in areas where we have demonstrable expertise.",
      },
      {
        h: "Confidentiality",
        p: "Client information is treated as strictly confidential, used only for the purposes of the engagement, and protected with appropriate administrative and technical controls.",
      },
      {
        h: "Anti-bribery & anti-corruption",
        p: "We prohibit bribery, kickbacks, facilitation payments, and any other form of corruption. Our team is trained to recognise and reject these practices in every jurisdiction where we operate.",
      },
      {
        h: "Reporting concerns",
        p: "Suspected breaches of this Code may be reported confidentially to advisory@datapoolwaters.com or via the mechanisms set out in our Whistleblowing Policy.",
      },
    ],
  },
  "anti-trafficking": {
    title: "Anti-Trafficking & Modern Slavery Policy",
    eyebrow: "Governance & Policies",
    body: [
      "Datapoolwaters Advisory has a zero-tolerance approach to modern slavery, human trafficking, forced labour, and any form of exploitation in its operations, advisory engagements, and supply chain.",
      {
        h: "Our commitments",
        p: "We commit to (i) screening our engagements and supply chain for modern slavery risk, (ii) ensuring our employment practices respect international labour standards, (iii) requiring the same from our partners, vendors, and sub-advisors, and (iv) reporting and investigating any credible concern raised.",
      },
      {
        h: "Supplier & partner expectations",
        p: "All suppliers and partners are expected to comply with applicable modern slavery legislation and to provide, on request, evidence of their own policies and controls.",
      },
      {
        h: "Reporting",
        p: "Concerns about modern slavery or human trafficking related to our work can be reported confidentially to advisory@datapoolwaters.com.",
      },
    ],
  },
  whistleblowing: {
    title: "Whistleblowing Policy",
    eyebrow: "Governance & Policies",
    body: [
      "We encourage anyone — staff, clients, partners, vendors, or third parties — to raise concerns in good faith about suspected wrongdoing, unethical conduct, fraud, or breach of law or policy connected with Datapoolwaters Advisory.",
      {
        h: "How to raise a concern",
        p: "Concerns may be raised confidentially by email to advisory@datapoolwaters.com, marked 'Whistleblowing — Confidential'. Where anonymous reporting is preferred, reports can be submitted without personal identifiers; investigators will still act on credible information.",
      },
      {
        h: "Non-retaliation",
        p: "We prohibit retaliation of any kind against anyone who raises a concern in good faith. Retaliation is itself a breach of this policy and our Code of Ethics.",
      },
      {
        h: "Handling & outcomes",
        p: "Reports are reviewed by a designated officer independent of the reported matter. Where substantiated, we take appropriate corrective, disciplinary, or legal action, and — where required — notify regulators.",
      },
    ],
  },
};

export default function PolicyPage() {
  const { key } = useParams();
  const p = POLICIES[key];

  if (!p) {
    return (
      <div className="pt-40 pb-40 text-center" data-testid="policy-not-found">
        <div className="dpw-container">
          <h1 className="font-serif text-4xl text-dpw-black">Policy not found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-3 text-dpw-blue">
            <ArrowLeft size={14} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article data-testid={`page-policy-${key}`}>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={460} opacity={0.08} />
        <div className="dpw-container relative max-w-4xl">
          <div className="dpw-eyebrow mb-5">{p.eyebrow}</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-dpw-black">
            {p.title}
          </h1>
          <div className="mt-6 text-[13px] tracking-[0.2em] uppercase text-dpw-dark-grey">
            Effective date: {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long" })}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="dpw-container max-w-3xl space-y-6 text-[16px] leading-[1.8] text-dpw-dark-grey">
          {p.body.map((b, i) =>
            typeof b === "string" ? (
              <p key={i}>{b}</p>
            ) : (
              <div key={i}>
                <h2 className="font-serif text-2xl text-dpw-black mt-10 mb-3">
                  {b.h}
                </h2>
                <p>{b.p}</p>
              </div>
            )
          )}
        </div>
      </section>
    </article>
  );
}
