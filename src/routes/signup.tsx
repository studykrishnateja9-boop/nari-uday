import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/site/page-shell";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Get started — Sutara" }, { name: "description", content: "Create your Sutara account." }] }),
  component: SignupPage,
});

const ROLES = [
  { k: "woman", t: "I'm a woman / family", d: "Get courses, jobs, business tools and link my children." },
  { k: "ngo", t: "I'm an NGO", d: "Onboard villages, monitor clusters, run interventions." },
  { k: "gov", t: "I'm from government", d: "District analytics + scheme distribution." },
];

function SignupPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="eyebrow text-accent mb-3">Get started</p>
        <h1 className="font-display text-4xl mb-2">Create your account</h1>
        <p className="font-bengali text-muted-foreground mb-10">আপনার যাত্রা শুরু করুন।</p>
        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {ROLES.map((r) => (
            <label key={r.k} className="rounded-2xl border border-border bg-card p-5 cursor-pointer hover:border-accent/40">
              <input type="radio" name="role" className="sr-only" defaultChecked={r.k === "woman"} />
              <p className="font-display text-lg">{r.t}</p>
              <p className="text-xs text-muted-foreground mt-2">{r.d}</p>
            </label>
          ))}
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-3">
            {["Full name", "Phone", "District", "Preferred language"].map((l) => (
              <label key={l} className="block text-sm">
                <span className="eyebrow">{l}</span>
                <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
              </label>
            ))}
          </div>
          <button className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground">Create account</button>
          <p className="text-xs text-muted-foreground text-center">
            Already have an account? <Link to="/login" className="text-accent font-semibold">Sign in</Link>
          </p>
        </form>
      </section>
    </PageShell>
  );
}