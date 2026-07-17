import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { github } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const filters = [
  { id: "all", en: "All", es: "Todos" },
  { id: "mine", en: "Mine", es: "Míos" },
  { id: "contributed", en: "Contributed", es: "Contribuidos" },
];

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleEnter = () => {
      gsap.to(el, { y: -6, duration: 0.3, ease: "power2.out" });
      gsap.to(el.querySelector(".p-img"), { scale: 1.08, duration: 0.5, ease: "power2.out" });
      gsap.to(el.querySelector(".p-overlay"), { opacity: 1, duration: 0.3 });
    };
    const handleLeave = () => {
      gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(el.querySelector(".p-img"), { scale: 1, duration: 0.5, ease: "power2.out" });
      gsap.to(el.querySelector(".p-overlay"), { opacity: 0, duration: 0.3 });
    };
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => { el.removeEventListener("mouseenter", handleEnter); el.removeEventListener("mouseleave", handleLeave); };
  }, []);

  const p = project;

  return (
    <div ref={cardRef} className="card overflow-hidden flex flex-col relative">
      {p.badge && (
        <span className={`absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider ${
          p.badge === "mine" ? "text-white" : ""
        }`} style={p.badge === "mine" ? { background: "var(--accent)" } : { background: "var(--surface)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
          {p.badge === "mine" ? "Own" : "Team"}
        </span>
      )}

      <div className="relative w-full h-48 overflow-hidden">
        <img src={p.image} alt={p.name} className="p-img w-full h-full object-cover" />
        <div className="p-overlay absolute inset-0 opacity-0 flex items-end justify-center pb-4 gap-3 project-overlay">
          {p.source_code_link && (
            <a href={p.source_code_link} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={t("works.viewCode")}>
              <img src={github} alt="GitHub" className="w-4 h-4 brightness-0 invert" />
            </a>
          )}
          {p.weblink && (
            <a href={p.weblink} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={t("works.viewLive")}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{p.name}</h3>
        <p className="text-xs leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: "var(--text-muted)" }}>{p.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span key={tag.name} className={`tag ${tag.color}`}>#{tag.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const isEs = i18n.language === "es";

  const filtered = projects.filter((p) => filter === "all" || p.badge === filter);

  useEffect(() => {
    const h = headerRef.current;
    const g = gridRef.current;
    if (!h) return;

    const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 80%", once: true } });
    tl.fromTo(h.querySelector(".w-label"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(h.querySelector(".w-title"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(h.querySelector(".w-desc"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(h.querySelector(".w-line"), { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, "-=0.2");

    if (g) {
      gsap.fromTo(g.querySelectorAll(".card"), { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: g, start: "top 85%", once: true } });
    }
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.querySelectorAll(".card"), { opacity: 0, y: 20, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.4, ease: "power3.out" });
    }
  }, [filter]);

  return (
    <div>
      <div ref={headerRef} className="text-center mb-12">
        <p className="section-label mb-3 opacity-0 w-label">{t("works.label")}</p>
        <h2 className="section-title mb-3 opacity-0 w-title">{t("works.title")}</h2>
        <p className="text-sm max-w-xl mx-auto mb-6 opacity-0 w-desc" style={{ color: "var(--text-muted)" }}>{t("works.description")}</p>
        <div className="section-divider mb-8 opacity-0 w-line" />

        <div className="flex justify-center gap-2">
          {filters.map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)} className="px-4 py-2 rounded-lg text-xs font-semibold transition-all" style={filter === f.id ? { background: "var(--accent)", color: "#fff", boxShadow: "0 4px 16px rgba(99,102,241,0.3)" } : { background: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
              {f[isEs ? "es" : "en"]}
            </button>
          ))}
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
