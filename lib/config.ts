const configured = process.env.NEXT_PUBLIC_DASHBOARD_URL;
const deployedDashboard = "https://prodvestor-dashboard-production.up.railway.app";
export const dashboard =
  configured && /^https:\/\//.test(configured)
    ? configured.replace(/\/$/, "")
    : deployedDashboard;
export const startUrl = `${dashboard}/register`;
export const loginUrl = `${dashboard}/login`;
