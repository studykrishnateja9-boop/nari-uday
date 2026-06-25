import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bangla,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  bangla?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border textile-grid">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="eyebrow text-accent mb-5">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight max-w-4xl text-balance leading-[1.05]">
          {title}
        </h1>
        {bangla && (
          <p className="font-bengali mt-5 text-lg text-muted-foreground max-w-2xl">{bangla}</p>
        )}
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}