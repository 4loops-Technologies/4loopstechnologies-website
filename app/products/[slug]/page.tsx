import { notFound } from "next/navigation"
import { products, getProductBySlug } from "@/lib/products"
import ProductDetailClient from "./product-detail-client"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return <ProductDetailClient slug={slug} />
}
