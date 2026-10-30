# Prodvestor Network — public website

Complete replacement of the previous software-agency frontend with a Next.js website based on the v6 mission and Launchpad offer. This remains the existing `engomondiii/Prodvestor-main-website` repository and uses `main`, as requested by the owner.

Design: forest green, warm ivory, lime, editorial typography, and a code-native network illustration. Routes cover home, Launchpad, platform readiness, mission, pricing, resources, contact, privacy, and terms. No fabricated testimonials or customer metrics are carried forward.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

`NEXT_PUBLIC_DASHBOARD_URL` should be the deployed dashboard’s HTTPS origin. It is a build-time public variable; rebuild when changing it. When unset, account links use the deployed Railway dashboard. Sign-in and registration never fall back to the enquiry form. The enquiry form posts through a server-side route to Django. If the backend is unavailable, it gives an honest error and a direct email fallback.

Vercel configuration is in vercel.json. Build: npm run build; install: npm ci; framework: Next.js; output: .next. Align any old Create React App project override if needed. Railway Dockerfile and railway.json are included for the later migration. Do not put backend or AI keys into this public repository.

Private implementation and operational docs are in `engomondiii/prodvestor-core`; the company knowledge corpus and ingestion commands are in `engomondiii/prodvestor-agents`. Customer-facing service availability is intentionally truthful: roadmap infrastructure and credit products are not shown as active.

Brand and customer-facing policy text are based on the owner-supplied product specification and need normal company review before broader commercial use. No certification, licensed-credit, uptime, or region-residency claim is implied by the interface.

## Existing Vercel deployment repository

The active Vercel project is linked to `engomondiii/prodvestor-cicd-main-website`, not the public companion repository. This same tested frontend has been applied to both main branches. Use `prodvestor-cicd-main-website` as the frontend source when connecting Railway to preserve the existing deployment lineage. The public `Prodvestor-main-website` copy is a companion snapshot; cross-repository synchronization is not automated.

## Readability and public guidance

The website uses self-hosted Inter Variable, 16px body descriptions, 17px introduction copy and 14px controls. The integrated Prodvestor AI workspace lives in the root layout. `/api/ask` proxies to the agent gateway when configured, otherwise returns explicitly labelled published service guides. No visitor login is required; private workspace context is never forwarded. Domain searches use the core registrar adapter when configured. Unconfigured search offers a team-review route. Availability does not reserve a name. See docs/AI-EXPERIENCE.md for research and the core repository’s docs/DOMAIN-RESELLER.md for reseller activation.

Set server-only `PUBLIC_AGENTS_API_URL` and `PUBLIC_AI_GATEWAY_KEY`, plus the canonical `PUBLIC_ORIGIN`. See the agents repository `docs/PUBLIC-WEBSITE-AI.md` for connectivity, public quotas, corpus ingestion and privacy details. Live AI is not activated by the frontend alone.
