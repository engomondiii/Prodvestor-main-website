import Link from "next/link";
import { startUrl } from "@/lib/config";
export const metadata = {
  title: "Pricing & payments — Clear from the beginning",
};
export default function Pricing() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">CLEAR COSTS. NO SURPRISES.</span>
        <h1>
          Big ambition.
          <br />
          <span>A sensible starting point.</span>
        </h1>
        <p>
          Pay for your domain. Get an eligible website build, brand identity,
          and email setup on us. Everything else is agreed with you upfront.
        </p>
      </section>
      <section className="container page-content">
        <div className="feature-grid">
          <article className="panel">
            <span className="eyebrow">LAUNCHPAD BUILD</span>
            <h2>Free.</h2>
            <p>With a domain reserved and paid in full through Prodvestor.</p>
            <ul>
              <li>Professional website</li>
              <li>Basic brand identity and kit</li>
              <li>Business email setup</li>
              <li>14-day build after scope acceptance</li>
            </ul>
            <Link className="btn" href={startUrl}>
              Get started ↗
            </Link>
          </article>
          <article className="panel">
            <span className="eyebrow">DOMAIN & ONGOING SERVICES</span>
            <h2>Quoted clearly.</h2>
            <p>
              Domain prices depend on the extension and registrar. We confirm
              availability and cost before purchase.
            </p>
            <p>
              Ongoing hosting and mail, paid integrations, and third-party fees
              are separate and disclosed before you commit.
            </p>
            <Link className="text-link" href="/contact">
              Request a quote ↗
            </Link>
          </article>
          <article className="panel">
            <span className="eyebrow">APPS & ADVANCED BUILDS</span>
            <h2>Built around you.</h2>
            <p>
              Mobile apps are offered at a subsidised cost. Custom applications
              and advanced functionality are scoped and quoted before work
              begins.
            </p>
            <Link className="text-link" href="/contact">
              Discuss your brief ↗
            </Link>
          </article>
        </div>
        <div className="prose">
          <h2>Institutional systems & custom AI.</h2>
          <p>
            Healthcare, education, enterprise systems, mobile applications, AI,
            and automation projects are scoped and quoted separately. We can
            customize an appropriate foundation, integrate existing tools, or
            build from scratch. Discovery defines deliverables, data
            requirements, integrations, milestones, support, and costs.
          </p>
          <p>
            <Link className="text-link" href="/solutions">
              Explore industry solutions ↗
            </Link>
          </p>
          <h2>Payments that meet you where you are.</h2>
          <p>
            Our payment roadmap includes mobile money, cards, bank transfers,
            and stablecoin. Your workspace shows only the rails enabled for your
            currency and market. A payment is credited after verified provider
            settlement.
          </p>
          <h2>Lipa Pole Pole</h2>
          <p>
            We’re developing pay-over-time plans for eligible recurring
            services. Availability will depend on market approval, verified
            business identity, affordability, and disclosed terms. Domains and
            other irreversible third-party costs must be paid upfront.
          </p>
          <p>
            Lipa Pole Pole is not currently available to activate. We won’t
            advertise a credit limit or offer a plan until the service and
            market are ready.
          </p>
        </div>
      </section>
    </>
  );
}
