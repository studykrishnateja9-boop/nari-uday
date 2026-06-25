import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/site/page-shell";
import { INCOME_GROWTH, SCHEMES } from "../lib/mock-data";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import { Sparkles, GraduationCap, Briefcase, Wallet, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Sutara" }, { name: "description", content: "Your Sutara dashboard." }] }),
  component: DashPage,
});

function DashPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">Assalamu alaikum</p>
            <h1 className="font-display text-4xl">Rahima Khatun</h1>
            <p className="font-bengali text-muted-foreground">বগুড়া · ৩ বছর ধরে সুতারা সদস্য</p>
          </div>
          <div className="flex gap-2">
            <Link to="/business" className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold">Business</Link>
            <Link to="/training" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Continue learning</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: Wallet, t: "This month", v: "৳ 9,240", d: "+18% MoM" },
          { icon: Briefcase, t: "Active jobs", v: "3", d: "2 applications pending" },
          { icon: GraduationCap, t: "Courses", v: "5 / 8", d: "2 in progress" },
          { icon: Sparkles, t: "AI score", v: "87 / 100", d: "Eligible: SME loan" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-5">
            <s.icon className="size-5 text-accent mb-3" />
            <p className="eyebrow">{s.t}</p>
            <p className="font-display text-3xl mt-1">{s.v}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.5fr_1fr] gap-3 pb-10">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="font-display text-xl">Earnings (8 months)</p>
            <Link to="/analytics" className="text-sm text-accent inline-flex items-center gap-1">View all <ArrowRight className="size-3.5" /></Link>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={INCOME_GROWTH}>
                <defs>
                  <linearGradient id="gd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--clay)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--clay)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area dataKey="income" stroke="var(--clay)" fill="url(#gd)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-3">AI-matched schemes</p>
          <ul className="space-y-3">
            {SCHEMES.slice(0, 4).map((s) => (
              <li key={s.name} className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.ministry}</p>
                <p className="mt-2 text-xs text-accent font-semibold">{s.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}