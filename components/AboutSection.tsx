
"use client"

import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animation.variants"
import { useRef } from "react"

const AboutSection = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px"})

  return (
    <section id='sobre-mi' className="py-20 px-4" ref={ref}>
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          Sobre Mi
        </motion.h2>

        <motion.div>
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Soy un desarrollador de software con experiencia en aplicaciones web y tragamonedas virtuales. Disfruto resolviendo problemas complejos y trabajando en equipos multidisciplinarios. Siempre abierto a seguir aprendiendo y mejorando.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default AboutSection