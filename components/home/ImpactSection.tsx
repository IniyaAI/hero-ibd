import { StatsBar } from "../ui/StatCard";

const stats = [
  { value: "162,347+", label: "People Reached" },
  { value: "15+", label: "Events Hosted" },
  { value: "3+", label: "Communities Engaged" },
  { value: "$1,500+", label: "Funds Raised" },
];

export function ImpactSection() {
  return <StatsBar stats={stats} />;
}
