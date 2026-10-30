"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sparkles,
  X,
  ArrowUpRight,
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  FileText,
  Copy,
  Check,
  Square,
  RotateCcw,
} from "lucide-react";

type Task = "explore" | "domain" | "software" | "ai";
type Answer = {
  question: string;
  answer: string;
  mode: string;
  notice?: string;
  href?: string;
  title?: string;
  sources?: { title: string; marker: number }[];
};
const tasks = {
  explore: {
    label: "Find my starting point",
    icon: FileText,
    description: "Describe your business and what you want to achieve.",
    prompts: [
      "Which Prodvestor service is right for my business?",
      "What should I prepare for a first project?",
    ],
    href: "/contact",
    action: "Discuss your project",
  },
  domain: {
    label: "Domain & website",
    icon: Globe,
    description: "Understand registration, costs and the Launchpad offer.",
    prompts: [
      "Explain domain registration and what is included in Launchpad.",
      "Which website costs are separate from the free build?",
    ],
    href: "/launchpad#domain-request",
    action: "Request your domain",
  },
  software: {
    label: "Business software",
    icon: Layers,
    description:
      "Explore systems for your organization and everyday workflows.",
    prompts: [
      "What can you build for a school or university?",
      "Can you connect our existing systems instead of replacing them?",
    ],
    href: "/solutions",
    action: "Explore industry solutions",
  },
  ai: {
    label: "AI & automation",
    icon: Workflow,
    description:
      "Explore assistants, document intelligence and approved workflows.",
    prompts: [
      "How could an AI assistant use our company documents?",
      "What is involved in building an agentic AI workflow?",
    ],
    href: "/ai",
    action: "Explore AI services",
  },
};
export function AskButton({
  question = "",
  label = "Ask Prodvestor AI",
  compact = false,
}: {
  question?: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      className={compact ? "ai-nav-entry" : "ask-inline"}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("prodvestor:ask", { detail: question }),
        )
      }
    >
      <Sparkles size={16} />
      {label}
      {!compact && <ArrowUpRight size={16} />}
    </button>
  );
}
export function AIEntry() {
  return (
    <section
      className="ai-entry container"
      aria-label="Explore with Prodvestor AI"
    >
      <div className="ai-entry-copy">
        <span className="eyebrow">
          <Sparkles size={15} /> PRODVESTOR AI
        </span>
        <h2>
          Start with a question.
          <br />
          Leave with a clearer next step.
        </h2>
        <p>
          Explore your options, understand the costs, or shape your project
          brief. No account needed.
        </p>
      </div>
      <div className="ai-entry-controls">
        <button
          className="ai-entry-input"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("prodvestor:ask", { detail: "" }),
            )
          }
        >
          <span>What would you like to build?</span>
          <ArrowRight size={21} />
        </button>
        <div>
          <AskButton
            label="Understand Launchpad"
            question={tasks.domain.prompts[0]}
          />
          <AskButton
            label="Explore custom software"
            question="What software could help my organization?"
          />
        </div>
        <span className="ai-entry-note">
          Public company knowledge · You choose what to share
        </span>
      </div>
    </section>
  );
}
function inferTask(question: string, path: string): Task {
  if (
    /domain|launchpad|website|registration/i.test(question) ||
    path === "/launchpad"
  )
    return "domain";
  if (/\bai\b|agent|automat/i.test(question) || path === "/ai") return "ai";
  if (
    /software|school|hospital|universit|institution/i.test(question) ||
    path.startsWith("/solutions")
  )
    return "software";
  return "explore";
}
export function AskProdvestor() {
  const path = usePathname(),
    router = useRouter();
  const [open, setOpen] = useState(false),
    [draft, setDraft] = useState(""),
    [task, setTask] = useState<Task>("explore"),
    [answers, setAnswers] = useState<Answer[]>([]),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [copied, setCopied] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    input = useRef<HTMLTextAreaElement>(null),
    result = useRef<HTMLElement>(null),
    controller = useRef<AbortController | null>(null),
    pending = useRef(false);
  const latest = answers.at(-1);
  const context =
    path === "/launchpad"
      ? "Launchpad"
      : path.startsWith("/solutions")
        ? "Industry solutions"
        : path === "/ai"
          ? "AI & automation"
          : "Prodvestor services";
  useEffect(() => {
    const show = (event: Event) => {
      const question = (event as CustomEvent<string>).detail || "";
      setTask(inferTask(question, path));
      setDraft(question);
      setError("");
      setOpen(true);
    };
    const shortcut = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k" &&
        !event.repeat
      ) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("prodvestor:ask", show);
    window.addEventListener("keydown", shortcut);
    return () => {
      window.removeEventListener("prodvestor:ask", show);
      window.removeEventListener("keydown", shortcut);
    };
  }, [path]);
  useEffect(() => {
    if (!open) {
      dialog.current?.close();
      controller.current?.abort();
      return;
    }
    dialog.current?.showModal();
    input.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  useEffect(() => {
    if (latest && open)
      result.current?.scrollIntoView({ block: "start", behavior: "auto" });
  }, [answers]);
  function choose(next: Task) {
    setTask(next);
    setDraft("");
    setError("");
    input.current?.focus();
  }
  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (pending.current || text.length < 3) return;
    pending.current = true;
    setBusy(true);
    setError("");
    setCopied(false);
    const abort = new AbortController();
    controller.current = abort;
    const timeout = setTimeout(() => abort.abort("timeout"), 60000);
    const history = answers.slice(-3).flatMap((a) => [
      { role: "user", content: a.question },
      { role: "assistant", content: a.answer.slice(0, 2500) },
    ]);
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
        signal: abort.signal,
      });
      const d = await r.json();
      if (!r.ok)
        throw new Error(
          d.detail ||
            "Your answer could not be prepared. Try again or contact the team.",
        );
      setAnswers((prev) => [
        ...prev,
        {
          question: text,
          answer: d.answer,
          mode: d.mode,
          notice: d.notice,
          href: d.href,
          title: d.title,
          sources: d.sources,
        },
      ]);
      setDraft("");
    } catch (e) {
      if (abort.signal.aborted)
        setError(
          abort.signal.reason === "timeout"
            ? "The request timed out. You can try again or contact the team."
            : "Request stopped. You can edit your question and try again.",
        );
      else setError((e as Error).message);
    } finally {
      clearTimeout(timeout);
      pending.current = false;
      setBusy(false);
      controller.current = null;
    }
  }
  async function copyAnswer() {
    if (!latest) return;
    try {
      await navigator.clipboard.writeText(
        `${latest.mode === "ai" ? "AI-generated guidance — verify with Prodvestor" : "Published Prodvestor service guide"}\n\n${latest.question}\n\n${latest.answer}`,
      );
      setCopied(true);
    } catch {
      setError("Copy was unavailable. Select the answer text to copy it.");
    }
  }
  function useBrief() {
    if (!latest) return;
    try {
      sessionStorage.setItem(
        "prodvestor:brief",
        `Project enquiry: ${latest.question}\n\n${latest.mode === "ai" ? "AI-generated guidance for review (not an agreed scope)" : "Published guidance for reference"}:\n${latest.answer}`,
      );
      window.dispatchEvent(new Event("prodvestor:brief-ready"));
      setOpen(false);
      router.push("/contact?intent=ai-brief");
    } catch {
      setError(
        "Could not prepare the brief. Copy the answer and paste it into the contact form.",
      );
    }
  }
  return (
    <dialog
      ref={dialog}
      className="ai-workspace"
      aria-labelledby="ai-workspace-title"
      onCancel={() => setOpen(false)}
      onClose={() => setOpen(false)}
      onClick={(e) => {
        if (e.target === dialog.current) setOpen(false);
      }}
    >
      <div className="ai-workspace-frame">
        <header className="ai-workspace-header">
          <div>
            <Sparkles size={21} />
            <strong id="ai-workspace-title">Prodvestor AI</strong>
            <span>Explore. Understand. Plan.</span>
          </div>
          <button
            className="ai-icon-button"
            aria-label="Close AI workspace"
            onClick={() => setOpen(false)}
          >
            <X size={21} />
          </button>
        </header>
        <div className="ai-workspace-grid">
          <aside className="ai-task-list">
            <span className="eyebrow">WHAT ARE YOU WORKING ON?</span>
            {(Object.keys(tasks) as Task[]).map((key) => {
              const Icon = tasks[key].icon;
              return (
                <button
                  key={key}
                  aria-pressed={task === key}
                  onClick={() => choose(key)}
                  disabled={busy}
                >
                  <Icon size={18} />
                  {tasks[key].label}
                  <ArrowRight size={15} />
                </button>
              );
            })}
            <div className="ai-scope">
              <strong>Public company knowledge</strong>
              <p>
                Explore services without signing in. Private workspace records
                and account details are not accessed here.
              </p>
              <a href="/contact" onClick={() => setOpen(false)}>
                Talk to the team ↗
              </a>
            </div>
          </aside>
          <div className="ai-workspace-main">
            <div className="ai-workspace-scroll">
              <div className="ai-context">
                Browsing: {context}
                <span>Questions stay in this tab until cleared</span>
              </div>
              {!latest ? (
                <div className="ai-welcome">
                  <span className="eyebrow">A CLEARER START</span>
                  <h2>
                    What would you
                    <br />
                    like to make possible?
                  </h2>
                  <p>{tasks[task].description}</p>
                  <div className="ai-question-options">
                    {tasks[task].prompts.map((question) => (
                      <button
                        key={question}
                        onClick={() => {
                          setDraft(question);
                          input.current?.focus();
                        }}
                      >
                        {question}
                        <ArrowUpRight size={17} />
                      </button>
                    ))}
                  </div>
                  <p className="ai-availability-note">
                    When live AI is unavailable, answers are labelled as
                    published service guides.
                  </p>
                </div>
              ) : (
                <>
                  {answers.length > 1 && (
                    <details className="ai-history">
                      <summary>
                        Earlier questions ({answers.length - 1})
                      </summary>
                      {answers.slice(0, -1).map((answer, i) => (
                        <article key={i}>
                          <strong>{answer.question}</strong>
                          <p>{answer.answer}</p>
                        </article>
                      ))}
                    </details>
                  )}
                  <article ref={result} className="ai-result">
                    <div className="ai-result-label">
                      <Sparkles size={14} />
                      {latest.mode === "ai"
                        ? "AI-generated guidance"
                        : "Published service guide"}
                    </div>
                    <h2>{latest.question}</h2>
                    {latest.notice && (
                      <p className="ai-availability-note">{latest.notice}</p>
                    )}
                    <div className="ai-answer-text">{latest.answer}</div>
                    {(latest.sources?.length || latest.href) && (
                      <details className="ai-sources">
                        <summary>
                          Sources & further reading{" "}
                          {latest.sources?.length
                            ? `(${latest.sources.length})`
                            : ""}
                        </summary>
                        {latest.sources?.map((source) => (
                          <p key={source.marker}>
                            [{source.marker}] {source.title}
                          </p>
                        ))}
                        {latest.href && (
                          <a href={latest.href} onClick={() => setOpen(false)}>
                            {latest.title} ↗
                          </a>
                        )}
                      </details>
                    )}
                    <div className="ai-result-tools">
                      <button onClick={copyAnswer}>
                        {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
                        {copied ? "Copied" : "Copy answer"}
                      </button>
                      <button
                        onClick={() => {
                          setDraft(latest.question);
                          input.current?.focus();
                        }}
                      >
                        <RotateCcw size={16} /> Edit question
                      </button>
                    </div>
                    <div className="ai-next-step">
                      <span className="eyebrow">YOUR NEXT STEP</span>
                      <a
                        href={latest.href || tasks[task].href}
                        onClick={() => setOpen(false)}
                      >
                        {latest.title || tasks[task].action}
                        <ArrowUpRight size={17} />
                      </a>
                      <button onClick={useBrief}>
                        Use this in a project enquiry <ArrowRight size={17} />
                      </button>
                      <small>
                        You can edit the enquiry before sending. Nothing is
                        submitted automatically.
                      </small>
                    </div>
                  </article>
                  <div className="ai-followups">
                    {tasks[task].prompts
                      .filter((q) => !answers.some((a) => a.question === q))
                      .map((question) => (
                        <button
                          key={question}
                          disabled={busy}
                          onClick={() => {
                            setDraft(question);
                            input.current?.focus();
                          }}
                        >
                          {question}
                          <ArrowUpRight size={15} />
                        </button>
                      ))}
                  </div>
                </>
              )}
            </div>
            <form className="ai-question-form" onSubmit={send}>
              <label htmlFor="ai-question">
                {latest
                  ? "Ask a follow-up or explore another question"
                  : "Your question"}
              </label>
              <textarea
                id="ai-question"
                ref={input}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={2}
                minLength={3}
                maxLength={2000}
                required
                placeholder="Describe your business, your goal, or what you need help understanding…"
              />
              <div className="ai-compose-actions">
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => {
                    setAnswers([]);
                    setError("");
                    setDraft("");
                    setCopied(false);
                  }}
                >
                  Clear session
                </button>
                {busy ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => controller.current?.abort()}
                  >
                    <Square size={13} /> Stop request
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn"
                    disabled={draft.trim().length < 3}
                  >
                    Explore with AI <ArrowRight size={17} />
                  </button>
                )}
              </div>
              <div role="status" className="ai-request-status">
                {busy ? "Preparing your answer…" : ""}
              </div>
              {error && (
                <p className="error" role="alert">
                  {error}
                </p>
              )}
              <p className="ai-question-privacy">
                No passwords or sensitive records. Messages may be processed by
                AI providers. <a href="/privacy">Privacy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}
