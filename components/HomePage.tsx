
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
import ProjectPreviewModal from "./ProjectPreviewModal"
import Footer from "./Footer"

const HomePage = () => {

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const[selectedCertificate, setSelectedCertificate] = useState<{ title: string, image: string} | null>(null)

  const handleViewDetails = (projectId: string) => {
    setSelectedProjectId(null)
  }

  return (
    <main className="min-h-screen relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection onCertificateClick={setSelectedCertificate} />
        <ProjectsSection onProjectClick={setSelectedProjectId} />
        <ContactSection />

        <ProjectPreviewModal 
          projectId={selectedProjectId}
          onClose={()=> setSelectedProjectId(null)}
          onViewDetails={handleViewDetails}
        />

        <CertificateModal certificate={selectedCertificate} onClose={()=> setSelectedCertificate(null)} />


        <Footer />
    </main>
  )
}

export default HomePage