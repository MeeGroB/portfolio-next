
"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/projects.data"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animation.variants"
import { a } from "framer-motion/client"

interface ProjectDetailClientProps {
  project: Project
}


const ProjectDetailClient = ({ project }: ProjectDetailClientProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#proyectos"
              className="flex items-center justify-center hover:text-accent-foreground py-1.5 hover:bg-accent transition-colors duration-300 rounded-md px-3"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a proyectos
            </Link>

            <a
              className="flex gap-2 items-center justify-center hover:text-accent-foreground border bg-background py-1.5 rounded-md px-3 hover:bg-accent transition-colors duration-300"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver proyecto
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center hover:text-accent-foreground border bg-background py-1.5 rounded-md px-3 hover:bg-accent transition-colors duration-300"
              >
                <Github className="mr-2 h-4 w-4"/>
                Github
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12 space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground text-pretty leading-relaxed"
          >
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-secondary mb-12 shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={fadeInUp}>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Tecnologías utilizadas
              </h2>

              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 px-5 py-3 bg-secondary rounded-lg"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                    />
                    <span className="text-base font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {project.features && project.features.length > 0 && (
            <motion.div variants={fadeInUp}>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Características principales
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-muted-foreground text-pretty leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {project.challenges && (
            <motion.div
              variants={fadeInUp}
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Desafíos y soluciones
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </motion.div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Capturas de pantalla</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index)=> (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative h-64 rounded-xl overflow-hidden bg-secondary shadow-md hover:shadow-xl transition-shadow"
                  >
                    <Image 
                      src={screenshot}
                      alt={`${project.title} screenshot ${index +1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeInUp}>
            <div className="p-8 text-center bg-linear-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">¿Te gustó este proyecto?</h3>

              <p className="text-muted-foreground mb-6 text-pretty">
                Visita el proyecto en vivo o explora el código en Github
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 transition-colors duration-300 cursor-pointer rounded-md px-3 py-2"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Ver proyecto en vivo
                </a>

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 transition-colors duration-300 cursor-pointer rounded-md px-3 py-2"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Ver en Github
                  </a>
                )}
              </div>
            </div>
          </motion.div>


        </motion.div>
      </main>
    </div>
  )
}

export default ProjectDetailClient