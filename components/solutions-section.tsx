import Link from "next/link";
import {
  ArrowUpRight,
  Hospital,
  GraduationCap,
  School,
  ShoppingBag,
  Truck,
  Landmark,
  Workflow,
  BrainCircuit,
  FileSearch,
} from "lucide-react";
export function SolutionsSection() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SOLUTIONS / BUILT AROUND YOUR WORLD</span>
          <h2>
            Different industries.
            <br />
            The same big ambition.
          </h2>
        </div>
        <div>
          <p>
            From a hospital’s operations to a university’s student journey. We
            design, customize, and build the systems your organization needs.
          </p>
          <Link className="text-link" href="/solutions">
            Find your solution <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="industry-grid">
        {[
          [
            Hospital,
            "Healthcare",
            "Patient journeys. Connected operations.",
            "healthcare",
          ],
          [
            School,
            "Schools",
            "Administration, learning, and family connections.",
            "schools",
          ],
          [
            GraduationCap,
            "Universities",
            "A connected institutional experience.",
            "universities",
          ],
          [
            ShoppingBag,
            "Retail & commerce",
            "From your catalogue to the last mile.",
            "retail",
          ],
          [
            Truck,
            "Logistics",
            "Clearer movement of goods and information.",
            "logistics",
          ],
          [
            Landmark,
            "Enterprise & institutions",
            "Purpose-built tools for complex organizations.",
            "enterprise",
          ],
        ].map(([Icon, t, d, slug]) => {
          const I = Icon as typeof Hospital;
          return (
            <Link
              className="industry-card"
              href={"/solutions/" + slug}
              key={slug as string}
            >
              <I size={25} />
              <div>
                <h3>{t as string}</h3>
                <p>{d as string}</p>
              </div>
              <ArrowUpRight size={17} />
            </Link>
          );
        })}
      </div>
      <div className="build-note">
        <span className="dot" /> Customize the right foundation. Build from
        scratch when your ambition needs something new.
      </div>
      <div className="ai-feature">
        <div>
          <span className="eyebrow">
            AI & AUTOMATION / INTELLIGENCE WITH A PURPOSE
          </span>
          <h2>
            Beyond a chatbot.
            <br />
            Built into how you work.
          </h2>
          <p>
            Agentic workflows. Knowledge assistants. Document intelligence. The
            right AI, connected to your systems and designed around a useful
            outcome.
          </p>
          <Link className="btn lime" href="/ai">
            Explore AI solutions <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="ai-stack">
          {[
            [
              FileSearch,
              "Knowledge that’s yours",
              "RAG, search & document intelligence",
            ],
            [
              BrainCircuit,
              "Intelligence that fits",
              "Language, vision, voice & analytics",
            ],
            [
              Workflow,
              "Workflows with direction",
              "Agents, integrations & human approvals",
            ],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof FileSearch;
            return (
              <div key={t as string}>
                <I size={22} />
                <span>
                  <b>{t as string}</b>
                  <small>{d as string}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
