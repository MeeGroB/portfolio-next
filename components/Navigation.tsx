
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { slideDownMenu } from "@/lib/animation.variants"

const Navigation = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mi", href: "#sobre-mi" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Formación", href: "#formacion" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  useEffect(()=> {
    const handleScroll = ()=> {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between z-20">
          <Link href="/" className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
            Pier Chávez
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-md font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ?
              <X /> :
              <Menu />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4 bg-background/90 backdrop-blur-md"
              variants={slideDownMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="block text-xl font-medium text-muted-foreground hover:text-primary transition-colors py-4 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  )
}

export default Navigation