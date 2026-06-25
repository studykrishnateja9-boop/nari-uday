import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { BangladeshMap } from "../components/site/bangladesh-map";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Route = createFileRoute("/ngo")({
  head: () => ({
    meta: [
      { title: "NGO Dashboard — Sutara" },
      { name: "description", content: "Monitor villages, women, employment, income, school attendance and funding programs." },
    ],
  }),
  component: NgoPage,
});

const VILLAGES = [
  { v: "Sherpur", women: 142, income: 8.2, attend: 96 },
  { v: "Kurigram", women: 188, income: 9.5, attend: 97 },
  { v: "Satkhira", women: 230, income: 11.1, attend: 98 },
  { v: "Bogura", women: 174, income: 9.0, attend: 95 },
  { v: "Sylhet", women: 121, income: 7.6, attend: 93 },
];

function NgoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="NGO command center"
        title={<>Field-officer scale, <span className="italic text-accent">national reach.</span></>}
        subtitle="Monitor every village, every cluster, every alert — in real time."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid lg:grid-cols-4 gap-3">
        {[
          { t: "Villages active", v: "412" },
          { t: "Women enrolled", v: "14,202" },
          { t: "Avg monthly income", v: "৳ 8,940" },
          { t: "School retention", v: "98.2%" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-4xl text-accent">{s.v}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.t}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.2fr_1fr] gap-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-4">Top villages by household income</p>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={VILLAGES} layout="vertical">
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis type="category" dataKey="v" stroke="var(--muted-foreground)" fontSize={11} width={80} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="income" fill="var(--clay)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-4">Coverage</p>
          <BangladeshMap />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="eyebrow text-accent mb-1">AI alert</p>
            <p className="font-display text-xl">34 families flagged for dropout risk in Gazipur</p>
            <p className="text-sm text-muted-foreground mt-1">Pattern: income volatility &gt; 40% past 30 days + attendance drop &gt; 15%.</p>
          </div>
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Deploy intervention</button>
        </div>
      </section>
    </PageShell>
  );
}