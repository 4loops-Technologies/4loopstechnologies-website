"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import {
  Cloud, Brain, Shield, Smartphone, BarChart3,
  Database, Code2, Cpu, ArrowRight, Check,
} from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

// ─── Types ─────────────────────────────────────────────────────────────────

type Service = {
  id: number
  category: string
  Icon: LucideIcon
  title: string
  desc: string
  tags: string[]
  highlight: string
  detail: string
}

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: 1, category: "Cloud & DevOps", Icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "End-to-end cloud architecture, CI/CD pipelines, and containerization on AWS, Azure, and GCP — built for uptime, scale, and rapid iteration.",
    detail: "We design infrastructure that treats reliability and developer velocity as equals: blue-green deployments, immutable infrastructure, and GitOps workflows that let your team ship with confidence every day.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    highlight: "99.9% uptime SLA",
  },
  {
    id: 2, category: "AI & ML", Icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent automation, NLP, computer vision, and predictive analytics engineered for African markets.",
    detail: "Our models are trained on data that reflects local languages and business contexts — including Amharic and Afaan Oromoo NLP pipelines used in production today.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "Amharic NLP"],
    highlight: "Local-first AI models",
  },
  {
    id: 3, category: "Cybersecurity", Icon: Shield,
    title: "Cybersecurity & Compliance",
    desc: "Penetration testing, security audits, ISO 27001 compliance, and 24/7 threat monitoring.",
    detail: "We follow a zero-trust model from day one: every system we touch is hardened, monitored, and subject to continuous vulnerability scanning so breaches are caught before they matter.",
    tags: ["ISO 27001", "SIEM", "Zero Trust", "SOC 2"],
    highlight: "ISO 27001 aligned",
  },
  {
    id: 4, category: "Mobile", Icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with seamless backend integration and offline-first architecture.",
    detail: "Built for markets with variable connectivity: our apps use local-first data sync, aggressive caching, and progressive loading so users get full functionality on any network.",
    tags: ["Flutter", "React Native", "Firebase"],
    highlight: "Offline-first ready",
  },
  {
    id: 5, category: "BI & Data", Icon: BarChart3,
    title: "Business Intelligence & Analytics",
    desc: "Custom dashboards, data warehousing, and reporting tools that turn raw data into actionable decisions.",
    detail: "We move data from spreadsheets into structured pipelines: data modelling, automated ETL, and self-serve dashboards that non-technical stakeholders can update without opening a ticket.",
    tags: ["Power BI", "dbt", "Redshift", "Metabase"],
    highlight: "Real-time dashboards",
  },
  {
    id: 6, category: "ERP & CRM", Icon: Database,
    title: "ERP & CRM Systems",
    desc: "Enterprise resource planning and CRM solutions tailored for Ethiopian and African enterprises.",
    detail: "We customise and extend Odoo, build bespoke ERP modules for local tax codes, and integrate with existing legacy systems without disrupting operations.",
    tags: ["Odoo", "Custom ERP", "Salesforce"],
    highlight: "20+ system integrations",
  },
  {
    id: 7, category: "Cloud & DevOps", Icon: Code2,
    title: "Custom Software Development",
    desc: "Bespoke web and desktop applications built precisely to your business requirements.",
    detail: "We start with deep discovery: workflow mapping, stakeholder interviews, and prototype testing before a line of production code is written.",
    tags: ["Next.js", "Node.js", "Python", "PostgreSQL"],
    highlight: "Full-stack delivery",
  },
  {
    id: 8, category: "BI & Data", Icon: Cpu,
    title: "Digital Transformation",
    desc: "End-to-end digital strategy, process automation, and change management for lasting organisational impact.",
    detail: "Technology is only half the job. We embed with your teams, run change management workshops, and build internal capacity so the transformation outlasts our engagement.",
    tags: ["Strategy", "RPA", "Process Mining"],
    highlight: "People-first strategy",
  },
]

const CATEGORY_ACCENT: Record<string, string> = {
  "Cloud & DevOps": "#00d4ff",
  "AI & ML":        "#4ade80",
  "Cybersecurity":  "#f43f5e",
  "Mobile":         "#a78bfa",
  "BI & Data":      "#fb923c",
  "ERP & CRM":      "#2d9a7a",
}

