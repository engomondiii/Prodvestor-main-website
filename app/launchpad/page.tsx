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
      <section className="page-hero container">
        <span className="eyebrow">
          PRODVESTOR LAUNCHPAD / YOUR FIRST BIG STEP
        </span>
        <h1>
          Your business.
          <br />
          <span>Ready for the world.</span>
        </h1>
        <p>
          Reserve and fully pay for a domain with Prodvestor. We’ll build your
          professional website and brand identity, free, within 14 days of
          accepting your scope.
        </p>
        <Link href={startUrl} className="btn">
          Start your Launchpad journey <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className="container page-content">
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
