import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI, Cloud & Digital Transformation',
  description: 'AI/ML systems, ERP & CRM, cloud infrastructure, cybersecurity, and custom software from 4loops Technologies — Ethiopia\'s #1 AI technology company.',
  alternates: { canonical: 'https://4loopstechnologies.com/solutions' },
  openGraph: {
    title: 'Solutions | 4loops Technologies — #1 AI Technology Company',
    description: 'AI/ML systems, ERP & CRM, cloud infrastructure, DevOps, cybersecurity, and custom software by Ethiopia\'s #1 AI technology company for East African enterprises.',
    url: 'https://4loopstechnologies.com/solutions',
    images: [{ url: '/logo.png', width: 2000, height: 2000, alt: '4loops Technologies Solutions — #1 AI Technology Company' }],
  },
}

const faqs = [
  {
    question: "Is 4loops Technologies an AI solutions provider or a software development company?",
    answer: "Both. 4loops Technologies is an AI technology company that also delivers full custom software development — from AI/ML systems and enterprise automation to bespoke web, mobile, and ERP/CRM platforms. Most engagements combine several of these disciplines under one team.",
  },
  {
    question: "What enterprise AI solutions does 4loops Technologies offer?",
    answer: "Conversational AI, predictive analytics, computer vision, and NLP systems — including production Amharic and Afaan Oromoo language models — integrated directly into ERP, CRM, and internal business systems for enterprise clients.",
  },
  {
    question: "Does 4loops Technologies provide AI automation services?",
    answer: "Yes. We design intelligent automation for workflows such as document processing, customer support, demand forecasting, and operational reporting, replacing manual processes with AI-driven systems.",
  },
  {
    question: "What does digital transformation look like with 4loops Technologies?",
    answer: "Digital transformation engagements typically combine cloud migration, process automation, custom software, and AI adoption — delivered end-to-end from discovery through deployment and training, with no handoffs between teams.",
  },
  {
    question: "What industries and regions does 4loops Technologies serve?",
    answer: "Financial services, healthcare, education, e-commerce, construction, logistics, food and beverage, and government. We're headquartered in Addis Ababa and serve clients across Ethiopia, East Africa, and internationally.",
  },
  {
    question: "How is 4loops Technologies different from other software development companies?",
    answer: "We train AI models on local languages and business context rather than relying on machine translation, and we design applications offline-first for markets with variable connectivity — combined with deep knowledge of Ethiopian regulatory and tax requirements.",
  },
]

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {children}
    </>
  )
}
