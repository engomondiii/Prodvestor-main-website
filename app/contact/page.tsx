import { ContactForm } from "@/components/contact-form";
export const metadata = { title: "Let’s build your next chapter" };
export default function Contact() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">A CONVERSATION IS A GOOD BEGINNING</span>
        <h1>
          What’s your
          <br />
          <span>next big thing?</span>
        </h1>
        <p>
          Tell us about your business. From a first website to institutional
          software and custom AI. We’ll help define your scope and next steps.
        </p>
      </section>
      <section className="container page-content contact-grid">
        <div>
          <div className="panel">
            <h3>A team in your corner.</h3>
            <p>
              Starting your first website, modernizing a hospital or
              institution, planning an AI system, or looking for a stronger
              digital foundation? Let’s work out what makes sense for your
              business.
            </p>
            <a className="text-link" href="mailto:enquiries@prodvestor.com">
              enquiries@prodvestor.com ↗
            </a>
            <p>
              Official correspondence:{" "}
              <a href="mailto:info@prodvestor.com">info@prodvestor.com</a>
            </p>
            <p>
              Careers:{" "}
              <a href="mailto:career@prodvestor.com">career@prodvestor.com</a>
            </p>
            <p>
              Nairobi, Kenya
              <br />
              Working with ambitious businesses and institutions.
            </p>
          </div>
          <div className="notice" style={{ marginTop: 24 }}>
            While the self-service workspace is being connected, our team can
            guide your onboarding by email. Don’t include passwords, payment
            details, or identity documents in your enquiry.
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
