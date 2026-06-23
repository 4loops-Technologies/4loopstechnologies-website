import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Ethiopia\'s Leading Technology Company Since 2019',
  description: 'Learn how 4loops Technologies became Ethiopia\'s #1 technology company, delivering world-class AI and enterprise software to businesses across East Africa. Our mission, values, and expert team.',
  alternates: { canonical: 'https://4loopstechnologies.com/about' },
  openGraph: {
    title: 'About 4loops Technologies | #1 Ethiopian Software Company Since 2019',
    description: 'Founded in 2019, 4loops Technologies is Ethiopia\'s leading technology company building AI systems, ERP solutions, and custom enterprise software for East Africa.',
    url: 'https://4loopstechnologies.com/about',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: '4loops Technologies — #1 Technology Company in Ethiopia' }],
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
