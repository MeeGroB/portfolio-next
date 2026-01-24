"use client"

import { GraduationCap, Award } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, staggerContainer } from "@/lib/animation.variants"

interface EducationSectionProps {
  onCertificateClick?: (certificate: { title: string, image: string}) => void
}

const EducationSection = ({ onCertificateClick} : EducationSectionProps) => {

  const ref = useRef(null)
  const isInview = useInView(ref, { once: true, margin: "-100px"})

  const education = [
    {
      title: "Ingeniería de Software",
      icon: GraduationCap,
      institution: "Universidad Tecnológica del Perú",
      period: "2010 - 2015",
      certificateImage: "/certificates/bachiller.webp"
    },

    {
      title: "Javascript Moderno",
      icon: Award,
      institution: "Udemy",
      period: "2025",
      certificateImage: "/certificates/javascript_udemy.webp"
    },

    {
      title: "CSS La Guía Completa",
      icon: Award,
      institution: "Udemy",
      period: "2024",
      certificateImage: "/certificates/css_udemy.webp"
    },

    {
      title: "Curso Profesional de Desarrollo Web",
      icon: Award,
      institution: "Código Facilito",
      period: "2021",
      certificateImage: "/certificates/desarrollo_web_CF.webp"
    },
  ]

  return (
    <section id="formacion" className="py-20 px-4" ref={ref}>
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isInview ? "visible": "hidden"}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Formación
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index)=> (
            <motion.div key={index} variants={fadeInUp}>
              <div 
                className="p-6 glass-card hover:border-primary/50 transition-all duration-300 h-full cursor-pointer rounded-lg" 
                onClick={()=> onCertificateClick?.({ title: edu.title, image: edu.certificateImage})}
              >
              <div className="flex flex-col h-full">
                <div className="flex gap-3 mb-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <edu.icon className="w-5 h-5 text-primary" />
                    </div>                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1 text-balance">
                      {edu.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationSection