import type { NextConfig } from "next";
const config: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async rewrites() {
    return {beforeFiles: [{source: "/api/ask", destination: "https://prodvestor-dashboard-production.up.railway.app/app/api/public-ai"}, {
      source: "/app/:path*",
      destination: "https://prodvestor-dashboard-production.up.railway.app/app/:path*",
    }]};
  },
  async redirects() {
    return [
      {
        source: "/services/:path*",
        destination: "/solutions",
        permanent: true,
      },
      { source: "/about", destination: "/mission", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/blog/:path*", destination: "/docs", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ];
  },
};
export default config;
