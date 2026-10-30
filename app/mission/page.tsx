import Link from "next/link";
import { startUrl } from "@/lib/config";
export const metadata = { title: "Our mission — Talent is everywhere" };
export default function Mission() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">OUR REASON FOR BUILDING</span>
        <h1>
          Talent is everywhere.
          <br />
          <span>Opportunity should be, too.</span>
        </h1>
        <p>
          African businesses don’t lack ambition. Too often, they lack the
          systems and recognition that let the world see it.
        </p>
      </section>
      <section className="container page-content">
        <div className="prose">
          <h2>A business deserves to be taken seriously.</h2>
          <p>
            A shop with a brilliant product. A studio with world-class talent. A
            local service solving a real problem. Without a professional
            website, trusted domain, business email, or secure digital
            foundation, too many capable businesses remain invisible.
          </p>
          <p>
            Prodvestor exists to change that. Our mission is to give every
            African SME the systems and brand recognition it needs to compete in
            the global market.
          </p>
          <h2>A strong start, within reach.</h2>
          <p>
            Launchpad brings a professional website, brand identity, and email
            setup to businesses that reserve and fully pay for a domain with us.
            It’s the beginning of a connected foundation they can grow into.
          </p>
          <h2>A model that can keep giving.</h2>
          <p>
            We call it sustainable philanthropy. Low-cost build tools and human
            review make the free build viable. Domain purchases and the
            recurring services a business chooses as it grows help fund the next
            business’s beginning.
          </p>
          <p>
            Clear scope, upfront costs, and customer control keep that
            relationship honest. We succeed when the businesses we help succeed.
          </p>
          <h2>Rooted in East Africa. Open to the world.</h2>
          <p>
            We’re starting in Kenya, with an East African roadmap and a global
            outlook. We will expand services and payment options market by
            market, guided by what we can deliver reliably.
          </p>
          <Link className="btn" href={startUrl}>
            Build your next chapter ↗
          </Link>
        </div>
      </section>
    </>
  );
}
