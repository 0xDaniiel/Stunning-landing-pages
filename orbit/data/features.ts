export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string; // hugeicons icon name
};

export const features: Feature[] = [
  {
    id: "automation",
    title: "Smart Automation",
    description:
      "Set it once — Orbit handles the repetitive work across every connected tool, automatically.",
    icon: "Robot01Icon",
  },
  {
    id: "realtime",
    title: "Real-time Sync",
    description:
      "Every update propagates instantly. No stale data, no manual refreshes, no waiting.",
    icon: "RefreshIcon",
  },
  {
    id: "integrations",
    title: "100+ Integrations",
    description:
      "Connect the tools your team already uses — Slack, Notion, GitHub, and more, natively.",
    icon: "PlugSocketIcon",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description:
      "SOC 2 compliant, end-to-end encrypted, with granular permission controls built in.",
    icon: "ShieldKeyIcon",
  },
  {
    id: "analytics",
    title: "Actionable Insights",
    description:
      "See exactly where time is saved and where bottlenecks live, with live dashboards.",
    icon: "ChartLineData01Icon",
  },
  {
    id: "scale",
    title: "Built to Scale",
    description:
      "From a 3-person team to 3,000 — Orbit's infrastructure grows with you, no migration needed.",
    icon: "RocketIcon",
  },
];
