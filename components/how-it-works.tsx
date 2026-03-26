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
        "Wir lernen Ihre Prozesse kennen und analysieren Ihr Optimierungspotenzial.",
        "We get to know your processes and analyze your optimization potential."
      ),
    },
    {
      num: "2",
      title: t("Angebot in 48h", "Proposal in 48h"),
      desc: t(
        "Sie erhalten ein maßgeschneidertes Angebot innerhalb von zwei Werktagen.",
        "You receive a tailored proposal within two business days."
      ),
    },
    {
      num: "3",
      title: t("Onboarding in 2 Wochen", "Onboarding in 2 Weeks"),
      desc: t(
        "Wir richten alle Systeme ein und schulen unser Team auf Ihre Prozesse.",
        "We set up all systems and train our team on your processes."
      ),
    },
    {
      num: "4",
      title: t("Laufender Betrieb", "Ongoing Operations"),
      desc: t(
        "Nahtlose Integration in Ihren Alltag mit regelmäßigen Statusberichten.",
        "Seamless integration into your daily operations with regular status reports."
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

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gold/20 md:block" />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Circle number */}
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
