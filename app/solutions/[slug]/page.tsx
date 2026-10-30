import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { solutions } from "@/lib/solutions";
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return { title: s ? s.name + " solutions" : "Solutions" };
}
export default async function Solution({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <section className="page-hero container">
        <Link className="eyebrow" href="/solutions">
          SOLUTIONS / {s.name.toUpperCase()}
        </Link>
        <h1>{s.headline}</h1>
        <p>{s.description}</p>
        <Link className="btn" href={"/contact?intent=" + s.slug}>
          Let’s understand your needs <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className="container page-content">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DESIGNED AROUND YOUR WORKFLOWS</span>
            <h2>
              A connected view.
              <br />A practical next step.
            </h2>
          </div>
          <p>{s.outcome}</p>
        </div>
        <div className="feature-grid">
          {s.modules.map((m, i) => (
            <article className="panel" key={m}>
              <span className="eyebrow">0{i + 1} / POSSIBLE SCOPE</span>
              <h3>{m}</h3>
              <span className="status-label">Defined in discovery</span>
            </article>
          ))}
        </div>
        <div className="prose">
          <h2>Customize, integrate, or build from scratch.</h2>
          <p>
            We begin with your current systems and the work your teams actually
            do. We can adapt an appropriate foundation, connect existing
            products, or create bespoke applications, portals, APIs, and mobile
            experiences. The architecture follows your requirements.
          </p>
          <h2>Add intelligence where it helps.</h2>
          <p>
            Knowledge assistants, document processing, workflow agents,
            analytics, and other AI capabilities can be considered where the
            data, safeguards, and expected value support them. Human oversight
            and clear approval boundaries are part of the design.
          </p>
          <h2>Designed for your responsibilities.</h2>
          <p>{s.considerations}</p>
          <p>
            Requirements, integrations, data migration, security, accessibility,
            rollout, training, ownership, support, and costs are agreed in a
            project scope. Listed modules describe possible work; they are not a
            ready-to-use product or a fixed delivery promise.
          </p>
          <Link className="btn" href="/contact">
            Start a discovery conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
