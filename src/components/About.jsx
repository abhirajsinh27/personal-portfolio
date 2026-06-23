import { skills } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function SkillGroup({ group, items, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-amber mb-3">
        {group}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-ink text-[15px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading id="about" eyebrow="About" title="Stack &amp; background" />
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-10">
          {skills.map((s, i) => (
            <SkillGroup key={s.group} group={s.group} items={s.items} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
