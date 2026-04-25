import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aeconsultingllc.de"

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A&E Consulting | Property Management Outsourcing for DACH & US",
    template: "%s | A&E Consulting",
  },
  description:
    "German and English back-office outsourcing for property management companies: rent accounting support, tenant communication, vendor coordination, document management, and scalable operations from Pristina, Kosovo.",
  keywords: [
    "property management outsourcing",
    "Hausverwaltung Outsourcing",
    "back office outsourcing DACH",
    "tenant communication outsourcing",
    "Mietbuchhaltung Unterstützung",
    "Nebenkostenabrechnung Support",
    "real estate operations outsourcing",
    "German speaking outsourcing Kosovo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "A&E Consulting",
    title: "A&E Consulting | Property Management Outsourcing",
    description:
      "Reliable German and English back-office support for property management teams in DACH and the US East Coast.",
    images: [
      {
        url: "/images/ae-consulting-logo.jpg",
        width: 1200,
        height: 630,
        alt: "A&E Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&E Consulting | Property Management Outsourcing",
    description:
      "German and English back-office outsourcing for property management companies in DACH and the US East Coast.",
    images: ["/images/ae-consulting-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/ae-consulting-logo.jpg",
    apple: "/images/ae-consulting-logo.jpg",
  },
  verification: {
    google: "fZbgFlo-4pEVG3cOYrkkCjEeu487zg1p8pVUx743SIY",
  },
}
export const viewport = {
  themeColor: '#0d2035',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
