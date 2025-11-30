"use client"

import { type Language, translations } from "@/lib/translations"

interface FooterProps {
  currentLanguage: Language
}

export function Footer({ currentLanguage }: FooterProps) {
  const t = translations[currentLanguage]

  const navItems = [
    { label: currentLanguage === "en" ? "About" : currentLanguage === "uz" ? "Haqida" : "について", href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 md:mb-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-border mb-8"></div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xl">{"<>"}</span>
          </a>
          <a href="mailto:fsoyilov@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xl">@</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xl">▶</span>
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Farhod Soyilov.{" "}
          {currentLanguage === "en"
            ? "All rights reserved."
            : currentLanguage === "uz"
              ? "Barcha huquqlar himoyalangan."
              : "すべての権利は保有されています。"}
        </p>
      </div>
    </footer>
  )
}
