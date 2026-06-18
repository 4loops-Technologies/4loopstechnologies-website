import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://4loopstechnologies.com'
  const now = new Date()
  return [
    { url: baseUrl,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/solutions`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/about`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ]
}
