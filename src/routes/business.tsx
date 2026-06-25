import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/page-shell";
import { PRODUCTS } from "../lib/mock-data";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Micro Business Hub — Sutara" },
      { name: "description", content: "Catalog, orders, inventory and mobile payments (bKash, Nagad, Rocket) — for home-based businesses." },
    ],
  }),
  component: BusinessPage,
});

const SALES = [10, 14, 18, 22, 19, 27, 33, 41, 38, 47, 52, 60].map((v, i) => ({ d: `D${i + 1}`, v }));

function BusinessPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Micro business hub"
        title={<>From porch to <span className="italic text-accent">cash</span>, in two taps.</>}
        subtitle="Catalog handmade goods, accept orders, manage stock and get paid via bKash, Nagad or Rocket — all on one screen."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 grid lg:grid-cols-[1fr_1.4fr] gap-6">
        <div className="space-y-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow text-accent mb-2">Today</p>
            <p className="font-display text-5xl">৳ 6,480</p>
            <p className="mt-1 text-xs text-muted-foreground">Across 11 orders</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow mb-3">Payouts</p>
            <div className="space-y-3">
              {[
                { name: "bKash", val: "৳ 3,200" },
                { name: "Nagad", val: "৳ 2,100" },
                { name: "Rocket", val: "৳ 1,180" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{p.name}</span>
                  <span className="font-display text-accent">{p.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="font-display text-xl">Sales (last 12 days)</p>
            <span className="eyebrow">+38% week on week</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={SALES}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--clay)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--clay)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="d" stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="v" stroke="var(--clay)" fill="url(#g1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8">
        <p className="eyebrow text-accent mb-3">Catalog</p>
        <h2 className="font-display text-3xl mb-6">Products</h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr className="text-left eyebrow">
                <th className="px-5 py-3">Item</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Sold</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.name} className="border-t border-border">
                  <td className="px-5 py-4 font-medium">{p.name}</td>
                  <td className="px-5 py-4">৳ {p.price.toLocaleString()}</td>
                  <td className="px-5 py-4">{p.stock}</td>
                  <td className="px-5 py-4 text-accent font-semibold">{p.sold}</td>
                  <td className="px-5 py-4 text-right"><button className="text-accent font-semibold">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}