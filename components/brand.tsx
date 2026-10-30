import Link from "next/link";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Prodvestor home">
      <span className="brand-mark" aria-hidden="true">
        p<span>↗</span>
      </span>
      <span>
        prodvestor<span className="brand-sub">NETWORK</span>
      </span>
    </Link>
  );
}
