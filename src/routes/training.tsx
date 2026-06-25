import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { COURSES } from "../lib/mock-data";
import { useState } from "react";
import { Clock, Users, Award } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "AI Skill Training — Sutara" },
      { name: "description", content: "Voice-led, offline-friendly skill training in tailoring, food, agri, digital and AI basics." },
    ],
  }),
  component: TrainingPage,
});

const TAGS = ["All", "Handicraft", "Agro", "Digital", "Service", "Business"] as const;

function TrainingPage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");
  const filtered = tag === "All" ? COURSES : COURSES.filter((c) => c.tag === tag);
  return (
    <PageShell>
      <PageHero
        eyebrow="AI skill training"
        title={<>Learn a trade. <span className="italic text-accent">In your dialect.</span></>}
        bangla="ভিডিও, অডিও, কুইজ এবং সনদসহ ১২টি কোর্স — সম্পূর্ণ বাংলায়।"
        subtitle="Every course has video, audio-narrated PDF, voice quiz and a QR-verifiable certificate. Offline-cacheable on 2G."
      />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${tag === t ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:bg-muted"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition">
              <div className="aspect-[5/3] textile-warm bg-secondary relative grid place-items-center">
                <span className="font-display text-5xl font-bengali text-accent/80">{c.bn}</span>
                <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-ui uppercase tracking-widest">{c.tag}</span>
              </div>
              <div className="p-5">
                <p className="font-display text-xl">{c.title}</p>
                <p className="font-bengali text-sm text-muted-foreground">{c.bn}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />{c.hours}h</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="size-3.5" />{c.learners.toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1.5"><Award className="size-3.5" />{c.level}</span>
                </div>
                <button type="button" className="mt-5 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
                  Start course
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}