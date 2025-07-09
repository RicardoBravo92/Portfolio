import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#fff',
        color: '#18181b',
        border: '1px solid #e5e7eb',
        borderRadius: '1rem',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
        padding: '2rem 1.5rem',
      }}
      contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }}
      date={experience.date}
      dateClassName="text-muted"
      iconStyle={{
        background: '#fff',
        border: '2px solid #e5e7eb',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-xl font-bold text-text mb-1">{experience.title}</h3>
        <p className="text-accent text-base font-semibold mb-2">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-3 list-disc ml-5 space-y-2 text-muted text-sm text-left">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto" id="work">
      <div className="mb-8 text-center">
        <p className="text-accent uppercase tracking-widest text-sm mb-2">
          {t('experience.title')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          {t('experience.subtitle')}
        </h2>
      </div>
      <div className="mt-8 flex flex-col">
        <VerticalTimeline layout="1-column" lineColor="#e5e7eb">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, 'work');
