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

  // Built explicitly rather than relying on the root title.template: this layout is nested two
  // levels below the root (root → products → [slug]), and Next.js only cascades a title template
  // one level down, so a plain string here would render with no brand name at all.
  const fullTitle = `${product.name} | ${product.tagline} | 4loops Technologies`
  const description = product.description.slice(0, 155) + '…'
  const url = `https://4loopstechnologies.com/products/${slug}`
  const ogImageAlt = `${product.name} by 4loops Technologies — #1 AI Technology Company in Ethiopia`

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | 4loops Technologies`,
      description,
      url,
      images: [{ url: '/logo.png', width: 2000, height: 2000, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | 4loops Technologies`,
      description,
      images: ['/logo.png'],
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
    isPartOf: { '@id': 'https://4loopstechnologies.com/#website' },
    author: { '@id': 'https://4loopstechnologies.com/#organization' },
    publisher: { '@id': 'https://4loopstechnologies.com/#organization' },
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