const TECH_ITEMS = [
  { name: "React",        color: "#61DAFB", slug: "react"           },
  { name: "Next.js",      color: "#6366f1", slug: "nextdotjs"       },
  { name: "TypeScript",   color: "#3178C6", slug: "typescript"      },
  { name: "Tailwind CSS", color: "#06B6D4", slug: "tailwindcss"     },
  { name: "Node.js",      color: "#339933", slug: "nodedotjs"       },
  { name: "Python",       color: "#3776AB", slug: "python"          },
  { name: "Go",           color: "#00ADD8", slug: "go"              },
  { name: "FastAPI",      color: "#009688", slug: "fastapi"         },
  { name: "Docker",       color: "#2496ED", slug: "docker"          },
  { name: "Kubernetes",   color: "#326CE5", slug: "kubernetes"      },
  { name: "TensorFlow",   color: "#FF6F00", slug: "tensorflow"      },
  { name: "PyTorch",      color: "#EE4C2C", slug: "pytorch"         },
  { name: "Terraform",    color: "#7B42BC", slug: "terraform"       },
  { name: "Flutter",      color: "#54C5F8", slug: "flutter"         },
  { name: "React Native", color: "#61DAFB", slug: "react"           },
  { name: "Firebase",     color: "#FFCA28", slug: "firebase"        },
  { name: "PostgreSQL",   color: "#4169E1", slug: "postgresql"      },
  { name: "MongoDB",      color: "#47A248", slug: "mongodb"         },
  { name: "Redis",        color: "#DC382D", slug: "redis"           },
]

// ─── Static (non-theme) styles ─────────────────────────────────────────────

const GRADIENT_TEXT: React.CSSProperties = {
  background: "linear-gradient(135deg, #00d4ff 0%, #4ade80 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

const MONO_LABEL: React.CSSProperties = {
  fontFamily: "ui-monospace, 'Courier New', monospace",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#00d4ff",
}

const GRID_BG: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
}

// ─── Theme-derived helpers ──────────────────────────────────────────────────

function th(isDark: boolean) {
  return {
    // Page
    pageBg:      isDark ? "#060d1a"                        : "var(--background)",
    pageColor:   isDark ? "#e2e8f0"                        : "var(--foreground)",
    // Text
    heading:     isDark ? "#f1f5f9"                        : "#0f172a",
    muted:       isDark ? "rgba(226,232,240,0.58)"         : "rgba(15,23,42,0.58)",
    mutedMore:   isDark ? "rgba(226,232,240,0.40)"         : "rgba(15,23,42,0.40)",
    // Cards / surfaces
    cardBg:      isDark ? "rgba(255,255,255,0.03)"         : "rgba(0,0,0,0.025)",
    cardBorder:  isDark ? "rgba(255,255,255,0.07)"         : "rgba(0,0,0,0.08)",
    // CTA card
    ctaBg:       isDark
      ? "linear-gradient(145deg,rgba(0,14,36,0.95),rgba(4,10,26,0.98))"
      : "linear-gradient(145deg,rgba(240,248,255,0.98),rgba(235,245,255,0.99))",
    ctaBorder:   isDark ? "rgba(0,212,255,0.22)"           : "rgba(0,212,255,0.30)",
    // Misc
    separator:   isDark ? "rgba(255,255,255,0.06)"         : "rgba(0,0,0,0.07)",
    tagBg:       isDark ? "rgba(255,255,255,0.05)"         : "rgba(0,0,0,0.04)",
    tagBorder:   isDark ? "rgba(255,255,255,0.09)"         : "rgba(0,0,0,0.08)",
    tagColor:    isDark ? "rgba(226,232,240,0.65)"         : "rgba(15,23,42,0.60)",
  }
}

// ─── Left panel visual ──────────────────────────────────────────────────────

