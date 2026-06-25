import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Sutara" },
      { name: "description", content: "The end-to-end journey from registration to placement and education tracking." },
    ],
  }),
  component: HowPage,
});

const STEPS = [
  { t: "Register", d: "By phone, SMS, or NGO field agent. Bangla-first, voice-supported. Family unit, not just an individual.", who: "Woman" },
  { t: "AI skill assessment", d: "8-minute voice diagnostic in dialect. Identifies tailoring, agri, digital, language baselines.", who: "AI · Mentor" },
  { t: "Learning path", d: "3 recommended courses with video, PDF, voice + quiz. Offline-cacheable on the PWA.", who: "Training" },
  { t: "Certificate", d: "Issued after quiz pass + practical artifact upload. QR-verifiable by employers.", who: "Training" },
  { t: "Job match", d: "AI ranks remote, gig, field and NGO/govt opportunities by fit and feasibility.", who: "Marketplace" },
  { t: "Income flow", d: "Earnings land in bKash/Nagad/Rocket. AI tracks volatility and nudges saving.", who: "Hub" },
  { t: "Children linked", d: "School records (attendance, grades) connected via NGO or school API.", who: "Education" },
  { t: "Dropout prevention", d: "AI flags risk 60 days early. Triggers NGO outreach, teacher alert, or scheme application.", who: "Education" },
  { t: "Analytics up", d: "Aggregated metrics feed NGO and district government dashboards. Personal data never leaves Bangladesh.", who: "Govt · NGO" },
];

function HowPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title={<>From a missed call to a placed job — and a child still in class.</>}
        bangla="নিবন্ধন থেকে চাকরি — এবং শিশুর স্কুলে থাকা পর্যন্ত প্রতিটি ধাপ।"
      />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="relative pl-10 border-l-2 border-dashed border-border">
          {STEPS.map((s, i) => (
            <div key={s.t} className="relative pb-10">
              <span className="absolute -left-[2.65rem] top-1 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground font-ui text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow text-accent mb-1">{s.who}</p>
              <p className="font-display text-2xl">{s.t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 text-center">
        <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
          See a sample user dashboard <ArrowRight className="size-4" />
        </Link>
      </section>
    </PageShell>
  );
}