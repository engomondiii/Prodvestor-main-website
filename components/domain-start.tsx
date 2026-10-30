"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function DomainStart() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  return (
    <div className="domain-start" id="domain-request">
      <span className="eyebrow">START WITH YOUR DOMAIN</span>
      <h3>Your next chapter starts with a name.</h3>
      <p>Choose your business address. Request availability and pricing, then start your website with Launchpad.</p>
      <form
        onSubmit={(e) => {
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
          router.push(`/contact?domain=${encodeURIComponent(name)}`);
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
        <button className="btn" type="submit">
          Request this domain ↗
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      <p id="domain-explanation" className="domain-disclosure">
        A request does not reserve the name. Registration is confirmed by our team after payment and successful registrar registration.
      </p>
      <div className="domain-offer"><strong>A domain. A website. A stronger start.</strong><p>Eligible businesses receive a scoped website build and basic brand identity at no build fee. Domain, renewal and ongoing service costs are separate.</p><a href="/launchpad">See what’s included in Launchpad ↗</a></div>
    </div>
  );
}
