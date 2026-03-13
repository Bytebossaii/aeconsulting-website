"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Clock, MessageSquare, Globe, Shield, Linkedin } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Clock,
      title: t("Zeitzone CET", "CET Timezone"),
      desc: t(
        "Pristina liegt in der gleichen Zeitzone wie Berlin, Wien und Zürich -- volle Erreichbarkeit während der Geschäftszeiten.",
        "Pristina is in the same timezone as Berlin, Vienna, and Zurich -- full availability during business hours."
      ),
    },
    {
      icon: MessageSquare,
      title: t("Deutschsprachiges Team", "German-Speaking Staff"),
      desc: t(
        "Unser Team spricht fließend Deutsch und Englisch -- keinerlei Sprachbarrieren.",
        "Our team is fluent in German and English -- no language barriers whatsoever."
      ),
    },
    {
      icon: Globe,
      title: t("EU-Beitrittskandidat", "EU Accession Candidate"),
      desc: t(
        "Kosovo ist offizieller EU-Beitrittskandidat mit wachsender IT- und Dienstleistungsbranche.",
        "Kosovo is an official EU accession candidate with a growing IT and service sector."
      ),
    },
    {
      icon: Shield,
      title: t("DSGVO-konform", "GDPR Compliant"),
      desc: t(
        "Alle Prozesse entsprechen den Anforderungen der DSGVO -- Ihre Daten sind sicher.",
        "All processes comply with GDPR requirements -- your data is safe."
      ),
    },
  ]

  const profileStats = [
    { label: t("Unternehmen", "Company"), value: "A&E Consulting LLC" },
    { label: t("Standort", "Location"), value: "Pristina, Kosovo" },
    { label: t("Märkte", "Markets"), value: "DACH & US East Coast" },
    { label: t("Sprachen", "Languages"), value: t("Deutsch, Englisch", "German, English") },
    { label: t("Zeitzone", "Timezone"), value: "CET (UTC+1)" },
    { label: t("Mindestvertrag", "Min. Contract"), value: t("Keiner", "None") },
  ]

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: content */}
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
                <ScrollReveal key={i} delay={i * 100}>
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

          {/* Right: profile card */}
          <ScrollReveal delay={200}>
            <div className="lg:sticky lg:top-28">
              <div className="rounded-sm bg-navy p-8 lg:p-10">
                <div className="mb-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    <span className="font-serif text-2xl font-bold text-gold">EH</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cream">Enes Haziri</h3>
                  <p className="mt-1 text-sm text-gold">
                    {t("Gründer & CEO", "Founder & CEO")}
                  </p>
                </div>

                <div className="border-t border-white/10">
                  {profileStats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-white/10 py-3.5"
                    >
                      <span className="text-sm text-cream/50">{stat.label}</span>
                      <span className="text-sm font-medium text-cream">{stat.value}</span>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
