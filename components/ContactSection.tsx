
"use client"

import { Mail, Phone, Github, Linkedin, Check, Copy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animation.variants"
import { useRef, useState } from "react"

const ContactSection = () => {

  const ref = useRef(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const copyEmail = ()=> {
    navigator.clipboard.writeText("pier.cmont@gmail.com")
    setEmailCopied(true)
    console.log("Copiado")
    setTimeout(() => {
      setEmailCopied(false)
    }, 2000);
  }

  return (
    <section id='contacto' className='py-20 px-4' ref={ref}>
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
          Contacto
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <div className="p-8 glass-card rounded-lg">
            <div className="flex items-center justify-center gap-8">
              <div className="space-y-6 ">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-md text-muted-foreground">Teléfono</p>
                    <a
                      href="https://wa.me/34673325835"
                      className="text-foreground font-medium hover:text-primary transition-colors text-xl md:text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +34 673 32 58 35
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>

                  <div >
                    <p className="text-md text-muted-foreground">Email</p>
                    <a href="mailto:pier.cmont@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors text-xl md:text-2xl">
                      pier.cmont@gmail.com
                    </a>
                  </div>

                  <div className="border p-2 rounded-md cursor-pointer bg-muted-foreground/20 hover:bg-primary transition-colors duration-300 text-primary hover:text-background relative" onClick={copyEmail}>

                    {!emailCopied ? (
                      <Copy className="h-5 w-5" />
                    ) : (
                      <Check className="h-5 w-5" />
                    )}

                    {emailCopied && (
                      <span className="absolute right-0 left-0 top-12 text-primary flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium">
                        ✓ Copiado
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-8 items-center justify-center mt-2">
                  
                  <a 
                    href="https://github.com/MeeGroB"
                    className="p-2 border rounded-md bg-muted-foreground/30 hover:bg-muted-foreground/60 text-primary transition-colors duration-300 hover:text-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Github className="h-8 w-8" />
                  </a>


                  <a 
                    href="https://www.linkedin.com/in/piercmont/"
                    className="p-2 border rounded-md bg-muted-foreground/30 hover:bg-muted-foreground/60 text-primary transition-colors duration-300 hover:text-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Linkedin className="h-8 w-8" />
                  </a>

                </div>

              </div>


            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default ContactSection