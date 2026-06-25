import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground font-display">স</span>
            <span className="font-display text-xl">Sutara <span className="font-bengali text-accent">সুতা</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            An AI-powered digital ecosystem weaving rural women's potential into national prosperity — and keeping every child in the classroom.
          </p>
          <p className="mt-4 eyebrow">In partnership with NGO &amp; gov stakeholders</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Platform</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/training" className="hover:text-accent">Skill Training</Link></li>
            <li><Link to="/jobs" className="hover:text-accent">Jobs Marketplace</Link></li>
            <li><Link to="/business" className="hover:text-accent">Micro Business</Link></li>
            <li><Link to="/education" className="hover:text-accent">Education Tracker</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Stakeholders</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/ngo" className="hover:text-accent">NGO Dashboard</Link></li>
            <li><Link to="/gov" className="hover:text-accent">Government</Link></li>
            <li><Link to="/analytics" className="hover:text-accent">Analytics</Link></li>
            <li><Link to="/impact" className="hover:text-accent">Impact Report</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">About</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/stories" className="hover:text-accent">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sutara Foundation · Dhaka, Bangladesh</p>
          <div className="flex gap-6 font-ui uppercase tracking-widest">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Data sovereignty</a>
            <a href="#" className="hover:text-foreground">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}