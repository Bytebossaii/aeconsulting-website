"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { PainPoints } from "@/components/pain-points"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { CTAStrip } from "@/components/cta-strip"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Services />
        <HowItWorks />
        <About />
        <section id="faq">
          <FAQ />
        </section>
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
