import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  title: 'A&E Consulting | Back-Office Outsourcing for Property Management',
  description: 'Professional back-office outsourcing for property management companies (Hausverwaltungen) in DACH and US East Coast. Based in Pristina, Kosovo.',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
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
