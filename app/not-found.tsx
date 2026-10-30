import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero container">
      <span className="eyebrow">404 / A DIFFERENT PATH</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>This page has moved or doesn’t exist.</p>
      <Link className="btn" href="/">
        Back to home ↗
      </Link>
    </section>
  );
}
