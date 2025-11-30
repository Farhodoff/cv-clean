"use client"

import { type Language, translations } from "@/lib/translations"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

interface ContactSectionProps {
  currentLanguage: Language
}

export function ContactSection({ currentLanguage }: ContactSectionProps) {
  const t = translations[currentLanguage]

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
        <p className="text-lg text-muted-foreground mb-12">
          {currentLanguage === "en"
            ? "I'd love to hear from you. Get in touch!"
            : currentLanguage === "uz"
              ? "Men sizni eshitishni yoqtiramiz. Bog'lanib oling!"
              : "お聞かせください。お気軽にお問い合わせください！"}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href={`mailto:${t.contact.email}`}
            className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === "en" ? "Email" : currentLanguage === "uz" ? "Elektron pochta" : "メール"}
            </h3>
            <p className="text-sm text-muted-foreground">{t.contact.email}</p>
          </a>

          <a
            href={`tel:${t.contact.phone}`}
            className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === "en" ? "Phone" : currentLanguage === "uz" ? "Telefon" : "電話"}
            </h3>
            <p className="text-sm text-muted-foreground">{t.contact.phone}</p>
          </a>

          <div className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">
              {currentLanguage === "en" ? "Location" : currentLanguage === "uz" ? "Joylashuv" : "場所"}
            </h3>
            <p className="text-sm text-muted-foreground">{t.contact.location}</p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/farhod-soyilov/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
