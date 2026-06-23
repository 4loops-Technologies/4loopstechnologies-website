import type { Metadata } from 'next'
import { getProductBySlug, products } from '@/lib/products'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const title = `${product.name} — ${product.tagline}`
  const description = product.description.slice(0, 155) + '…'
  const url = `https://4loopstechnologies.com/products/${slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | 4loops Technologies`,
      description,
      url,
      images: [{ url: '/logo.png', width: 2000, height: 2000, alt: `${product.name} by 4loops Technologies — #1 AI Technology Company in Ethiopia` }],
    },
  }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetailLayout({ params, children }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4loopstechnologies.com' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://4loopstechnologies.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://4loopstechnologies.com/products/${slug}` },
    ],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `https://4loopstechnologies.com/products/${slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact us for enterprise pricing',
    },
    author: {
      '@type': 'Organization',
      name: '4loops Technologies',
      url: 'https://4loopstechnologies.com',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
