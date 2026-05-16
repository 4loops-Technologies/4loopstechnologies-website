import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Solutions — AI, ERP, Cloud & DevOps Services',
  description: "Explore 4loops Technologies' full service range: AI/ML systems, ERP & CRM implementation, cloud infrastructure, DevOps, intelligent chatbots, and custom software.",
  alternates: { canonical: 'https://4loopstechnologies.com/solutions' },
  openGraph: {
    title: 'Software Solutions | 4loops Technologies Ethiopia',
    description: 'AI/ML systems, ERP & CRM, cloud infrastructure, DevOps, chatbots, and custom software development for Ethiopian and East African businesses.',
    url: 'https://4loopstechnologies.com/solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies Software Solutions' }],
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://4loopstechnologies.com/solutions' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
