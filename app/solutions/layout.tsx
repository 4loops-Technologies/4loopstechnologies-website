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

const services = [
  { name: 'Cloud Infrastructure & DevOps', description: 'End-to-end cloud architecture, CI/CD pipelines, and containerization on AWS, Azure, and GCP.' },
  { name: 'AI & Machine Learning', description: 'Intelligent automation, NLP, computer vision, and predictive analytics engineered for African markets.' },
  { name: 'Cybersecurity & Compliance', description: 'Penetration testing, security audits, ISO 27001 compliance, and 24/7 threat monitoring.' },
  { name: 'Mobile App Development', description: 'Cross-platform iOS and Android apps with seamless backend integration and offline-first architecture.' },
  { name: 'Business Intelligence & Analytics', description: 'Custom dashboards, data warehousing, and reporting tools that turn raw data into actionable decisions.' },
  { name: 'ERP & CRM Systems', description: 'Enterprise resource planning and CRM solutions tailored for Ethiopian and African enterprises.' },
  { name: 'Custom Software Development', description: 'Bespoke web and desktop applications built precisely to your business requirements.' },
  { name: 'Digital Transformation', description: 'End-to-end digital strategy, process automation, and change management for lasting organisational impact.' },
]

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Software Solutions by 4loops Technologies',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: s.name,
                description: s.description,
                provider: {
                  '@type': 'Organization',
                  name: '4loops Technologies',
                  url: 'https://4loopstechnologies.com',
                },
                areaServed: ['Ethiopia', 'East Africa'],
                url: 'https://4loopstechnologies.com/solutions',
              },
            })),
          }),
        }}
      />
      {children}
    </>
  )
}
