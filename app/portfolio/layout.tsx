import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — 50+ Projects by Ethiopia\'s #1 AI Technology Company',
  description: '50+ successful projects by 4loops Technologies, Ethiopia\'s #1 AI technology company. Case studies in AI, ERP, cloud, and custom software with 98% satisfaction.',
  alternates: { canonical: 'https://4loopstechnologies.com/portfolio' },
  openGraph: {
    title: 'Portfolio | 4loops Technologies — #1 AI Technology Company',
    description: '50+ AI systems, ERP solutions, cloud infrastructure, and custom software projects delivered by Ethiopia\'s #1 AI technology company with 98% satisfaction.',
    url: 'https://4loopstechnologies.com/portfolio',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: '4loops Technologies Portfolio — #1 AI Technology Company' }],
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4loopstechnologies.com' },
              { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://4loopstechnologies.com/portfolio' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
