import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nexjt,
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
  eiche,
  guruxy,
  oklusion,
  pet,
  postgresql,
  nest,
  python,
  docker,
  expo,
  hearingdate,
  wequo
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
    name: 'Next.js',
    icon: nexjt, 
   },
/*   {
    name: 'Redux Toolkit',
    icon: redux,
  }, */
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name:  'Nest.js',
    icon : nest
   },
  {
    name: 'MongoDB',
    icon: mongodb,
  },  
   {
    name:'PostgreSQL',
    icon :postgresql
   },
   {
    name: 'git',
    icon: git,
  },
 
   {
    name: 'Python',
    icon: python   
   },
   {
    name :'Docker',
    icon:docker
   },
   {
    name:'Expo',
    icon:expo
   }
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
    date: 'Sep 2023 - Oct 2023',
    points: ['Full stack applications in nodejs and react js.'],
  },
  {
    title: 'Web Developer',
    company_name: 'EICHE',
    icon: eiche,
    iconBg: '#383E56',
    date: 'Dec 2023 -  March 2024',
    points: [' Creation and fix apps in nodejs and react js.'],
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'Guruxy',
    icon: guruxy,
    iconBg: '#383E56',
    date: ' March 2024 - Oct 2024',
    points: [' Work in next.js components and pages'],
  },
  {
    title: 'Full-stack Developer',
    company_name: 'Oklusion',
    icon: oklusion,
    iconBg: '#383E56',
    date: ' Oct 2024 - June 2025',
    points: [' Work with reactjs and nodejs on two pages'],
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
    badge: 'mine',
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
    badge: 'contributed',
  },
  {
    name: 'Hearingdate',
    description: 'A web app to schedule appointments with attorneys',
    tags: [
      {
        name: 'react.js',
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
    image: hearingdate,
    weblink: 'https://hearingdate.app',
    badge: 'contributed',
  },
  {
   //wequo
   name: 'Wequo',
   description: 'A web app to generate travel quotes.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgreSQL',
        color: 'green-text-gradient',
      },
    ],
    image: wequo,
    weblink: 'https://wequo.com/',
    badge: 'contributed',

  }
];

export { services, technologies, experiences, testimonials, projects };
