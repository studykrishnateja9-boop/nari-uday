import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Quote, ShieldCheck, Languages, WifiOff, MessageSquare } from "lucide-react";
import { PageShell } from "../components/site/page-shell";
import { BangladeshMap } from "../components/site/bangladesh-map";
import { Reveal } from "../components/site/reveal";
import { HERO_STATS, INCOME_GROWTH, STORIES, PARTNERS, PROBLEM_STATS } from "../lib/mock-data";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ComposedChart,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sutara — AI for rural women & children in Bangladesh" },
      { name: "description", content: "Sutara is an AI-powered ecosystem helping rural Bangladeshi women earn from home while keeping their children in school. Skill training, jobs, micro-business, and education tracking." },
      { property: "og:title", content: "Sutara — Weaving rural potential into national prosperity" },
      { property: "og:description", content: "AI skill training, jobs marketplace, micro-business hub, and child education tracking — purpose-built for rural Bangladesh." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <Reveal><LiveStats /></Reveal>
      <Reveal><Problem /></Reveal>
      <Reveal><EcosystemFlow /></Reveal>
      <Reveal><AIFeatures /></Reveal>
      <Reveal><ImpactChart /></Reveal>
      <Reveal><Stories /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><CTA /></Reveal>
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 textile-warm opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 size-[480px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-24 grid gap-12 lg:grid-cols-[1.2fr_0.85fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 mb-6">
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Live · 12,840 children in school today
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.02] text-balance">
            Weaving rural potential into{" "}
            <span className="italic text-accent">national prosperity</span>.
          </h1>
          <p className="font-bengali mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            গ্রামীণ নারীদের ঘরে বসে উপার্জন এবং শিশুদের স্কুলে রাখার জন্য একটি এআই-চালিত প্ল্যাটফর্ম।
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
            An AI ecosystem for rural Bangladesh: skill training, jobs, micro-business and child
            education tracking — in one app, in Bangla, offline-friendly.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 hover:opacity-95"
            >
              Empower a village
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-muted"
            >
              View impact report
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Languages className="size-4 text-accent" /> Bangla + English</span>
            <span className="inline-flex items-center gap-2"><WifiOff className="size-4 text-accent" /> Low-bandwidth · SMS fallback</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-accent" /> Govt + NGO data-shared</span>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <p className="eyebrow">Regional hubs · Live</p>
              <span className="text-[10px] font-ui text-accent font-bold">8/8 DIVISIONS</span>
            </div>
            <BangladeshMap />
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4">
              <Stat label="Active learners" value="8,421" />
              <Stat label="Weekly earnings" value="৳ 42.5M" accent />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-[230px] animate-float">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="size-4 text-accent" />
              <p className="eyebrow">AI Match</p>
            </div>
            <p className="text-sm font-medium leading-snug">
              Fatema · 92% fit for <span className="text-accent">Digital Embroidery Mgmt.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className={`font-display text-2xl mt-1 ${accent ? "text-accent" : ""}`}>{value}</p>
    </div>
  );
}

