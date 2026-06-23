import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, delay, index }) {
  const [ref, visible] = useReveal();
  const hasDemo = project.liveDemo && project.liveDemo.trim().length > 0;
  const hasRepo = project.github && project.github.trim().length > 0;

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "in" : ""} bg-white border border-line rounded-2xl p-6 sm:p-8`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span className="font-mono text-[11px] text-amber tracking-wider">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl font-semibold text-ink mt-1">
            {project.name}
          </h3>
          <p className="text-inksoft text-sm mt-0.5">{project.tagline}</p>
        </div>

        {/* Live demo button only renders once data/projects.js has a real
            URL in liveDemo. Until then, a quiet status pill takes its
            place — never a dead link. */}
        {hasDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider bg-amber text-deep rounded-full px-4 py-2 hover:bg-amberlight transition-colors shrink-0"
          >
            Live demo ↗
          </a>
        ) : (
          <span className="font-mono text-xs uppercase tracking-wider text-inkfaint border border-line rounded-full px-4 py-2 shrink-0">
            ● Live demo — deploying soon
          </span>
        )}
      </div>

      <p className="text-ink/80 text-[15px] leading-relaxed mt-4">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.points.map((p) => (
          <li key={p} className="text-[14px] text-inksoft leading-relaxed pl-4 relative">
            <span className="absolute left-0 text-amber">—</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-inksoft bg-paperdim rounded-full px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      {hasRepo && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink mt-6 hover:text-amber transition-colors"
        >
          View source on GitHub →
        </a>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading id="work" eyebrow="Selected work" title="Projects" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
