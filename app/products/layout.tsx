import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI Products & Software',
  description: 'Enterprise AI products by 4loops Technologies, Ethiopia\'s #1 AI technology company: AI Assistant Pro, Analytics Hub, DocuFlow, CommUnify, and TapConnect.',
  alternates: { canonical: 'https://4loopstechnologies.com/products' },
  openGraph: {
    title: 'Products | 4loops Technologies — #1 AI Technology Company',
    description: 'AI-powered enterprise software by Ethiopia\'s #1 AI technology company: intelligent assistants, analytics, document management, NFC cards, and communications.',
    url: 'https://4loopstechnologies.com/products',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: '4loops Technologies Products — #1 AI Technology Company' }],
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
