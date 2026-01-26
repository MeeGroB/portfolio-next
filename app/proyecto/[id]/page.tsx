import { notFound } from "next/navigation"
import { projects } from "@/lib/projects.data"
import ProjectDetailClient from "@/components/ProjectDetailClient"
import { use } from "react"

export const revalidate = 60

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id
    }))
}

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { id } = use(params)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <ProjectDetailClient project={project} />
  )
}
export default ProjectPage