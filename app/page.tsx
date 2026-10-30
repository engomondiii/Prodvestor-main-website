import { DomainStart } from "@/components/domain-start";
import { AskButton, AIEntry } from "@/components/ask-prodvestor";
import { SolutionsSection } from "@/components/solutions-section";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  ShieldCheck,
  Layers,
  Sparkles,
  Check,
  Wallet,
  MoveUpRight,
} from "lucide-react";
import { startUrl } from "@/lib/config";
export default function Home() {
  return (
    <>
      <section className="hero container domain-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="dot" /> WEBSITES · CUSTOM SOFTWARE · AI &
            AUTOMATION
          </div>
          <h1>
            Build a business.
            <br />
            Connect your operations.
            <br />
            <span>Create what’s next.</span>
          </h1>
          <p>
            Prodvestor helps businesses and institutions turn ideas into working
            digital products. Start with a professional website and brand,
            connect your teams with custom software, or build AI that makes
            everyday work easier.
          </p>
          <div className="actions">
            <Link className="btn" href={startUrl}>
              Start your project <ArrowUpRight size={18} />
            </Link>
            <Link className="quiet-link" href="/launchpad">
              Explore Launchpad <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <DomainStart />
      </section>
      <AIEntry />
      <section className="section container" aria-labelledby="choose-path">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT CAN WE HELP YOU BUILD?</span>
            <h2 id="choose-path">
              The right start.
              <br />
              For your next step.
            </h2>
          </div>
          <p>
            You do not need a technical brief to begin. Tell us what your
            organization does, where work gets difficult, and what a better
            result would look like.
          </p>
        </div>
        <div className="path-grid">
          {[
            [
              "Launch your business online",
              "A domain people can remember, a website that explains your value, a consistent brand and business email. Launchpad helps eligible businesses establish a professional presence with a clear scope and no website build fee.",
              "/launchpad",
              "Explore the Launchpad offer",
            ],
            [
              "Bring your operations together",
              "Customer portals, payments, records, reporting and everyday workflows for hospitals, schools, universities and other organizations. We can adapt suitable software, connect your existing tools or build from scratch.",
              "/solutions",
              "Find your industry solution",
            ],
            [
              "Put AI to practical use",
              "Help customers find answers, make documents easier to work with, or automate a multi-step process. We design knowledge assistants, agentic workflows and custom AI applications with appropriate human oversight.",
              "/ai",
              "Explore AI and automation",
            ],
          ].map(([title, text, href, label]) => (
            <article className="panel" key={href}>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link className="text-link" href={href}>
                {label} ↗
              </Link>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <AskButton question="Which Prodvestor service is right for my business?" />
        </div>
      </section>
      <section className="principles">
        <div className="container principle-grid">
          <span>
            THE FOUNDATION
            <br />
            <b>FOR WHAT’S NEXT.</b>
          </span>
          <div>
            <Globe size={20} /> Your domain. Your identity.
          </div>
          <div>
            <ShieldCheck size={20} /> Security from the start.
          </div>
          <div>
            <Wallet size={20} /> Clear costs. You’re in control.
          </div>
          <div>
            <Sparkles size={20} /> Expert guidance.
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / INTRODUCING LAUNCHPAD</span>
            <h2>
              You build the business.
              <br />
              We build your beginning.
            </h2>
          </div>
          <p>
            A professional presence shouldn’t be a privilege. Request your
            domain and review the confirmed price. Eligible businesses that
            fully pay for their domain receive a website build and basic brand
            identity at no build fee, within an agreed scope.
          </p>
        </div>
        <div className="launch-grid">
          <div className="launch-feature">
            <span className="tag">A STRONG START, FOR EVERY BUSINESS</span>
            <h3>
              Big presence.
              <br />
              Small beginnings.
              <br />
              <span>Zero build fee.</span>
            </h3>
            <p>
              A professional website, a brand identity that’s yours, and
              business email setup. An agreed 14-day build window after
              verification, domain registration and scope acceptance.
            </p>
            <Link className="btn lime" href="/launchpad">
              Explore Launchpad <ArrowUpRight size={18} />
            </Link>
            <span className="fine-print">
              Domain paid separately. Scope and any additional costs agreed
              upfront.
            </span>
            <span className="asterisk" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="launch-includes">
            <span className="eyebrow">YOUR LAUNCH KIT</span>
            {[
              [
                Globe,
                "A place to call yours",
                "A professional, responsive business website on your own domain.",
              ],
              [
                Layers,
                "A brand worth remembering",
                "Logo, colours, typography, and a practical brand kit.",
              ],
              [
                MailIcon,
                "Business, officially",
                "Business email setup that puts your domain to work.",
              ],
              [
                Sparkles,
                "A team in your corner",
                "Clear scope, progress reviews, and feedback in your project workspace.",
              ],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof Globe;
              return (
                <div className="include-row" key={i}>
                  <span className="icon-box">
                    <I size={22} />
                  </span>
                  <div>
                    <h3>{title as string}</h3>
                    <p>{text as string}</p>
                  </div>
                  <ArrowUpRight size={16} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section platform-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                02 / A FOUNDATION THAT GROWS WITH YOU
              </span>
              <h2>
                Start here.
                <br />
                Go <em>anywhere.</em>
              </h2>
            </div>
            <div>
              <p>
                One connected home for your business. Add the tools you need,
                when you’re ready for them.
              </p>
              <Link className="text-link" href="/platform">
                Explore the platform <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="service-grid">
            {[
              [
                Globe,
                "01",
                "Your digital home",
                "Domains, websites, brand identity, and email. A business customers can find.",
                "Launchpad intake",
              ],
              [
                Layers,
                "02",
                "Your business backbone",
                "Private connectivity, managed infrastructure, and a planned encrypted vault.",
                "In development",
              ],
              [
                ShieldCheck,
                "03",
                "Confidence, built in",
                "A defensive security roadmap: WAF, monitoring, and authorized assessments.",
                "In development",
              ],
              [
                Sparkles,
                "04",
                "A smarter way forward",
                "Service-specific AI guidance, governed AI access, and practical business support.",
                "In development",
              ],
            ].map(([Icon, n, title, desc, badge]) => {
              const I = Icon as typeof Globe;
              return (
                <Link
                  href="/platform"
                  className="service-card"
                  key={n as string}
                >
                  <div className="card-top">
                    <I size={28} />
                    <span>{n as string}</span>
                  </div>
                  <h3>{title as string}</h3>
                  <p>{desc as string}</p>
                  <div className="card-bottom">
                    <span className="status-label">{badge as string}</span>
                    <ArrowUpRight size={21} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <SolutionsSection />
      <section className="section container">
        <div className="mission-strip">
          <span className="eyebrow">03 / MORE THAN INFRASTRUCTURE</span>
          <h2>
            Talent is everywhere.
            <br />
            Opportunity should be, too.
          </h2>
          <div className="mission-bottom">
            <p>
              We’re here for the shop becoming a brand. The local idea finding a
              global audience. The business ready for its next chapter. When you
              grow, we grow—and help the next business begin.
            </p>
            <Link
              className="round-link"
              href="/mission"
              aria-label="Read our mission"
            >
              <MoveUpRight />
            </Link>
          </div>
          <div className="mission-watermark" aria-hidden="true">
            p↗
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / SIMPLE BY DESIGN</span>
            <h2>
              From idea to online.
              <br />
              Together, every step.
            </h2>
          </div>
          <p>
            No mystery process. No surprise invoices. Just a clear path from
            your first brief to your business going live.
          </p>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Make it yours",
              "Request your domain, verify your business, and pay the confirmed domain price.",
            ],
            [
              "02",
              "Tell your story",
              "Share your brief. Review what’s included and accept any costs before work begins.",
            ],
            [
              "03",
              "Build it together",
              "Follow progress, leave feedback, and request changes during your build window.",
            ],
            [
              "04",
              "Launch with confidence",
              "Your site, brand kit, and email are handed over. Your next chapter begins.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>
                {n}
                <ArrowRight size={18} />
              </span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">YOU BRING THE AMBITION.</span>
          <h2>Let’s build what’s next.</h2>
          <p>
            Tell us what you want to achieve. We’ll help you choose the right
            starting point.
          </p>
          <Link className="btn lime" href={startUrl}>
            Start your next chapter <ArrowUpRight size={19} />
          </Link>
          <span className="cta-note">
            For new businesses, growing teams and established institutions.
          </span>
        </div>
      </section>
    </>
  );
}
function MailIcon(props: React.ComponentProps<typeof Globe>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}
