
"use client"

import Navigation from "@/components/Navigation"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"
import CertificateModal from "./CertificateModal"
import { useState } from "react"

const HomePage = () => {

  const[selectedCertificate, setSelectedCertificate] = useState<{ title: string, image: string} | null>(null)


  return (
    <main className="min-h-screen relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection onCertificateClick={setSelectedCertificate} />
        <ProjectsSection />
        <ContactSection />

        <CertificateModal certificate={selectedCertificate} onClose={()=> setSelectedCertificate(null)} />
    </main>
  )
}

export default HomePage