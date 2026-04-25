"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      num: "1",
      title: t("Erstgespräch", "Discovery Call"),
      desc: t(
        "Wir prüfen Aufgaben, Systeme, Engpässe und definieren, welche Tätigkeiten zuerst ausgelagert werden sollten.",
        "We review tasks, systems, bottlenecks, and define which activities should be outsourced first."
      ),
    },
    {
      num: "2",
      title: t("Angebot in 48h", "Proposal in 48h"),
      desc: t(
        "Sie erhalten ein maßgeschneidertes Angebot mit Umfang, Verantwortlichkeiten, Pilotphase und Übergabepunkten.",
        "You receive a tailored proposal with scope, responsibilities, pilot phase, and handoff points."
      ),
    },
    {
      num: "3",
      title: t("Onboarding in 2 Wochen", "Onboarding in 2 Weeks"),
      desc: t(
        "Wir richten Zugänge ein, dokumentieren Ihre Standards und schulen unser Team auf Ihre Prozesse.",
        "We set up access, document your standards, and train our team on your processes."
      ),
    },
    {
      num: "4",
      title: t("Laufender Betrieb", "Ongoing Operations"),
      desc: t(
        "Integration in Ihren Alltag mit festen Ansprechpartnern, Statusberichten und messbaren Service-Levels.",
        "Integration into your daily operations with named contacts, status reports, and measurable service levels."
      ),
    },
  ]

  return (
    <section id="how-it-works" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Unser Prozess", "Our Process")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl text-balance">
              {t("So funktioniert es", "How It Works")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gold/20 md:block" />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="relative flex min-h-56 flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-cream">
                    <span className="font-serif text-2xl font-bold text-gold">{step.num}</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
