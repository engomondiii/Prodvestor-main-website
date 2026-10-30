import { DomainStart } from "@/components/domain-start";
import { AskButton } from "@/components/ask-prodvestor";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Palette,
  Mail,
  MessageSquare,
} from "lucide-react";
import { startUrl } from "@/lib/config";
export const metadata = {
  title: "Launchpad — Your business, introduced to the world",
};
export default function Launchpad() {
  return (
    <>
      <section className="hero container domain-hero">
        <div className="hero-copy">
          <span className="eyebrow">PRODVESTOR LAUNCHPAD</span>
          <h1>Your business.<br /><span>Ready to be found.</span></h1>
          <p>A professional website, basic brand identity and business email setup for eligible businesses that purchase a domain through Prodvestor.</p>
          <p>We agree the scope and costs first. Your 14-day build window begins after business verification, domain registration and scope acceptance.</p>
          <a className="text-link" href="#launchpad-details">Explore everything included ↓</a>
        </div>
        <DomainStart />
      </section>
      <section className="container page-content" id="launchpad-details">
        <div style={{ marginTop: 24, marginBottom: 40 }}>
          <AskButton question="Explain domain registration and what is included in Launchpad." />
        </div>
        <div className="feature-grid">
          {[
            [
              Globe,
              "Your website",
              "A responsive business website with informational pages or standard dynamic features such as a contact form, blog, or basic catalogue.",
            ],
            [
              Palette,
              "Your identity",
              "A logo, colour palette, typography, and a basic brand kit that gives your business a consistent presence.",
            ],
            [
              Mail,
              "Your business email",
              "Setup on your new domain. Ongoing hosting and mail service charges are disclosed separately.",
            ],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Globe;
            return (
              <article className="panel" key={t as string}>
                <I size={26} />
                <h3 style={{ marginTop: 25 }}>{t as string}</h3>
                <p>{d as string}</p>
              </article>
            );
          })}
        </div>
        <div className="section-heading" style={{ marginTop: 70 }}>
          <div>
            <span className="eyebrow">CLEAR SCOPE. SHARED PROGRESS.</span>
            <h2>You’re part of the build.</h2>
          </div>
          <p>
            Your project workspace is where we agree the scope, share progress,
            gather feedback, and prepare handover.
          </p>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Your domain",
              "We confirm availability and price. You pay the domain in full; domains are not eligible for installments.",
            ],
            [
              "02",
              "Your brief",
              "Tell us about your business, pages, look, content, and features. We evaluate the scope before work starts.",
            ],
            [
              "03",
              "Your approval",
              "See what’s included, any additional development charges, and third-party costs. Work starts after you accept.",
            ],
            [
              "04",
              "Your launch",
              "Review progress and request changes during the 14-day build. Receive your site, brand kit, and email setup.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="faq">
          <h2>A few things, upfront.</h2>
          {[
            [
              "Does requesting a domain reserve it?",
              "No. Your request asks the team to check availability and quote the registration cost. A name is only secured when the registrar confirms successful registration. Availability can change before that confirmation; we do not promise a name based on a search or enquiry.",
            ],
            [
              "What should I prepare before I start?",
              "Bring your preferred domain and a few alternatives, a short description of your business, your contact details and any existing logo or content. We will explain verification requirements and agree the pages, features, recurring costs and handover details before development starts.",
            ],
            [
              "Can I enquire from outside East Africa?",
              "Yes. We welcome enquiries from businesses and institutions in other markets, and strongly encourage entrepreneurs and established organizations across East Africa and the wider African business community to participate. The team will confirm whether your requested service, registration and payment arrangements are supported before you commit.",
            ],
            [
              "Is everything free?",
              "The eligible website build, basic brand identity, and email setup are free. You pay for the domain in full. Ongoing hosting, mail plans, paid integrations, and out-of-scope functionality are separate costs, disclosed before work begins.",
            ],
            [
              "What if I need a mobile app or more advanced features?",
              "Mobile apps are subsidised, rather than free. Custom workflows and more advanced applications are quoted before work starts. You decide whether to accept.",
            ],
            [
              "When does the 14-day window start?",
              "Your build window begins after business verification, domain registration, and your acceptance of the scope. Delays caused by missing client content or dependencies are discussed with you.",
            ],
            [
              "Can I change my mind during the build?",
              "You can submit feedback and change requests during your build window. We evaluate changes and agree any additional costs before doing paid work.",
            ],
            [
              "Can I get more than one free build?",
              "Launchpad is available once per verified business identity. It is designed to help genuine businesses establish their own presence.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
