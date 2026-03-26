"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

type Lang = "de" | "en"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (de: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "de" on both server and client to avoid hydration mismatch
  const [lang, setLangState] = useState<Lang>("de")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("ae-lang") as Lang | null
    if (stored === "de" || stored === "en") {
      setLangState(stored)
    }
    setMounted(true)
  }, [])

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem("ae-lang", newLang)
  }, [])

  const t = useCallback((de: string, en: string) => (lang === "de" ? de : en), [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
