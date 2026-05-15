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
  title: '4loops Technologies | Digital Innovation & Software Solutions',
  description: '4loops Technologies delivers innovative software solutions, AI-powered systems, and digital transformation services that drive growth and efficiency for businesses worldwide.',
  keywords: ['software development', 'AI solutions', 'digital transformation', 'cloud services', 'web development', 'mobile apps'],
  authors: [{ name: '4loops Technologies' }],
  creator: '4loops Technologies',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://4loopstechnologies.com',
    siteName: '4loops Technologies',
    title: '4loops Technologies | Digital Innovation & Software Solutions',
    description: 'Transform your business with cutting-edge technology solutions.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4loops Technologies',
    description: 'Transform your business with cutting-edge technology solutions.',
    images: ['/logo.png'],
  },
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
      </body>
    </html>
  )
}
