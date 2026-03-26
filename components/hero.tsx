"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Globe, MapPin, Clock, FileCheck } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Globe,
      value: t("DACH-Raum", "DACH Region"),
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
      icon: FileCheck,
      value: t("Kein Mindestvertrag", "No Minimum Contract"),
      label: t("Flexible Zusammenarbeit", "Flexible collaboration"),
    },
  ]

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gold radial glow */}
        <div
          className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #b8892a 0%, transparent 70%)",
          }}
        />
        {/* Geometric grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#b8892a 1px, transparent 1px), linear-gradient(90deg, #b8892a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 pt-28 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Left content */}
        <div className="flex-1">
          <ScrollReveal>
            <span className="mb-6 inline-block border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Back-Office Outsourcing", "Back-Office Outsourcing")}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-5xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
              {t("Ihre Hausverwaltung.", "Your Property Management.")}
              <br />
              <span className="text-gold">{t("Entlastet.", "Unburdened.")}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/60">
              {t(
                "Wir übernehmen die zeitintensiven Back-Office-Aufgaben Ihrer Hausverwaltung -- damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
                "We handle the time-consuming back-office tasks for your property management company -- so you can focus on your core business."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
              >
                {t("Kostenloses Erstgespräch", "Free Discovery Call")}
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

        {/* Right: stat cards */}
        <div className="grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2 lg:w-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={150 + i * 100}>
              <div className="flex items-start gap-4 rounded-sm border-l-2 border-gold bg-white/[0.04] px-5 py-5 backdrop-blur-sm">
                <stat.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-cream">{stat.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/50">{stat.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
