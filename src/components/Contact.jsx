import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const InfoCard = ({ icon, label, value, href }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = () => gsap.to(el, { y: -2, duration: 0.2, ease: "power2.out" });
    const leave = () => gsap.to(el, { y: 0, duration: 0.2, ease: "power2.out" });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <a ref={ref} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-info-card">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
        {icon}
      </div>
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
        <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const h = headerRef.current;
    if (!h) return;

    const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 80%", once: true } });
    tl.fromTo(h.querySelector(".c-label"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(h.querySelector(".c-title"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(h.querySelector(".c-desc"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(h.querySelector(".c-line"), { scaleX: 0 }, { scaleX: 1, duration: 0.7 }, "-=0.2");

    if (infoRef.current) {
      gsap.fromTo(infoRef.current.children, { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, scrollTrigger: { trigger: infoRef.current, start: "top 85%", once: true } });
    }
    if (formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: formRef.current, start: "top 85%", once: true } });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, to_name: "Ricardo Bravo", from_email: form.email, to_email: "ricardojbn5@gmail.com", message: form.message },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { setLoading(false); setSuccess(true); setForm({ name: "", email: "", message: "" }); setTimeout(() => setSuccess(false), 4000); },
        () => { setLoading(false); alert(t("contact.error")); }
      );
  };

  return (
    <div>
      <div ref={headerRef} className="text-center mb-14">
        <p className="section-label mb-3 opacity-0 c-label">{t("contact.label")}</p>
        <h2 className="section-title mb-3 opacity-0 c-title">{t("contact.title")}</h2>
        <p className="text-sm max-w-md mx-auto mb-6 opacity-0 c-desc" style={{ color: "var(--text-muted)" }}>{t("contact.description")}</p>
        <div className="section-divider opacity-0 c-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div ref={infoRef} className="lg:col-span-2 flex flex-col gap-3">        
        
          <InfoCard label="LinkedIn" value="ricardo-bravo-neri" href="http://linkedin.com/in/ricardo-bravo-neri" icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>} />
          <InfoCard label="GitHub" value="RicardoBravo92" href="https://github.com/RicardoBravo92" icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>} />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-3 p-6 sm:p-8 flex flex-col gap-4" style={{ opacity: 0, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px" }}>
          {success ? (
            <div className="flex flex-col items-center gap-4 py-10">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--accent-bg)" }}>
                <svg width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t("contact.success")}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col text-left">
                  <span className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{t("contact.name")}</span>
                  <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.namePlaceholder")} className="form-input" required />
                </label>
                <label className="flex flex-col text-left">
                  <span className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{t("contact.email")}</span>
                  <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("contact.emailPlaceholder")} className="form-input" required />
                </label>
              </div>
              <label className="flex flex-col text-left">
                <span className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{t("contact.message")}</span>
                <textarea rows={4} name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("contact.messagePlaceholder")} className="form-input resize-none" required />
              </label>
              <button type="submit" disabled={loading} className="btn-primary justify-center mt-1 text-xs" style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    {t("contact.sending")}
                  </span>
                ) : t("contact.send")}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
