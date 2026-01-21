
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface certificateModalProps {
  certificate: {title: string, image: string} | null,
  onClose: ()=> void
}

const CertificateModal = ({ certificate, onClose}: certificateModalProps) => {

  if(!certificate) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0}}
        animate= {{ opacity: 1}}
        exit={{ opacity: 0}}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
        initial={{ scale: 0.8, opacity: 0}}
        animate={{ scale: 1 , opacity: 1}}
        exit={{ scale: 0.8, opacity: 0}}
        transition={{ type: "spring", damping: 20}}
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg relative border p-6 flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full hover:text-accent-foreground hover:bg-accent/50 cursor-pointer p-1 transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-6 flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold text-foreground">
              {certificate.title}
            </h3>
            <div className="relative w-full h-96">
              <Image 
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CertificateModal