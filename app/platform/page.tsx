import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { startUrl } from "@/lib/config";
export const metadata = {
  title: "The platform — A foundation that grows with you",
};
const groups = [
  {
    name: "Establish your presence",
    label: "YOUR STARTING POINT",
    items: [
      [
        "Launchpad",
        "Website, brand identity, email setup, and a transparent project workspace.",
        "Assisted onboarding",
      ],
      [
        "Domains & DNS",
        "Your business address, purchased through Prodvestor after price and availability confirmation.",
        "Request a quote",
      ],
    ],
  },
  {
    name: "Build your backbone",
    label: "INFRASTRUCTURE ROADMAP",
    items: [
      [
        "Business mail",
        "Planned inbound and outbound business email, with SPF, DKIM, and DMARC.",
        "In development",
      ],
      [
        "Connectivity & Mesh",
        "Planned private networking and governed access for your team and systems.",
        "In development",
      ],
      [
        "Encrypted vault & proxy",
        "Planned business secrets storage and authorized, governed traffic routing.",
        "In development",
      ],
    ],
  },
  {
    name: "Protect what you build",
    label: "SECURITY ROADMAP",
    items: [
      [
        "Defensive security",
        "Planned managed WAF, DDoS protection, email security, and vulnerability monitoring.",
        "In development",
      ],
      [
        "Security operations",
        "Planned SOC/SIEM monitoring, incident response, and authorized assessments.",
        "In development",
      ],
      [
        "Governed intelligence",
        "Planned AI Gateway, RAG, and service agents with spend controls and audit records.",
        "In development",
      ],
    ],
  },
];
export default function Platform() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">THE PRODVESTOR PLATFORM</span>
        <h1>
          One foundation.
          <br />
          <span>Room for every ambition.</span>
        </h1>
        <p>
          Start with your digital presence. Grow into connected infrastructure,
          cybersecurity, and intelligence as services become available.
        </p>
        <Link className="btn" href={startUrl}>
          Begin with Launchpad <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className="container page-content">
        {groups.map((g) => (
          <div className="service-group" key={g.name}>
            <span className="eyebrow">{g.label}</span>
            <h2>{g.name}</h2>
            <div className="feature-grid">
              {g.items.map(([t, d, b]) => (
                <article className="panel" key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <span className="status-label">{b}</span>
                </article>
              ))}
            </div>
          </div>
        ))}
        <div className="notice">
          <b>Built on trust.</b> We only claim security capabilities and data
          residency that we can actually deliver and verify. Availability,
          pricing, regions, and support commitments are confirmed with you
          before activation.
        </div>
      </section>
    </>
  );
}
