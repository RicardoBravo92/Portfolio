import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = (Component, id) =>
  function HOC() {
    const ref = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill();
        });
      };
    }, []);

    return (
      <section
        ref={ref}
        style={{ opacity: 0 }}
        className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
      >
        {id && <span id={id} className="block -mt-28 mb-0" />}
        <Component />
      </section>
    );
  };

export default SectionWrapper;
