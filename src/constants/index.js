import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  atel,
  miamid,
  akui,
  yateveo,
  yabok,
  pet,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Telecom Engineer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Operations Coordinator',
    company_name: 'Atel Trading, C.A.',
    icon: atel,
    iconBg: '#383E56',
    date: 'Aug 2013 - Aug 2022',
    points: [
      'Solve problems with video, data and telephony network equipment. ',
      'Program Radio equipment. ',
      'Installation of network points (internal and external).',
      'Computer maintenance',
      ' Responsible for the development of technical projects.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'Akui Solutions SL',
    icon: akui,
    iconBg: '#383E56',
    date: 'Sep 2022 - Jan 2023',
    points: [
      'Developing a Frondend page in Angular.',
      'Implement a backend in Nest.js.',
    ],
  },
  {
    title: 'Backend Developer',
    company_name: 'Miami Signature Designs',
    icon: miamid,
    iconBg: '#383E56',
    date: 'Feb 2023 - Aug 2023',
    points: ['Developing a backend in nodejs for a E-commerse movile app.'],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Yabok Technology Inc',
    icon: yabok,
    iconBg: '#383E56',
    date: 'Sep 2023 - Present',
    points: ['Full stack applications in nodejs and react js.'],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Pet Elegant',
    description: 'Web-based platform that sell pets clothes.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'yellow-text-gradient',
      },
    ],
    image: pet,
    source_code_link: 'https://github.com/RicardoBravo92/PF-04-Ecommerce',
  },
  {
    name: 'Ya te veo',
    description: 'A movile app to sell products and services.',
    tags: [
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'yellow-text-gradient',
      },
    ],
    image: yateveo,
  },
];

export { services, technologies, experiences, testimonials, projects };
