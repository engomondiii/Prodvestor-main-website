import { solutions } from "@/lib/solutions";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/launchpad",
    "/platform",
    "/mission",
    "/pricing",
    "/contact",
    "/docs",
    "/privacy",
    "/terms",
    "/solutions",
    "/ai",
    ...solutions.map((s) => "/solutions/" + s.slug),
  ].map((p) => ({
    url: "https://www.prodvestor.com" + p,
    changeFrequency: "monthly",
    priority: p ? 0.7 : 1,
  }));
}
