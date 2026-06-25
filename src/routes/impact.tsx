import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Sutara" },
      { name: "description", content: "Projected impact on child labor, literacy, women's employment, household income and GDP." },
    ],
  }),
  component: ImpactPage,
});

const FORECAST = [
  { y: "2025", labor: 1.07, literacy: 73, income: 4200 },
  { y: "2026", labor: 0.92, literacy: 76, income: 5400 },
  { y: "2027", labor: 0.78, literacy: 80, income: 6800 },
  { y: "2028", labor: 0.61, literacy: 84, income: 8400 },
  { y: "2029", labor: 0.46, literacy: 88, income: 10100 },
  { y: "2030", labor: 0.32, literacy: 92, income: 12200 },
];

function ImpactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Impact model"
        title={<>Honest projections, not vanity metrics.</>}
        subtitle="Forecasts assume linear scale of current pilot (n = 1,420, 8 months) to 1M+ women by 2030, with conservative attrition."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-3">
        {[
          { t: "Child labor (M)", v: "−70%", d: "By 2030 (vs 2025 baseline)" },
          { t: "Rural literacy", v: "+19pp", d: "Among children of enrolled mothers" },
          { t: "Women employment", v: "+22pp", d: "Among rural female adults" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-5xl text-accent">{s.v}</p>
            <p className="font-medium mt-1">{s.t}</p>
            <p className="text-xs text-muted-foreground mt-2">{s.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 grid lg:grid-cols-3 gap-3 pb-12">
        {[
          { k: "labor", title: "Child labor (millions)", color: "var(--clay)" },
          { k: "literacy", title: "Literacy %", color: "var(--moss)" },
          { k: "income", title: "Avg income ৳/mo", color: "var(--chart-3)" },
        ].map((g) => (
          <div key={g.k} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-lg mb-3">{g.title}</p>
            <div className="h-48">
              <ResponsiveContainer>
                <AreaChart data={FORECAST}>
                  <defs>
                    <linearGradient id={`g-${g.k}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={g.color} stopOpacity={0.45} />
                      <stop offset="100%" stopColor={g.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="y" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                  <Area dataKey={g.k} stroke={g.color} fill={`url(#g-${g.k})`} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </section>
      <section className="border-t border-border bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow text-accent mb-3">Economic upside</p>
          <h2 className="font-display text-4xl mb-4">+0.7% projected GDP contribution by 2030.</h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Aggregating women's new earnings, reduced safety-net costs, and the long-term productivity
            gain from keeping ~750k more children in school past class 8.
          </p>
        </div>
      </section>
    </PageShell>
  );
}