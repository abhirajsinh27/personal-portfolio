import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

const STATS = [
  { value: "3", label: "Apps shipped" },
  { value: "15+", label: "API endpoints built" },
  { value: "8.4", label: "CGPA / 10" },
  { value: "2026", label: "Graduating" },
];

// Proficiency panel data — edit freely, percentages are just relative bars.
const PROFICIENCY = [
  { label: "React.js", pct: 90 },
  { label: "Node.js / Express", pct: 85 },
  { label: "MongoDB / Firebase", pct: 80 },
  { label: "JWT / Auth & RBAC", pct: 75 },
];

const HIGHLIGHTS = [
  { tag: "Live", text: "Building multi-tenant SaaS products" },
  { tag: "Now", text: "Open to Full-Stack Developer roles" },
  { tag: "2026", text: "Graduating — Computer Engineering" },
];

function Bar({ label, pct, delay, visible }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-ink font-medium">{label}</span>
        <span className="font-mono text-xs text-inkfaint">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-paperdim overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber to-amberlight transition-[width] duration-[1100ms] ease-out"
          style={{ width: visible ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function ProfilePanel() {
  const [ref, visible] = useReveal(0.3);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-line shadow-xl shadow-ink/5 overflow-hidden"
    >
      {/* Header strip */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-line bg-paper/60">
        <div className="w-12 h-12 rounded-full bg-ink text-paper font-display font-semibold text-lg flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-display font-semibold text-ink leading-tight truncate">
            {profile.name}
          </p>
          <p className="text-xs text-inksoft truncate">{profile.role}</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-inksoft shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          Available
        </span>
      </div>

      {/* Proficiency bars */}
      <div className="px-6 py-6 space-y-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-inkfaint mb-1">
          Core proficiency
        </p>
        {PROFICIENCY.map((s, i) => (
          <Bar key={s.label} {...s} delay={i * 120} visible={visible} />
        ))}
      </div>

      {/* Highlight feed */}
      <div className="px-6 pb-6 pt-1 border-t border-line space-y-3">
        {HIGHLIGHTS.map((h) => (
          <div key={h.text} className="flex items-start gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber border border-amber/40 rounded px-1.5 py-0.5 mt-0.5 shrink-0">
              {h.tag}
            </span>
            <span className="text-sm text-inksoft leading-snug">{h.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 grid-texture"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber mb-4">
            {profile.location} · Open to work
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-ink tracking-tight leading-[1.05]">
            {profile.name}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-inksoft mt-3">
            {profile.role}
          </p>
          <p className="font-body text-base text-inksoft mt-6 max-w-xl leading-relaxed">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="font-mono text-sm uppercase tracking-wider bg-ink text-paper rounded-full px-6 py-3 hover:bg-amber hover:text-deep transition-colors"
            >
              View work
            </a>
            <a
              href="/resume.pdf"
              download="Abhirajsinh_Vala_Resume.pdf"
              className="font-mono text-sm uppercase tracking-wider border border-ink/25 rounded-full px-6 py-3 hover:border-amber hover:text-amber transition-colors"
            >
              Download resume ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-inksoft hover:text-amber transition-colors"
            >
              or email me directly
            </a>
          </div>

          {/* Credibility strip — concrete numbers instead of adjectives */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mt-12 max-w-lg">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  {s.value}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wide text-inkfaint mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature element: a profile panel with animated proficiency
            bars and a highlight feed — visual and "filled" rather than
            a code/terminal block. */}
        <ProfilePanel />
      </div>
    </section>
  );
}
