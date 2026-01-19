import type { Variants} from "framer-motion"

//Animación de fade in desde abajo
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
}

//Animación de fade in desde la izquierda
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
}

//Animación de fade in desde la derecha
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
}

// Animación de escala
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

// Animación para contenedores con hijos
export const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Animación de fade simple
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}