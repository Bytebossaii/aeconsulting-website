"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Clock, FileCheck, Globe, MapPin, ShieldCheck } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Globe,
      value: t("DACH-Fokus", "DACH Focus"),
      label: t("Deutschland, Österreich, Schweiz", "Germany, Austria, Switzerland"),
    },
    {
      icon: MapPin,
      value: t("US-Ostküste", "US East Coast"),
      label: t("New York, Miami, Boston & mehr", "New York, Miami, Boston & more"),
    },
    {
      icon: Clock,
      value: t("CET-Zeitzone", "CET Timezone"),
      label: t("Volle Überlappung mit DACH", "Full overlap with DACH"),
    },
    {
      icon: ShieldCheck,
      value: t("DSGVO-bewusst", "GDPR-Aware"),
      label: t("Sichere Prozesse und klare Zugriffsrechte", "Secure workflows and access control"),
    },
  ]

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#b8892a 1px, transparent 1px), linear-gradient(90deg, #b8892a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 pt-28 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
        <div className="flex-1">
          <ScrollReveal>
            <span className="mb-6 inline-flex items-center gap-2 border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <FileCheck className="h-3.5 w-3.5" />
              {t("Back-Office Outsourcing für Hausverwaltungen", "Back-Office Outsourcing for Property Managers")}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-5xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
              {t("Mehr Einheiten verwalten.", "Manage More Units.")}
              <br />
              <span className="text-gold">{t("Ohne mehr Chaos.", "Without More Chaos.")}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
              {t(
                "A&E Consulting übernimmt wiederkehrende Sachbearbeitung, Mieterkommunikation, Dokumentenpflege und operative Koordination für Hausverwaltungen, die wachsen wollen, ohne ihr internes Team zu überlasten.",
                "A&E Consulting handles recurring administration, tenant communication, document workflows, and operational coordination for property management firms that want to grow without overloading their internal team."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-6 grid max-w-2xl gap-3 text-sm text-cream/70 sm:grid-cols-3">
              <span>{t("Deutsch & Englisch", "German & English")}</span>
              <span>{t("Start in ca. 2 Wochen", "Start in about 2 weeks")}</span>
              <span>{t("Flexible Pilotphase", "Flexible pilot phase")}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
              >
                {t("Kostenloses Erstgespräch", "Free Discovery Call")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="rounded-sm border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:border-cream/40 hover:bg-cream/5"
              >
                {t("Leistungen ansehen", "View Services")}
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2 lg:w-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.value} delay={150 + i * 100}>
              <div className="flex min-h-28 items-start gap-4 rounded-sm border-l-2 border-gold bg-white/[0.04] px-5 py-5 backdrop-blur-sm">
                <stat.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-cream">{stat.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/55">{stat.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
