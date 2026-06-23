import { useReveal } from "../hooks/useReveal";

export default function SectionHeading({ eyebrow, title, align = "left" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in" : ""} mb-10 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
    </div>
  );
}
