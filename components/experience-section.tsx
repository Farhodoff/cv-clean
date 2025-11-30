"use client"

import { type Language, translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"

interface ExperienceSectionProps {
  currentLanguage: Language
}

export function ExperienceSection({ currentLanguage }: ExperienceSectionProps) {
  const t = translations[currentLanguage]
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      period: t.experience.current,
      title:
        currentLanguage === "en"
          ? "Full-Stack Developer"
          : currentLanguage === "uz"
            ? "Full-Stack Dastlabki"
            : "フルスタック開発者",
      company: "Self-Initiated Project",
      location: "Tashkent, Uzbekistan",
      description:
        currentLanguage === "en"
          ? "Built a responsive booking platform using React and Tailwind CSS, enabling users to reserve sports fields online."
          : currentLanguage === "uz"
            ? "React va Tailwind CSS yordamida responsive bron qilish platformasi yaratdim, foydalanuvchilarga sport maydonlarini onlayn band qilish imkonini berdi."
            : "ReactとTailwind CSSを使用してレスポンシブな予約プラットフォームを構築し、ユーザーがスポーツ施設をオンラインで予約できるようにしました。",
    },
    {
      period: t.experience.previous,
      title: "Python Developer",
      company: "Olma Market - Personal Project",
      location: "Remote",
      description:
        currentLanguage === "en"
          ? "Developed backend services for product, order, and user management using Python and FastAPI. Built an admin dashboard to simplify management workflows."
          : currentLanguage === "uz"
            ? "Python va FastAPI yordamida mahsulot, buyurtma va foydalanuvchi boshqaruvi uchun backend xizmatlari ishlab chiqdi. Boshqarish iş oqimlarini soddalashtirish uchun admin paneeli yaratdi."
            : "PythonとFastAPIを使用して、製品、注文、ユーザー管理のためのバックエンドサービスを開発しました。管理ワークフローを簡略化するための管理ダッシュボードを構築しました。",
    },
    {
      period: t.experience.education,
      title: currentLanguage === "en" ? "Education" : currentLanguage === "uz" ? "Ta'lim" : "教育",
      company: t.experience.school,
      location: "Tashkent, Uzbekistan",
      description:
        currentLanguage === "en"
          ? "Bachelor of Information Technology focused on full-stack development, web technologies, and modern software practices."
          : currentLanguage === "uz"
            ? "Full-stack ishlanish, veb-texnologiyalar va zamonaviy dasturiy ta'minot amaliyotlariga e'tiborni bergan Axborot Texnologiyalari bakalavriyati."
            : "情報技術の学士号を取得。フルスタック開発、ウェブテクノロジー、最新のソフトウェアプラクティスに焦点を当てました。",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">{t.experience.title}</h2>
        </div>

        {/* Timeline container */}
        <div className="relative space-y-0">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:translate-x-px" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`group relative mb-12 md:mb-16 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: isVisible ? `${(idx + 1) * 200}ms` : "0ms",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 md:w-14 md:h-14 transform md:-translate-x-1/2">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-card/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:bg-card transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <p className="text-sm font-semibold text-primary mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
