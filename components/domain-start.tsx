"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function DomainStart() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  return (
    <div className="domain-start" id="domain-request">
      <span className="eyebrow">YOUR NAME. YOUR NEXT STEP.</span>
      <h3>Start with a domain that feels like your business.</h3>
      <p>
        Your domain is the address customers use to find your website, such as
        yourbusiness.com. Share the name you have in mind and we’ll help you
        review availability, registration costs and the next steps for
        Launchpad.
      </p>
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
          Request a domain review ↗
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      <p id="domain-explanation" style={{ marginTop: 18 }}>
        This starts an enquiry, not a live availability check or a reservation.
        Your domain is secured only after successful registration is confirmed.
        Registration and renewal fees are separate from the eligible website
        build.
      </p>
    </div>
  );
}
