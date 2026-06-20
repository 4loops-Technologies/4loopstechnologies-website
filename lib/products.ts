import { Bot, CreditCard, FileText, LineChart, MessageSquare } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ProductFeature = {
  title: string
  description: string
}

export type ProductFAQ = {
  question: string
  answer: string
}

export type Product = {
  slug: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  accent: string
  gradient: string
  image?: string
  features: ProductFeature[]
  highlights: string[]
  techStack: string[]
  useCases: string[]
  faqs: ProductFAQ[]
}

export const products: Product[] = [
  {
    slug: "ai-assistant-pro",
    name: "AI Assistant Pro",
    tagline: "Intelligent conversational AI for enterprise",
    description:
      "A context-aware conversational AI platform that delivers human-like responses for customer support, internal operations, and knowledge management. Built for enterprises that need 24/7 availability, multi-language fluency, and deep integration with existing business systems.",
    icon: Bot,
    accent: "#00d4ff",
    gradient: "from-neon-blue to-light-blue",
    features: [
      { title: "Contextual Understanding", description: "Maintains conversation context across sessions, understanding intent and nuance in complex multi-turn dialogues." },
      { title: "Multi-Language Fluency", description: "Native support for Amharic, English, and 20+ languages with culturally-aware response generation." },
      { title: "Custom Model Training", description: "Fine-tune the AI on your domain-specific data, documentation, and internal processes for accurate, relevant responses." },
      { title: "Enterprise Integration", description: "Connects seamlessly with CRM, ERP, helpdesk, and knowledge base systems via pre-built connectors and APIs." },
      { title: "Analytics Dashboard", description: "Real-time insights into conversation quality, resolution rates, customer satisfaction, and agent handoff metrics." },
      { title: "Security & Compliance", description: "SOC 2 compliant, end-to-end encryption, data residency controls, and role-based access management." },
    ],
    highlights: ["24/7 Availability", "Multi-language Support", "Custom Training", "99.9% Uptime"],
    techStack: ["OpenAI", "LangChain", "Python", "FastAPI", "Redis", "PostgreSQL"],
    useCases: [
      "Automate customer support for financial services in Amharic and English",
      "Internal knowledge assistant for enterprise teams",
      "Lead qualification and sales automation",
      "IT helpdesk ticket triage and resolution",
    ],
    faqs: [
      { question: "How long does deployment take?", answer: "Typical deployment takes 2–4 weeks, including custom model training and integration with your existing systems." },
      { question: "Can it handle Amharic conversations?", answer: "Yes. AI Assistant Pro has native Amharic NLP capabilities trained on local datasets, not just machine translation." },
      { question: "What integrations are available?", answer: "Pre-built connectors for Salesforce, ERPNext, Zendesk, Slack, Microsoft Teams, and custom REST/GraphQL APIs." },
      { question: "Is my data secure?", answer: "All data is encrypted at rest and in transit. We offer on-premise deployment options and data residency controls for compliance requirements." },
    ],
  },
  {
    slug: "analytics-hub",
    name: "Analytics Hub",
    tagline: "Real-time business intelligence platform",
    description:
      "A comprehensive business intelligence platform that transforms raw data into actionable insights through real-time dashboards, predictive analytics, and automated reporting. Designed for decision-makers who need clarity without complexity.",
    icon: LineChart,
    accent: "#2d9a7a",
    gradient: "from-light-blue to-teal",
    features: [
      { title: "Real-time Dashboards", description: "Live data visualisations that update in real-time with drag-and-drop customisation and role-based views." },
      { title: "Predictive Analytics", description: "ML-driven forecasting models that identify trends, anomalies, and opportunities before they become obvious." },
      { title: "Custom Report Builder", description: "Self-serve reporting tool that lets non-technical users create and schedule reports without IT involvement." },
      { title: "Data Pipeline Automation", description: "Automated ETL pipelines that consolidate data from 50+ sources into a unified, clean data warehouse." },
      { title: "Alerting & Notifications", description: "Configurable alerts via email, SMS, and Slack when KPIs cross thresholds or anomalies are detected." },
      { title: "Embedded Analytics", description: "White-label analytics components that can be embedded directly into your existing applications." },
    ],
    highlights: ["Real-time Dashboards", "Custom Reports", "Predictive Insights", "50+ Data Sources"],
    techStack: ["React", "D3.js", "Python", "Apache Kafka", "PostgreSQL", "TensorFlow"],
    useCases: [
      "Executive dashboards consolidating data across departments",
      "Sales pipeline analytics with revenue forecasting",
      "Supply chain visibility and demand prediction",
      "Financial reporting and compliance monitoring",
    ],
    faqs: [
      { question: "What data sources can it connect to?", answer: "50+ pre-built connectors including SQL databases, REST APIs, spreadsheets, Salesforce, ERPNext, Google Analytics, and more." },
      { question: "Do I need a data team to use it?", answer: "No. The self-serve report builder is designed for business users. Technical teams can use the advanced API for custom integrations." },
      { question: "How is data security handled?", answer: "Row-level security, encrypted connections, audit logging, and compliance with SOC 2 and ISO 27001 standards." },
      { question: "Can dashboards be shared externally?", answer: "Yes. Publish read-only dashboards with expiring links or embed them into client portals with white-label branding." },
    ],
  },
  {
    slug: "docuflow",
    name: "DocuFlow",
    tagline: "AI-powered document management",
    description:
      "An end-to-end document management system that combines AI-powered processing, intelligent OCR, and workflow automation to eliminate paper-based processes. From ingestion to archival, DocuFlow handles the full document lifecycle.",
    icon: FileText,
    accent: "#635BFF",
    gradient: "from-teal to-forest-green",
    features: [
      { title: "Smart OCR", description: "AI-powered optical character recognition that extracts structured data from scanned documents, handwriting, and photos with 99%+ accuracy." },
      { title: "Workflow Automation", description: "Configurable approval workflows, routing rules, and escalation paths that replace manual document handling." },
      { title: "Secure Storage", description: "Encrypted cloud storage with version control, audit trails, and retention policies for compliance." },
      { title: "Intelligent Classification", description: "Automatic categorisation and tagging of documents using NLP, reducing manual filing time by 90%." },
      { title: "E-Signatures", description: "Legally binding electronic signatures integrated directly into document workflows for faster approvals." },
      { title: "Search & Discovery", description: "Full-text search across all documents including scanned content, with filters by date, type, author, and custom metadata." },
    ],
    highlights: ["Smart OCR", "Workflow Automation", "Secure Storage", "E-Signatures"],
    techStack: ["React", "Node.js", "Tesseract", "ElasticSearch", "AWS S3", "PostgreSQL"],
    useCases: [
      "Digitise and automate government agency paperwork",
      "Contract management with automated renewal tracking",
      "Invoice processing and accounts payable automation",
      "HR document management and onboarding workflows",
    ],
    faqs: [
      { question: "What document types are supported?", answer: "PDF, Word, Excel, images (JPG, PNG, TIFF), scanned documents, and handwritten notes. Custom format support available." },
      { question: "How accurate is the OCR?", answer: "99%+ accuracy on printed text, 95%+ on clear handwriting. Accuracy improves continuously as the AI learns from corrections." },
      { question: "Can it handle Amharic documents?", answer: "Yes. DocuFlow supports Amharic, Geez, and Latin-script OCR with specialised models for Ethiopian document formats." },
      { question: "Where is data stored?", answer: "Flexible deployment: our secure cloud (AWS), your private cloud, or fully on-premise for maximum control." },
    ],
  },
  {
    slug: "communify",
    name: "CommUnify",
    tagline: "Unified team communication platform",
    description:
      "A unified communication platform that brings together chat, video conferencing, and team collaboration in one seamless experience. Built for distributed teams that need reliable, secure, and intuitive communication tools.",
    icon: MessageSquare,
    accent: "#4ade80",
    gradient: "from-forest-green to-light-green",
    features: [
      { title: "HD Video Conferencing", description: "Crystal-clear video calls for up to 500 participants with screen sharing, recording, and virtual backgrounds." },
      { title: "Team Channels", description: "Organised messaging channels with threading, mentions, reactions, and searchable conversation history." },
      { title: "File Sharing & Collaboration", description: "Drag-and-drop file sharing with real-time co-editing, version control, and 100GB per user storage." },
      { title: "Voice & Audio Rooms", description: "Always-on audio rooms for casual conversations and quick stand-ups without the overhead of scheduled meetings." },
      { title: "App Integrations", description: "Connect with 200+ tools including Jira, GitHub, Google Workspace, and custom webhook integrations." },
      { title: "Admin & Security", description: "Organisation-wide policies, SSO, 2FA, message retention controls, and detailed admin analytics." },
    ],
    highlights: ["Video Conferencing", "Team Chat", "File Sharing", "200+ Integrations"],
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "Redis", "PostgreSQL"],
    useCases: [
      "Remote-first team communication and daily standups",
      "Cross-office collaboration for multi-branch enterprises",
      "Client communication portal with branded experience",
      "Secure internal communication for regulated industries",
    ],
    faqs: [
      { question: "How many participants can join a video call?", answer: "Up to 500 participants in a single call with automatic quality adjustment based on network conditions." },
      { question: "Does it work offline?", answer: "Messages are queued when offline and synced when connectivity returns. Offline access to recent files is supported." },
      { question: "Can it replace Slack and Zoom?", answer: "Yes. CommUnify combines the best of messaging, video, and file collaboration into a single platform with lower total cost." },
      { question: "Is it available on mobile?", answer: "Native iOS and Android apps with full feature parity, plus a responsive web app for any browser." },
    ],
  },
  {
    slug: "nfc-business-card",
    name: "TapConnect NFC",
    tagline: "NFC-powered digital business cards",
    description:
      "A modern NFC-powered digital business card platform that enables instant contact sharing through a simple tap or QR code scan. Replace paper cards with a customisable digital profile that updates in real-time, tracks engagement analytics, and integrates with your CRM.",
    icon: CreditCard,
    accent: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    image: "/products/NFC.png",
    features: [
      { title: "Tap-to-Share", description: "Share your full contact profile instantly by tapping your NFC card against any smartphone — no app required for the recipient." },
      { title: "Custom Digital Profiles", description: "Fully branded profile pages with your photo, bio, social links, portfolio, and any custom fields your business needs." },
      { title: "Real-Time Updates", description: "Change your job title, phone number, or links anytime — every card and QR code automatically reflects the latest info." },
      { title: "Engagement Analytics", description: "Track who viewed your profile, which links they clicked, and when — with exportable reports and CRM sync." },
      { title: "QR Code Fallback", description: "Every profile includes a unique QR code for situations where NFC is not available — works on any device with a camera." },
      { title: "Team Management", description: "Admin dashboard to provision, manage, and brand cards for entire teams with role-based access and bulk operations." },
    ],
    highlights: ["Instant NFC Sharing", "QR Code Fallback", "Real-Time Updates", "Analytics Dashboard"],
    techStack: ["React Native", "Next.js", "Node.js", "NFC APIs", "PostgreSQL", "Stripe"],
    useCases: [
      "Networking at conferences and industry events",
      "Sales teams sharing contact details during client meetings",
      "Corporate onboarding with branded digital cards for new hires",
      "Real estate agents sharing listings alongside contact info",
    ],
    faqs: [
      { question: "Do recipients need an app?", answer: "No. Tapping the NFC card opens your digital profile directly in the recipient's browser. No downloads required." },
      { question: "What phones support NFC?", answer: "All iPhones from iPhone 7 onward and virtually all Android phones manufactured after 2018 support NFC reading." },
      { question: "Can I customise the card design?", answer: "Yes. Physical cards are available in multiple materials (PVC, metal, bamboo) with full-colour custom printing on both sides." },
      { question: "How does team management work?", answer: "Admins can create profiles, assign cards, enforce brand guidelines, and revoke access from a single dashboard." },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, 3)
}
