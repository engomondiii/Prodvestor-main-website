import Link from "next/link";
export const metadata = { title: "Resources — A clearer way forward" };
export default function Docs() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">A LITTLE CLARITY GOES A LONG WAY</span>
        <h1>
          Good questions.
          <br />
          <span>Clear answers.</span>
        </h1>
        <p>
          Understand your first steps, what’s included, and how your business
          stays in control.
        </p>
      </section>
      <section className="container page-content">
        <div className="resource-grid">
          {[
            [
              "/launchpad",
              "Your Launchpad guide",
              "Eligibility, domain payment, scope approval, progress reviews, and handover.",
            ],
            [
              "/pricing",
              "Understanding your costs",
              "What’s free, what’s separate, and what we agree before you commit.",
            ],
            [
              "/platform",
              "The service roadmap",
              "Explore the platform and see which services are in development.",
            ],
            [
              "/privacy",
              "Your data & privacy",
              "How we handle enquiries, workspace records, payment data, and support.",
            ],
          ].map(([url, t, d]) => (
            <Link href={url} className="panel" key={url}>
              <span className="eyebrow">GUIDE ↗</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Link>
          ))}
        </div>
        <div className="prose">
          <h2>Using your workspace</h2>
          <p>
            Create an account, request your domain, and work with the team to
            verify your business. Set a monthly spending cap before making
            wallet-funded purchases. Domain availability and pricing are
            confirmed before payment.
          </p>
          <p>
            Once your domain is registered, submit your Launchpad brief. Review
            the scope and costs, then accept the current scope version to begin
            the 14-day build window. Your project workspace holds messages,
            feedback, files, and handover links.
          </p>
          <h2>Need a hand?</h2>
          <p>
            <Link className="text-link" href="/contact">
              Talk to the Prodvestor team ↗
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
