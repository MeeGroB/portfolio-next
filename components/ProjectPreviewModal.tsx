
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects.data"

interface ProjectModalProps {
  projectId: string | null,
  onClose: () => void,
  onViewDetails: (projectId: string) => void
}

const ProjectPreviewModal = ({ projectId, onClose, onViewDetails }: ProjectModalProps) => {

  const project = projects.find((p) => p.id === projectId)

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto relative border-primary/50 border p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-balance mb-2">{project.title}</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10  rounded-full p-2 shadow-lg  transition-colors cursor-pointer text-muted-foreground"
          >
            <X size={24} />
          </button>

          <div className="relative w-full h-80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          <div className="pt-6 px-6 pb-3">
            <h3 className="text-xl font-bold text-foreground mb-3">Descripción</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 flex-1 cursor-pointer"
            >
              <Link
                href={`/proyecto/${project.id}`}
              >
                Ver más detalles
              </Link>
            </button>

            <button className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 flex-1 bg-transparent w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver proyecto
              </a>
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectPreviewModal