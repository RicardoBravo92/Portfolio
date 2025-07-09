import React from 'react';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-secondary/40 rounded-xl p-4 flex flex-col shadow-card transition hover:border-accent w-full max-w-sm mx-auto">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        {source_code_link && (
          <button
            onClick={() => window.open(source_code_link, '_blank')}
            className="absolute top-2 right-2 bg-white border border-secondary/40 rounded-full p-2 shadow hover:bg-accent hover:text-white transition"
            aria-label={t('works.viewSource')}
          >
            <img src={github} alt="source code" className="w-5 h-5" />
          </button>
        )}
      </div>
      <h3 className="text-lg font-bold text-text mb-1">{name}</h3>
      <p className="text-muted text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag.name} className="text-xs text-muted">#{tag.name}</span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" id="projects">
      <div className="mb-8 text-center">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">{t('works.subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t('works.title')}</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          {t('works.description')}
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "works");
