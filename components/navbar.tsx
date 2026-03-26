"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: t("Leistungen", "Services") },
    { href: "#how-it-works", label: t("So funktioniert es", "How It Works") },
    { href: "#about", label: t("Über uns", "About Us") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold text-cream tracking-wide">
          A<span className="text-gold">&</span>E Consulting
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light md:block"
          >
            {t("Gespräch vereinbaren", "Book a Call")}
          </a>
          {/* Mobile hamburger */}
          <button
            className="text-cream md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-sm bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy transition-all hover:bg-gold-light"
          >
            {t("Gespräch vereinbaren", "Book a Call")}
          </a>
        </div>
      )}
    </nav>
  )
}
