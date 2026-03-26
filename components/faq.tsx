"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Plus, X } from "lucide-react"

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = [
    {
      q: t("In welcher Sprache wird gearbeitet?", "What language do you work in?"),
      a: t(
        "Unser Team arbeitet fließend in Deutsch und Englisch. Die gesamte Kommunikation, Dokumentation und Korrespondenz erfolgt in der Sprache Ihrer Wahl.",
        "Our team works fluently in German and English. All communication, documentation, and correspondence is conducted in the language of your choice."
      ),
    },
    {
      q: t("Welche Software wird verwendet?", "What software do you use?"),
      a: t(
        "Wir arbeiten mit den gängigsten Hausverwaltungs-Programmen wie DATEV, Domus, Wodis, Haufe PowerHaus und GFAD. Sollten Sie ein anderes System nutzen, passen wir uns an.",
        "We work with the most common property management software such as DATEV, Domus, Wodis, Haufe PowerHaus, and GFAD. If you use a different system, we adapt."
      ),
    },
    {
      q: t("Wie ist die Datensicherheit gewährleistet?", "How is data security ensured?"),
      a: t(
        "Alle Prozesse sind DSGVO-konform. Wir verwenden verschlüsselte Verbindungen, sichere Cloud-Systeme und haben strenge Datenschutzvereinbarungen mit allen Mitarbeitern.",
        "All processes are GDPR-compliant. We use encrypted connections, secure cloud systems, and have strict data protection agreements with all employees."
      ),
    },
    {
      q: t("Wie schnell können Sie starten?", "How quickly can you start?"),
      a: t(
        "Nach dem Erstgespräch erhalten Sie innerhalb von 48 Stunden ein Angebot. Das Onboarding dauert in der Regel zwei Wochen, danach sind wir voll einsatzbereit.",
        "After the discovery call, you receive a proposal within 48 hours. Onboarding typically takes two weeks, after which we are fully operational."
      ),
    },
    {
      q: t("Gibt es einen Mindestvertrag?", "Is there a minimum contract?"),
      a: t(
        "Nein. Wir arbeiten ohne Mindestvertragslaufzeit. Sie können die Zusammenarbeit jederzeit mit einer Frist von 30 Tagen beenden.",
        "No. We work without a minimum contract term. You can end the collaboration at any time with 30 days' notice."
      ),
    },
  ]

  return (
    <section className="bg-cream py-24">
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
              <ScrollReveal key={i} delay={i * 60}>
                <div className="overflow-hidden rounded-sm bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
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
                      maxHeight: isOpen ? "200px" : "0px",
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
