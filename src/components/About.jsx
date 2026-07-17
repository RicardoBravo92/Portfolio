import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  Frontend: (
    <svg width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Backend: (
    <svg width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
  ),
  Database: (
    <svg width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
  ),
  DevOps: (
    <svg width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  ),
};

const About = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const s = sectionRef.current;
    const g = gridRef.current;
    if (!s) return;

    const tl = gsap.timeline({ scrollTrigger: { trigger: s, start: "top 80%", once: true } });
    tl.fromTo(s.querySelector(".a-label"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(s.querySelector(".a-title"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(s.querySelector(".a-desc"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(s.querySelector(".a-line"), { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, "-=0.2");

    if (g) {
      gsap.fromTo(g.querySelectorAll(".a-card"), { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: g, start: "top 85%", once: true } });
    }
  }, []);

  const services = t("about.services", { returnObjects: true });

  return (
    <div ref={sectionRef}>
      <div className="text-center mb-14">
        <p className="section-label mb-3 opacity-0 a-label">{t("about.label")}</p>
        <h2 className="section-title mb-5 opacity-0 a-title">{t("about.title")}</h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-0 a-desc" style={{ color: "var(--text-secondary)" }}>
          {t("about.description")}
        </p>
        <div className="section-divider mt-8 opacity-0 a-line" />
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const iconKeys = ["Frontend", "Backend", "Database", "DevOps"];
          return (
            <div key={i} className="a-card card p-6 flex flex-col items-center text-center gap-4 cursor-default">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--accent-bg)" }}>
                {icons[iconKeys[i]]}
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
