import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        hello: 'Hi, I am <1>Ricardo Bravo</1>',
        description: 'Telecommunications Engineer and Fullstack. Passionate about technology and modern solutions.'
      },
      navbar: {
        github: 'Github'
      },
      about: {
        title: 'About me',
        summary: 'Summary',
        description: 'As a fullstack engineer, I develop applications both frontend and backend, using modern technologies like JavaScript, Python, React, and Node.js. I am passionate about creating efficient and elegant solutions.'
      },
      contact: {
        contact: 'Contact',
        talk: 'Let\'s talk',
        message: 'Do you have an idea, project or just want to say hi? Send me a message!',
        name: 'Name',
        email: 'Email',
        messageLabel: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'How can I help you?',
        send: 'Send',
        sending: 'Sending...',
        success: 'Thank you. I will reply as soon as possible.',
        error: 'An error occurred. Please try again.'
      },
      experience: {
        title: 'Experience',
        subtitle: 'Professional career'
      },
      tech: {
        title: 'Technologies',
        subtitle: 'Stack & Tools'
      },
      works: {
        title: 'Portfolio',
        subtitle: 'Projects',
        description: 'These projects showcase my skills and experience in web and software development.',
        viewSource: 'View source code'
      }
    }
  },
  es: {
    translation: {
      hero: {
        hello: 'Hola, soy <1>Ricardo Bravo</1>',
        description: 'Ingeniero en Telecomunicaciones y Fullstack. Apasionado por la tecnología y el desarrollo de soluciones modernas.'
      },
      navbar: {
        github: 'Github'
      },
      about: {
        title: 'Sobre mí',
        summary: 'Resumen',
        description: 'Como ingeniero fullstack, desarrollo aplicaciones tanto en el frontend como en el backend, usando tecnologías modernas como JavaScript, Python, React y Node.js. Me apasiona crear soluciones eficientes y elegantes.'
      },
      contact: {
        contact: 'Contacto',
        talk: 'Hablemos',
        message: '¿Tienes una idea, proyecto o simplemente quieres saludar? ¡Envíame un mensaje!',
        name: 'Nombre',
        email: 'Email',
        messageLabel: 'Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        messagePlaceholder: '¿En qué puedo ayudarte?',
        send: 'Enviar',
        sending: 'Enviando...',
        success: 'Gracias. Te responderé lo antes posible.',
        error: 'Ocurrió un error. Intenta de nuevo.'
      },
      experience: {
        title: 'Experiencia',
        subtitle: 'Trayectoria profesional'
      },
      tech: {
        title: 'Tecnologías',
        subtitle: 'Stack & Herramientas'
      },
      works: {
        title: 'Portafolio',
        subtitle: 'Proyectos',
        description: 'Estos proyectos muestran mis habilidades y experiencia en desarrollo web y software.',
        viewSource: 'Ver código fuente'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 