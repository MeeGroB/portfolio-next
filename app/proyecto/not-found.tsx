import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
                Proyecto no encontrado
            </h2>
            <p className="text-blue-200 mb-8">El proyecto que buscas no existe o ha sido eliminado.</p>

            <Link
                href="/#proyectos"
            >   
                Volver a Proyectos
            </Link>
        </div>
    </div>
  )
}

export default NotFound
