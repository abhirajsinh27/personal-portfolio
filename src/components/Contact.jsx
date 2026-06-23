import { useState } from "react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

function CopyField({ label, value, href }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the link itself still works.
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 border border-deepline rounded-xl px-5 py-4 bg-deep/40">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-amber">
          {label}
        </p>
        <a href={href} className="text-paper text-base sm:text-lg break-all hover:text-amberlight transition-colors">
          {value}
        </a>
      </div>
      <button
        onClick={copy}
        className="font-mono text-[11px] uppercase tracking-wider text-paper/70 border border-paper/20 rounded-full px-3 py-1.5 hover:border-amber hover:text-amber transition-colors shrink-0"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-deep text-paper grid-texture">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber mb-4">
          Get in touch
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Open to Web Developer / React Developer roles — let's talk.
        </h2>
        <p className="text-paper/70 mt-4 max-w-lg leading-relaxed">
          Email or call directly, or find me on GitHub and LinkedIn below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-2xl">
          <CopyField label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <CopyField label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider border border-paper/25 rounded-full px-5 py-3 hover:border-amber hover:text-amber transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider border border-paper/25 rounded-full px-5 py-3 hover:border-amber hover:text-amber transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-deepline flex flex-col sm:flex-row gap-2 justify-between font-mono text-xs text-paper/40">
          <span>{profile.name} · {profile.location}</span>
          <span>Built with React &amp; Tailwind</span>
        </div>
      </div>
    </section>
  );
}
