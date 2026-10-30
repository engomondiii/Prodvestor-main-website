"use client";
import { AskButton } from "./ask-prodvestor";
import { dashboard } from "@/lib/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function DomainStart() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{
    domain: string;
    available: boolean;
    purchasable: boolean;
    environment: string;
    amount: number;
    renewal_amount: number;
    currency: string;
  } | null>(null);
  const router = useRouter();
  return (
    <div className="domain-start" id="domain-request">
      <span className="eyebrow">START WITH YOUR DOMAIN</span>
      <h3>Your next chapter starts with a name.</h3>
      <p>
        Choose your business address. Check availability, see your options, then
        start your website with Launchpad.
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const name = domain.trim().toLowerCase();
          if (
            !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(
              name,
            )
          ) {
            setError(
              "Enter a domain such as yourbusiness.com, without https:// or a page address.",
            );
            return;
          }
          setBusy(true);
          setError("");
          setResult(null);
          try {
            const response = await fetch("/api/domain-search", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ domain: name }),
            });
            const data = await response.json();
            if (!response.ok)
              throw new Error(data.detail || "Search unavailable.");
            setResult(data);
          } catch (e) {
            setError((e as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <label htmlFor="preferred-domain">
          Your preferred domain
          <input
            id="preferred-domain"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
              setError("");
              setResult(null);
            }}
            placeholder="yourbusiness.com"
            maxLength={253}
            required
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            aria-describedby="domain-explanation"
          />
        </label>
        <button className="btn" type="submit" disabled={busy}>
          {busy ? "Checking availability…" : "Check availability ↗"}
        </button>
      </form>
      {error && (
        <div role="alert" className="domain-search-result">
          <p>{error}</p>
          <button
            className="ask-inline"
            onClick={() =>
              router.push(
                `/contact?domain=${encodeURIComponent(domain.trim())}`,
              )
            }
          >
            Request a team review ↗
          </button>
        </div>
      )}
      {result && (
        <div className="domain-search-result" role="status">
          <strong>
            {result.domain} —{" "}
            {result.available ? "available at this check" : "not available"}
          </strong>
          {result.environment !== "live" && (
            <p>
              Sandbox result only. This does not confirm real-world
              availability.
            </p>
          )}
          {result.available && result.purchasable ? (
            <>
              <p>
                One year:{" "}
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: result.currency,
                }).format(
                  result.amount /
                    (["UGX", "RWF"].includes(result.currency) ? 1 : 100),
                )}
                . Current annual renewal:{" "}
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: result.currency,
                }).format(
                  result.renewal_amount /
                    (["UGX", "RWF"].includes(result.currency) ? 1 : 100),
                )}
                . Renewal prices may change.
              </p>
              <a
                className="btn"
                href={
                  dashboard
                    ? `${dashboard}/domains?domain=${encodeURIComponent(result.domain)}`
                    : `/contact?domain=${encodeURIComponent(result.domain)}`
                }
              >
                Continue to registration ↗
              </a>
            </>
          ) : result.available ? (
            <p>
              This name requires a team quote before purchase.{" "}
              <a href={`/contact?domain=${encodeURIComponent(result.domain)}`}>
                Request a quote ↗
              </a>
            </p>
          ) : (
            <p>Try another name or extension.</p>
          )}
        </div>
      )}
      <p id="domain-explanation" className="domain-disclosure">
        Availability can change. A search does not reserve the name. Ownership
        is confirmed only after payment and successful registrar registration.
      </p>
      <AskButton
        label="Explain the domain process"
        question="Explain domain registration and what is included in Launchpad."
      />
      <div className="domain-offer">
        <strong>A domain. A website. A stronger start.</strong>
        <p>
          Eligible businesses receive a scoped website build and basic brand
          identity at no build fee. Domain, renewal and ongoing service costs
          are separate.
        </p>
        <a href="/launchpad">See what’s included in Launchpad ↗</a>
      </div>
    </div>
  );
}
