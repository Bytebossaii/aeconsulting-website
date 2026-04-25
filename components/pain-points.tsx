"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Clock, TrendingUp, Users } from "lucide-react"

export function PainPoints() {
  const { t } = useLanguage()

  const points = [
    {
      num: "01",
      icon: Clock,
      title: t("Zu viel Routinearbeit", "Too Much Routine Work"),
      desc: t(
        "Buchhaltungsvorbereitung, Mahnwesen und Korrespondenz binden Kapazitäten, die Sie für Eigentümer, Vermietung und Wachstum brauchen.",
        "Accounting preparation, dunning, and correspondence consume capacity you need for owners, leasing, and growth."
      ),
    },
    {
      num: "02",
      icon: Users,
      title: t("Fachkräftemangel", "Staff Shortage"),
      desc: t(
        "Qualifizierte Sachbearbeiter sind schwer zu finden, teuer einzuarbeiten und oft genau dann knapp, wenn neue Mandate kommen.",
        "Qualified administrators are hard to find, expensive to train, and often unavailable right when new mandates arrive."
      ),
    },
    {
      num: "03",
      icon: TrendingUp,
      title: t("Wachstum ohne Overhead", "Scale Without Overhead"),
      desc: t(
        "Standardisierte Back-Office-Prozesse schaffen Luft, damit Sie mehr Einheiten übernehmen können, ohne jeden Prozess intern neu zu bauen.",
        "Standardized back-office workflows create room to take on more units without rebuilding every process internally."
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
              {t("Warum auslagern?", "Why Outsource?")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <ScrollReveal key={point.num} delay={i * 100}>
              <div className="card-gold-border relative min-h-64 overflow-hidden rounded-sm bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
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
