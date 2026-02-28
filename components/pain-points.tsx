"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Clock, Users, TrendingUp } from "lucide-react"

export function PainPoints() {
  const { t } = useLanguage()

  const points = [
    {
      num: "01",
      icon: Clock,
      title: t("Zu viel Routinearbeit", "Too Much Routine Work"),
      desc: t(
        "Buchhaltung, Mahnwesen und Korrespondenz binden wertvolle Kapazitäten, die Ihnen für strategische Aufgaben fehlen.",
        "Accounting, collections, and correspondence consume valuable capacity that you need for strategic tasks."
      ),
    },
    {
      num: "02",
      icon: Users,
      title: t("Fachkräftemangel", "Staff Shortage"),
      desc: t(
        "Qualifizierte Sachbearbeiter sind schwer zu finden und zu halten -- besonders im aktuellen Arbeitsmarkt.",
        "Qualified clerks are hard to find and retain -- especially in the current labor market."
      ),
    },
    {
      num: "03",
      icon: TrendingUp,
      title: t("Wachstum ohne Overhead", "Scale Without Overhead"),
      desc: t(
        "Mehr Einheiten verwalten, ohne proportional mehr Personal einstellen zu müssen.",
        "Manage more units without having to hire proportionally more staff."
      ),
    },
  ]

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Herausforderungen", "Challenges")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl text-balance">
              {t("Kennen Sie diese Probleme?", "Do You Face These Challenges?")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card-gold-border relative overflow-hidden rounded-sm bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <span className="absolute -top-2 right-4 font-serif text-8xl font-bold text-navy/[0.04] select-none">
                  {point.num}
                </span>
                <point.icon className="mb-5 h-6 w-6 text-gold" />
                <h3 className="mb-3 text-lg font-semibold text-navy">{point.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{point.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
