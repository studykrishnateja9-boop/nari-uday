import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { Sparkles, Mic, BrainCircuit, Workflow, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "AI Solution — Sutara" },
      { name: "description", content: "The Sutara AI ecosystem: 14 models working together for skill, income and education." },
    ],
  }),
  component: SolutionPage,
});

const PILLARS = [
  { icon: Mic, t: "Voice-first", d: "All flows runnable by voice in Bangla + 6 dialects. Designed for non-literate users." },
  { icon: BrainCircuit, t: "Predictive", d: "Models forecast dropout, income volatility, and scheme eligibility 60 days ahead." },
  { icon: Workflow, t: "Connected", d: "One graph linking mother → child → school → NGO → district analytics." },
  { icon: ShieldCheck, t: "Sovereign", d: "Data stays in Bangladesh. Role-based, audit-logged, DPA-aligned." },
];

const MODELS = [
  ["Career recommender", "Suggests course + job paths from skills, location, time available."],
  ["Skill assessment", "Voice diagnostic — 8 minute call, no reading required."],
  ["Job matching", "Ranks remote, gig and field jobs by fit + transit feasibility."],
  ["Resume builder", "Generates Bangla + English CV from a voice interview."],
  ["Interview coach", "Practice calls, scored on clarity + answer structure."],
  ["Translator", "Bangla ↔ English ↔ regional dialects, low-bandwidth."],
  ["Voice assistant", "End-to-end app navigation by voice (works on 2G)."],
  ["Business mentor", "Pricing, inventory, customer-message templates."],
  ["Financial advisor", "Budgeting nudges tied to bKash/Nagad/Rocket statements."],
  ["Child risk prediction", "Predicts dropout 60 days ahead from attendance + signals."],
  ["Scholarship finder", "Matches children to PESP + NGO scholarships."],
  ["Scheme recommender", "Auto-fills VGD, Matritto Bhata, SME loan eligibility."],
  ["Mental health assistant", "Confidential check-ins, escalation to BRAC counsellors."],
  ["Community assistant", "Q&A grounded in local village knowledge base."],
];

function SolutionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The AI solution"
        title={<>14 models. One <span className="italic text-accent">honest</span> outcome.</>}
        bangla="সুতারা একটি সংযুক্ত এআই ইকোসিস্টেম — যেখানে প্রতিটি মডেল মা ও শিশুর সাথে যুক্ত।"
        subtitle="Sutara isn't a chatbot. It's a connected stack: each model feeds the next, and every prediction has a human in the loop — usually an NGO field officer or teacher."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {PILLARS.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
            <p.icon className="size-5 text-accent mb-4" />
            <p className="font-display text-xl">{p.t}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="eyebrow text-accent mb-3">The model catalog</p>
        <h2 className="font-display text-4xl mb-10">Every AI feature, mapped to a real need.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODELS.map(([t, d], i) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-4 text-accent" />
                <span className="font-ui text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="font-display text-lg">{t}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow mb-3 text-accent">AI workflow</p>
          <h2 className="font-display text-4xl mb-8">From a voice note to a placed job — in minutes.</h2>
          <ol className="space-y-4">
            {[
              ["Input", "Mother records a 2-minute Bangla intro by voice."],
              ["Transcription", "Whisper-based ASR transcribes + detects dialect."],
              ["Profile", "LLM extracts skills, time available, mobility, languages."],
              ["Assessment", "Voice quiz scores tailoring/agri/digital baseline."],
              ["Recommendation", "Ranks 3 career paths + 5 jobs + 2 govt schemes."],
              ["Action", "Auto-enrolls courses, files scheme application, sends SMS to NGO field officer for verification."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="font-ui text-xs text-accent w-10 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-xl">{t}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
          See the full user journey <ArrowRight className="size-4" />
        </Link>
      </section>
    </PageShell>
  );
}