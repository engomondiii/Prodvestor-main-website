export const metadata = { title: "Your data. Handled with care." };
export default function Page() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">PRODVESTOR / PRIVACY</span>
        <h1>Your data. Handled with care.</h1>
      </section>
      <section className="container page-content">
        <div className="prose">
          <h2>Who we are</h2>
          <p>
            Prodvestor LTD, Nairobi, Kenya. Contact info@prodvestor.com for
            privacy questions or requests.
          </p>
          <h2>What we collect</h2>
          <p>
            Enquiries store the name, business or institution, email, and
            project description you submit so our team can respond. A connected
            workspace stores your name, email, business information, project
            briefs, messages, files, domain orders, governance settings, and
            transaction records. Business verification is handled by authorized
            staff; do not send identity documents through the general enquiry
            form.
          </p>
          <h2>Why we use it</h2>
          <p>
            We use these records to provide requested services, manage accounts
            and projects, prevent abuse, maintain payment and audit records, and
            respond to support requests. Additional services may require
            separate disclosures and consent.
          </p>
          <h2>Payments and providers</h2>
          <p>
            Payment card details are handled by the payment provider on its
            hosted checkout, rather than stored on Prodvestor servers. Provider
            references and verified transaction results are recorded in the
            workspace. Hosting, domain, email, and other necessary providers may
            process data to deliver a service.
          </p>
          <h2>Your choices</h2>
          <p>
            Contact us to request access, correction, deletion, or an
            explanation of processing. Some financial or security records may
            need to be retained for lawful obligations. We will explain any
            applicable retention requirements. Service-specific retention and
            residency terms must be agreed before activation.
          </p>
          <h2>Cookies and security</h2>
          <p>
            The dashboard uses an essential secure session cookie for sign-in.
            The public site does not add advertising trackers. No specific
            data-residency guarantee applies unless it is explicitly included in
            your service agreement and technically enforced.
          </p>
        </div>
      </section>
    </>
  );
}
