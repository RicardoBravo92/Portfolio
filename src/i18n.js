import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm",
        name: "Ricardo Bravo",
        description:
          "Telecommunications Engineer & Fullstack Developer. I build scalable web applications with modern technologies.",
        available: "Available for work",
        scroll: "Scroll",
      },
      nav: {
        about: "About",
        tech: "Stack",
        experience: "Experience",
        education: "Education",
        works: "Projects",
        contact: "Contact",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      about: {
        label: "About",
        title: "A bit about me",
        description:
          "I'm a fullstack engineer with 10+ years of experience building web and mobile applications. I specialize in React, Node.js, and cloud-native architectures. I'm passionate about creating clean, efficient, and user-focused solutions.",
        services: [
          { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
          { title: "Backend", desc: "Node.js, NestJS, Express, FastAPI" },
          { title: "Database", desc: "PostgreSQL, MongoDB, Supabase" },
          { title: "DevOps", desc: "Docker, CI/CD, AWS, Vercel" },
        ],
      },
      tech: {
        label: "Skills",
        title: "Technologies I work with",
      },
      experience: {
        label: "Career",
        title: "Work Experience",
      },
      education: {
        label: "Studies",
        title: "Education",
      },
      works: {
        label: "Portfolio",
        title: "Selected Projects",
        description: "A collection of projects I've built or contributed to.",
        all: "All",
        mine: "Mine",
        contributed: "Contributed",
        viewCode: "View code",
        viewLive: "View live",
      },
      contact: {
        label: "Contact",
        title: "Let's work together",
        description: "Have a project in mind? Let's talk about it.",
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Please try again.",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Venezuela",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
      },
    },
  },
  es: {
    translation: {
      hero: {
        greeting: "Hola, soy",
        name: "Ricardo Bravo",
        description:
          "Ingeniero en Telecomunicaciones y Desarrollador Fullstack. Construyo aplicaciones web escalables con tecnologías modernas.",
        available: "Disponible para trabajar",
        scroll: "Scroll",
      },
      nav: {
        about: "Sobre mí",
        tech: "Stack",
        experience: "Experiencia",
        education: "Educación",
        works: "Proyectos",
        contact: "Contacto",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      about: {
        label: "Sobre mí",
        title: "Un poco sobre mí",
        description:
          "Soy un ingeniero fullstack con más de 10 años de experiencia construyendo aplicaciones web y móviles. Me especializo en React, Node.js y arquitecturas cloud-native. Me apasiona crear soluciones limpias, eficientes y centradas en el usuario.",
        services: [
          { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
          { title: "Backend", desc: "Node.js, NestJS, Express, FastAPI" },
          { title: "Base de datos", desc: "PostgreSQL, MongoDB, Supabase" },
          { title: "DevOps", desc: "Docker, CI/CD, AWS, Vercel" },
        ],
      },
      tech: {
        label: "Habilidades",
        title: "Tecnologías que uso",
      },
      experience: {
        label: "Trayectoria",
        title: "Experiencia laboral",
      },
      education: {
        label: "Formación",
        title: "Educación",
      },
      works: {
        label: "Portafolio",
        title: "Proyectos destacados",
        description: "Una selección de proyectos que he creado o en los que he participado.",
        all: "Todos",
        mine: "Míos",
        contributed: "Contribuidos",
        viewCode: "Ver código",
        viewLive: "Ver en vivo",
      },
      contact: {
        label: "Contacto",
        title: "Trabajemos juntos",
        description: "¿Tienes un proyecto en mente? Hablemos.",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
        error: "Algo salió mal. Inténtalo de nuevo.",
        emailLabel: "Email",
        locationLabel: "Ubicación",
        location: "Venezuela",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
