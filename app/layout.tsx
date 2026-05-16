import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://4loopstechnologies.com'),
  title: {
    default: '4loops Technologies | AI & Software Solutions Ethiopia',
    template: '%s | 4loops Technologies',
  },
  description: 'Ethiopian software company delivering AI systems, ERP & CRM solutions, cloud infrastructure, and custom software for businesses across East Africa since 2019.',
  keywords: ['software development Ethiopia', 'AI solutions Ethiopia', 'ERP software Ethiopia', 'custom software development', 'cloud solutions East Africa', 'digital transformation Ethiopia', '4loops technologies'],
  authors: [{ name: '4loops Technologies', url: 'https://4loopstechnologies.com' }],
  creator: '4loops Technologies',
  publisher: '4loops Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://4loopstechnologies.com',
    siteName: '4loops Technologies',
    title: '4loops Technologies | AI & Software Solutions Ethiopia',
    description: 'Ethiopian software company delivering AI systems, ERP & CRM solutions, cloud infrastructure, and custom software for businesses across East Africa since 2019.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies — AI & Software Solutions for East Africa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4loops Technologies | AI & Software Solutions Ethiopia',
    description: 'Ethiopian software company delivering AI systems, ERP & CRM, cloud infrastructure, and custom software for East Africa.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg',            type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32',  type: 'image/png' },
      { url: '/icon-192x192.png',    sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png',    sizes: '512x512', type: 'image/png' },
    ],
    apple:   '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://4loopstechnologies.com' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://4loopstechnologies.com/#organization',
                  name: '4loops Technologies',
                  url: 'https://4loopstechnologies.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://4loopstechnologies.com/logo.png',
                    width: 512,
                    height: 512,
                  },
                  description: 'Ethiopian software company delivering AI systems, ERP/CRM solutions, and digital transformation services across East Africa.',
                  foundingDate: '2019',
                  areaServed: ['Ethiopia', 'East Africa'],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    url: 'https://4loopstechnologies.com/contact',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://4loopstechnologies.com/#website',
                  url: 'https://4loopstechnologies.com',
                  name: '4loops Technologies',
                  publisher: { '@id': 'https://4loopstechnologies.com/#organization' },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
