"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle({ variant = "default" }: { variant?: "default" | "footer" }) {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0 text-sm font-medium">
      <button
        onClick={() => setLang("de")}
        className={`px-2.5 py-1 transition-colors duration-200 ${
          lang === "de"
            ? "text-gold"
            : variant === "footer"
              ? "text-white/50 hover:text-white/80"
              : "text-white/50 hover:text-white/80"
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className={variant === "footer" ? "text-white/30" : "text-white/30"}>|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors duration-200 ${
          lang === "en"
            ? "text-gold"
            : variant === "footer"
              ? "text-white/50 hover:text-white/80"
              : "text-white/50 hover:text-white/80"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
