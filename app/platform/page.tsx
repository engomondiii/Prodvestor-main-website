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
        "Register a new domain, transfer an existing one, or manage DNS records and nameservers in your workspace.",
        "Registration & transfers",
      ],
    ],
  },
  {
    name: "Connect with your customers",
    label: "BUSINESS COMMUNICATIONS",
    items: [
      ["Business phone numbers", "Give customers a dedicated business number. Calling and messaging options depend on country, number type and verification. Provider activation is pending.", "Inactive"],
      ["SMS & USSD", "Reach customers with messages and simple mobile journeys. Sender approval and local coverage will be confirmed before activation.", "Inactive"],
      ["Payments & billing", "Manage your wallet and payment history in one workspace. Card and M-PESA checkout use Paystack. Direct Prodvestor PayBill is not yet active.", "Paystack checkout"],
    ],
  },
  {
    name: "Build your backbone",
    label: "BUSINESS INFRASTRUCTURE",
    items: [
      [
        "Business email",
        "Your name at your business domain. Mailboxes, web and mobile access, and setup support from Prodvestor. Provider activation is pending.",
        "Inactive",
      ],
      [
        "Connectivity & Mesh",
        "Private networking and governed access for your team and systems.",
        "Available to order",
      ],
      [
        "Encrypted vault & proxy",
        "Business secrets storage and authorized, governed traffic routing.",
        "Available to order",
      ],
    ],
  },
  {
    name: "Protect what you build",
    label: "SECURITY & INTELLIGENCE",
    items: [
      [
        "Defensive security",
        "Managed WAF, DDoS protection, email security, and vulnerability monitoring.",
        "Available to order",
      ],
      [
        "Security operations",
        "SOC/SIEM monitoring, incident response, and authorized assessments.",
        "Available to order",
      ],
      [
        "Governed intelligence",
        "AI Gateway, RAG, and service agents with spend controls and audit records.",
        "Available to order",
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
          cybersecurity, and intelligence with services configured around your requirements.
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
                  <p><Link className="text-link" href={t === "Domains & DNS" ? "/app/domains" : t === "Launchpad" ? "/launchpad" : t === "Payments & billing" ? "/app/wallet" : "/app/services"}>
                    {t === "Domains & DNS" ? "Register, transfer or connect a domain" : t === "Launchpad" ? "Explore Launchpad" : t === "Payments & billing" ? "Open wallet & billing" : b === "Inactive" ? "View activation options" : "Request setup"} <ArrowUpRight size={16} />
                  </Link></p>
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
