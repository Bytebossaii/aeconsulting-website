"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Plus } from "lucide-react"

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      q: t("In welcher Sprache wird gearbeitet?", "What language do you work in?"),
      a: t(
        "Unser Team arbeitet in Deutsch und Englisch. Kommunikation, Dokumentation, E-Mail-Vorlagen und operative Übergaben werden an Ihre Sprache und Ihren Ton angepasst.",
        "Our team works in German and English. Communication, documentation, email templates, and operational handoffs are adapted to your language and tone."
      ),
    },
    {
      q: t("Welche Software wird verwendet?", "What software do you use?"),
      a: t(
        "Wir arbeiten uns in Ihre bestehende Umgebung ein, darunter DATEV, Domus, Wodis, Haufe PowerHaus, GFAD, Ticket-Systeme, Cloud-Ablagen und E-Mail-Workflows.",
        "We adapt to your existing environment, including DATEV, Domus, Wodis, Haufe PowerHaus, GFAD, ticket systems, cloud storage, and email workflows."
      ),
    },
    {
      q: t("Wie ist die Datensicherheit gewährleistet?", "How is data security handled?"),
      a: t(
        "Wir arbeiten mit rollenbasierten Zugängen, dokumentierten Prozessen, verschlüsselten Systemen und klaren Freigaben. Sensible Aufgaben bleiben nachvollziehbar.",
        "We use role-based access, documented processes, encrypted systems, and clear approvals. Sensitive tasks remain traceable."
      ),
    },
    {
      q: t("Wie schnell können Sie starten?", "How quickly can you start?"),
      a: t(
        "Nach dem Erstgespräch erhalten Sie innerhalb von 48 Stunden ein Angebot. Das Onboarding dauert in der Regel etwa zwei Wochen.",
        "After the discovery call, you receive a proposal within 48 hours. Onboarding usually takes about two weeks."
      ),
    },
    {
      q: t("Gibt es einen Mindestvertrag?", "Is there a minimum contract?"),
      a: t(
        "Wir können mit einer klar begrenzten Pilotphase starten. So testen Sie Zusammenarbeit, Qualität und Geschwindigkeit, bevor Sie mehr Aufgaben auslagern.",
        "We can start with a clearly limited pilot phase, so you can test collaboration, quality, and speed before outsourcing more tasks."
      ),
    },
  ]

  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              FAQ
            </span>
            <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl text-balance">
              {t("Häufig gestellte Fragen", "Frequently Asked Questions")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-sm bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 text-base font-semibold text-navy">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: isOpen ? "220px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-navy/60">{item.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
