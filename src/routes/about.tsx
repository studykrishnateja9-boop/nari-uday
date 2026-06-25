import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sutara" },
      { name: "description", content: "Mission, vision and team behind Sutara." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={<>We don't build for rural Bangladesh. We <span className="italic text-accent">build with it.</span></>}
        bangla="সুতারা — সংযুক্ত, সম্মানিত এবং সক্ষম গ্রামীণ বাংলাদেশের জন্য।"
      />
      <section className="mx-auto max-w-4xl px-5 py-16 space-y-12">
        <div>
          <p className="eyebrow text-accent mb-2">Mission</p>
          <p className="font-display text-3xl leading-tight">
            To make rural Bangladeshi women economically independent — and to make their children's
            classrooms the safest place in the village.
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent mb-2">Vision</p>
          <p className="font-display text-3xl leading-tight">
            A Bangladesh where no child is pulled out of school because her mother had no other option.
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent mb-2">Tagline</p>
          <p className="font-display text-3xl leading-tight italic">
            "Weaving rural potential into national prosperity."
          </p>
        </div>
        <div>
          <p className="eyebrow text-accent mb-3">Principles</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              ["Bangla-first", "Every interface, every model, every doc — Bangla is the default."],
              ["Voice-led", "Literacy is a feature, not a requirement."],
              ["Human-in-the-loop", "Every AI flag triggers a human (NGO, teacher) — never an automated benefit cut."],
              ["Data sovereignty", "Personal data never leaves Bangladesh. DPA-aligned by design."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-lg">{t}</p>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}