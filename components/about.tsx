"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Clock, Globe, MessageSquare, Shield } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Clock,
      title: t("CET-Zeitzone", "CET Timezone"),
      desc: t(
        "Pristina liegt in der gleichen Arbeitszeitzone wie Berlin, Wien und Zürich. Ihr ausgelagertes Team ist erreichbar, wenn Ihre Verwaltung arbeitet.",
        "Pristina works in the same business timezone as Berlin, Vienna, and Zurich. Your outsourced team is available when your office is working."
      ),
    },
    {
      icon: MessageSquare,
      title: t("Deutschsprachige Abläufe", "German-Speaking Workflows"),
      desc: t(
        "Kommunikation, Vorlagen, Tickets und Dokumentation laufen auf Deutsch und Englisch, damit Übergaben sauber bleiben.",
        "Communication, templates, tickets, and documentation run in German and English, keeping handoffs clear."
      ),
    },
    {
      icon: Globe,
      title: t("Nähe statt anonymer Offshore-Struktur", "Nearshore, Not Anonymous Offshore"),
      desc: t(
        "Kosovo verbindet wettbewerbsfähige Kosten mit europäischer Arbeitskultur, kurzen Wegen und hoher Serviceorientierung.",
        "Kosovo combines competitive costs with European work culture, short communication paths, and strong service orientation."
      ),
    },
    {
      icon: Shield,
      title: t("Datenschutz & Zugriffsdisziplin", "Data Protection & Access Discipline"),
      desc: t(
        "Wir arbeiten mit rollenbasierten Zugängen, dokumentierten Prozessen und klaren Freigaben für sensible Immobilien- und Mieterdaten.",
        "We work with role-based access, documented processes, and clear approvals for sensitive property and tenant data."
      ),
    },
  ]

  const profileStats = [
    { label: t("Unternehmen", "Company"), value: "A&E Consulting LLC" },
    { label: t("Standort", "Location"), value: "Pristina, Kosovo" },
    { label: t("Märkte", "Markets"), value: "DACH & US East Coast" },
    { label: t("Sprachen", "Languages"), value: t("Deutsch, Englisch", "German, English") },
    { label: t("Zeitzone", "Timezone"), value: "CET" },
    { label: t("Startmodell", "Start Model"), value: t("Pilotfähig", "Pilot-ready") },
  ]

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t("Über uns", "About Us")}
              </span>
              <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl text-balance">
                {t("Warum Pristina, Kosovo?", "Why Pristina, Kosovo?")}
              </h2>
            </ScrollReveal>

            <div className="mt-10 flex flex-col gap-6">
              {advantages.map((adv, i) => (
                <ScrollReveal key={adv.title} delay={i * 100}>
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy">
                      <adv.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{adv.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy/60">{adv.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={200}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-sm bg-navy">
                <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="min-h-80 bg-navy-light">
                    <img
                      src="/assets/enes-haziri.png"
                      alt="Enes Haziri, Founder and Managing Director of A&E Consulting"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="mb-8">
                      <h3 className="font-serif text-2xl font-bold text-cream">Enes Haziri</h3>
                      <p className="mt-1 text-sm text-gold">
                        {t("Gründer & Geschäftsführer", "Founder & Managing Director")}
                      </p>
                    </div>

                    <div className="border-t border-white/10">
                      {profileStats.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between gap-5 border-b border-white/10 py-3.5">
                          <span className="text-sm text-cream/50">{stat.label}</span>
                          <span className="text-right text-sm font-medium text-cream">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-8 block rounded-sm bg-gold px-6 py-3 text-center text-sm font-semibold text-navy transition-all hover:bg-gold-light"
                    >
                      {t("Kontakt aufnehmen", "Get in Touch")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
