"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Portfolio } from "@/components/portfolio"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, Check, Star, TrendingUp, Users, Award, Globe,
  Code2, Server, Smartphone, Cloud, Database,
  Search, PenTool, Layers, TestTube, Rocket, Headphones,
  Building2, Heart, ShoppingCart, GraduationCap, Truck, Monitor,
  Banknote,
} from "lucide-react"
import Link from "next/link"

// ─── Theme helper (matching about page pattern) ────────────────────────────

function th(isDark: boolean) {
  return {
    pageBg:    isDark ? "#060d1a"                    : "var(--background)",
    pageColor: isDark ? "#e2e8f0"                    : "var(--foreground)",
    heading:   isDark ? "#f1f5f9"                    : "#0f172a",
    muted:     isDark ? "rgba(226,232,240,0.58)"     : "rgba(15,23,42,0.58)",
    mutedMore: isDark ? "rgba(226,232,240,0.38)"     : "rgba(15,23,42,0.38)",
    cardBg:    isDark ? "rgba(255,255,255,0.03)"     : "rgba(0,0,0,0.025)",
    cardBdr:   isDark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.09)",
    sep:       isDark ? "rgba(255,255,255,0.05)"     : "rgba(0,0,0,0.07)",
  }
}

const MONO: React.CSSProperties = {
  fontFamily: "ui-monospace,'Courier New',monospace",
  fontSize: "12px", fontWeight: 600,
  letterSpacing: "0.18em", textTransform: "uppercase" as const,
  color: "#00d4ff",
}

const GRAD: React.CSSProperties = {
  background: "linear-gradient(135deg,#00d4ff 0%,#4ade80 100%)",
  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
}

// ─── Animated counter ──────────────────────────────────────────────────────

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

// ─── Data ──────────────────────────────────────────────────────────────────

const heroStats = [
  { value: 50,  suffix: "+", label: "Projects Delivered" },
  { value: 6,   suffix: "+", label: "Years of Experience" },
  { value: 7,   suffix: "+", label: "Industries Served" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
]

const caseStudies = [
  {
    title: "AI-Powered Business Intelligence Platform",
    client: "Leading Ethiopian Enterprise",
    accent: "#00d4ff",
    challenge: "Legacy reporting systems with 48-hour data lag, manual data consolidation across 12 departments, and zero predictive capability.",
    solution: "Built a real-time BI platform with ML-driven forecasting, automated ETL pipelines, and interactive dashboards accessible across all departments.",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "React", "PostgreSQL", "Docker"],
    impact: [
      { metric: "48hrs → Real-time", label: "Data latency" },
      { metric: "340%", label: "ROI in year one" },
      { metric: "60%", label: "Faster decision-making" },
    ],
  },
  {
    title: "ERPNext Implementation & Customisation",
    client: "Multi-Branch Retail Chain",
    accent: "#2d9a7a",
    challenge: "Fragmented systems across 8 branches — separate tools for inventory, HR, accounting, and POS with no unified view of operations.",
    solution: "Deployed a fully customised ERPNext instance unifying finance, HR, inventory, and POS. Built custom modules for Ethiopian tax compliance and multi-branch reporting.",
    technologies: ["ERPNext", "Frappe", "Python", "MariaDB", "Redis", "Nginx"],
    impact: [
      { metric: "40%", label: "Cost reduction" },
      { metric: "8 → 1", label: "Systems consolidated" },
      { metric: "3 weeks", label: "Full deployment" },
    ],
  },
  {
    title: "Bilingual AI Chatbot Platform",
    client: "Financial Services Provider",
    accent: "#635BFF",
    challenge: "Customer support team overwhelmed with 2,000+ daily inquiries in both Amharic and English, leading to 4-hour average response times.",
    solution: "Developed an AI chatbot fluent in Amharic and English with NLP intent recognition, integrated with core banking APIs for real-time account queries and transactions.",
    technologies: ["Node.js", "OpenAI", "LangChain", "React Native", "MongoDB", "AWS"],
    impact: [
      { metric: "85%", label: "Queries automated" },
      { metric: "4hrs → 8sec", label: "Response time" },
      { metric: "92%", label: "User satisfaction" },
    ],
  },
]

