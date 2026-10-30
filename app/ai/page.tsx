import { AskButton } from "@/components/ask-prodvestor";
import Link from "next/link";
import {
  ArrowUpRight,
  Workflow,
  BookOpen,
  FileSearch,
  AudioLines,
  ChartNoAxesCombined,
  ScanEye,
} from "lucide-react";
export const metadata = {
  title: "AI & automation — Intelligence with a purpose",
};
const offerings = [
  [
    Workflow,
    "Agentic AI & workflow automation",
    "Multi-step assistants that coordinate approved tools and business processes, with explicit human approval at consequential steps.",
  ],
  [
    BookOpen,
    "Knowledge assistants & RAG",
    "Connect approved documents and knowledge sources to useful search and grounded answers, with access-aware retrieval.",
  ],
  [
    FileSearch,
    "Document intelligence",
    "Extract, classify, summarize, and route documents, with validation and review designed around the task.",
  ],
  [
    AudioLines,
    "Conversational & voice experiences",
    "Customer-support, internal-assistant, and voice workflows connected to your business systems and escalation paths.",
  ],
  [
    ChartNoAxesCombined,
    "Predictive & decision-support systems",
    "Forecasting, anomaly detection, and analytics where appropriate data and evaluation support the use case.",
  ],
  [
    ScanEye,
    "Vision & multimodal applications",
    "Explore image, text, and audio workflows for suitable operational problems, with privacy and human review in the design.",
  ],
] as const;
export default function AI() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">
          AI & AUTOMATION / FROM IDEA TO USEFUL INTELLIGENCE
        </span>
        <h1>
          AI with a purpose.
          <br />
          <span>Built around your work.</span>
        </h1>
        <p>
          We design and build AI-powered systems that connect knowledge, tools,
          and people. From a focused assistant to an agentic workflow across
          your organization.
        </p>
        <Link className="btn" href="/contact?intent=ai">
          Explore your AI opportunity <ArrowUpRight size={18} />
        </Link>
      </section>
      <section className="container page-content">
        <div style={{ marginBottom: 32 }}>
          <AskButton />
        </div>
        <div className="feature-grid">
          {offerings.map(([Icon, t, d]) => (
            <article className="panel" key={t}>
              <Icon size={27} />
              <h3 style={{ marginTop: 24 }}>{t}</h3>
              <p>{d}</p>
              <span className="status-label">
                Custom discovery & development
              </span>
            </article>
          ))}
        </div>
        <div className="ai-feature" style={{ marginTop: 55 }}>
          <div>
            <span className="eyebrow">THE TECHNOLOGY FOLLOWS THE PROBLEM</span>
            <h2>
              Connect what matters.
              <br />
              Keep people in control.
            </h2>
            <p>
              Our architecture can combine LangGraph orchestration, Pinecone
              retrieval, OpenAI and Anthropic Claude models, and your approved
              business APIs. The stack is selected for the task, data
              requirements, cost, and operating constraints.
            </p>
          </div>
          <div className="ai-stack">
            <div>
              <span>
                <b>Discover & evaluate</b>
                <small>
                  Use case, data rights, baseline & success criteria
                </small>
              </span>
            </div>
            <div>
              <span>
                <b>Build & integrate</b>
                <small>
                  Knowledge pipelines, tools, permissions & approvals
                </small>
              </span>
            </div>
            <div>
              <span>
                <b>Test & improve</b>
                <small>
                  Grounding, security, cost, monitoring & human review
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="prose">
          <h2>From existing foundations to bespoke systems.</h2>
          <p>
            We can adapt a suitable AI foundation or build a new application
            around your workflows. Data preparation, ingestion, retrieval,
            integration, evaluation, and deployment are part of the project
            scope. Training or fine-tuning is considered only when justified by
            the task and supported by an approved dataset.
          </p>
          <h2>Responsible by design.</h2>
          <p>
            AI capability is measured against real requirements. We define who
            can access which knowledge, what an agent may do, when a human must
            approve, how uncertainty is handled, and what should happen when a
            provider or model fails. We do not promise perfect answers or
            autonomous high-impact decisions.
          </p>
          <p>
            Custom AI projects are separately scoped and quoted. Availability
            depends on the agreed data, provider access, integration
            permissions, and deployment environment.
          </p>
          <Link className="btn" href="/contact">
            Let’s design something useful <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
