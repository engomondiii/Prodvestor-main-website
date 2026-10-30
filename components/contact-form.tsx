"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function ContactForm() {
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const f = new FormData(form);
      const r = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(f)),
      });
      const d = await r.json();
      if (!r.ok)
        throw new Error(
          typeof d.detail === "string" ? d.detail : JSON.stringify(d),
        );
      setNotice(d.detail);
      form.reset();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="form-stack" onSubmit={submit}>
      <label>
        Your name
        <input name="name" autoComplete="name" required maxLength={100} />
      </label>
      <label>
        Business or institution
        <input
          name="business"
          autoComplete="organization"
          required
          maxLength={160}
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={150}
        />
      </label>
      <label>
        What are you building?
        <textarea
          name="brief"
          required
          minLength={30}
          maxLength={5000}
          placeholder="Tell us about your organization, the problem you want to solve, and the systems you have in mind."
        />
      </label>
      <p style={{ fontSize: 11, margin: 0 }}>
        We use these details to respond to your enquiry. Please don’t include
        passwords, payment details, or identity documents.{" "}
        <a href="/privacy">Privacy information ↗</a>
      </p>
      {error && (
        <div className="error" role="alert">
          {error} <a href="mailto:enquiries@prodvestor.com">Email the team ↗</a>
        </div>
      )}
      {notice && (
        <div className="notice" role="status">
          {notice}
        </div>
      )}
      <button className="btn" disabled={busy}>
        {busy ? "Sending…" : "Send your enquiry"}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
