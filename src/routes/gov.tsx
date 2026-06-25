import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { BangladeshMap } from "../components/site/bangladesh-map";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/gov")({
  head: () => ({
    meta: [
      { title: "Government Dashboard — Sutara" },
      { name: "description", content: "District analytics, employment rates, child labor reduction, education and policy recommendations." },
    ],
  }),
  component: GovPage,
});

const TREND = [
  { y: "2021", emp: 36, lab: 14 },
  { y: "2022", emp: 38, lab: 13 },
  { y: "2023", emp: 41, lab: 11 },
  { y: "2024", emp: 46, lab: 9 },
  { y: "2025", emp: 52, lab: 7 },
  { y: "2026", emp: 58, lab: 5 },
];

function GovPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Government policy console"
        title={<>District-level signal — without district-level overhead.</>}
        subtitle="Real-time employment, child-labor and education metrics by division, with policy-grade exports."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid lg:grid-cols-[1fr_1.4fr] gap-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-4">Division heatmap</p>
          <BangladeshMap />
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-1">Women employment vs. child labor (%)</p>
          <p className="text-xs text-muted-foreground mb-4">Projected to 2026 with Sutara at current adoption pace.</p>
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={TREND}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="y" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Line dataKey="emp" stroke="var(--moss)" strokeWidth={2.5} dot={false} name="Women employment" />
                <Line dataKey="lab" stroke="var(--clay)" strokeWidth={2.5} dot={false} name="Child labor" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 grid md:grid-cols-3 gap-3">
        {[
          { t: "Policy recommendation", v: "Extend Matritto Bhata to digital-onboarded mothers", d: "Projected reach +220k beneficiaries in 12 months." },
          { t: "Funding signal", v: "Allocate VGD focus to Rangpur, Khulna", d: "Highest income-growth slope in pilot data." },
          { t: "Cross-ministry", v: "Link MoPME PESP to Sutara child IDs", d: "Reduces dropout-to-stipend lag from 90 to 7 days." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
            <p className="eyebrow text-accent mb-2">{c.t}</p>
            <p className="font-display text-lg leading-snug">{c.v}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}