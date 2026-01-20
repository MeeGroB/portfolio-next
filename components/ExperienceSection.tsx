"use client"

import { Briefcase, Computer, Database, Toolbox } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animation.variants"
import { useRef } from "react"

const ExperienceSection = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px"})

  const experiences = [
    {
      title: "Frontend Developer",
      icon: Computer,
      company: "Panash S.A.C.",
      period: "Agosto 2018 - Octubre 2025",
      description: [
        'Proyecto MERN (Full Stack): Desarrollé una herramienta interna ("GDP Catálogo") usando React,  Node.js  y  MongoDB.  Esta  aplicación  permite  al  equipo  buscar  y  gestionar  la información de los juegos de forma rápida, eliminando el uso de Excels desordenados.',
        'Programación con JavaScript: Programé la lógica y funcionalidad de más de 300 juegos web.  Me  encargué  de  que  lo  que  pasa  en  pantalla  (animaciones,  premios)  coincida exactamente con los datos que envía el servidor.',
        'Manejo de Estados: Implementé la lógica para controlar los diferentes momentos del juego (inicio,  giro,  premio,  bonus),  asegurando  que  la  aplicación  no  se  rompa  si  el  usuario interactúa rápido.',
        'Optimización  y  Mantenimiento:  Revisé  y  mejoré  código  antiguo  para  que  los  juegos carguen más rápido y funcionen fluido en móviles, además de solucionar errores reportados por QA.'
      ]
    },
    
    {
      title: "Técnico de Base de Datos",
      icon: Database,
      company: "Gapel S.A.C.",
      period: "Mayo 2017 - Mayo 2018",
      description: [
        'Administré  bases  de  datos  MySQL  con  gran  volumen  de  datos  (clientes  y  registros), asegurando que la información estuviera siempre disponible y sin errores.',
        'Realicé mantenimiento preventivo de equipos y redes.'
      ]

    },

    {
      title: "Soporte y desarrollo junior",
      icon: Toolbox,
      company: "Grupo Distriluz",
      period: "Setiembre 2016 - Marzo 2017",
      description: [
        'Desarrollé un sistema de inventario interno para el control de equipos de TI.',
        'Brindé soporte técnico y configuración de equipos para usuarios internos.'
      ]
    }
  ]

  return (
    <section id="experiencia" className="py-20 px-4" ref={ref}>
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible": "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground "
        >
          {/* <Briefcase className="w-8 h-8" /> */}
          Experiencia Profesional
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index)=> (
            <motion.div key={index} variants={fadeInUp}>
              <div className="p-6 glass-card hover:border-primary/50 transition-all duration-300 rounded-xl">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1 uppercase">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.period}
                    </p>
                    <ul className="text-muted-foreground text-pretty ml-4">
                      {exp.description.map((desc,idx)=> (
                        <li className="list-disc mb-1">
                          {desc}
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection