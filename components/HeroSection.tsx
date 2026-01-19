
"use client"
import { ArrowDown, Download } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animation.variants"

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 overflow-hidden"
    >
      <motion.div
        className="container mx-auto text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-foreground text-balance"
          >
            Pier Chávez
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-semibold text-primary text-balance"
          >
            Desarrollador Fullstack
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Creando soluciones innovadoras con código limpio y eficiente
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
              <a href="#proyectos" className="inline-flex items-center justify-center gap-2 font-medium transition-all outline-none h-10 rounded-md px-6 min-w-45 bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                Ver Proyectos
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>

              <a href="/CV Pier Chávez.pdf" className="inline-flex items-center justify-center gap-2 font-medium transition-all outline-none h-10 rounded-md px-6 min-w-45 bg-primary-foreground hover:bg-primary-foreground/90 text-primary text-sm" download={true}>
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection