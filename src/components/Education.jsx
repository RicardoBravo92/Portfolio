import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--secondary)',
        color: 'var(--text)',
        border: '1px solid var(--muted)',
        borderRadius: '1rem',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
        padding: '2rem 1.5rem',
      }}
      contentArrowStyle={{ borderRight: '7px solid var(--muted)' }}
      date={education.date}
      dateClassName="text-muted"
      iconStyle={{
        background: 'var(--primary)',
        border: '2px solid var(--muted)',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.company_name}
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-xl font-bold text-text mb-1">{education.title}</h3>
        <p className="text-accent text-base font-semibold mb-2">
          {education.company_name}
        </p>
      </div>
      <ul className="mt-3 list-disc ml-5 space-y-2 text-muted text-sm text-left">
        {education.points.map((point, index) => (
          <li key={`education-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto" id="education">
      <div className="mb-8 text-center">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">
          {t('education.title')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          {t('education.subtitle')}
        </h2>
      </div>
      <div className="mt-8 flex flex-col">
        <VerticalTimeline layout="1-column" lineColor="#e5e7eb">
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Education, 'education');
