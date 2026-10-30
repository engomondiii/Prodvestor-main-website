import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { publicGuide } from "@/lib/public-guide";
export const runtime = "nodejs";
export async function POST(r: NextRequest) {
  if (
    r.headers.get("origin") !== (process.env.PUBLIC_ORIGIN || (process.env.NODE_ENV === "production" ? "https://www.prodvestor.com" : r.nextUrl.origin))
  )
    return NextResponse.json(
      { detail: "Request origin rejected." },
      { status: 403 },
    );
  const raw = await r.text();
  if (raw.length > 18000)
    return NextResponse.json(
      { detail: "Please shorten your message." },
      { status: 413 },
    );
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ detail: "Invalid message." }, { status: 400 });
  }
  if (
    typeof body?.message !== "string" ||
    body.message.trim().length < 3 ||
    body.message.length > 2000
  )
    return NextResponse.json(
      { detail: "Please enter between 3 and 2,000 characters." },
      { status: 400 },
    );
  const base = process.env.PUBLIC_AGENTS_API_URL;
  const key = process.env.PUBLIC_AI_GATEWAY_KEY;
  const fallback = () =>
    NextResponse.json(
      {
        ...publicGuide(body.message),
        mode: "guide",
        notice:
          "Live AI is not available right now. This is a published service guide, not an AI-generated answer.",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  if (!base || !key) return fallback();
  // Deployment ingress must overwrite this header. Global gateway quota also bounds abuse.
  const ip = (r.headers.get("x-forwarded-for") || "unknown")
    .split(",")[0]
    .trim();
  const visitor = createHmac("sha256", key).update(ip).digest("hex");
  try {
    const response = await fetch(base.replace(/\/$/, "") + "/public/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Public-AI-Key": key,
        "X-Visitor-ID": visitor,
      },
      body: JSON.stringify({
        message: body.message,
        history: Array.isArray(body.history) ? body.history.slice(-8) : [],
      }),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(55000),
    });
    if (response.status === 429)
      return NextResponse.json(
        {
          detail:
            "The public AI limit has been reached. Please explore the service pages or contact our team.",
        },
        { status: 429 },
      );
    if (!response.ok) return fallback();
    const data = await response.json();
    return NextResponse.json(
      { ...data, mode: "ai" },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return fallback();
  }
}
