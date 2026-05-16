import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story, Mission & Values',
  description: 'Learn how 4loops Technologies was founded in 2019 to deliver world-class AI and software solutions to Ethiopian and East African businesses. Our mission, values, and team.',
  alternates: { canonical: 'https://4loopstechnologies.com/about' },
  openGraph: {
    title: 'About 4loops Technologies | Ethiopian Software Company Since 2019',
    description: 'Founded in 2019, 4loops Technologies builds AI systems, ERP solutions, and custom software for businesses across Ethiopia and East Africa.',
    url: 'https://4loopstechnologies.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies Team and Mission' }],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://4loopstechnologies.com/about' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
