import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const h = headerRef.current;
    const g = gridRef.current;
    if (!h) return;

    gsap.fromTo(h.querySelector(".t-label"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, scrollTrigger: { trigger: h, start: "top 80%", once: true } });
    gsap.fromTo(h.querySelector(".t-title"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: h, start: "top 80%", once: true }, delay: 0.1 });

    if (g) {
      gsap.fromTo(
        g.querySelectorAll(".tech-icon"),
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.4, ease: "power3.out", scrollTrigger: { trigger: g, start: "top 85%", once: true } }
      );
    }
  }, []);

  return (
    <div>
      <div ref={headerRef} className="text-center mb-12">
        <p className="section-label mb-3 opacity-0 t-label">{t("tech.label")}</p>
        <h2 className="section-title opacity-0 t-title">{t("tech.title")}</h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-icon">
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
