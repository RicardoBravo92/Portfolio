import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ exp, data, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const isLeft = index % 2 === 0;
    gsap.fromTo(el, { opacity: 0, x: isLeft ? -50 : 50 }, {
      opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  }, [index]);

  return (
    <div ref={cardRef} className="relative mb-10 md:mb-6" style={{ opacity: 0 }}>
      <div className="hidden md:grid grid-cols-[1fr_40px_1fr] items-start gap-4">
        {index % 2 === 0 ? (
          <>
            <div className="timeline-card">
              <CardContent exp={exp} data={data} />
            </div>
            <div className="flex justify-center pt-6">
              <div className="timeline-dot" style={{ position: "relative", left: "auto", transform: "none" }} />
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="flex justify-center pt-6">
              <div className="timeline-dot" style={{ position: "relative", left: "auto", transform: "none" }} />
            </div>
            <div className="timeline-card">
              <CardContent exp={exp} data={data} />
            </div>
          </>
        )}
      </div>
      <div className="md:hidden flex gap-4 items-start">
        <div className="flex flex-col items-center pt-6 shrink-0" style={{ width: "20px" }}>
          <div className="timeline-dot" style={{ position: "relative", left: "auto", transform: "none" }} />
        </div>
        <div className="timeline-card flex-1">
          <CardContent exp={exp} data={data} />
        </div>
      </div>
    </div>
  );
};

const CardContent = ({ exp, data }) => {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    const arrow = arrowRef.current;
    if (!el) return;
    if (open) {
      gsap.set(el, { height: "auto" });
      const fullH = el.offsetHeight;
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: fullH, opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.to(arrow, { rotate: 180, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(arrow, { rotate: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [open]);

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0" style={{ background: "var(--accent-bg)" }}>
          <img src={data.icon} alt={exp.company_name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{exp.title}</h3>
          <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{exp.company_name}</p>
        </div>
        <button onClick={() => setOpen(!open)} className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors" style={{ background: "var(--accent-bg)" }}>
          <svg ref={arrowRef} width="14" height="14" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
      <p className="text-[0.65rem] font-medium mb-3" style={{ color: "var(--text-muted)" }}>{exp.date}</p>
      <div ref={listRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        <ul className="space-y-2 pt-1">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const items = t("experience.items", { returnObjects: true });

  useEffect(() => {
    const h = headerRef.current;
    if (!h) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 80%", once: true } });
    tl.fromTo(h.querySelector(".e-label"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(h.querySelector(".e-title"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(h.querySelector(".e-line"), { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, "-=0.2");
  }, []);

  return (
    <div>
      <div ref={headerRef} className="text-center mb-14">
        <p className="section-label mb-3 opacity-0 e-label">{t("experience.label")}</p>
        <h2 className="section-title mb-4 opacity-0 e-title">{t("experience.title")}</h2>
        <div className="section-divider mt-6 opacity-0 e-line" />
      </div>
      <div className="relative">
        <div className="timeline-line hidden md:block" />
        {items.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} data={experiences[i]} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
