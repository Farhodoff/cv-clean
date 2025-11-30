"use client"

import { translations } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface TechStackProps {
  currentLanguage: Language
}

export function TechStack({ currentLanguage }: TechStackProps) {
  const t = translations[currentLanguage]

  const technologies = [
    { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Python", color: "from-yellow-400 to-yellow-600", icon: "🐍" },
    { name: "Django", color: "from-green-400 to-green-600", icon: "🎯" },
    { name: "FastAPI", color: "from-red-400 to-red-600", icon: "⚡" },
    { name: "PostgreSQL", color: "from-purple-400 to-purple-600", icon: "🗄️" },
    { name: "Docker", color: "from-cyan-400 to-cyan-600", icon: "🐳" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Tech Stack</h2>

        {/* Rotating orbit container */}
        <div className="flex justify-center items-center h-96">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Center circle */}
            <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl z-10">
              <div className="text-center">
                <p className="text-sm md:text-base font-bold text-primary-foreground">Full Stack</p>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * 360
                const radius = 140 // Distance from center in pixels

                return (
                  <div
                    key={tech.name}
                    className="absolute w-16 h-16 md:w-20 md:h-20"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-xl shadow-lg flex items-center justify-center text-3xl md:text-4xl hover:scale-110 transition-transform duration-300 cursor-pointer hover:shadow-2xl`}
                    >
                      {tech.icon}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tech names grid below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="text-center p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors duration-300"
            >
              <p className="font-semibold text-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
