"use client"

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Farhod Soyilov",
      subtitle: "Full-Stack Developer",
      description:
        "Building modern web applications with React, Python, and FastAPI. Passionate about creating seamless user experiences and robust backend systems.",
      cta: "View My Work",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcase of my recent work",
      todoApp: {
        title: "Todo App",
        description: "A productivity application for managing tasks efficiently",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
      footballBooking: {
        title: "Football Match Booking Platform",
        description: "Online platform for reserving sports fields for football matches",
        tags: ["React", "FastAPI", "Real-time Booking"],
      },
      japaneseApp: {
        title: "Japanese Learning App",
        description: "Interactive application for learning Japanese language and culture",
        tags: ["React", "Mobile-Friendly", "Educational"],
      },
    },
    experience: {
      title: "Experience",
      current: "Oct 2022 – Present",
      previous: "Sep 2025 – Present",
      education: "Mar 2025 - August 2025",
      freelance: "Self-Initiated Project",
      school: "Japan Digital University",
    },
    contact: {
      title: "Get in Touch",
      email: "fsoyilov@gmail.com",
      phone: "+998 20 004 27 09",
      location: "Tashkent, Uzbekistan",
    },
    footer: "Crafted with care by Farhod Soyilov",
  },
  uz: {
    nav: {
      about: "Haqida",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Aloqa",
    },
    hero: {
      title: "Farhod Soyilov",
      subtitle: "Full-Stack Dastlabki",
      description:
        "React, Python va FastAPI bilan zamonaviy veb-ilovalarni yaratish. Beqiyos foydalanuvchi tajribasini va mustahkam backend tizimlarini yaratishga ishtiyoq.",
      cta: "Mening Ishlarimdagi Ko'ring",
    },
    projects: {
      title: "Asosiy Loyihalar",
      subtitle: "Mening yaqinda ishlangan ishlarim namunasi",
      todoApp: {
        title: "Todo Ilova",
        description: "Vazifalarni samarali boshqarish uchun mahsuldorlik ilovasi",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
      footballBooking: {
        title: "Futbol O'yin Bron Qilish Platformasi",
        description: "Futbol o'yini uchun sport maydonlarini band qilish uchun onlayn platforma",
        tags: ["React", "FastAPI", "Real-time Bron"],
      },
      japaneseApp: {
        title: "Yapon Tili O'rganish Ilovasi",
        description: "Yapon tilini va madaniyatini o'rganish uchun interaktiv ilova",
        tags: ["React", "Mobile-Do'st", "Ta'lim"],
      },
    },
    experience: {
      title: "Tajriba",
      current: "Okt 2022 – Hozir",
      previous: "Sep 2025 – Hozir",
      education: "Mar 2025 - Avg 2025",
      freelance: "O'z Loyihasi",
      school: "Yapon Raqamli Universiteti",
    },
    contact: {
      title: "Men Bilan Bog'lanish",
      email: "fsoyilov@gmail.com",
      phone: "+998 20 004 27 09",
      location: "Toshkent, O'zbekiston",
    },
    footer: "Farhod Soyilov tomonidan ehtiyot bilan yaratilgan",
  },
  ja: {
    nav: {
      about: "について",
      projects: "プロジェクト",
      experience: "経験",
      contact: "お問い合わせ",
    },
    hero: {
      title: "ファルホド・ソイロフ",
      subtitle: "フルスタック開発者",
      description:
        "React、Python、FastAPIを使用した最新のウェブアプリケーションを構築します。シームレスなユーザー体験と堅牢なバックエンドシステムの作成に情熱があります。",
      cta: "私の仕事を見る",
    },
    projects: {
      title: "おすすめプロジェクト",
      subtitle: "最近の仕事のショーケース",
      todoApp: {
        title: "Todoアプリ",
        description: "タスクを効率的に管理するための生産性アプリケーション",
        tags: ["React", "TypeScript", "Tailwind CSS"],
      },
      footballBooking: {
        title: "フットボール試合予約プラットフォーム",
        description: "フットボール試合のスポーツ施設予約オンラインプラットフォーム",
        tags: ["React", "FastAPI", "リアルタイム予約"],
      },
      japaneseApp: {
        title: "日本語学習アプリ",
        description: "日本語と文化を学ぶためのインタラクティブなアプリケーション",
        tags: ["React", "モバイルフレンドリー", "教育的"],
      },
    },
    experience: {
      title: "経験",
      current: "2022年10月 – 現在",
      previous: "2025年9月 – 現在",
      education: "2025年3月 - 2025年8月",
      freelance: "セルフイニシアチブプロジェクト",
      school: "日本デジタル大学",
    },
    contact: {
      title: "お気軽にお問い合わせください",
      email: "fsoyilov@gmail.com",
      phone: "+998 20 004 27 09",
      location: "ウズベキスタン、タシケント",
    },
    footer: "ファルホド・ソイロフが心を込めて制作",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof (typeof translations)["en"]

export function useTranslations(language: Language) {
  return translations[language]
}
