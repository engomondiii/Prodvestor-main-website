const configured = process.env.NEXT_PUBLIC_DASHBOARD_URL;
export const dashboard =
  configured && /^https:\/\//.test(configured)
    ? configured.replace(/\/$/, "")
    : "";
export const startUrl = dashboard
  ? `${dashboard}/register`
  : "/contact?intent=launchpad";
export const loginUrl = dashboard
  ? `${dashboard}/login`
  : "/contact?intent=workspace";
