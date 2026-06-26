import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const PRIMARY_NAV = [
  { to: "/", label: "Home" },
  { to: "/problem", label: "Problem" },
  { to: "/solution", label: "AI Solution" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/impact", label: "Impact" },
] as const;

const PLATFORM_NAV = [
  { to: "/training", label: "Skill Training", desc: "Voice-led courses in Bangla" },
  { to: "/jobs", label: "Jobs Marketplace", desc: "Remote, gig & field work" },
  { to: "/business", label: "Micro Business", desc: "Catalog, orders & mobile money" },
  { to: "/education", label: "Education Tracker", desc: "Attendance & dropout alerts" },
] as const;

const UTILITY_NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/ngo", label: "NGO" },
  { to: "/gov", label: "Government" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground font-display text-base">স</span>
          <span className="font-display text-xl tracking-tight">
            Sutara <span className="font-bengali text-accent text-base">সুতা</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-muted-foreground">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 hover:text-foreground transition-colors ${platformOpen ? "text-foreground" : ""}`}
              aria-haspopup="true"
              aria-expanded={platformOpen}
            >
              Platform
              <ChevronDown className={`size-3.5 transition-transform ${platformOpen ? "rotate-180" : ""}`} />
            </button>
            {platformOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-lg p-2 min-w-[220px]">
                  <div className="px-3 py-1.5">
                    <p className="text-[10px] font-ui uppercase tracking-widest text-muted-foreground">Platform</p>
                    <p className="text-xs text-muted-foreground">Four pillars of the ecosystem</p>
                  </div>
                  <div className="mt-1 grid gap-0.5">
                    {PLATFORM_NAV.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex flex-col rounded-lg px-3 py-2 hover:bg-muted transition-colors"
                        activeProps={{ className: "bg-muted" }}
                      >
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden sm:inline-flex text-sm font-medium px-3 py-2 text-foreground/80 hover:text-foreground">
            Login
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
          >
            Get started
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="lg:hidden grid size-9 place-items-center rounded-md border border-border"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-3 text-sm">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-1 border-t border-border" />
            <p className="px-3 py-1 text-[10px] font-ui uppercase tracking-widest text-muted-foreground">Platform</p>
            {PLATFORM_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-1 border-t border-border" />
            {UTILITY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
