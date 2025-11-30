"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <main className="min-h-screen bg-background">
      <Header currentLanguage={language} onLanguageChange={setLanguage} />
      <HeroSection currentLanguage={language} />
      <ProjectsSection currentLanguage={language} />
      <ExperienceSection currentLanguage={language} />
      <ContactSection currentLanguage={language} />
      <Footer currentLanguage={language} />
    </main>
  )
}
