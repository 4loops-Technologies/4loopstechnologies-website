import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Enterprise AI Software by Ethiopia\'s #1 Tech Company',
  description: 'Explore 4loops Technologies\' industry-leading product suite: AI Assistant Pro, Analytics Hub, DocuFlow, CommUnify, and TapConnect NFC — enterprise-grade software built for scale.',
  alternates: { canonical: 'https://4loopstechnologies.com/products' },
  openGraph: {
    title: 'Products | 4loops Technologies — #1 in Ethiopia',
    description: 'Industry-leading AI-powered enterprise software: intelligent assistants, business analytics, document management, NFC business cards, and unified communications.',
    url: 'https://4loopstechnologies.com/products',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: '4loops Technologies Products' }],
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
