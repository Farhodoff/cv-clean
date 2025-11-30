"use client"

import { type Language, translations } from "@/lib/translations"
import { ExternalLink } from "lucide-react"

interface ProjectsSectionProps {
  currentLanguage: Language
}

export function ProjectsSection({ currentLanguage }: ProjectsSectionProps) {
  const t = translations[currentLanguage]

  const projects = [
    {
      key: "todoApp",
      icon: "✓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      key: "footballBooking",
      icon: "⚽",
      color: "from-green-500 to-emerald-500",
    },
    {
      key: "japaneseApp",
      icon: "🇯🇵",
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectData = t.projects[project.key as keyof typeof t.projects]
            return (
              <div
                key={project.key}
                className="group relative bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div
                  className={`mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl animate-gradient group-hover:animate-glow`}
                >
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {(projectData as any).title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {(projectData as any).description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(projectData as any).tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`#project-${project.key}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold group-hover:translate-x-1"
                >
                  {currentLanguage === "en"
                    ? "Learn More"
                    : currentLanguage === "uz"
                      ? "Ko'proq Bilish"
                      : "もっと詳しく"}
                  <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
