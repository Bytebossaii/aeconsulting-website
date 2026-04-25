import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { CTAStrip } from "@/components/cta-strip"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Navbar } from "@/components/navbar"
import { PainPoints } from "@/components/pain-points"
import { Services } from "@/components/services"
import { TrustBar } from "@/components/trust-bar"
import { LanguageProvider } from "@/lib/language-context"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aeconsultingllc.de"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "A&E Consulting LLC",
  url: siteUrl,
  logo: `${siteUrl}/images/ae-consulting-logo.jpg`,
  image: `${siteUrl}/assets/enes-haziri.png`,
  email: "enes@aeconsultingllc.de",
  telephone: "+38349677019",
  founder: {
    "@type": "Person",
    name: "Enes Haziri",
    jobTitle: "Founder and Managing Director",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pristina",
    addressCountry: "XK",
  },
  areaServed: ["Germany", "Austria", "Switzerland", "United States"],
  serviceType: [
    "Property management outsourcing",
    "Back-office outsourcing",
    "Tenant communication",
    "Rent accounting support",
    "Document management",
    "Vendor coordination",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which languages does A&E Consulting work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A&E Consulting works in German and English for property management back-office, tenant communication, documentation, and operations support.",
      },
    },
    {
      "@type": "Question",
      name: "Which property management software can A&E Consulting support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The team can adapt to common property management systems such as DATEV, Domus, Wodis, Haufe PowerHaus, GFAD, and client-specific workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can onboarding start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After a discovery call, A&E Consulting prepares a proposal within 48 hours and usually completes onboarding within about two weeks.",
      },
    },
  ],
}

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Services />
        <HowItWorks />
        <About />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
