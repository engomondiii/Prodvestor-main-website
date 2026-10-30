export const metadata = { title: "Domain registration | Prodvestor" };
export default function DomainTerms() {
  return (
    <section className="section container">
      <span className="eyebrow">DOMAIN REGISTRATION</span>
      <h1>A clear agreement for your domain.</h1>
      <div style={{ maxWidth: 760 }}>
        <h2>Availability and ownership</h2>
        <p>
          A search is a point-in-time check, not a reservation. Payment starts a
          registration request. The domain belongs to the named registrant only
          after the registrar and registry successfully register it. Some
          extensions require additional checks and may take longer.
        </p>
        <h2>Your details and registrar</h2>
        <p>
          Provide accurate legal owner, address and contact information. We
          share these details with our registrar partner, Openprovider, and the
          relevant registry to process registration and verification. Complete
          any verification emails promptly. Inaccurate or unverified details can
          lead to suspension.
        </p>
        <h2>Price and renewal</h2>
        <p>
          Checkout shows the amount charged for one year and the current renewal
          estimate. The payable quote expires after ten minutes. Renewal prices
          can change. Automatic renewal is currently off: contact
          enquiries@prodvestor.com before expiry to arrange renewal. Website
          build eligibility does not remove domain, renewal or ongoing service
          charges.
        </p>
        <h2>Failed or uncertain registration</h2>
        <p>
          Payment is not proof of ownership. If registration cannot be
          confirmed, we reconcile with the registrar before retrying or
          resolving your payment. Confirmed failed registrations are eligible
          for return of the domain purchase amount to your wallet; contact the
          team for original-payment-method refund requests. Successfully
          registered domains generally incur non-recoverable third-party
          charges, subject to applicable rights.
        </p>
        <h2>Transfer, DNS and support</h2>
        <p>
          Contact enquiries@prodvestor.com for DNS changes, renewal, ownership
          corrections, transfers or registration concerns. Registry restrictions
          and transfer locks may apply. These operations are assisted by our
          team; they are not yet self-service in the dashboard.
        </p>
        <p>
          Registration also depends on the applicable registrar and registry
          terms. Review{" "}
          <a href="https://www.openprovider.com/company/policies">
            Openprovider’s legal terms
          </a>{" "}
          before purchasing. Contact{" "}
          <a href="mailto:enquiries@prodvestor.com">enquiries@prodvestor.com</a>{" "}
          for clarification.
        </p>
      </div>
    </section>
  );
}
