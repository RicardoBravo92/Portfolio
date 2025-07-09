import React from 'react';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ title, icon }) => (
  <div className="w-full max-w-xs bg-white border border-secondary/40 rounded-xl p-8 flex flex-col items-center text-center transition hover:border-accent">
    <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
    <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
  </div>
);

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto" id="about">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{t('about.title')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t('about.summary')}</h2>
        <p className="text-muted text-lg max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
