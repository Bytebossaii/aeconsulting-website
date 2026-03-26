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
              {t(
                "Bereit, Ihr Back-Office auszulagern?",
                "Ready to outsource your back office?"
              )}
            </h2>
            <p className="mt-3 text-base text-navy/70">
              {t(
                "Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir Sie entlasten können.",
                "Schedule a free discovery call and find out how we can unburden you."
              )}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <a
            href="#contact"
            className="shrink-0 rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-light"
          >
            {t("Jetzt starten", "Get Started")}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
