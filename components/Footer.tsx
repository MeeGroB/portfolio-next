
"use client"

import { motion } from "framer-motion"


const Footer = () => {
  return (
    <footer className="mb-12">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.6}}
                className="text-center"
            >
                <p className="text-foreground">
                    © {new Date().getFullYear()} Pier Chávez Monteblanco. Todos los derechos reservados
                </p>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer