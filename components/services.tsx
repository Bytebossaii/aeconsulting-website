"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      num: "01",
      title: t("Mietbuchhaltung", "Rent Accounting"),
      desc: t(
        "Komplette Mietbuchhaltung inklusive Sollstellung, Zahlungseingänge und Kontenabstimmung.",
        "Complete rent accounting including charges, payment receipts, and account reconciliation."
      ),
      tags: ["DATEV", "Domus", "Wodis"],
    },
    {
      num: "02",
      title: t("Nebenkostenabrechnung", "Utility Billing"),
      desc: t(
        "Erstellung der jährlichen Betriebskostenabrechnung nach aktueller Rechtslage.",
        "Preparation of annual utility billing in compliance with current regulations."
      ),
      tags: ["Haufe PowerHaus", "GFAD"],
    },
    {
      num: "03",
      title: t("Mahnwesen", "Collections & Dunning"),
      desc: t(
        "Strukturiertes Mahnwesen von der Zahlungserinnerung bis zur Übergabe an den Rechtsanwalt.",
        "Structured dunning process from payment reminders to handover to legal counsel."
      ),
      tags: ["Automatisiert", "Gesetzeskonform"],
    },
    {
      num: "04",
      title: t("Mieterkorrespondenz", "Tenant Communication"),
      desc: t(
        "Professionelle Mieterbetreuung per E-Mail, Telefon und Schriftverkehr in Deutsch und Englisch.",
        "Professional tenant support via email, phone, and written correspondence in German and English."
      ),
      tags: ["DE", "EN"],
    },
    {
      num: "05",
      title: t("Handwerkerkoordination", "Vendor Coordination"),
      desc: t(
        "Angebotseinholung, Auftragserteilung und Nachverfolgung von Instandhaltungsmaßnahmen.",
        "Obtaining quotes, issuing orders, and tracking maintenance activities."
      ),
      tags: ["Facility Management"],
    },
    {
      num: "06",
      title: t("Dokumentenmanagement", "Document Management"),
      desc: t(
        "Digitalisierung, Ablage und Verwaltung aller relevanten Dokumente und Verträge.",
        "Digitization, filing, and management of all relevant documents and contracts."
      ),
      tags: ["DMS", "Cloud"],
    },
  ]

  return (
    <section id="services" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Unsere Leistungen", "Our Services")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl text-balance">
              {t("Was wir für Sie übernehmen", "What We Handle for You")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group rounded-sm border border-white/[0.06] bg-white/[0.03] p-7 transition-all hover:border-gold/20 hover:bg-white/[0.06]">
                <span className="font-serif text-3xl font-bold text-gold/40">{service.num}</span>
                <h3 className="mt-4 text-lg font-semibold text-cream">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">{service.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-gold/10 px-2.5 py-1 text-xs font-medium text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
