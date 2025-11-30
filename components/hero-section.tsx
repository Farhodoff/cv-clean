"use client"

import { type Language, translations } from "@/lib/translations"

interface HeroSectionProps {
  currentLanguage: Language
}

export function HeroSection({ currentLanguage }: HeroSectionProps) {
  const t = translations[currentLanguage]

  return (
    <section className="px-4 py-12 md:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty text-foreground">
              {t.hero.subtitle}
              <br />
              {t.hero.title}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary/20 text-secondary hover:bg-secondary/30 rounded-lg font-semibold transition-colors text-center border border-secondary/50"
              >
                {currentLanguage === "en"
                  ? "See My Resume"
                  : currentLanguage === "uz"
                    ? "Mening Rezyumeni Ko'ring"
                    : "私の履歴書を見る"}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
