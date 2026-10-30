"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, ArrowUpRight, Send } from "lucide-react";
type Message = {
  role: "user" | "assistant";
  content: string;
  mode?: string;
  notice?: string;
  href?: string;
  title?: string;
  sources?: { title: string; marker: number }[];
};
export function AskButton({ question = "" }: { question?: string }) {
  return (
    <button
      className="ask-inline"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("prodvestor:ask", { detail: question }),
        )
      }
    >
      <MessageCircle size={20} /> Ask Prodvestor AI <ArrowUpRight size={17} />
    </button>
  );
}
export function AskProdvestor() {
  const [open, setOpen] = useState(false),
    [draft, setDraft] = useState(""),
    [messages, setMessages] = useState<Message[]>([]),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const input = useRef<HTMLTextAreaElement>(null),
    transcript = useRef<HTMLDivElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const show = (question = "") => {
    previousFocus.current = document.activeElement as HTMLElement;
    setOpen(true);
    setDraft(question);
  };
  const close = () => {
    setOpen(false);
    (previousFocus.current || trigger.current)?.focus();
  };
  useEffect(() => {
    const listener = (event: Event) =>
      show((event as CustomEvent<string>).detail || "");
    window.addEventListener("prodvestor:ask", listener);
    return () => window.removeEventListener("prodvestor:ask", listener);
  }, []);
  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);
  useEffect(() => {
    transcript.current?.scrollTo({
      top: transcript.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);
  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (busy || text.length < 3) return;
    const history = messages
      .slice(-8)
      .map(({ role, content }) => ({ role, content }));
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setDraft("");
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
        signal: AbortSignal.timeout(60000),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.detail || "Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: d.answer,
          mode: d.mode,
          notice: d.notice,
          href: d.href,
          title: d.title,
          sources: d.sources,
        },
      ]);
    } catch (e) {
      setError(
        (e as Error).name === "TimeoutError"
          ? "This is taking longer than expected. Please try again or contact the team."
          : (e as Error).message,
      );
      setDraft(text);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <button
        ref={trigger}
        className="ask-launcher"
        aria-expanded={open}
        aria-controls="prodvestor-chat"
        onClick={() => (open ? close() : show())}
      >
        <MessageCircle size={22} />
        <span>Ask Prodvestor AI</span>
        {open && <X size={18} />}
      </button>
      {open && (
        <section
          id="prodvestor-chat"
          className="ask-panel"
          role="dialog"
          aria-label="Ask Prodvestor AI"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              close();
            }
          }}
        >
          <header>
            <div>
              <strong>Ask Prodvestor AI</strong>
              <span>Your guide to getting started</span>
            </div>
            <button aria-label="Close assistant" onClick={close}>
              <X />
            </button>
          </header>
          <div
            className="ask-transcript"
            ref={transcript}
            aria-live="polite"
            aria-relevant="additions"
          >
            <div className="ask-message">
              <strong>What would you like to build?</strong>
              <p>
                Explore services, understand the domain process, or find a
                starting point for your project. No account needed.
              </p>
              <p className="ask-disclosure">
                Live AI requires a connection. If it is unavailable, we show
                clearly labelled published guides. AI answers may need
                confirmation from our team.
              </p>
            </div>
            {messages.length === 0 && (
              <div className="ask-prompts">
                {[
                  "How does domain registration work?",
                  "What is included in Launchpad?",
                  "I need a system for my institution",
                  "Can you build AI for my business?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setDraft(q);
                      input.current?.focus();
                    }}
                  >
                    {q}
                    <ArrowUpRight size={16} />
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={"ask-message " + m.role}>
                <strong>
                  {m.role === "user"
                    ? "You"
                    : m.mode === "guide"
                      ? "Published service guide"
                      : "Prodvestor AI"}
                </strong>
                {m.notice && <p className="ask-disclosure">{m.notice}</p>}
                <p>{m.content}</p>
                {m.href && <a href={m.href}>{m.title} ↗</a>}
                {!!m.sources?.length && (
                  <details>
                    <summary>Sources</summary>
                    {m.sources.map((s) => (
                      <p key={s.marker}>
                        [{s.marker}] {s.title}
                      </p>
                    ))}
                  </details>
                )}
              </div>
            ))}
            {busy && <p role="status">Preparing your answer…</p>}
          </div>
          <form onSubmit={send} className="ask-compose">
            <label htmlFor="ask-message">Your question</label>
            <textarea
              id="ask-message"
              ref={input}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={2}
              minLength={3}
              maxLength={2000}
              required
              placeholder="Tell us what you need help with…"
            />
            <div>
              <button
                type="button"
                onClick={() => {
                  setMessages([]);
                  setError("");
                }}
                disabled={busy}
              >
                Clear chat
              </button>
              <button
                className="btn"
                type="submit"
                disabled={busy || draft.trim().length < 3}
              >
                Send <Send size={17} />
              </button>
            </div>
            {error && <p role="alert">{error}</p>}
            <p>
              Do not share passwords or sensitive records. Messages may be
              processed by AI providers. <a href="/privacy">Privacy</a> ·{" "}
              <a href="/contact">Talk to a person</a>
            </p>
          </form>
        </section>
      )}
    </>
  );
}
