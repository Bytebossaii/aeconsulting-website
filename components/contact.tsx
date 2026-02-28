"use client"

import { useState, type FormEvent } from "react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Phone, MessageCircle, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react"

type FormStatus = "idle" | "sending" | "success" | "error"

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      units: (form.elements.namedItem("units") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || "Something went wrong.")
      }

      setStatus("success")
      form.reset()
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : t("Etwas ist schiefgelaufen.", "Something went wrong."))
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "enes@aeconsultingllc.de", href: "mailto:enes@aeconsultingllc.de" },
    { icon: Phone, label: t("Telefon", "Phone"), value: "+383 49 677 019", href: "tel:+38349677019" },
    { icon: MessageCircle, label: "WhatsApp", value: "+383 49 677 019", href: "https://wa.me/38349677019" },
    { icon: MapPin, label: t("Standort", "Location"), value: "Pristina, Kosovo", href: null },
    { icon: Clock, label: t("Bürozeiten", "Office Hours"), value: "Mo–Fr 09:00–18:00 CET", href: null },
  ]

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("Kontakt", "Contact")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl text-balance">
              {t("Sprechen Sie mit uns", "Talk to Us")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    {t("Name", "Name")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    {t("Unternehmen", "Company")} *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    {t("Telefon", "Phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  {t("Verwaltete Einheiten", "Units Managed")}
                </label>
                <select
                  name="units"
                  className="w-full rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                >
                  <option value="">{t("Bitte wählen", "Please select")}</option>
                  <option value="<50">{"< 50"}</option>
                  <option value="50-200">50 – 200</option>
                  <option value="200-500">200 – 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  {t("Nachricht", "Message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-sm border border-border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "sending"
                  ? t("Wird gesendet...", "Sending...")
                  : t("Nachricht senden", "Send Message")}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-sm bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {t(
                    "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.",
                    "Thank you! Your message has been sent successfully. We will get back to you within 24 hours."
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-sm bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                  {errorMsg || t("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.", "Something went wrong. Please try again.")}
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* Contact details */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-6 lg:pl-8">
              <p className="text-sm leading-relaxed text-navy/60">
                {t(
                  "Nehmen Sie Kontakt mit uns auf -- wir freuen uns auf Ihre Anfrage und melden uns innerhalb von 24 Stunden.",
                  "Get in touch with us -- we look forward to your inquiry and will respond within 24 hours."
                )}
              </p>
              <div className="flex flex-col gap-5 mt-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy">
                      <info.icon className="h-4.5 w-4.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy/40">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-medium text-navy hover:text-gold transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-navy">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
