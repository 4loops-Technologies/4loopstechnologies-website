import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Instrument_Sans } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const Analytics = dynamic(
  () => import('@vercel/analytics/next').then((mod) => mod.Analytics)
)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false,
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap',
  preload: false,
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
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <link rel="dns-prefetch" href="https://bunabello.com" />
        <link rel="author" href="https://4loopstechnologies.com/llms.txt" type="text/plain" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'ProfessionalService'],
                  '@id': 'https://4loopstechnologies.com/#organization',
                  name: '4loops Technologies',
                  legalName: '4loops Technologies',
                  url: 'https://4loopstechnologies.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://4loopstechnologies.com/logo.png',
                    width: 512,
                    height: 512,
                  },
                  image: 'https://4loopstechnologies.com/logo.png',
                  description: 'Ethiopian software company delivering AI systems, ERP/CRM solutions, cloud infrastructure, and custom software for businesses across East Africa since 2019. Specializing in custom software development, artificial intelligence, machine learning, cloud computing, mobile app development, cybersecurity, and digital transformation.',
                  foundingDate: '2019',
                  areaServed: [
                    { '@type': 'Country', name: 'Ethiopia' },
                    { '@type': 'Place', name: 'East Africa' },
                    { '@type': 'Place', name: 'Global' },
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Addis Ababa',
                    addressCountry: 'ET',
                  },
                  email: 'hello@4loopstechnologies.com',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'hello@4loopstechnologies.com',
                    url: 'https://4loopstechnologies.com/contact',
                    availableLanguage: ['English', 'Amharic'],
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/4loops-technologies',
                  ],
                  knowsAbout: [
                    'Custom Software Development',
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Natural Language Processing',
                    'Cloud Computing',
                    'Amazon Web Services',
                    'Microsoft Azure',
                    'Google Cloud Platform',
                    'ERP Systems',
                    'ERPNext',
                    'Odoo',
                    'CRM Solutions',
                    'Mobile App Development',
                    'Flutter',
                    'React Native',
                    'Digital Transformation',
                    'Cybersecurity',
                    'DevOps',
                    'Kubernetes',
                    'Docker',
                    'Terraform',
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Python',
                    'Node.js',
                    'PostgreSQL',
                    'TensorFlow',
                    'PyTorch',
                    'Computer Vision',
                    'Amharic NLP',
                    'Business Intelligence',
                    'Data Analytics',
                  ],
                  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
                  slogan: 'Custom Software Development & AI Solutions for Enterprise',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Software Development Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom Software Development',
                          description: 'Bespoke web, desktop, and mobile applications built with modern technology stacks including Next.js, React, Node.js, Python, and Go.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI & Machine Learning Solutions',
                          description: 'Intelligent automation, NLP (including Amharic and Afaan Oromoo), computer vision, predictive analytics, and conversational AI systems.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cloud Infrastructure & DevOps',
                          description: 'End-to-end cloud architecture on AWS, Azure, and GCP with CI/CD pipelines, Kubernetes, Docker, and Terraform.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'ERP & CRM Implementation',
                          description: 'Enterprise resource planning and CRM solutions using Odoo, ERPNext, and custom-built systems tailored for Ethiopian businesses.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Mobile App Development',
                          description: 'Cross-platform iOS and Android applications using Flutter and React Native with offline-first architecture.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cybersecurity & Compliance',
                          description: 'Penetration testing, security audits, ISO 27001 compliance, zero-trust architecture, and threat monitoring.',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://4loopstechnologies.com/#website',
                  url: 'https://4loopstechnologies.com',
                  name: '4loops Technologies',
                  description: 'Custom Software Development & AI Solutions for Enterprise — Ethiopian software company serving businesses across East Africa since 2019.',
                  publisher: { '@id': 'https://4loopstechnologies.com/#organization' },
                  inLanguage: 'en',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
