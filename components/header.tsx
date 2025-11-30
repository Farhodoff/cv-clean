"use client"

import { type Language, translations } from "@/lib/translations"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ currentLanguage, onLanguageChange }: HeaderProps) {
  const t = translations[currentLanguage]

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">FS</span>
          </div>
          <span className="font-semibold text-foreground">Farhod Soyilov</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.about}
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.projects}
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.experience}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Resume
          </button>
          <ThemeToggle />
          <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
        </div>
      </nav>
    </header>
  )
}
