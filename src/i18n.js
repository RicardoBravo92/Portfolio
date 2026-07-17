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
        items: [
          {
            title: "Full Stack Developer",
            company_name: "Crestalink",
            date: "Dec 2025 - present",
            points: [
              "Architected SaaS applications using NestJS/TypeScript, improving code maintainability by 40%.",
              "Designed workflows with Swagger/OpenAPI, streamlining frontend-backend integration.",
              "Optimized PostgreSQL for high-concurrency CRM environments, significantly reducing query latency.",
              "Implemented advanced security and Role-Based Access Control (RBAC) using JWT.",
            ],
          },
          {
            title: "Full Stack Developer",
            company_name: "Aythen",
            date: "Nov 2025 - Dec 2025",
            points: [
              "Developed dynamic filtering systems for complex service catalogs using React and custom hooks.",
              "Implemented atomic design systems and themes (Dark/Light) with Tailwind CSS.",
              "Optimized performance through memoization techniques and lazy loading.",
            ],
          },
          {
            title: "Web Developer",
            company_name: "Iproperty",
            date: "Jun 2025 - Oct 2025",
            points: [
              "Developed a high-traffic Real Estate SaaS platform with Next.js optimized for SEO and Core Web Vitals.",
              "Integrated automated messaging services and push notifications for lead generation.",
              "Built complex logic for appointment booking and real-time synchronized calendars.",
            ],
          },
          {
            title: "Full Stack Developer",
            company_name: "Oklusion",
            date: "Oct 2024 - Jun 2025",
            points: [
              "Engineered scalable backend services for medical inventory management and logistics.",
              "Designed MongoDB schemas to handle dynamic product attributes and mass transaction logs.",
              "Implemented secure payment gateways and B2B price negotiation modules.",
            ],
          },
          {
            title: "Full Stack Engineer",
            company_name: "Guruxy",
            date: "Mar 2024 - Oct 2024",
            points: [
              "Developed and maintained key functionalities in Next.js-based projects, prioritizing scalability.",
              "Implemented complex business logic using TypeScript and managed MySQL databases.",
              "Collaborated in an international remote environment, ensuring the continuous delivery of sprints.",
            ],
          },
          {
            title: "Web Developer",
            company_name: "EICHE",
            date: "Dec 2023 - Mar 2024",
            points: [
              "Full-Stack Development: Engineered multiple concurrent projects leveraging the MERN stack (MongoDB, Express.js, React, and Node.js), ensuring seamless integration between frontend and backend services.",
              "Mobile Solutions: Developed and deployed hybrid mobile applications using React Native (Expo), focusing on high-performance UI/UX and cross-platform compatibility for iOS and Android.",
              "Performance Optimization: Optimized Express.js APIs and refined MongoDB queries, resulting in significantly reduced load times and improved overall application responsiveness.",
            ],
          },
          {
            title: "Fullstack Developer",
            company_name: "Yabok Technology Inc",
            date: "Sep 2023 - Oct 2023",
            points: [
              "Designed and created controller routes on the backend and reactive visual components on the frontend.",
              "Implemented multi-language support using the i18n library for applications targeting the global market.",
              "Used PostgreSQL for efficient relational data management in administration modules.",
            ],
          },
          {
            title: "Backend Developer",
            company_name: "Miami Signature Designs",
            date: "Feb 2023 - Aug 2023",
            points: [
              "System Architecture: Architected and maintained the server-side infrastructure for a large-scale E-commerce platform, ensuring high availability and system integrity.",
              "Data Modeling & Business Logic: Designed robust data models and complex controllers to execute business-critical logic, streamlining transactions and inventory management.",
              "API Design & Documentation: Developed and meticulously documented RESTful endpoints, fostering seamless communication between frontend and backend teams and reducing integration time.",
              "Scalability & Performance: Optimized database schemas and server-side workflows to handle high-traffic spikes typical of E-commerce environments.",
            ],
          },
          {
            title: "Full Stack Engineer",
            company_name: "Akui Solutions SL",
            date: "Sep 2022 - Jan 2023",
            points: [
              "Full-Stack Development: Delivered end-to-end solutions for a high-traffic booking platform, managing both Angular frontend interfaces and robust backend architectures.",
              "UX/UI Optimization: Designed and developed intuitive, high-performance user interfaces that significantly streamlined the customer booking journey and enhanced overall user engagement.",
              "Scalable Backend Architecture: Engineered and implemented server-side systems using NestJS and Express.js, focusing on modularity and scalability to support platform growth.",
              "API Design & Integration: Developed RESTful APIs to ensure seamless communication between the client-side and database, improving data consistency and system reliability.",
            ],
          },
          {
            title: "Operations Coordinator",
            company_name: "Atel Trading, C.A.",
            date: "Aug 2013 - Aug 2022",
            points: [
              "Solve problems with video, data and telephony network equipment.",
              "Program Radio equipment.",
              "Installation of network points (internal and external).",
              "Computer maintenance.",
              "Responsible for the development of technical projects.",
            ],
          },
        ],
      },
      education: {
        label: "Studies",
        title: "Education",
        items: [
          {
            title: "Msc. Telematics",
            company_name: "Universidad Rafael Belloso Chacín",
            points: [
              "Training and development of researchers in the field of application services offered by information systems technology, network architectures, telecommunications transmission and switching systems, as well as the development of hardware and software systems in networks; with a high technical and academic level, and a rigorous interdisciplinary training for research.",
              "Developed skills in conceptual domain (theoretical and methodological) of computing and telecommunications, and abilities to contribute to the description and improvement of telematic systems research projects.",
            ],
          },
          {
            title: "Electronic Engineering, Telecommunications",
            company_name: "Universidad Rafael Belloso Chacín",
            points: [
              "Theoretical and procedural foundations to manage, design, evaluate and coordinate projects in the area of Telecommunications and Electronics. Expertise in mobile telecommunications, satellite, communication networks, telephone and wireless, optical connections and microwaves.",
            ],
          },
        ],
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
        projects: [
          { name: "Pet Elegant", description: "Web-based platform that sells pet clothes." },
          { name: "Burdaerata", description: "A game inspired by Cards Against Humanity." },
          { name: "Topladder", description: "A modern web application for organizing and managing sports reunions." },
          { name: "Ya te veo", description: "A mobile app to sell products and services." },
          { name: "Wequo", description: "A web app to generate travel quotes." },
          { name: "Iproperty", description: "A web app to manage real estate listings." },
        ],
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
        items: [
          {
            title: "Desarrollador Full Stack",
            company_name: "Crestalink",
            date: "Dic 2025 - presente",
            points: [
              "Diseñé aplicaciones SaaS utilizando NestJS/TypeScript, mejorando la mantenibilidad del código en un 40%.",
              "Diseñé flujos de trabajo con Swagger/OpenAPI, optimizando la integración frontend-backend.",
              "Optimicé PostgreSQL para entornos CRM de alta concurrencia, reduciendo significativamente la latencia de consultas.",
              "Implementé seguridad avanzada y control de acceso basado en roles (RBAC) usando JWT.",
            ],
          },
          {
            title: "Desarrollador Full Stack",
            company_name: "Aythen",
            date: "Nov 2025 - Dic 2025",
            points: [
              "Desarrollé sistemas de filtrado dinámico para catálogos de servicios complejos usando React y custom hooks.",
              "Implementé sistemas de diseño atómico y temas (Oscuro/Claro) con Tailwind CSS.",
              "Optimicé el rendimiento mediante técnicas de memoización y lazy loading.",
            ],
          },
          {
            title: "Desarrollador Web",
            company_name: "Iproperty",
            date: "Jun 2025 - Oct 2025",
            points: [
              "Desarrollé una plataforma SaaS de bienes raíces de alto tráfico con Next.js optimizada para SEO y Core Web Vitals.",
              "Integré servicios de mensajería automatizada y notificaciones push para generación de leads.",
              "Construí lógica compleja para reservas de citas y calendarios sincronizados en tiempo real.",
            ],
          },
          {
            title: "Desarrollador Full Stack",
            company_name: "Oklusion",
            date: "Oct 2024 - Jun 2025",
            points: [
              "Diseñé servicios backend escalables para gestión de inventario médico y logística.",
              "Diseñé esquemas MongoDB para manejar atributos dinámicos de productos y logs de transacciones masivos.",
              "Implementé pasarelas de pago seguras y módulos de negociación B2B.",
            ],
          },
          {
            title: "Ingeniero Full Stack",
            company_name: "Guruxy",
            date: "Mar 2024 - Oct 2024",
            points: [
              "Desarrollé y mantuve funcionalidades clave en proyectos basados en Next.js, priorizando la escalabilidad.",
              "Implementé lógica de negocio compleja usando TypeScript y gestioné bases de datos MySQL.",
              "Colaboré en un entorno remoto internacional, asegurando la entrega continua de sprints.",
            ],
          },
          {
            title: "Desarrollador Web",
            company_name: "EICHE",
            date: "Dic 2023 - Mar 2024",
            points: [
              "Desarrolllo Full-Stack: Diseñé múltiples proyectos concurrentes aprovechando el stack MERN (MongoDB, Express.js, React y Node.js), asegurando integración fluida entre servicios frontend y backend.",
              "Soluciones Móviles: Desarrollé y desplegué aplicaciones móviles híbridas usando React Native (Expo), enfocándome en UI/UX de alto rendimiento y compatibilidad multiplataforma para iOS y Android.",
              "Optimización de Rendimiento: Optimicé APIs de Express.js y refiné consultas de MongoDB, resultando en tiempos de carga significativamente reducidos y mejor responsividad general.",
            ],
          },
          {
            title: "Desarrollador Fullstack",
            company_name: "Yabok Technology Inc",
            date: "Sep 2023 - Oct 2023",
            points: [
              "Diseñé y creé rutas de controladores en el backend y componentes visuales reactivos en el frontend.",
              "Implementé soporte multiidioma usando la librería i18n para aplicaciones dirigidas al mercado global.",
              "Usé PostgreSQL para la gestión eficiente de datos relacionales en módulos de administración.",
            ],
          },
          {
            title: "Desarrollador Backend",
            company_name: "Miami Signature Designs",
            date: "Feb 2023 - Ago 2023",
            points: [
              "Arquitectura de Sistemas: Diseñé y mantuve la infraestructura del lado del servidor para una plataforma E-commerce a gran escala, asegurando alta disponibilidad e integridad del sistema.",
              "Modelado de Datos y Lógica de Negocio: Diseñé modelos de datos robustos y controladores complejos para ejecutar lógica crítica del negocio, optimizando transacciones y gestión de inventario.",
              "Diseño y Documentación de APIs: Desarrollé y documenté meticulosamente endpoints RESTful, fomentando comunicación fluida entre equipos frontend y backend y reduciendo tiempo de integración.",
              "Escalabilidad y Rendimiento: Optimicé esquemas de base de datos y flujos de trabajo del lado del servidor para manejar picos de tráfico típicos de entornos E-commerce.",
            ],
          },
          {
            title: "Ingeniero Full Stack",
            company_name: "Akui Solutions SL",
            date: "Sep 2022 - Ene 2023",
            points: [
              "Desarrolllo Full-Stack: Entregué soluciones de extremo a extremo para una plataforma de reservas de alto tráfico, gestionando interfaces frontend Angular y arquitecturas backend robustas.",
              "Optimización UX/UI: Diseñé y desarrollé interfaces de usuario intuitivas y de alto rendimiento que optimizaron significativamente el proceso de reserva del cliente.",
              "Arquitectura Backend Escalable: Diseñé e implementé sistemas del lado del servidor usando NestJS y Express.js, enfocándome en modularidad y escalabilidad para soportar el crecimiento.",
              "Diseño e Integración de APIs: Desarrollé APIs RESTful para asegurar comunicación fluida entre el cliente y la base de datos, mejorando consistencia de datos y confiabilidad del sistema.",
            ],
          },
          {
            title: "Coordinador de Operaciones",
            company_name: "Atel Trading, C.A.",
            date: "Ago 2013 - Ago 2022",
            points: [
              "Resolución de problemas con equipos de red de video, datos y telefonía.",
              "Programación de equipos de radio.",
              "Instalación de puntos de red (internos y externos).",
              "Mantenimiento de computadoras.",
              "Responsable del desarrollo de proyectos técnicos.",
            ],
          },
        ],
      },
      education: {
        label: "Formación",
        title: "Educación",
        items: [
          {
            title: "Msc. Telemática",
            company_name: "Universidad Rafael Belloso Chacín",
            points: [
              "Formación e investigación en el campo de servicios de aplicación ofrecidos por tecnología de sistemas de información, arquitecturas de red, sistemas de transmisión y conmutación de telecomunicaciones, así como desarrollo de sistemas de hardware y software en redes; con un alto nivel técnico y académico.",
              "Desarrollé habilidades en dominio conceptual (teórico y metodológico) de computación y telecomunicaciones, y capacidades para contribuir a la descripción y mejora de proyectos de investigación en sistemas de telemática.",
            ],
          },
          {
            title: "Ingeniería Electrónica, Telecomunicaciones",
            company_name: "Universidad Rafael Belloso Chacín",
            points: [
              "Fundamentos teóricos y procedimentales para gestionar, diseñar, evaluar y coordinar proyectos en el área de Telecomunicaciones y Electrónica. Experiencia en telecomunicaciones móviles, satelital, redes de comunicación, telefonía e inalámbrica, conexiones ópticas y microondas.",
            ],
          },
        ],
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
        projects: [
          { name: "Pet Elegant", description: "Plataforma web que vende ropa para mascotas." },
          { name: "Burdaerata", description: "Un juego inspirado en Cards Against Humanity." },
          { name: "Topladder", description: "Una aplicación web moderna para organizar y gestionar reuniones deportivas." },
          { name: "Ya te veo", description: "Una aplicación móvil para vender productos y servicios." },
          { name: "Wequo", description: "Una aplicación web para generar cotizaciones de viaje." },
          { name: "Iproperty", description: "Una aplicación web para gestionar listados de bienes raíces." },
        ],
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
