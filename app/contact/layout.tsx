import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Ethiopia\'s #1 AI Technology Company — Free Consultation',
  description: 'Contact 4loops Technologies, Ethiopia\'s #1 AI technology company. Get a free consultation for custom software, AI solutions, or ERP/CRM implementation.',
  alternates: { canonical: 'https://4loopstechnologies.com/contact' },
  openGraph: {
    title: 'Contact 4loops Technologies | Ethiopia\'s #1 AI Technology Company',
    description: 'Reach out to Ethiopia\'s #1 AI technology company for AI systems, ERP/CRM, custom software, or cloud infrastructure. 50+ projects delivered, 98% satisfaction.',
    url: 'https://4loopstechnologies.com/contact',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: '4loops Technologies — Contact Us' }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://4loopstechnologies.com/contact' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
