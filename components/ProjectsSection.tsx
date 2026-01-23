
"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animation.variants"
import { useRef } from "react"
import { projects } from "@/lib/projects.data"

interface ProjectsSectionProps {
  onProjectClick: (projectId: string)=> void
}

const ProjectsSection = ({ onProjectClick}: ProjectsSectionProps) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px"})

  return (
    <section id='proyectos' className='py-20 px-4' ref={ref}>
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible": "hidden"}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project)=> (
            <motion.div key={project.id} variants={scaleIn}>
              <div className="overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group rounded-xl">
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  />                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground text-balance">{project.title}</h3>

                  <p className="text-muted-foreground text-pretty">{project.shortDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech)=> (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1 bg-secondary/80 rounded-md border border-border/50"
                      >
                        <Image 
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                        />
                        <span className="text-sm text-muted-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 bg-primary hover:bg-primary/90 transition-colors rounded-md px-3 h-8 cursor-pointer" onClick={()=> onProjectClick(project.id)}>
                      Ver Detalles
                    </button>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en vivo`} className="inline-flex justify-center items-center whitespace-nowrap text-sm font-medium transition-all focus-visible:border-ring focus-visible:ring-ring/50 border shadow-xs hover:text-accent h-8 rounded-md gap-1.5 px-3 border-primary/50 hover:bg-primary/10">
                      <ExternalLink className="h-4 w-4" />
                    </a>                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection