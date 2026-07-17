import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants";
import { gsap } from "gsap";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    const sections = navLinks.map((n) => document.getElementById(n.id)).filter(Boolean);
    const scrollPos = window.scrollY + 150;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        setActive(navLinks[i].id);
        return;
      }
    }
    setActive("");
  }, []);

  useEffect(() => {
    gsap.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen && mobileRef.current) {
      gsap.fromTo(mobileRef.current, { opacity: 0, y: -10, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" });
      gsap.fromTo(mobileRef.current.querySelectorAll(".mob-item"), { opacity: 0, x: 10 }, { opacity: 1, x: 0, stagger: 0.04, duration: 0.25, ease: "power2.out", delay: 0.05 });
    }
  }, [mobileOpen]);

  const closeMobile = () => {
    if (mobileRef.current) {
      gsap.to(mobileRef.current, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in", onComplete: () => setMobileOpen(false) });
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          opacity: 0,
          background: scrolled ? "var(--bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <a href="#" className="text-xl font-black tracking-tight gradient-text" onClick={() => { setActive(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            RB
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.id}`} onClick={() => setActive(nav.id)} className={`nav-link ${active === nav.id ? "active" : ""}`}>
                  {t(`nav.${nav.id}`)}
                </a>
              </li>
            ))}
            <li className="w-px h-4 mx-2" style={{ background: "var(--divider)" }} />
            <li>
              <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="nav-link">
                {t("nav.github")}
              </a>
            </li>
            <li>
              <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="nav-link">
                {t("nav.linkedin")}
              </a>
            </li>
            <li className="w-px h-4 mx-2" style={{ background: "var(--divider)" }} />
            <li className="flex items-center gap-0.5 ml-1">
              <button onClick={() => i18n.changeLanguage("es")} className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${i18n.language === "es" ? "text-white" : ""}`} style={i18n.language === "es" ? { background: "var(--accent)" } : { color: "var(--text-muted)" }}>
                ES
              </button>
              <button onClick={() => i18n.changeLanguage("en")} className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${i18n.language === "en" ? "text-white" : ""}`} style={i18n.language === "en" ? { background: "var(--accent)" } : { color: "var(--text-muted)" }}>
                EN
              </button>
            </li>
            <li>
              <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="ml-1 p-2 rounded-lg transition-all" style={{ color: "var(--text-muted)" }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-bg)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                {theme === "light" ? (
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                ) : (
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                )}
              </button>
            </li>
          </ul>

          <button className="md:hidden p-2 rounded-lg" style={{ color: "var(--text-primary)" }} onClick={() => mobileOpen ? closeMobile() : setMobileOpen(true)}>
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
            </div>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div ref={mobileRef} className="fixed top-16 right-4 w-64 z-50 md:hidden rounded-2xl p-3 flex flex-col gap-1 glass" style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}>
          {navLinks.map((nav) => (
            <a key={nav.id} href={`#${nav.id}`} onClick={closeMobile} className="mob-item block px-4 py-3 rounded-xl text-sm font-medium transition-all" style={{ color: active === nav.id ? "var(--accent)" : "var(--text-secondary)", background: active === nav.id ? "var(--accent-bg)" : "transparent" }}>
              {t(`nav.${nav.id}`)}
            </a>
          ))}
          <div className="h-px my-1" style={{ background: "var(--divider)" }} />
          <a href="https://github.com/RicardoBravo92" target="_blank" rel="noopener noreferrer" className="mob-item block px-4 py-3 rounded-xl text-sm font-medium transition-all" style={{ color: "var(--text-secondary)" }} onClick={closeMobile}>
            {t("nav.github")}
          </a>
          <a href="http://linkedin.com/in/ricardo-bravo-neri" target="_blank" rel="noopener noreferrer" className="mob-item block px-4 py-3 rounded-xl text-sm font-medium transition-all" style={{ color: "var(--text-secondary)" }} onClick={closeMobile}>
            {t("nav.linkedin")}
          </a>
          <div className="h-px my-1" style={{ background: "var(--divider)" }} />
          <div className="mob-item flex items-center justify-between px-4 py-3">
            <div className="flex gap-1">
              <button onClick={() => i18n.changeLanguage("es")} className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all" style={i18n.language === "es" ? { background: "var(--accent)", color: "#fff" } : { color: "var(--text-muted)", border: "1px solid var(--border)" }}>ES</button>
              <button onClick={() => i18n.changeLanguage("en")} className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all" style={i18n.language === "en" ? { background: "var(--accent)", color: "#fff" } : { color: "var(--text-muted)", border: "1px solid var(--border)" }}>EN</button>
            </div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded-lg" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              {theme === "light" ? (
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              ) : (
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              )}
            </button>
          </div>
        </div>
      )}

      {mobileOpen && <div className="fixed inset-0 z-40 md:hidden" style={{ background: "var(--overlay)" }} onClick={closeMobile} />}
    </>
  );
};

export default Navbar;
