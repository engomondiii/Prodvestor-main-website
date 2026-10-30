import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
export const metadata = {
  title: "Industry solutions — Systems built around your world",
};
export default function Solutions() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">
          INDUSTRY SOLUTIONS / CUSTOM SOFTWARE & DIGITAL TRANSFORMATION
        </span>
        <h1>
          Your world is unique.
          <br />
          <span>Your systems should fit.</span>
        </h1>
        <p>
          From healthcare and education to commerce and enterprise. We help
          organizations turn disconnected processes into useful, connected
          digital systems.
        </p>
        <Link className="btn" href="/contact">
          Discuss your organization <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className="container page-content">
        <div className="resource-grid">
          {solutions.map((s) => (
            <Link className="panel" href={"/solutions/" + s.slug} key={s.slug}>
              <span className="eyebrow">{s.audience}</span>
              <h3>
                {s.name} <ArrowUpRight size={18} />
              </h3>
              <p>{s.description}</p>
              <span className="status-label">
                Custom project · Scoped to your needs
              </span>
            </Link>
          ))}
        </div>
        <div className="prose">
          <h2>The right foundation. Or a fresh start.</h2>
          <p>
            We can customize suitable existing software and components,
            integrate the tools you already use, or build a system from scratch.
            Discovery determines the right path—not a one-size-fits-all
            template.
          </p>
          <h2>From understanding to rollout.</h2>
          <p>
            We map your workflows, agree requirements and success criteria,
            design the experience and architecture, then build and test in
            stages. Data migration, integrations, training, handover, and
            ongoing support are scoped as part of the engagement.
          </p>
          <p>
            These are bespoke development offerings, not a claim that every
            listed system is already available as a ready-made product.
            Enterprise systems and AI projects are quoted separately from the
            eligible free Launchpad website build.
          </p>
          <Link className="text-link" href="/ai">
            Explore AI and automation for your organization ↗
          </Link>
        </div>
      </section>
    </>
  );
}