const industries = [
  { name: "FinTech",            icon: Banknote,        accent: "#00d4ff", desc: "Digital payments, lending platforms, and financial analytics" },
  { name: "Healthcare",        icon: Heart,            accent: "#2d9a7a", desc: "Patient management, telemedicine, and health informatics" },
  { name: "E-Commerce",        icon: ShoppingCart,     accent: "#635BFF", desc: "Marketplaces, inventory systems, and omnichannel retail" },
  { name: "Education",         icon: GraduationCap,    accent: "#4ade80", desc: "LMS platforms, AI tutoring, and student analytics" },
  { name: "Logistics",         icon: Truck,            accent: "#FF9900", desc: "Route optimisation, fleet tracking, and warehouse management" },
  { name: "Enterprise",        icon: Building2,        accent: "#5fb8e8", desc: "ERP systems, CRM solutions, and business automation" },
  { name: "Real Estate",       icon: Monitor,          accent: "#f472b6", desc: "Property management, CRM, and listing platforms" },
]

const techStack = [
  {
    category: "Frontend",
    accent: "#00d4ff",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    category: "Backend",
    accent: "#2d9a7a",
    icon: Server,
    items: ["Node.js", "Python", "Django", "FastAPI", "Frappe", "GraphQL"],
  },
  {
    category: "Mobile",
    accent: "#635BFF",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Capacitor"],
  },
  {
    category: "Cloud & DevOps",
    accent: "#FF9900",
    icon: Cloud,
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    category: "Databases",
    accent: "#4ade80",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "MariaDB", "Elasticsearch", "Firebase"],
  },
]

const processSteps = [
  { num: "01", title: "Discovery & Planning",   icon: Search,     accent: "#00d4ff", desc: "Deep-dive workshops to understand your goals, constraints, and users. We map the full scope before writing a line of code." },
  { num: "02", title: "Design",                 icon: PenTool,    accent: "#635BFF", desc: "Wireframes, prototypes, and UI design validated with real users. Every pixel serves a purpose." },
  { num: "03", title: "Development",            icon: Layers,     accent: "#2d9a7a", desc: "Agile sprints with weekly demos. Clean, tested code built on modern frameworks." },
  { num: "04", title: "Testing & QA",           icon: TestTube,   accent: "#FF9900", desc: "Automated and manual testing across devices, browsers, and edge cases. Security audits included." },
  { num: "05", title: "Deployment",             icon: Rocket,     accent: "#4ade80", desc: "Zero-downtime deployments with monitoring, alerting, and rollback capability built in." },
  { num: "06", title: "Ongoing Support",        icon: Headphones, accent: "#5fb8e8", desc: "Dedicated support, performance monitoring, and iterative improvements post-launch." },
]

const results = [
  { value: 50,   suffix: "+", label: "Projects Delivered",       icon: Layers,     accent: "#00d4ff" },
  { value: 98,   suffix: "%", label: "Client Satisfaction",      icon: Star,       accent: "#2d9a7a" },
  { value: 340,  suffix: "%", label: "Average ROI",              icon: TrendingUp, accent: "#635BFF" },
  { value: 30,   suffix: "+", label: "Expert Engineers",         icon: Users,      accent: "#FF9900" },
  { value: 15,   suffix: "+", label: "Industry Awards",          icon: Award,      accent: "#4ade80" },
  { value: 7,    suffix: "+", label: "Countries Served",         icon: Globe,      accent: "#5fb8e8" },
]

