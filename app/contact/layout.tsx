import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Ethiopia\'s #1 Technology Company — Free Consultation',
  description: 'Contact 4loops Technologies, Ethiopia\'s leading software company, for custom software, AI solutions, or ERP/CRM implementation. Get a free expert consultation within one business day.',
  alternates: { canonical: 'https://4loopstechnologies.com/contact' },
  openGraph: {
    title: 'Contact 4loops Technologies | Ethiopia\'s #1 Tech Company',
    description: 'Reach out to Ethiopia\'s leading technology company for AI systems, ERP/CRM, custom software, or cloud infrastructure. 50+ projects delivered, 98% satisfaction.',
    url: 'https://4loopstechnologies.com/contact',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: '4loops Technologies — Contact Us' }],
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
