"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Footer() {
  const { t } = useLanguage()

  const services = [
    { label: t("Mietbuchhaltung", "Rent Accounting"), href: "#services" },
    { label: t("Nebenkostenabrechnung", "Utility Billing"), href: "#services" },
    { label: t("Mahnwesen", "Collections & Dunning"), href: "#services" },
    { label: t("Mieterkorrespondenz", "Tenant Communication"), href: "#services" },
    { label: t("Handwerkerkoordination", "Vendor Coordination"), href: "#services" },
    { label: t("Dokumentenmanagement", "Document Management"), href: "#services" },
  ]

  const company = [
    { label: t("Über uns", "About Us"), href: "#about" },
    { label: t("Prozess", "Process"), href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: t("Kontakt", "Contact"), href: "#contact" },
  ]

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="font-serif text-2xl font-bold tracking-wide text-cream">
              A<span className="text-gold">&</span>E Consulting
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/45">
              {t(
                "Back-Office Outsourcing für Hausverwaltungen im DACH-Raum und an der US-Ostküste.",
                "Back-office outsourcing for property management companies in DACH and the US East Coast."
              )}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Leistungen", "Services")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-cream/55 transition-colors hover:text-cream">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Unternehmen", "Company")}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-sm text-cream/55 transition-colors hover:text-cream">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Kontakt", "Contact")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/55">
              <li>
                <a href="mailto:enes@aeconsultingllc.de" className="transition-colors hover:text-cream">
                  enes@aeconsultingllc.de
                </a>
              </li>
              <li>
                <a href="tel:+38349677019" className="transition-colors hover:text-cream">
                  +383 49 677 019
                </a>
              </li>
              <li>Pristina, Kosovo</li>
              <li>Mo-Fr 09:00-18:00 CET</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/35">
            &copy; {new Date().getFullYear()} A&E Consulting LLC. {t("Alle Rechte vorbehalten.", "All rights reserved.")}
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/45">
            <a href="/privacy-policy" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a href="/terms-of-service" className="transition-colors hover:text-cream">
              Terms
            </a>
            <LanguageToggle variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
