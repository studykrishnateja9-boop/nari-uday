import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sutara" },
      { name: "description", content: "Get in touch with the Sutara team — NGO, government, partners and press." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title={<>Let's weave together.</>} />
      <section className="mx-auto max-w-5xl px-5 py-16 grid md:grid-cols-[1fr_1.3fr] gap-10">
        <div className="space-y-5">
          {[
            { icon: Mail, label: "Email", v: "hello@sutara.bd" },
            { icon: Phone, label: "Helpline (toll-free)", v: "16-SUTARA (16788272)" },
            { icon: MapPin, label: "Office", v: "Gulshan, Dhaka 1212" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-3">
              <c.icon className="size-5 text-accent mt-1" />
              <div>
                <p className="eyebrow">{c.label}</p>
                <p className="font-display text-lg">{c.v}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="rounded-2xl border border-border bg-card p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {[
            { l: "Your name", t: "text" },
            { l: "Email", t: "email" },
            { l: "Organisation", t: "text" },
          ].map((f) => (
            <label key={f.l} className="block text-sm">
              <span className="eyebrow">{f.l}</span>
              <input type={f.t} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
            </label>
          ))}
          <label className="block text-sm">
            <span className="eyebrow">Message</span>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
          </label>
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Send</button>
        </form>
      </section>
    </PageShell>
  );
}