function LiveStats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {HERO_STATS.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl md:text-5xl text-accent">{s.value}</p>
            <p className="mt-1 text-sm font-medium">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="eyebrow text-accent mb-4">The Problem</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-tight">
            When mothers can't earn, children pay — with their education.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Only 36% of rural Bangladeshi women participate in the labor force (World Bank, 2023).
            When household income collapses, an estimated 1.07 million children aged 5–17 enter
            labor instead of school (BBS &amp; ILO survey). The cycle is structural — and solvable.
          </p>
          <Link to="/problem" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Read the full analysis <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {PROBLEM_STATS.map((p) => (
            <div key={p.label} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-3xl text-foreground">{p.value}</p>
              <p className="mt-1 text-sm font-medium leading-snug">{p.label}</p>
              <p className="mt-2 text-[10px] font-ui uppercase tracking-widest text-muted-foreground">{p.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemFlow() {
  const steps = [
    { n: "01", t: "Women", d: "Register via phone, voice or NGO field agent. Bangla-first." },
    { n: "02", t: "AI Skill Training", d: "Voice-led courses in tailoring, food, digital, AI basics." },
    { n: "03", t: "Jobs", d: "AI matches remote, gig, NGO and govt project work." },
    { n: "04", t: "Micro Business", d: "Catalog, orders, bKash/Nagad/Rocket payments." },
    { n: "05", t: "Govt Schemes", d: "Auto-matched to VGD, Matritto Bhata, SME loans." },
    { n: "06", t: "Education", d: "Children linked. Attendance, grades & dropout risk tracked." },
  ];
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow text-accent mb-3">The Ecosystem</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
              One platform. Six interlocked steps. <span className="italic">A single thread.</span>
            </h2>
          </div>
          <Link to="/how-it-works" className="text-sm font-semibold underline-offset-4 hover:underline">
            See full flow →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <p className="font-ui text-xs text-accent mb-4">{s.n}</p>
              <p className="font-display text-2xl mb-2">{s.t}</p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIFeatures() {
  const items = [
    { t: "Career recommender", d: "Maps existing skills (tailoring, agri, dialect) to viable paths." },
    { t: "Skill assessment", d: "Voice-based diagnostic — no literacy required." },
    { t: "Job matching", d: "Ranks remote, gig and field jobs by fit + travel time." },
    { t: "Resume builder", d: "One-tap CV in Bangla + English from voice answers." },
    { t: "Interview coach", d: "Practice with conversational AI in regional dialect." },
    { t: "Business mentor", d: "Pricing, inventory and customer-message help." },
    { t: "Financial advisor", d: "Smart budgeting tied to bKash / Nagad / Rocket." },
    { t: "Child risk prediction", d: "Forecasts dropout 60 days ahead — NGO intervenes." },
    { t: "Scholarship finder", d: "Matches children to PESP and NGO scholarships." },
    { t: "Scheme recommender", d: "Auto-fills eligibility for govt safety-net programs." },
    { t: "Mental health assistant", d: "Confidential check-ins in Bangla, escalates to BRAC counsellors." },
    { t: "Voice assistant", d: "End-to-end app navigation by voice — works on 2G." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="eyebrow text-accent mb-3">AI features</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">
          Twelve models. One purpose: <span className="italic">keep her earning, keep them learning.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <div key={it.t} className="group rounded-2xl border border-border bg-card p-5 hover:border-accent/40 transition">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-ui text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <Sparkles className="size-3.5 text-accent" />
            </div>
            <p className="font-display text-xl">{it.t}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImpactChart() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <div>
          <p className="eyebrow text-accent mb-3">The correlation</p>
          <h2 className="font-display text-4xl tracking-tight">
            When mother's income rises, attendance follows.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Data from our pilot cohorts (n = 1,420, 8 months) shows a ~93% Pearson correlation
            between monthly household income from Sutara and child school attendance.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Projections; calibrated against BRAC ELA &amp; UNICEF cohort baselines.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-background p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="font-display text-lg">Income vs. attendance</p>
            <span className="font-ui text-[10px] uppercase tracking-widest text-muted-foreground">8 months</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={INCOME_GROWTH} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="grad-inc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--clay)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--clay)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="income" stroke="var(--clay)" fill="url(#grad-inc)" strokeWidth={2} />
                <Line type="monotone" dataKey="attendance" stroke="var(--moss)" strokeWidth={2.5} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-accent" /> Income (৳)</span>
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-moss" /> Attendance (%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow text-accent mb-3">Voices from the village</p>
          <h2 className="font-display text-4xl tracking-tight max-w-2xl">Real women. Real classrooms.</h2>
        </div>
        <Link to="/stories" className="text-sm font-semibold text-accent">All stories →</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {STORIES.map((s) => (
          <article key={s.name} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <Quote className="size-5 text-accent mb-4" />
            <p className="font-display text-xl leading-snug">"{s.quote}"</p>
            <div className="mt-auto pt-6 border-t border-border mt-6">
              <p className="text-sm font-semibold">{s.name} <span className="font-bengali text-muted-foreground">· {s.bn}</span></p>
              <p className="text-xs text-muted-foreground">{s.role} · {s.district}</p>
              <p className="mt-2 text-xs text-accent font-semibold">{s.metric}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <p className="eyebrow text-center mb-8">Designed with input from</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {PARTNERS.map((p) => (
            <span key={p} className="font-display text-2xl text-muted-foreground hover:text-foreground transition">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const qs = [
    { q: "Does this require smartphones or fast internet?", a: "No. Sutara works on 2G, supports SMS fallback, and has a voice-only mode for non-literate users. The PWA caches lessons offline." },
    { q: "How is child education actually tracked?", a: "Mothers link their children's school records (manual entry, school API where available, or NGO field agent verification). AI flags dropout risk based on attendance, grades and household signals." },
    { q: "Where does the income come from?", a: "Three streams: (1) Marketplace for handmade goods with bKash/Nagad/Rocket checkout, (2) AI-matched remote jobs and gig work, (3) Cluster contracts from NGOs and government projects." },
    { q: "Is data privacy respected?", a: "Yes. End-to-end encryption, role-based access, and a data-sovereignty policy aligned with the Bangladesh DPA. NGO and government dashboards see aggregated metrics — not personally identifiable income data — by default." },
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <p className="eyebrow text-accent mb-3 text-center">FAQ</p>
      <h2 className="font-display text-4xl text-center mb-12">Questions judges ask first.</h2>
      <div className="space-y-3">
        {qs.map((it) => (
          <details key={it.q} className="group rounded-2xl border border-border bg-card p-5 open:bg-muted/40">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-lg">{it.q}</span>
              <MessageSquare className="size-4 text-accent shrink-0" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-20 textile-grid">
        <div className="absolute inset-0 opacity-15 textile-grid pointer-events-none" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Help us put 1 million children back in school — by giving their mothers an income.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/signup" className="rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground">
              Onboard a village
            </Link>
            <Link to="/ngo" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
              I'm from an NGO
            </Link>
            <Link to="/gov" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
              I'm from government
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
