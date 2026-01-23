export interface Project {
    id: string,
    title: string,
    description: string,
    shortDescription: string
    image: string,
    technologies: Array<{ name: string, icon: string}>
    liveUrl: string
    githubUrl?: string,
    screenshots: string[]
    features: string[]
    challenges?: string
}

export const projects: Project[] = [
  {
    id: "comedor-escolar",
    title: "Comedor Escolar",
    description:
      "Sistema integral de registro y gestión de comidas diarias en comedores escolares. Permite llevar un control detallado de los menús, asistencia y preferencias alimenticias de los estudiantes.",
    shortDescription: "Sistema de registro de comidas diarias",
    image: "/projects/comedor.jpg",
    technologies: [
      { name: "Express.js", icon: "/tech/express.png" },
      { name: "MySQL", icon: "/tech/mysql.png" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    ],
    liveUrl: "https://comedorescolar.netlify.app/",
    githubUrl: "",
    screenshots: ["/projects/comedor-1.jpg", "/projects/comedor-2.jpg", "/projects/comedor-3.jpg"],
    features: [
      "Registro y control de comidas diarias",
      "Gestión de menús semanales",
      "Sistema de reportes y estadísticas",
      "Panel administrativo intuitivo",
    ],
    challenges: "Optimización de consultas a la base de datos para manejar grandes volúmenes de registros diarios.",
  },
  {
    id: "selva-magica",
    title: "Selva Mágica",
    description:
      "Rediseño y actualización completa de la página web del parque temático Selva Mágica. Incluye información de atracciones, horarios, eventos especiales y sistema de compra de tickets en línea.",
    shortDescription: "Actualización de la página web",
    image: "/projects/selvamagica.jpg",
    technologies: [
      { name: "HTML5", icon: "/tech/html5.png" },
      { name: "CSS3", icon: "/tech/css.png" },
      { name: "JavaScript", icon: "/tech/js.png" },
    ],
    liveUrl: "https://selvamagica.netlify.app/",
    screenshots: ["/projects/selva-1.jpg", "/projects/selva-2.jpg"],
    features: [
      "Diseño responsive y moderno",
      "Galería interactiva de atracciones",
      "Sistema de eventos y promociones",
      "Optimización SEO",
    ],
  },
  {
    id: "gapel",
    title: "GAPEL S.A.C.",
    description:
      "Desarrollo completo de la página web corporativa para GAPEL S.A.C., empresa especializada en gestión de bases de datos. Incluye portafolio de servicios, casos de éxito y formulario de contacto.",
    shortDescription: "Diseño y desarrollo de la página web",
    image: "/projects/gapel.jpg",
    technologies: [
      { name: "HTML5", icon: "/tech/html5.png" },
      { name: "CSS3", icon: "/tech/css.png" },
      { name: "JavaScript", icon: "/tech/js.png" },
    ],
    liveUrl: "https://gapel.netlify.app/",
    screenshots: ["/projects/gapel-1.jpg", "/projects/gapel-2.jpg"],
    features: [
      "Diseño corporativo profesional",
      "Portafolio de servicios",
      "Formulario de contacto funcional",
      "Optimización de carga",
    ],
    challenges:
      "Crear una identidad visual profesional que transmitiera confianza y experiencia en el sector tecnológico.",
  },
  {
    id: "notekeeper",
    title: "Notekeeper",
    description:
      "Aplicación web de gestión de notas y tareas con funcionalidades avanzadas. Permite crear, editar, categorizar y archivar notas con un sistema de búsqueda y filtrado eficiente.",
    shortDescription: "El clásico ToDo List, pero más completo",
    image: "/projects/notekeeper.jpg",
    technologies: [
      { name: "HTML5", icon: "/tech/html5.png" },
      { name: "CSS3", icon: "/tech/css.png" },
      { name: "JavaScript", icon: "/tech/js.png" },
    ],
    liveUrl: "https://notekeeper-practica.netlify.app/",
    screenshots: ["/projects/notekeeper-1.jpg", "/projects/notekeeper-2.jpg"],
    features: [
      "CRUD completo de notas",
      "Sistema de categorías y etiquetas",
      "Búsqueda y filtrado avanzado",
      "Almacenamiento local persistente",
    ],
  },
]