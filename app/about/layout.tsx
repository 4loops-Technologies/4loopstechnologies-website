import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Ethiopia\'s #1 AI Technology Company Since 2019',
  description: 'Learn about 4loops Technologies, Ethiopia\'s #1 AI technology company since 2019. Our mission, expert team, and enterprise solutions for East Africa.',
  alternates: { canonical: 'https://4loopstechnologies.com/about' },
  openGraph: {
    title: 'About 4loops Technologies | #1 AI Technology Company Since 2019',
    description: 'Founded in 2019, 4loops Technologies is Ethiopia\'s #1 AI technology company building AI systems, ERP solutions, and custom enterprise software for East Africa.',
    url: 'https://4loopstechnologies.com/about',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: '4loops Technologies — #1 AI Technology Company in Ethiopia' }],
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
