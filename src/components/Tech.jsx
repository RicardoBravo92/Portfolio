import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTranslation } from 'react-i18next';

const Tech = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto" id="tech">
      <div className="mb-8 text-center">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{t('tech.title')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t('tech.subtitle')}</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex flex-col items-center">
            <img src={technology.icon} alt={technology.name} className="w-14 h-14 object-contain mb-2" />
            <span className="text-xs text-muted mt-1">{technology.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