const testimonials = [
  {
    quote: "4loops Technologies transformed our entire digital infrastructure. Their expertise in AI and cloud solutions helped us reduce operational costs by 40%.",
    author: "Sarah Johnson", role: "CTO", company: "TechVentures Inc.",
    accent: "#00d4ff", initials: "SJ",
  },
  {
    quote: "The team delivered beyond our expectations. Real-time insights we never had before — and a product shipped ahead of schedule.",
    author: "Michael Chen", role: "CEO", company: "GlobalRetail Co.",
    accent: "#2d9a7a", initials: "MC",
  },
  {
    quote: "Working with 4loops has been a game-changer for our healthcare platform. Their attention to security and compliance sets them apart.",
    author: "Dr. Emily Roberts", role: "Director of Technology", company: "MedTech Solutions",
    accent: "#635BFF", initials: "ER",
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"
  const t = th(isDark)

  return (
    <>
      <Header />

      <div style={{ background: t.pageBg, minHeight: "100vh", color: t.pageColor, transition: "background 0.3s ease" }}>

        {/* ════════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", padding: "138px 0 80px", overflow: "hidden",
          backgroundImage: "linear-gradient(rgba(0,212,255,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.032) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}>
          <div style={{ position:"absolute", top:"-60px", left:"-60px", width:"440px", height:"440px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.10),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-60px", right:"-60px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p style={{ ...MONO, marginBottom: "18px" }}>&#x2726; Our Portfolio</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(34px,6vw,68px)", fontWeight: 800,
                lineHeight: 1.08, letterSpacing: "-0.025em",
                color: t.heading, marginBottom: "24px",
              }}
            >
              Delivering{" "}
              <span style={GRAD}>real impact</span>
              {" "}through technology.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "clamp(15px,2vw,18px)", color: t.muted, lineHeight: 1.72, maxWidth: "620px", marginBottom: "48px" }}
            >
              From AI-powered platforms to enterprise ERP systems, explore how we have helped businesses across industries achieve measurable results and sustainable growth.
            </motion.p>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {heroStats.map((stat, i) => (
                <div key={i} style={{
                  padding: "20px 0",
                  borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                }}>
                  <p style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, ...GRAD, marginBottom: "4px" }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p style={{ fontSize: "13px", color: t.muted, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            PROJECT SHOWCASE — reusing the existing Portfolio component
        ════════════════════════════════════════════════════════════════ */}
        <Portfolio />

        {/* ════════════════════════════════════════════════════════════════
            CASE STUDIES
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Case Studies</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                How We Deliver{" "}
                <span style={GRAD}>Results</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
                Selected projects showcasing our approach to solving complex business challenges with technology.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              {caseStudies.map((cs, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    borderRadius: "20px", overflow: "hidden", position: "relative",
                    background: isDark
                      ? "linear-gradient(145deg, rgba(8,14,32,0.95) 0%, rgba(4,10,24,0.98) 100%)"
                      : "#ffffff",
                    border: `1px solid ${isDark ? cs.accent + "22" : "rgba(0,0,0,0.08)"}`,
                    boxShadow: isDark
                      ? `0 8px 40px rgba(0,0,0,0.5), 0 0 60px ${cs.accent}08`
                      : "0 4px 24px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* Corner bloom */}
                  <div className="pointer-events-none absolute -top-16 -right-16 rounded-full" style={{
                    width: "200px", height: "200px",
                    background: `radial-gradient(circle, ${cs.accent}, transparent 68%)`,
                    filter: "blur(50px)", opacity: 0.1,
                  }} />

                  <div style={{ padding: "clamp(28px,4vw,48px)" }}>
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <span style={{ ...MONO, color: cs.accent, fontSize: "11px" }}>{cs.client}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, color: t.heading, marginBottom: "28px" }}>
                      {cs.title}
                    </h3>

                    {/* Challenge / Solution grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ef4444", marginBottom: "10px" }}>The Challenge</p>
                        <p style={{ fontSize: "14.5px", color: t.muted, lineHeight: 1.72 }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4ade80", marginBottom: "10px" }}>Our Solution</p>
                        <p style={{ fontSize: "14.5px", color: t.muted, lineHeight: 1.72 }}>{cs.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div style={{ marginBottom: "28px" }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.40)", marginBottom: "10px" }}>Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.technologies.map((tech) => (
                          <span key={tech} style={{
                            fontSize: "12px", fontWeight: 600, padding: "5px 12px",
                            borderRadius: "8px",
                            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"}`,
                            color: isDark ? "rgba(226,232,240,0.65)" : "rgba(15,23,42,0.60)",
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact metrics */}
                    <div style={{ height: "1px", background: t.sep, marginBottom: "24px" }} />
                    <div className="grid grid-cols-3 gap-6">
                      {cs.impact.map((item, i) => (
                        <div key={i}>
                          <p style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, ...GRAD }}>{item.metric}</p>
                          <p style={{ fontSize: "12px", color: t.muted, marginTop: "2px" }}>{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            INDUSTRIES WE SERVE
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Industries</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                Industries We{" "}
                <span style={GRAD}>Serve</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Deep domain expertise across sectors that demand reliability, security, and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((ind, idx) => {
                const Icon = ind.icon
                return (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    style={{
                      borderRadius: "16px", padding: "24px 20px", position: "relative", overflow: "hidden",
                      background: isDark
                        ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                        : "#ffffff",
                      border: `1px solid ${isDark ? ind.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                      width: "100px", height: "100px",
                      background: `radial-gradient(circle, ${ind.accent}, transparent 70%)`,
                      filter: "blur(30px)", opacity: 0.08,
                    }} />
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px",
                      background: `${ind.accent}15`, border: `1px solid ${ind.accent}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "14px",
                    }}>
                      <Icon size={20} style={{ color: ind.accent }} />
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: t.heading, marginBottom: "6px" }}>{ind.name}</p>
                    <p style={{ fontSize: "12.5px", color: t.muted, lineHeight: 1.6 }}>{ind.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            TECHNOLOGY EXPERTISE
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Technology Stack</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                Our Technology{" "}
                <span style={GRAD}>Expertise</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Modern tools and frameworks chosen for reliability, performance, and scalability.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {techStack.map((group, idx) => {
                const Icon = group.icon
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    style={{
                      borderRadius: "16px", padding: "24px 20px", position: "relative", overflow: "hidden",
                      background: isDark
                        ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                        : "#ffffff",
                      border: `1px solid ${isDark ? group.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                      width: "120px", height: "120px",
                      background: `radial-gradient(circle, ${group.accent}, transparent 68%)`,
                      filter: "blur(36px)", opacity: 0.07,
                    }} />
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: `${group.accent}15`, border: `1px solid ${group.accent}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                    }}>
                      <Icon size={18} style={{ color: group.accent }} />
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: t.heading, marginBottom: "12px" }}>{group.category}</p>
                    <div className="flex flex-col gap-2">
                      {group.items.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{
                            width: "5px", height: "5px", borderRadius: "50%",
                            background: group.accent, opacity: 0.6, flexShrink: 0,
                          }} />
                          <span style={{ fontSize: "12.5px", color: t.muted }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            DEVELOPMENT PROCESS
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Our Process</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                How We{" "}
                <span style={GRAD}>Build</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                A structured, transparent process designed for clarity and consistent delivery.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    style={{
                      borderRadius: "16px", padding: "28px 24px", position: "relative", overflow: "hidden",
                      background: isDark
                        ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                        : "#ffffff",
                      border: `1px solid ${isDark ? step.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                      width: "120px", height: "120px",
                      background: `radial-gradient(circle, ${step.accent}, transparent 68%)`,
                      filter: "blur(36px)", opacity: 0.07,
                    }} />

                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "12px",
                        background: `${step.accent}15`, border: `1px solid ${step.accent}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon size={20} style={{ color: step.accent }} />
                      </div>
                      <span style={{ ...MONO, color: step.accent, fontSize: "11px" }}>{step.num}</span>
                    </div>
                    <p style={{ fontSize: "16px", fontWeight: 700, color: t.heading, marginBottom: "8px" }}>{step.title}</p>
                    <p style={{ fontSize: "13px", color: t.muted, lineHeight: 1.7 }}>{step.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            RESULTS & IMPACT
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Impact</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                Results &{" "}
                <span style={GRAD}>Impact</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Meaningful metrics that reflect the value we create for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {results.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
                    className="text-center"
                    style={{
                      borderRadius: "16px", padding: "28px 16px", position: "relative", overflow: "hidden",
                      background: isDark
                        ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                        : "#ffffff",
                      border: `1px solid ${isDark ? stat.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="pointer-events-none absolute -top-8 -right-8 rounded-full" style={{
                      width: "80px", height: "80px",
                      background: `radial-gradient(circle, ${stat.accent}, transparent 68%)`,
                      filter: "blur(28px)", opacity: 0.1,
                    }} />
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: `${stat.accent}15`, border: `1px solid ${stat.accent}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 14px",
                    }}>
                      <Icon size={18} style={{ color: stat.accent }} />
                    </div>
                    <p style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, ...GRAD }}>
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p style={{ fontSize: "12px", color: t.muted, marginTop: "4px", fontWeight: 500 }}>{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 0", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Client Stories</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                What Our Clients{" "}
                <span style={GRAD}>Say</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 22, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  style={{
                    borderRadius: "16px", padding: "28px 24px", position: "relative", overflow: "hidden",
                    background: isDark
                      ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                      : "#ffffff",
                    border: `1px solid ${isDark ? item.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                    boxShadow: isDark
                      ? "0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
                      : "0 2px 18px rgba(0,0,0,0.07)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-5 bottom-5 rounded-full" style={{
                    width: "3px",
                    background: `linear-gradient(to bottom, ${item.accent}, ${item.accent}33)`,
                    opacity: 0.5,
                  }} />

                  {/* Corner bloom */}
                  <div className="pointer-events-none absolute -top-12 -right-12 rounded-full" style={{
                    width: "130px", height: "130px",
                    background: `radial-gradient(circle, ${item.accent}, transparent 70%)`,
                    filter: "blur(36px)", opacity: 0.07,
                  }} />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="fill-current" style={{ color: item.accent, width: 14, height: 14 }} />
                    ))}
                  </div>

                  <blockquote style={{
                    fontSize: "14px", color: isDark ? "rgba(255,255,255,0.68)" : "rgba(15,23,42,0.72)",
                    lineHeight: 1.72, marginBottom: "20px",
                  }}>
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <div style={{ height: "1px", background: `linear-gradient(to right, ${item.accent}38, transparent)`, marginBottom: "16px" }} />

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${item.accent}, ${item.accent}77)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "13px", color: "#ffffff",
                      boxShadow: `0 0 14px ${item.accent}3a`,
                    }}>
                      {item.initials}
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: t.heading }}>{item.author}</p>
                      <p style={{ fontSize: "11.5px", color: isDark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.50)" }}>
                        {item.role} <span style={{ color: isDark ? "rgba(255,255,255,0.20)" : "rgba(15,23,42,0.25)", margin: "0 4px" }}>&middot;</span> {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            CTA — matching about page pattern
        ════════════════════════════════════════════════════════════════ */}
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            position: "relative", borderRadius: "24px", overflow: "hidden",
            padding: "64px 48px", textAlign: "center",
            background: isDark
              ? "linear-gradient(145deg,rgba(0,14,36,0.95),rgba(4,10,26,0.98))"
              : "linear-gradient(145deg,rgba(240,248,255,0.98),rgba(235,245,255,0.99))",
            border: `1px solid ${isDark ? "rgba(0,212,255,0.20)" : "rgba(0,212,255,0.28)"}`,
            boxShadow: isDark ? "0 0 80px rgba(0,212,255,0.07)" : "0 4px 40px rgba(0,0,0,0.06)",
          }}>
            <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.12),transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
            <div style={{ position:"absolute", bottom:"-80px", right:"-80px", width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.10),transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ ...MONO, marginBottom: "18px" }}>&#x2726; Start a Project</p>
              <h2 style={{
                fontSize: "clamp(24px,4.5vw,50px)", fontWeight: 800,
                color: t.heading, letterSpacing: "-0.022em",
                marginBottom: "18px", lineHeight: 1.15,
              }}>
                Ready to build something{" "}
                <span style={GRAD}>extraordinary?</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: t.muted, maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.72 }}>
                Tell us about your project and we will get back to you within one business day with a tailored proposal.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                <Link href="/contact"
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:"linear-gradient(135deg,#00d4ff 0%,#00b4d8 50%,#2d9a7a 100%)", color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 4px 22px rgba(0,212,255,0.36)", transition:"opacity 0.2s ease,transform 0.2s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
                >
                  Start a conversation <ArrowRight size={16} />
                </Link>
                <Link href="/solutions"
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"12px 26px", borderRadius:"12px", background:isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)", border:`1px solid ${isDark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.11)"}`, color:isDark?"rgba(226,232,240,0.85)":t.heading, fontWeight:600, fontSize:"15px", textDecoration:"none", transition:"border-color 0.2s,background 0.2s,transform 0.2s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,212,255,0.4)"; el.style.background = "rgba(0,212,255,0.06)"; el.style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.11)"; el.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"; el.style.transform = "translateY(0)" }}
                >
                  View our solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
