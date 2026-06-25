import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { AlertTriangle, GraduationCap, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Child Education Tracker — Sutara" },
      { name: "description", content: "Attendance, grades, dropout risk and scholarship matching for children of Sutara mothers." },
    ],
  }),
  component: EducationPage,
});

const CHILDREN = [
  { name: "Maliha (Class 5)", attendance: 98, grade: "A", risk: "Low" },
  { name: "Rakib (Class 3)", attendance: 86, grade: "B+", risk: "Low" },
  { name: "Tasnim (Class 8)", attendance: 71, grade: "C", risk: "Medium" },
  { name: "Sajid (Class 6)", attendance: 54, grade: "C-", risk: "High" },
];

const TREND = [
  { m: "Jan", v: 82 }, { m: "Feb", v: 84 }, { m: "Mar", v: 86 }, { m: "Apr", v: 88 },
  { m: "May", v: 91 }, { m: "Jun", v: 93 }, { m: "Jul", v: 95 }, { m: "Aug", v: 97 },
];

function EducationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Child education tracker"
        title={<>Every mother sees <span className="italic text-accent">every report card.</span></>}
        bangla="প্রতিটি শিশুর উপস্থিতি, ফলাফল এবং ঝরে পড়ার ঝুঁকি — মায়ের হাতের মুঠোয়।"
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-3">
        {[
          { icon: GraduationCap, t: "Children linked", v: "12,840" },
          { icon: CheckCircle2, t: "Avg attendance", v: "94%" },
          { icon: AlertTriangle, t: "High-risk flagged", v: "412" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <s.icon className="size-8 text-accent" />
            <div>
              <p className="font-display text-3xl">{s.v}</p>
              <p className="text-sm text-muted-foreground">{s.t}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 py-6 grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-1">My children</p>
          <p className="text-xs text-muted-foreground mb-5">Linked to mother: Rahima Khatun (Bogura)</p>
          <div className="space-y-3">
            {CHILDREN.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{c.name}</p>
                  <span className={`text-[10px] font-ui uppercase tracking-widest px-2 py-1 rounded-full ${c.risk === "High" ? "bg-destructive/15 text-destructive" : c.risk === "Medium" ? "bg-accent/15 text-accent" : "bg-moss/15 text-moss"}`}>{c.risk} risk</span>
                </div>
                <div className="flex gap-6 text-xs text-muted-foreground">
                  <span>Attendance: <b className="text-foreground">{c.attendance}%</b></span>
                  <span>Grade: <b className="text-foreground">{c.grade}</b></span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${c.attendance}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="font-display text-xl mb-4">Attendance trend (district)</p>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={TREND}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} domain={[60, 100]} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="v" stroke="var(--moss)" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4">
            <p className="eyebrow text-accent mb-2">AI prediction</p>
            <p className="text-sm">Sajid (Class 6) shows a 73% dropout risk over the next 60 days. Suggested actions: NGO home visit, Matritto Bhata application, scholarship match.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}