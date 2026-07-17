import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: { en: "Years Experience", es: "Años Exp." } },
  { value: 15, suffix: "+", label: { en: "Projects", es: "Proyectos" } },
  { value: 18, suffix: "+", label: { en: "Technologies", es: "Tecnologías" } },
];

const CountUp = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const obj = { val: 0 };
          gsap.to(obj, { val: end, duration, ease: "power2.out", onUpdate: () => setCount(Math.floor(obj.val)) });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const isEs = i18n.language === "es";

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(c.querySelector(".h-badge"), { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
      .fromTo(c.querySelector(".h-greeting"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(c.querySelector(".h-name"), { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.9, ease: "back.out(1.3)" }, "-=0.2")
      .fromTo(c.querySelector(".h-desc"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(c.querySelector(".h-cta"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(c.querySelectorAll(".h-stat"), { opacity: 0, y: 15, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.4 }, "-=0.2")
      .fromTo(c.querySelector(".h-socials"), { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3")
      .fromTo(c.querySelector(".h-scroll"), { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.1");

    // Typing effect for name
    const nameEl = nameRef.current;
    if (nameEl) {
      const text = nameEl.textContent;
      nameEl.textContent = "";
      nameEl.style.visibility = "visible";
      gsap.to(nameEl, {
        duration: text.length * 0.05,
        ease: "none",
        onUpdate: function () {
          nameEl.textContent = text.substring(0, Math.floor(this.progress() * text.length));
        },
      });
    }

    // Parallax orbs
    gsap.to(c.querySelector(".orb-a"), { x: 30, y: -20, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(c.querySelector(".orb-b"), { x: -25, y: 15, duration: 10, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(c.querySelector(".orb-c"), { x: 15, y: 25, duration: 12, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }, []);

  return (
    <section ref={containerRef} className="hero-section w-full min-h-screen flex flex-col justify-center items-center text-center px-5">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none hero-grid opacity-50" />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-a absolute top-[15%] left-[10%] w-[400px] h-[400px] hero-orb-1 rounded-full blur-[140px]" />
        <div className="orb-b absolute bottom-[20%] right-[5%] w-[350px] h-[350px] hero-orb-2 rounded-full blur-[120px]" />
        <div className="orb-c absolute top-[50%] left-[50%] w-[250px] h-[250px] hero-orb-3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="h-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 opacity-0" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>{t("hero.available")}</span>
        </div>

        {/* Greeting */}
        <p className="h-greeting text-base md:text-lg font-medium mb-3 opacity-0" style={{ color: "var(--text-muted)" }}>
          {t("hero.greeting")}
        </p>

        {/* Name */}
        <h1 className="h-name mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05 }}>
          <span ref={nameRef} className="gradient-text inline-block" style={{ visibility: "hidden" }}>{t("hero.name")}</span>
        </h1>

        {/* Description */}
        <p className="h-desc text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0" style={{ color: "var(--text-secondary)" }}>
          {t("hero.description")}
        </p>

        {/* CTA */}
        <div className="h-cta flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0">
          <a href="#works" className="btn-primary">
            {t("nav.works")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#contact" className="btn-outline">{t("nav.contact")}</a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {stats.map((s, i) => (
            <div key={i} className="h-stat text-center opacity-0">
              <div className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[0.65rem] font-semibold uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>
                {s.label[isEs ? "es" : "en"]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Socials (desktop) */}
      <div className="h-socials absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 opacity-0">
        <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <svg className="w-4.5 h-4.5" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <svg className="w-4.5 h-4.5" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    
    </section>
  );
};

export default Hero;
