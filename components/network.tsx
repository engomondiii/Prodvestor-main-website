import { Globe, Layers, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
export function Network() {
  return (
    <aside
      className="capability-map"
      aria-label="What you can build with Prodvestor"
    >
      <div className="capability-heading">
        <span className="eyebrow">YOUR AMBITION, MADE PRACTICAL</span>
        <span className="capability-mark" aria-hidden="true">
          p↗
        </span>
        <h2>
          One idea.
          <br />
          More possibilities.
        </h2>
        <p>
          Start with what you need today. Build a foundation for what comes
          next.
        </p>
      </div>
      {[
        [
          Globe,
          "A presence people trust",
          "Domains, websites, brand identity and business email.",
          "/launchpad",
        ],
        [
          Layers,
          "Systems that fit your work",
          "Custom software, portals and connected operations.",
          "/solutions",
        ],
        [
          Sparkles,
          "Intelligence with a purpose",
          "Knowledge assistants, AI agents and automation.",
          "/ai",
        ],
      ].map(([Icon, title, description, href]) => {
        const I = Icon as typeof Globe;
        return (
          <Link
            href={href as string}
            className="capability-item"
            key={title as string}
          >
            <I size={26} />
            <div>
              <h3>{title as string}</h3>
              <p>{description as string}</p>
            </div>
            <ArrowUpRight size={20} />
          </Link>
        );
      })}
      <div className="capability-note">
        Understand the need. Agree the scope. Build together.
      </div>
    </aside>
  );
}
