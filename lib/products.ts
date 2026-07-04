import { Bot, Building2, Coffee, CreditCard, Dumbbell, FileText, GraduationCap, Hotel, LineChart, MessageSquare, Store } from "lucide-react"
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
  {
    slug: "property-management-system",
    name: "Property Management System",
    tagline: "AI-powered property operations from onboarding to rent collection",
    description:
      "A complete property management platform that handles tenant onboarding, lease tracking, maintenance requests, and rent collection in one place. Built-in AI flags late payments before they happen and predicts unit vacancies, giving property managers time to act instead of react.",
    icon: Building2,
    accent: "#3b82f6",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    features: [
      { title: "Tenant Onboarding", description: "Digital applications, background checks, and e-signed leases that get new tenants moved in without paperwork delays." },
      { title: "Lease Tracking", description: "Centralised lease terms, renewal dates, and rent escalations with automated reminders before deadlines." },
      { title: "Maintenance Requests", description: "Tenants submit requests with photos, automatically routed and prioritised to the right vendor or in-house team." },
      { title: "Rent Collection", description: "Automated invoicing, online payments, and reconciliation that eliminates manual rent tracking." },
      { title: "AI Late Payment Flags", description: "Predictive models flag tenants likely to miss a payment based on historical patterns, giving managers a head start." },
      { title: "Vacancy Prediction", description: "AI forecasts upcoming vacancies from lease and behaviour data, so managers can start marketing units earlier." },
    ],
    highlights: ["AI Payment Flags", "Vacancy Prediction", "Automated Rent Collection", "Digital Leases"],
    techStack: ["AI", "Next.js", "GPT-4", "Postgres", "Stripe"],
    useCases: [
      "Multi-unit residential property portfolios managing dozens of leases",
      "Commercial property managers automating rent collection and reconciliation",
      "Real estate firms reducing vacancy periods with predictive insights",
      "Property owners centralising maintenance requests across buildings",
    ],
    faqs: [
      { question: "How does the AI predict late payments?", answer: "It analyses historical payment behaviour, lease terms, and seasonal patterns to flag tenants at risk of missing a payment before the due date." },
      { question: "Can tenants pay rent online?", answer: "Yes. Tenants pay through a secure Stripe-powered portal with support for cards, bank transfers, and recurring payments." },
      { question: "Does it handle maintenance requests?", answer: "Tenants submit requests with photos directly in the app, which are automatically routed and prioritised to the right team or vendor." },
      { question: "Can I track multiple properties?", answer: "Yes. The dashboard consolidates leases, payments, and maintenance across unlimited units and properties." },
    ],
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    tagline: "AI-driven school operations from admissions to at-risk alerts",
    description:
      "An all-in-one school management platform covering admissions, timetabling, grading, attendance, and parent communication. AI analytics continuously scan academic and attendance data to surface at-risk students early, giving teachers and administrators time to intervene.",
    icon: GraduationCap,
    accent: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    features: [
      { title: "Admissions Management", description: "Online applications, document uploads, and automated enrollment workflows that reduce admin overhead." },
      { title: "Smart Timetabling", description: "Auto-generated class and exam schedules that account for teacher availability and room capacity." },
      { title: "Grades & Report Cards", description: "Centralised gradebook with configurable grading scales and automatically generated report cards." },
      { title: "Attendance Tracking", description: "Daily attendance capture with automated absence alerts sent to parents in real time." },
      { title: "Parent Communication", description: "Built-in messaging, announcements, and progress updates that keep parents informed without extra apps." },
      { title: "AI At-Risk Detection", description: "Machine learning models flag students showing early signs of falling behind based on grades and attendance trends." },
    ],
    highlights: ["AI At-Risk Alerts", "Smart Timetabling", "Parent Communication", "Automated Report Cards"],
    techStack: ["AI", "Next.js", "AI Analytics", "Firebase"],
    useCases: [
      "K-12 schools automating admissions and daily attendance tracking",
      "Administrators identifying at-risk students before end-of-term",
      "Teachers managing grades and generating report cards automatically",
      "Schools improving parent engagement with real-time updates",
    ],
    faqs: [
      { question: "How does the AI identify at-risk students?", answer: "It continuously analyses grades, attendance, and behavioural trends to flag students showing early warning signs, well before formal reviews." },
      { question: "Can parents see their child's progress?", answer: "Yes. Parents get real-time access to grades, attendance, and announcements through a dedicated portal." },
      { question: "Does it handle exam scheduling?", answer: "Yes. Timetabling automatically generates class and exam schedules while respecting teacher and room availability." },
      { question: "Is it suitable for multiple campuses?", answer: "Yes. Multi-campus schools can manage admissions, staff, and students from a single dashboard." },
    ],
  },
  {
    slug: "gym-management-system",
    name: "Gym Management System",
    tagline: "AI-powered gym operations that keep members coming back",
    description:
      "A complete gym management platform handling member check-in, subscriptions, class bookings, and trainer schedules. Built-in AI monitors engagement patterns and recommends retention actions before members churn.",
    icon: Dumbbell,
    accent: "#f97316",
    gradient: "from-[#f97316] to-[#facc15]",
    features: [
      { title: "Member Check-In", description: "Fast QR or card-based check-in that tracks visit frequency and class attendance automatically." },
      { title: "Subscription Management", description: "Flexible membership plans with automated billing, renewals, and Chapa-powered payments." },
      { title: "Class Bookings", description: "Real-time class schedules with capacity limits, waitlists, and automated booking confirmations." },
      { title: "Trainer Scheduling", description: "Manage trainer availability, session bookings, and payouts from a single calendar." },
      { title: "AI Retention Recommendations", description: "Machine learning models detect declining engagement and suggest targeted retention offers." },
      { title: "Member Analytics", description: "Dashboards showing attendance trends, revenue, and churn risk across the whole gym." },
    ],
    highlights: ["AI Retention Insights", "Class Booking Engine", "Trainer Scheduling", "Chapa Payments"],
    techStack: ["AI", "React", "Node", "Chapa", "ML"],
    useCases: [
      "Fitness studios automating check-in and class capacity management",
      "Gym chains reducing churn with AI-driven retention recommendations",
      "Personal trainers managing session bookings and payouts",
      "Gyms processing membership payments with Chapa",
    ],
    faqs: [
      { question: "How does the AI reduce churn?", answer: "It tracks attendance and engagement patterns, then recommends targeted actions, like a check-in nudge or a personalised offer, before a member is likely to cancel." },
      { question: "What payment methods are supported?", answer: "Chapa-powered payments support cards, mobile money, and bank transfers for local and recurring billing." },
      { question: "Can members book classes from their phone?", answer: "Yes. Members book, join waitlists, and receive confirmations directly from a mobile-friendly booking page." },
      { question: "Does it support multiple gym locations?", answer: "Yes. Multi-location gyms can manage members, trainers, and schedules from one central dashboard." },
    ],
  },
  {
    slug: "hotel-management-system",
    name: "Hotel Management System",
    tagline: "AI-optimised hotel operations from booking to billing",
    description:
      "A full-featured hotel management platform covering reservations, room status, housekeeping, and billing. AI pricing continuously adjusts room rates in real time based on demand, occupancy, and booking patterns to maximise revenue.",
    icon: Hotel,
    accent: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    features: [
      { title: "Reservation Management", description: "Centralised booking calendar with direct, OTA, and walk-in reservations in one view." },
      { title: "Room Status Tracking", description: "Real-time visibility into room availability, cleaning status, and maintenance needs." },
      { title: "Housekeeping Coordination", description: "Automated task assignment and status updates that keep housekeeping and front desk in sync." },
      { title: "Automated Billing", description: "Consolidated guest folios with automated invoicing, taxes, and payment processing." },
      { title: "AI Dynamic Pricing", description: "Machine learning models adjust room rates in real time based on demand, seasonality, and competitor signals." },
      { title: "Occupancy Forecasting", description: "Predictive analytics that project occupancy trends to inform staffing and pricing decisions." },
    ],
    highlights: ["AI Dynamic Pricing", "Real-Time Room Status", "Automated Billing", "Housekeeping Sync"],
    techStack: ["AI", "Next.js", "Prisma", "AI Pricing", "AWS"],
    useCases: [
      "Independent hotels maximising revenue with AI-driven rate optimisation",
      "Hotel groups coordinating housekeeping across multiple properties",
      "Front desk teams managing reservations from multiple booking channels",
      "Finance teams automating guest billing and invoicing",
    ],
    faqs: [
      { question: "How does the AI pricing work?", answer: "It continuously analyses occupancy, demand, seasonality, and booking pace to recommend or automatically adjust room rates in real time." },
      { question: "Can it manage multiple properties?", answer: "Yes. Hotel groups can manage reservations, housekeeping, and billing across multiple properties from one dashboard." },
      { question: "Does it integrate with booking channels?", answer: "Yes. Reservations sync across direct bookings, OTAs, and walk-ins to prevent double-booking." },
      { question: "Where is guest data hosted?", answer: "The platform runs on AWS infrastructure with encrypted storage and role-based access controls." },
    ],
  },
  {
    slug: "cafe-menu-system",
    name: "Café Menu System",
    tagline: "AI-powered digital menus that turn orders into upsells",
    description:
      "A digital menu and ordering platform for cafés, built around QR-code menus, streamlined order flow, and easy daily-specials management. AI analyses order patterns to suggest personalised upsells that increase average order value.",
    icon: Coffee,
    accent: "#d97706",
    gradient: "from-[#d97706] to-[#92400e]",
    features: [
      { title: "Digital QR Menus", description: "Instantly updatable menus accessible by scanning a QR code at the table or counter." },
      { title: "Streamlined Order Flow", description: "Guests browse, customise, and order directly from their phone, cutting wait times." },
      { title: "Daily Specials Management", description: "Café staff update specials and out-of-stock items in real time from a simple dashboard." },
      { title: "AI Upsell Suggestions", description: "Machine learning recommends add-ons and pairings based on order history and popular combinations." },
      { title: "Order Analytics", description: "Insights into best-selling items, peak hours, and average order value." },
      { title: "Multi-Location Menus", description: "Manage menus and pricing across multiple café locations from one place." },
    ],
    highlights: ["AI Upsell Suggestions", "QR Code Menus", "Real-Time Specials", "Order Analytics"],
    techStack: ["AI", "Next.js", "QR Engine", "GPT-4"],
    useCases: [
      "Cafés replacing printed menus with instantly updatable digital menus",
      "Coffee shops increasing average order value with AI upsell prompts",
      "Multi-location café chains managing specials from one dashboard",
      "Café owners tracking best-sellers and peak ordering hours",
    ],
    faqs: [
      { question: "Do customers need an app to order?", answer: "No. Customers scan a QR code and order directly from their phone browser, no app download required." },
      { question: "How does the AI suggest upsells?", answer: "It analyses order history and common pairings to recommend relevant add-ons at the right moment in the ordering flow." },
      { question: "Can I update the menu instantly?", answer: "Yes. Staff can update prices, specials, and availability in real time, with changes reflected immediately on all QR menus." },
      { question: "Does it support multiple café locations?", answer: "Yes. Menus, pricing, and specials can be managed centrally across all locations." },
    ],
  },
  {
    slug: "shop-management-system",
    name: "Shop Management System",
    tagline: "AI-driven retail operations that never run out of stock",
    description:
      "A complete shop management platform covering inventory, sales, supplier orders, and staff shifts. AI continuously monitors stock levels and automatically triggers reorders before items run out, keeping shelves stocked without manual tracking.",
    icon: Store,
    accent: "#10b981",
    gradient: "from-[#10b981] to-[#059669]",
    features: [
      { title: "Inventory Management", description: "Real-time stock levels across products, categories, and locations with low-stock alerts." },
      { title: "Point of Sale", description: "Fast, intuitive checkout that syncs sales directly with inventory and reporting." },
      { title: "Supplier Order Automation", description: "Automated purchase orders sent to suppliers based on stock thresholds and lead times." },
      { title: "Staff Shift Scheduling", description: "Manage employee shifts, attendance, and payroll-ready hours from one dashboard." },
      { title: "AI Auto-Reordering", description: "Predictive models forecast demand and automatically reorder stock before it runs out." },
      { title: "Sales Reporting", description: "Detailed reports on revenue, top products, and staff performance across all locations." },
    ],
    highlights: ["AI Auto-Reordering", "Real-Time Inventory", "Supplier Automation", "Staff Scheduling"],
    techStack: ["AI", "React", "Node", "ML"],
    useCases: [
      "Retail shops eliminating stockouts with AI-driven auto-reordering",
      "Multi-location stores managing inventory and staff shifts centrally",
      "Shop owners automating supplier purchase orders",
      "Retailers tracking sales performance across products and staff",
    ],
    faqs: [
      { question: "How does auto-reordering work?", answer: "The AI forecasts demand from historical sales and current stock levels, then automatically triggers supplier orders before items run out." },
      { question: "Can it manage multiple shop locations?", answer: "Yes. Inventory, sales, and staff shifts can be managed centrally across unlimited locations." },
      { question: "Does it include a point of sale?", answer: "Yes. Built-in POS syncs every sale directly with inventory in real time." },
      { question: "Can I track staff hours for payroll?", answer: "Yes. Shift schedules and clock-ins generate payroll-ready hour reports automatically." },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, 3)
}
