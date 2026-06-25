import { useEffect, useState } from "react";

// Stylized dots representing 8 divisions of Bangladesh.
// Coordinates are abstract (0-100) — designed to read as Bangladesh shape, not GIS accurate.
const DIVISIONS = [
  { name: "Rangpur", x: 38, y: 12, intensity: 0.9, delta: "+22%" },
  { name: "Rajshahi", x: 25, y: 32, intensity: 0.7, delta: "+18%" },
  { name: "Mymensingh", x: 52, y: 28, intensity: 0.85, delta: "+27%" },
  { name: "Dhaka", x: 47, y: 48, intensity: 1.0, delta: "+34%" },
  { name: "Sylhet", x: 78, y: 36, intensity: 0.75, delta: "+14%" },
  { name: "Khulna", x: 28, y: 70, intensity: 0.6, delta: "+11%" },
  { name: "Barishal", x: 45, y: 75, intensity: 0.5, delta: "+9%" },
  { name: "Chattogram", x: 70, y: 70, intensity: 0.95, delta: "+31%" },
];

export function BangladeshMap({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(3);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % DIVISIONS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="bd-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="var(--clay)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--clay)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bd-glow)" />
        {/* Stylized country silhouette */}
        <path
          d="M30,10 L55,8 L62,18 L78,20 L82,32 L86,40 L78,46 L80,58 L72,68 L66,78 L52,84 L40,82 L32,72 L26,62 L20,52 L22,40 L26,28 Z"
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 20%, transparent)"
          strokeWidth="0.6"
          strokeDasharray="1 1.5"
        />
        {DIVISIONS.map((d, i) => {
          const isActive = i === active;
          const r = 1.2 + d.intensity * 2.4;
          return (
            <g key={d.name}>
              {isActive && (
                <circle cx={d.x} cy={d.y} r={r * 3.2} fill="var(--clay)" opacity="0.18">
                  <animate attributeName="r" values={`${r};${r * 4};${r}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={d.x}
                cy={d.y}
                r={r}
                fill="var(--clay)"
                opacity={0.45 + d.intensity * 0.55}
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-ui uppercase tracking-widest text-muted-foreground">
        <span>Active: {DIVISIONS[active].name}</span>
        <span className="text-accent font-semibold">{DIVISIONS[active].delta}</span>
      </div>
    </div>
  );
}