import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Projects, Case Studies & Impact',
  description: 'Explore 4loops Technologies\' portfolio of successful projects across AI, ERP, cloud, and custom software — with real case studies and measurable business impact.',
  alternates: { canonical: 'https://4loopstechnologies.com/portfolio' },
  openGraph: {
    title: 'Portfolio | 4loops Technologies Ethiopia',
    description: 'AI systems, ERP solutions, cloud infrastructure, and custom software projects delivered for businesses across Ethiopia and East Africa.',
    url: 'https://4loopstechnologies.com/portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies Portfolio' }],
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
