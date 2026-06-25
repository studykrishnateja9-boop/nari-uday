import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { JOBS } from "../lib/mock-data";
import { useState } from "react";
import { MapPin, Briefcase, Banknote, Search } from "lucide-react";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs Marketplace — Sutara" },
      { name: "description", content: "AI-matched remote, gig, NGO and government project work for rural women." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const [q, setQ] = useState("");
  const list = JOBS.filter((j) =>
    [j.title, "org" in j ? j.org : (j as any).op, j.district].join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <PageShell>
      <PageHero
        eyebrow="Jobs marketplace"
        title={<>Work that <span className="italic text-accent">fits</span> her life.</>}
        subtitle="Remote, gig, hybrid and field roles, ranked by skill fit and travel time from her village."
      />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search jobs by title, district or organisation"
            className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div className="grid gap-3">
          {list.map((j) => (
            <article key={j.title} className="rounded-2xl border border-border bg-card p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-accent/40 transition">
              <div className="flex-1">
                <p className="font-display text-xl">{j.title}</p>
                <p className="text-sm text-muted-foreground">{("org" in j ? j.org : (j as any).op)}</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Briefcase className="size-3.5" />{j.type}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{j.district}</span>
                <span className="inline-flex items-center gap-1.5 text-accent font-semibold"><Banknote className="size-3.5" />{j.pay}</span>
              </div>
              <button type="button" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Apply
              </button>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}