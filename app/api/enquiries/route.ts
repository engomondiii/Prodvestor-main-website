import { NextRequest, NextResponse } from "next/server";
export async function POST(r: NextRequest) {
  const allowed = new Set(
    [r.nextUrl.origin, process.env.PUBLIC_ORIGIN].filter(Boolean),
  );
  if (!allowed.has(r.headers.get("origin") || ""))
    return NextResponse.json(
      { detail: "Request origin rejected." },
      { status: 403 },
    );
  const base = process.env.CORE_API_URL;
  if (!base)
    return NextResponse.json(
      {
        detail:
          "Online enquiries are being connected. Please email enquiries@prodvestor.com.",
      },
      { status: 503 },
    );
  const body = await r.text();
  if (body.length > 15000)
    return NextResponse.json({ detail: "Enquiry too long." }, { status: 413 });
  try {
    const response = await fetch(base.replace(/\/$/, "") + "/api/enquiries/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
    return NextResponse.json(await response.json(), {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        detail:
          "We could not save your enquiry right now. Please email enquiries@prodvestor.com.",
      },
      { status: 503 },
    );
  }
}
