import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { PROBLEM_STATS } from "../lib/mock-data";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Problem — Sutara" },
      { name: "description", content: "Why rural women in Bangladesh remain unemployed, and how that drives child labor and school dropouts." },
    ],
  }),
  component: ProblemPage,
});

const CYCLE = [
  { t: "Rural female unemployment", d: "Only ~36% of rural women participate in the labor force (World Bank, 2023). Few cash-earning options at home." },
  { t: "Household income shock", d: "A flood, illness or price spike collapses the family budget within weeks." },
  { t: "Child becomes earner", d: "1.07M children aged 5–17 are in child labor (BBS/ILO). Boys in garages/farms, girls in domestic work." },
  { t: "School dropout", d: "Secondary completion for rural girls is ~46%. Dropouts cluster between class 5 and 8." },
  { t: "Low-skill adulthood", d: "The next generation enters the same low-skill labor market. Cycle restarts." },
];

const DROPOUT = [
  { grade: "1", boys: 2, girls: 3 },
  { grade: "2", boys: 3, girls: 4 },
  { grade: "3", boys: 5, girls: 7 },
  { grade: "4", boys: 8, girls: 11 },
  { grade: "5", boys: 14, girls: 19 },
  { grade: "6", boys: 21, girls: 27 },
  { grade: "7", boys: 27, girls: 34 },
  { grade: "8", boys: 32, girls: 41 },
];

function ProblemPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Problem analysis"
        title={<>A solvable cycle, hiding in plain sight.</>}
        bangla="মায়ের কর্মসংস্থানহীনতা শিশুশ্রমের প্রধান কারণ — এটি একটি কাঠামোগত সমস্যা।"
        subtitle="Rural women's unemployment, child labor and school dropout are not three problems. They're one chain — and breaking any link breaks the cycle."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PROBLEM_STATS.map((p) => (
          <div key={p.label} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-4xl text-accent">{p.value}</p>
            <p className="mt-2 font-medium">{p.label}</p>
            <p className="mt-3 eyebrow">{p.source}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="eyebrow text-accent mb-3">The cycle of poverty</p>
        <h2 className="font-display text-4xl mb-10">Five steps. One thread.</h2>
        <ol className="space-y-3">
          {CYCLE.map((s, i) => (
            <li key={s.t}>
              <div className="rounded-2xl border border-border bg-card p-6 flex gap-5">
                <span className="font-display text-3xl text-accent w-10">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-xl">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
              {i < CYCLE.length - 1 && (
                <div className="flex justify-center py-2"><ArrowDown className="size-4 text-muted-foreground" /></div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-accent mb-3">Where children leak out</p>
            <h2 className="font-display text-4xl">Dropout accelerates after class 5.</h2>
            <p className="mt-4 text-muted-foreground">
              Cumulative dropout (%) by grade, rural cohort. Girls leave faster, and earlier — often
              to domestic labor when mothers can't earn.
            </p>
          </div>
          <div className="h-72 rounded-2xl border border-border bg-background p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DROPOUT}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="grade" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="boys" fill="var(--moss)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="girls" fill="var(--clay)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl max-w-2xl mx-auto">If we lift the mother's income, every other line moves.</h2>
        <Link to="/solution" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
          See the AI solution <ArrowRight className="size-4" />
        </Link>
      </section>
    </PageShell>
  );
}