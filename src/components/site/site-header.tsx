import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/problem", label: "Problem" },
  { to: "/solution", label: "AI Solution" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/training", label: "Training" },
  { to: "/jobs", label: "Jobs" },
  { to: "/business", label: "Business" },
  { to: "/education", label: "Education" },
  { to: "/impact", label: "Impact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
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
          {NAV.map((item) => (
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
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/dashboard" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted">Dashboard</Link>
            <Link to="/ngo" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted">NGO</Link>
            <Link to="/gov" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-foreground/80 hover:bg-muted">Government</Link>
          </nav>
        </div>
      )}
    </header>
  );
}