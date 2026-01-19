
import Navigation from "@/components/Navigation"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"

const HomePage = () => {
  return (
    <main className="min-h-screen relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
    </main>
  )
}

export default HomePage