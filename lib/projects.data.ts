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
    id: "leo-fpv",
    title: "Leo FPV",
    description:
      "Portafolio y página de servicios para Leo FPV: piloto y videógrafo FPV. Presenta galerías de video y foto aéreas, servicios disponibles, y formulario de contacto para contratación de tomas y filmaciones con drones FPV.",
    shortDescription: "Portfolio y servicios de videografía FPV",
    image: "/projects/leo-fpv.webp",
    technologies: [
      { name: "React", icon: "/tech/react_v2.png" },
      { name: "TypeScript", icon: "/tech/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    ],
    liveUrl: "https://leo-fpv.vercel.app/",
    githubUrl: "https://github.com/MeeGroB/leo-fpv",
    screenshots: ["/projects/leo-fpv-1.webp", "/projects/leo-fpv-2.webp"],
    features: [
      "Galería de videos y fotos aéreas",
      "Página de servicios",
      "Botón de contacto / contratación",
      "Optimización para reproducción de video",
    ],
    challenges:
      "Optimizar carga y reproducción de videos FPV (lazy loading / placeholders) y mantener buena experiencia en móviles con ancho de banda limitado.",
  },

  {
    id: "az-fotografia",
    title: "AZ Fotografía",
    description:
      "Sitio portafolio para AZ Fotografía con galería de trabajos, secciones de servicios (sesiones, eventos), información de contacto y muestra de paquetes. Enfocado a mostrar trabajos en alta resolución y facilitar la contratación.",
    shortDescription: "Portafolio y galería profesional de fotografía",
    image: "/projects/azfotografia.webp",
    technologies: [
      { name: "React", icon: "/tech/react_v2.png" },
      { name: "TypeScript", icon: "/tech/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    ],
    liveUrl: "https://azfotografia.vercel.app/",
    githubUrl: "",
    screenshots: ["/projects/azfotografia-1.webp", "/projects/azfotografia-2.webp", "/projects/azfotografia-3.webp"],
    features: [
      "Galería por categorías (editorial, eventos, retrato)",
      "Páginas de servicios y paquetes",
      "Formulario de contacto y reserva",
      "Imágenes optimizadas y responsive",
    ],
    challenges:
      "Balancear calidad de imagen y tiempos de carga (uso de formatos webp, responsive srcset y lazy loading).",
  },

  {
    id: "el-secret",
    title: "El Secret",
    description:
      "Landing / sitio informativo para 'El Secret' (negocio local). Incluye presentación del negocio, menú, info de contacto y secciones orientadas a convertir visitantes (reserva/consulta).",
    shortDescription: "Landing informativa para restaurante",
    image: "/projects/secret.webp",
    technologies: [
      { name: "React", icon: "/tech/react_v2.png" },
      { name: "TypeScript", icon: "/tech/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    ],
    liveUrl: "https://elsecret.netlify.app/",
    githubUrl: "",
    screenshots: ["/projects/secret-1.webp"],
    features: [
      "Sección de presentación y propuesta de valor",
      "Galería / menú de productos o servicios",
      "Diseño responsive y énfasis en conversión",
    ],
    challenges:
      "Implementar elementos interactivos ligeros y optimizar assets para buena experiencia en dispositivos móviles. Implementar tres idiomas en la web.",
  },

  // Mantengo GAPEL como pediste
  {
    id: "gapel",
    title: "GAPEL S.A.C.",
    description:
      "Desarrollo completo de la página web corporativa para GAPEL S.A.C., empresa especializada en gestión de bases de datos. Incluye portafolio de servicios, casos de éxito y formulario de contacto.",
    shortDescription: "Diseño y desarrollo de la página web",
    image: "/projects/gapel.webp",
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
      "Optimización de carga",
    ],
    challenges:
      "Crear una identidad visual profesional que transmitiera confianza y experiencia en el sector energético.",
  },
]