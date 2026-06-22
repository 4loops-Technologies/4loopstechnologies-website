import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Consultation',
  description: 'Contact 4loops Technologies for custom software, AI solutions, or ERP/CRM implementation in Ethiopia and East Africa. Get a free consultation within one business day.',
  alternates: { canonical: 'https://4loopstechnologies.com/contact' },
  openGraph: {
    title: 'Contact 4loops Technologies | Free Consultation',
    description: 'Reach out to 4loops Technologies for AI systems, ERP/CRM, custom software, or cloud infrastructure. Based in Ethiopia, serving East Africa.',
    url: 'https://4loopstechnologies.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies — Contact Us' }],
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
