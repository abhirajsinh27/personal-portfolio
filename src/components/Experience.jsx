import { experience, education } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function Item({ children, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} relative pl-7 pb-9 border-l border-line last:border-transparent last:pb-0`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <span className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-amber" />
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading id="experience" eyebrow="Experience" title="Where I've worked" />
          <div>
            {experience.map((e, i) => (
              <Item key={e.org} delay={i * 80}>
                <p className="font-mono text-xs text-inkfaint">{e.period}</p>
                <h3 className="font-display text-lg font-semibold text-ink mt-1">
                  {e.role}
                </h3>
                <p className="text-sm text-amber mb-2">{e.org}</p>
                <ul className="space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="text-[14px] text-inksoft leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </Item>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading id="education" eyebrow="Education" title="Academic record" />
          <div>
            {education.map((e, i) => (
              <Item key={e.school} delay={i * 80}>
                <p className="font-mono text-xs text-inkfaint">{e.period}</p>
                <h3 className="font-display text-lg font-semibold text-ink mt-1">
                  {e.degree}
                </h3>
                <p className="text-sm text-inksoft">{e.school}</p>
                {e.note && (
                  <p className="font-mono text-xs text-amber mt-1">{e.note}</p>
                )}
              </Item>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
