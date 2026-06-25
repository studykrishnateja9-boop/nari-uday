import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/site/page-shell";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Sutara" }, { name: "description", content: "Sign in to Sutara." }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-md px-5 py-20">
        <p className="eyebrow text-accent mb-3">Welcome back</p>
        <h1 className="font-display text-4xl mb-2">Sign in</h1>
        <p className="font-bengali text-muted-foreground mb-8">আবার স্বাগতম।</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm">
            <span className="eyebrow">Phone or email</span>
            <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
          </label>
          <label className="block text-sm">
            <span className="eyebrow">Password</span>
            <input type="password" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
          </label>
          <button className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground">Sign in</button>
          <p className="text-xs text-muted-foreground text-center">
            New to Sutara? <Link to="/signup" className="text-accent font-semibold">Create account</Link>
          </p>
        </form>
      </section>
    </PageShell>
  );
}