function ServiceVisual({ service, isDark }: { service: Service; isDark: boolean }) {
  const accent = CATEGORY_ACCENT[service.category]
  const t = th(isDark)
  const { Icon } = service

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        background: isDark
          ? `linear-gradient(160deg, #07101f 0%, ${accent}12 100%)`
          : `linear-gradient(160deg, #ffffff 0%, ${accent}08 100%)`,
        border: `1px solid ${accent}${isDark ? "28" : "22"}`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 32px",
        boxShadow: isDark
          ? `0 0 60px ${accent}10, inset 0 0 80px ${accent}06`
          : `0 4px 40px rgba(0,0,0,0.06), 0 0 0 1px ${accent}14`,
      }}
    >
      {/* Tinted grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(${accent}${isDark ? "08" : "05"} 1px, transparent 1px),
            linear-gradient(90deg, ${accent}${isDark ? "08" : "05"} 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      {/* Centre glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-55%)", width:"280px", height:"280px", borderRadius:"50%", background:`radial-gradient(circle,${accent}${isDark?"22":"14"},transparent 68%)`, filter:"blur(30px)", pointerEvents:"none" }} />
      {/* Corner accents */}
      <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"180px", height:"180px", borderRadius:"50%", background:`radial-gradient(circle,${accent}${isDark?"14":"0e"},transparent 70%)`, filter:"blur(40px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:"160px", height:"160px", borderRadius:"50%", background:`radial-gradient(circle,${accent}${isDark?"10":"08"},transparent 70%)`, filter:"blur(40px)", pointerEvents:"none" }} />

      {/* Icon */}
      <div
        style={{
          position: "relative", zIndex: 1,
          width: "104px", height: "104px",
          borderRadius: "28px",
          background: `linear-gradient(145deg,${accent}${isDark?"20":"18"},${accent}12)`,
          border: `1.5px solid ${accent}${isDark?"44":"36"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "24px",
          boxShadow: isDark
            ? `0 0 40px ${accent}28, 0 8px 32px rgba(0,0,0,0.4)`
            : `0 4px 24px ${accent}20, 0 0 0 1px ${accent}18`,
        }}
      >
        <Icon size={46} style={{ color: accent }} />
      </div>

      {/* Category */}
      <span style={{ ...MONO_LABEL, color: accent, background:`${accent}14`, border:`1px solid ${accent}28`, padding:"5px 14px", borderRadius:"999px", display:"inline-block", marginBottom:"12px", position:"relative", zIndex:1 }}>
        {service.category}
      </span>

      {/* Title */}
      <h3 style={{ fontSize:"19px", fontWeight:700, color: t.heading, textAlign:"center", lineHeight:1.3, marginBottom:"8px", position:"relative", zIndex:1 }}>
        {service.title}
      </h3>

      {/* Highlight */}
      <p style={{ fontFamily:"ui-monospace,monospace", fontSize:"12px", fontWeight:600, color:accent, marginBottom:"24px", position:"relative", zIndex:1 }}>
        ✦ {service.highlight}
      </p>

      {/* Tags */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", justifyContent:"center", position:"relative", zIndex:1, maxWidth:"300px" }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{ fontFamily:"ui-monospace,monospace", fontSize:"11px", fontWeight:500, color:t.tagColor, background:t.tagBg, border:`1px solid ${t.tagBorder}`, borderRadius:"6px", padding:"3px 9px" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Progress dots */}
      <div style={{ display:"flex", gap:"6px", marginTop:"28px", position:"relative", zIndex:1 }}>
        {SERVICES.map((s) => (
          <div key={s.id} style={{ width:s.id===service.id?"20px":"6px", height:"6px", borderRadius:"999px", background:s.id===service.id?accent:isDark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)", transition:"all 0.35s ease" }} />
        ))}
      </div>
    </div>
  )
}

// ─── Right-side service row ─────────────────────────────────────────────────

function ServiceRow({
  service,
  isActive,
  setRef,
  isDark,
}: {
  service: Service
  isActive: boolean
  setRef: (el: Element | null) => void
  isDark: boolean
}) {
  const accent = CATEGORY_ACCENT[service.category]
  const t = th(isDark)
  const { Icon } = service

  return (
    <div
      ref={setRef}
      data-service-id={service.id}
      style={{
        padding: "56px 0 56px 36px",
        borderBottom: `1px solid ${t.separator}`,
        position: "relative",
        transition: "opacity 0.35s ease",
        opacity: isActive ? 1 : 0.42,
      }}
    >
      {/* Active left bar */}
      <div style={{ position:"absolute", left:0, top:"50%", transform:"translateY(-50%)", width:"3px", height:isActive?"68%":"0%", background:`linear-gradient(to bottom,transparent,${accent},transparent)`, borderRadius:"999px", transition:"height 0.45s cubic-bezier(0.4,0,0.2,1)" }} />

      {/* Icon + category */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px" }}>
        <div style={{ width:"38px", height:"38px", borderRadius:"10px", background:`${accent}${isActive?"20":"14"}`, border:`1px solid ${accent}${isActive?"44":"22"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:isActive?`0 0 14px ${accent}28`:"none", transition:"all 0.35s ease" }}>
          <Icon size={17} style={{ color: accent }} />
        </div>
        <span style={{ ...MONO_LABEL, color:isActive?accent:t.mutedMore, transition:"color 0.35s ease" }}>
          {service.category}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontSize:"clamp(19px,2.4vw,25px)", fontWeight:700, color:isActive?t.heading:isDark?"rgba(241,245,249,0.50)":"rgba(15,23,42,0.45)", lineHeight:1.25, marginBottom:"12px", transition:"color 0.35s ease", letterSpacing:"-0.02em" }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize:"15px", color:t.muted, lineHeight:1.75, marginBottom:"10px", maxWidth:"500px" }}>
        {service.desc}
      </p>

      {/* Detail — expands when active */}
      <p style={{ fontSize:"14px", color:t.mutedMore, lineHeight:1.7, marginBottom:"18px", maxWidth:"480px", maxHeight:isActive?"200px":"0px", overflow:"hidden", opacity:isActive?1:0, transition:"max-height 0.45s ease, opacity 0.35s ease" }}>
        {service.detail}
      </p>

      {/* Tags */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"20px" }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{ fontFamily:"ui-monospace,monospace", fontSize:"11px", fontWeight:500, color:isActive?t.tagColor:t.mutedMore, background:isActive?t.tagBg:"transparent", border:`1px solid ${isActive?t.tagBorder:"transparent"}`, borderRadius:"6px", padding:"3px 9px", transition:"all 0.35s ease" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Highlight + CTA */}
      <div style={{ display:"flex", alignItems:"center", gap:"20px", flexWrap:"wrap" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"7px" }}>
          <div style={{ width:"17px", height:"17px", borderRadius:"50%", background:`${accent}18`, border:`1px solid ${accent}38`, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Check size={9} style={{ color:accent }} />
          </div>
          <span style={{ fontFamily:"ui-monospace,monospace", fontSize:"12px", fontWeight:600, color:isActive?accent:t.mutedMore, transition:"color 0.35s ease" }}>
            {service.highlight}
          </span>
        </div>
        <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"13px", fontWeight:600, color:isActive?accent:t.mutedMore, textDecoration:"none", transition:"color 0.35s ease" }}>
          Get started <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"
  const t = th(isDark)

  const [activeId,    setActiveId]    = useState<number>(SERVICES[0].id)
  const [displayedId, setDisplayedId] = useState<number>(SERVICES[0].id)
  const [panelOpacity, setPanelOpacity] = useState(1)
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const refsMap   = useRef(new Map<number, Element>())

  const setRef = useCallback(
    (id: number) => (el: Element | null) => {
      if (el) refsMap.current.set(id, el)
      else    refsMap.current.delete(id)
    },
    []
  )

  // Fade-transition when active section changes
  useEffect(() => {
    if (activeId === displayedId) return
    if (fadeTimer.current) clearTimeout(fadeTimer.current)
    setPanelOpacity(0)
    fadeTimer.current = setTimeout(() => {
      setDisplayedId(activeId)
      setPanelOpacity(1)
    }, 260)
    return () => { if (fadeTimer.current) clearTimeout(fadeTimer.current) }
  }, [activeId, displayedId])

  // IntersectionObserver
  useEffect(() => {
    const map = refsMap.current
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e
        }
        if (best) {
          const raw = best.target.getAttribute("data-service-id")
          if (raw) setActiveId(Number(raw))
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    )
    map.forEach((el) => observer.observe(el))
    return () => { map.forEach((el) => observer.unobserve(el)) }
  }, [])

  const displayedService = SERVICES.find((s) => s.id === displayedId) ?? SERVICES[0]

  return (
    <>
      <Header />

      <div style={{ background: t.pageBg, minHeight: "100vh", color: t.pageColor, transition: "background 0.3s ease, color 0.3s ease" }}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ position:"relative", padding:"120px 0 72px", overflow:"hidden", ...GRID_BG }}>
          <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.12),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.10),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>
            <p style={{ ...MONO_LABEL, marginBottom:"18px" }}>✦ What We Offer</p>
            <h1 style={{ fontSize:"clamp(34px,6vw,68px)", fontWeight:800, lineHeight:1.1, letterSpacing:"-0.02em", color:t.heading, marginBottom:"22px" }}>
              Solutions Built for{" "}
              <span style={GRADIENT_TEXT}>Real Impact</span>
            </h1>
            <p style={{ fontSize:"clamp(15px,2vw,18px)", color:t.muted, lineHeight:1.7, maxWidth:"600px" }}>
              From intelligent cloud infrastructure to AI-powered products, we build technology that solves real business problems — on time, on budget, and built to last.
            </p>
          </div>
        </section>

        {/* ── Split layout ──────────────────────────────────────────── */}
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px" }}>
          <div style={{ paddingTop:"20px", paddingBottom:"36px" }}>
            <p style={{ ...MONO_LABEL, marginBottom:"8px" }}>✦ Our Services</p>
            <h2 style={{ fontSize:"clamp(20px,3vw,34px)", fontWeight:700, color:t.heading, letterSpacing:"-0.02em" }}>
              What we build &amp; how we do it
            </h2>
          </div>

          <div className="split-layout">

            {/* LEFT — sticky visual panel */}
            <div className="split-left">
              <div
                className="sticky-panel"
                style={{ opacity: panelOpacity, transition: "opacity 0.28s ease" }}
              >
                <ServiceVisual service={displayedService} isDark={isDark} />
              </div>
            </div>

            {/* RIGHT — scrollable service rows */}
            <div className="split-right">
              {SERVICES.map((service) => (
                <ServiceRow
                  key={service.id}
                  service={service}
                  isActive={activeId === service.id}
                  setRef={setRef(service.id)}
                  isDark={isDark}
                />
              ))}
              {/* Bottom spacer so the last section can trigger the observer */}
              <div style={{ height: "28vh" }} />
            </div>
          </div>
        </div>

        {/* ── Technology stack — minimal ──────────────────────────── */}
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"48px 24px 72px" }}>
          <div style={{ marginBottom:"36px" }}>
            <p style={{ ...MONO_LABEL, marginBottom:"8px" }}>✦ Technologies We Use</p>
            <h2 style={{ fontSize:"clamp(22px,3.5vw,36px)", fontWeight:700, color:t.heading, letterSpacing:"-0.02em" }}>
              Our <span style={GRADIENT_TEXT}>Technology Stack</span>
            </h2>
          </div>

          {/* Official tech logo + label — no cards, no containers */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px 28px" }}>
            {TECH_ITEMS.map((tech) => (
              <div
                key={tech.name}
                style={{ display:"flex", alignItems:"center", gap:"8px", padding:"4px 0" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
                  alt={tech.name}
                  width={18}
                  height={18}
                  style={{ flexShrink:0, filter:`drop-shadow(0 0 4px ${tech.color}90)` }}
                />
                <span style={{ fontSize:"13.5px", fontWeight:500, color:t.muted }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA banner ───────────────────────────────────────────── */}
        <section style={{ padding:"0 24px 80px" }}>
          <div
            style={{
              maxWidth:"1280px", margin:"0 auto",
              position:"relative", borderRadius:"24px",
              overflow:"hidden", padding:"64px 48px",
              background:t.ctaBg,
              border:`1px solid ${t.ctaBorder}`,
              boxShadow: isDark
                ? "0 0 0 1px rgba(0,212,255,0.08),0 0 80px rgba(0,212,255,0.08)"
                : "0 4px 40px rgba(0,0,0,0.07)",
              textAlign:"center",
            }}
          >
            <div className="cta-pulse" style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 120%,rgba(0,212,255,0.10) 0%,transparent 60%)", pointerEvents:"none" }} />
            <div className="cta-pulse-green" style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% -20%,rgba(74,222,128,0.07) 0%,transparent 60%)", pointerEvents:"none" }} />
            <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.14),transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
            <div style={{ position:"absolute", bottom:"-80px", right:"-80px", width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.12),transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />

            <div style={{ position:"relative", zIndex:1 }}>
              <p style={{ ...MONO_LABEL, marginBottom:"18px" }}>✦ Let&apos;s Build Together</p>
              <h2 style={{ fontSize:"clamp(26px,5vw,52px)", fontWeight:800, color:t.heading, letterSpacing:"-0.02em", marginBottom:"18px", lineHeight:1.15 }}>
                Ready to Build Something{" "}
                <span style={GRADIENT_TEXT}>Extraordinary?</span>
              </h2>
              <p style={{ fontSize:"clamp(14px,2vw,17px)", color:t.muted, maxWidth:"500px", margin:"0 auto 36px", lineHeight:1.7 }}>
                Tell us about your challenge and we&apos;ll get back to you within one business day with a clear path forward.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"12px", justifyContent:"center" }}>
                <Link
                  href="/contact"
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:"linear-gradient(135deg,#00d4ff 0%,#00b4d8 50%,#2d9a7a 100%)", color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 4px 24px rgba(0,212,255,0.38)", transition:"opacity 0.2s ease,transform 0.2s ease" }}
                  onMouseEnter={(e) => { const el=e.currentTarget as HTMLElement; el.style.opacity="0.88"; el.style.transform="translateY(-2px)" }}
                  onMouseLeave={(e) => { const el=e.currentTarget as HTMLElement; el.style.opacity="1"; el.style.transform="translateY(0)" }}
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"12px 26px", borderRadius:"12px", background:isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)", border:`1px solid ${isDark?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.12)"}`, color:isDark?"rgba(226,232,240,0.85)":t.heading, fontWeight:600, fontSize:"15px", textDecoration:"none", transition:"border-color 0.2s ease,background 0.2s ease,transform 0.2s ease" }}
                  onMouseEnter={(e) => { const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(0,212,255,0.4)"; el.style.background="rgba(0,212,255,0.06)"; el.style.transform="translateY(-2px)" }}
                  onMouseLeave={(e) => { const el=e.currentTarget as HTMLElement; el.style.borderColor=isDark?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.12)"; el.style.background=isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"; el.style.transform="translateY(0)" }}
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── Scoped CSS ────────────────────────────────────────────── */}
      <style>{`
        /* Split layout */
        .split-layout {
          display: flex;
          flex-direction: column;
        }
        .split-left  { display: none; }
        .split-right { width: 100%; }

        @media (min-width: 1024px) {
          .split-layout {
            flex-direction: row;
            align-items: stretch;   /* left col grows to match right col height */
            gap: 44px;
          }
          .split-left {
            display: block;
            width: 42%;
            flex-shrink: 0;
          }
          .sticky-panel {
            position: sticky;
            top: 110px;
            height: calc(100vh - 146px);
            min-height: 500px;
          }
          .split-right {
            flex: 1;
            min-width: 0;
          }
        }

        /* Mobile: image preview on top */
        @media (max-width: 1023px) {
          .split-left {
            display: block;
            width: 100%;
            margin-bottom: 4px;
          }
          .split-left > div {
            position: static !important;
            height: 320px !important;
            min-height: unset !important;
          }
        }

        /* CTA animations */
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1;   }
        }
        .cta-pulse       { animation: pulse-glow 4s ease-in-out infinite;    }
        .cta-pulse-green { animation: pulse-glow 4s ease-in-out infinite 2s; }
      `}</style>
      <Footer />
    </>
  )
}
