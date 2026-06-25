import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { STORIES } from "../lib/mock-data";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Sutara" },
      { name: "description", content: "Mothers and children whose lives changed through Sutara." },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Success stories"
        title={<>Threads of <span className="italic text-accent">change.</span></>}
        bangla="মা ও শিশুর কণ্ঠস্বর — সারা বাংলাদেশ থেকে।"
      />
      <section className="mx-auto max-w-5xl px-5 py-16 space-y-10">
        {STORIES.map((s, i) => (
          <article key={s.name} className={`grid md:grid-cols-[1fr_1.4fr] gap-8 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <div className="aspect-square rounded-3xl textile-warm bg-secondary grid place-items-center">
              <span className="font-display font-bengali text-7xl text-accent/80">{s.bn.slice(0, 3)}</span>
            </div>
            <div className="[direction:ltr]">
              <Quote className="size-5 text-accent mb-4" />
              <p className="font-display text-3xl leading-snug">"{s.quote}"</p>
              <p className="mt-6 text-sm font-semibold">{s.name} <span className="font-bengali text-muted-foreground">· {s.bn}</span></p>
              <p className="text-xs text-muted-foreground">{s.role} · {s.district}, age {s.age}</p>
              <p className="mt-2 text-xs text-accent font-semibold">{s.metric}</p>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}