import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-ink tracking-tight"
        >
          abhirajsinh<span className="text-amber">.dev</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-inksoft">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amber transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Abhirajsinh_Vala_Resume_FullStack.pdf"
          download="Abhirajsinh_Vala_Resume_FullStack.pdf"
          className="font-mono text-xs uppercase tracking-wider border border-ink/20 rounded-full px-4 py-2 hover:border-amber hover:text-amber transition-colors"
        >
          Resume ↓
        </a>
      </nav>
    </header>
  );
}
