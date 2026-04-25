"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTAStrip() {
  const { t } = useLanguage()

  return (
    <section className="bg-gold py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between">
        <ScrollReveal>
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl text-balance">
              {t("Testen Sie Outsourcing ohne Großprojekt.", "Test outsourcing without a giant project.")}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-navy/70">
              {t(
                "Starten Sie mit einem kleinen, messbaren Aufgabenpaket. Wenn Qualität und Geschwindigkeit stimmen, skalieren wir sauber weiter.",
                "Start with a small, measurable task package. If quality and speed fit, we scale cleanly from there."
              )}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <a
            href="#contact"
            className="shrink-0 rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-light"
          >
            {t("Pilotphase anfragen", "Request a Pilot")}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
