import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { INCOME_GROWTH } from "../lib/mock-data";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Sutara" },
      { name: "description", content: "Employment growth, income increase, school attendance, AI prediction accuracy." },
    ],
  }),
  component: AnalyticsPage,
});

const SECTOR = [
  { name: "Handicraft", v: 38, c: "var(--clay)" },
  { name: "Agro", v: 24, c: "var(--moss)" },
  { name: "Digital", v: 22, c: "var(--chart-3)" },
  { name: "Service", v: 16, c: "var(--chart-4)" },
];

const ACC = [{ name: "Accuracy", value: 92, fill: "var(--clay)" }];

function AnalyticsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Analytics"
        title={<>Numbers, not narratives.</>}
        subtitle="Live aggregate metrics across the Sutara ecosystem. Drill-down available to verified NGO and government accounts."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid lg:grid-cols-3 gap-3">
        {[
          { t: "Women trained", v: "8,421", d: "+12% MoM" },
          { t: "Businesses launched", v: "2,118", d: "+18% MoM" },
          { t: "Avg monthly income", v: "৳ 8,940", d: "+24% YoY" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow">{s.t}</p>
            <p className="font-display text-5xl mt-1 text-accent">{s.v}</p>
            <p className="text-xs text-muted-foreground mt-2">{s.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.6fr_1fr_1fr] gap-3">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-3">Income growth (cohort)</p>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={INCOME_GROWTH}>
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--clay)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--clay)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area dataKey="income" stroke="var(--clay)" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-3">Sector mix</p>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={SECTOR} dataKey="v" innerRadius={50} outerRadius={90} paddingAngle={3}>
                  {SECTOR.map((s) => <Cell key={s.name} fill={s.c} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-3">AI prediction accuracy</p>
          <div className="h-72">
            <ResponsiveContainer>
              <RadialBarChart innerRadius="60%" outerRadius="100%" data={ACC} startAngle={90} endAngle={-270}>
                <RadialBar background dataKey="value" cornerRadius={20} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center -mt-32 font-display text-4xl">92%</p>
          <p className="text-center text-xs text-muted-foreground mt-2">Dropout-risk 60-day forecast</p>
        </div>
      </section>
    </PageShell>
  );
}