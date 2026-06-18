import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — AI-Powered Enterprise Software',
  description: 'Explore 4loops Technologies\' product suite: AI Assistant Pro, Analytics Hub, DocuFlow, and CommUnify — enterprise-grade software built for scale.',
  alternates: { canonical: 'https://4loopstechnologies.com/products' },
  openGraph: {
    title: 'Products | 4loops Technologies',
    description: 'AI-powered enterprise software products: intelligent assistants, business analytics, document management, and unified communications.',
    url: 'https://4loopstechnologies.com/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '4loops Technologies Products' }],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://4loopstechnologies.com/products' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
