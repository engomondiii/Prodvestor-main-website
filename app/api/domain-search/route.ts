import { NextRequest, NextResponse } from "next/server";
export async function POST(r: NextRequest) {
  const origin = process.env.PUBLIC_ORIGIN || "https://www.prodvestor.com";
  if (r.headers.get("origin") !== origin)
    return NextResponse.json(
      { detail: "Request origin rejected." },
      { status: 403 },
    );
  const base = process.env.CORE_API_URL || "https://prodvestor-core-production.up.railway.app";
  if (!base)
    return NextResponse.json(
      {
        detail:
          "Live domain search is being connected. You can request an availability review from our team below.",
      },
      { status: 503 },
    );
  const body = await r.text();
  if (body.length > 1000)
    return NextResponse.json(
      { detail: "Enter one domain name." },
      { status: 413 },
    );
  try {
    const response = await fetch(
      base.replace(/\/$/, "") + "/api/domain-search/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        signal: AbortSignal.timeout(35000),
        redirect: "error",
        cache: "no-store",
      },
    );
    return NextResponse.json(await response.json(), {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        detail:
          "Domain search is temporarily unavailable. Please try again or request a team review.",
      },
      { status: 503 },
    );
  }
}
