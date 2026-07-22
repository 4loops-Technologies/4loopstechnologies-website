"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowRight, Check, Zap, Shield, Globe, Headphones } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"
import type { Product } from "@/lib/products"

function th(isDark: boolean) {
  return {
    pageBg:    isDark ? "#060d1a"                    : "var(--background)",
    pageColor: isDark ? "#e2e8f0"                    : "var(--foreground)",
    heading:   isDark ? "#f1f5f9"                    : "#0f172a",
    muted:     isDark ? "rgba(226,232,240,0.58)"     : "rgba(15,23,42,0.58)",
    mutedMore: isDark ? "rgba(226,232,240,0.38)"     : "rgba(15,23,42,0.38)",
    sep:       isDark ? "rgba(255,255,255,0.05)"     : "rgba(0,0,0,0.07)",
    tagBg:     isDark ? "rgba(255,255,255,0.05)"     : "rgba(0,0,0,0.04)",
    tagBdr:    isDark ? "rgba(255,255,255,0.09)"     : "rgba(0,0,0,0.08)",
    tagColor:  isDark ? "rgba(226,232,240,0.65)"     : "rgba(15,23,42,0.60)",
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

const benefits = [
  { icon: Zap,        accent: "#00d4ff", title: "Built for Performance",     desc: "Sub-100ms response times, 99.9% uptime SLA, and horizontal scaling from day one." },
  { icon: Shield,     accent: "#635BFF", title: "Enterprise Security",       desc: "SOC 2 compliant, end-to-end encryption, role-based access, and audit logging." },
  { icon: Globe,      accent: "#2d9a7a", title: "Local-First Design",        desc: "Amharic language support, offline capability, and optimised for variable connectivity." },
  { icon: Headphones, accent: "#4ade80", title: "Dedicated Support",         desc: "Dedicated account managers, SLA-backed response times, and ongoing product training." },
]

function ProductMockup({ product, isDark }: { product: Product; isDark: boolean }) {
  const a = product.accent

  if (product.image) {
    return (
      <div style={{
        width: "100%", aspectRatio: "4 / 3", borderRadius: "16px", overflow: "hidden", position: "relative",
        background: isDark
          ? `linear-gradient(160deg, #07101f 0%, ${a}12 100%)`
          : `linear-gradient(160deg, #ffffff 0%, ${a}08 100%)`,
        border: `1px solid ${a}${isDark ? "28" : "22"}`,
        boxShadow: isDark
          ? `0 0 60px ${a}10, inset 0 0 80px ${a}06`
          : `0 4px 40px rgba(0,0,0,0.06), 0 0 0 1px ${a}14`,
      }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div style={{
      width: "100%", aspectRatio: "4 / 3", borderRadius: "16px", overflow: "hidden", position: "relative",
      background: isDark
        ? `linear-gradient(160deg, #07101f 0%, ${a}12 100%)`
        : `linear-gradient(160deg, #ffffff 0%, ${a}08 100%)`,
      border: `1px solid ${a}${isDark ? "28" : "22"}`,
      boxShadow: isDark
        ? `0 0 60px ${a}10, inset 0 0 80px ${a}06`
        : `0 4px 40px rgba(0,0,0,0.06), 0 0 0 1px ${a}14`,
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${a}${isDark ? "08" : "05"} 1px, transparent 1px), linear-gradient(90deg, ${a}${isDark ? "08" : "05"} 1px, transparent 1px)`,
        backgroundSize: "24px 24px", pointerEvents: "none",
      }} />
      {/* Centre glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"200px", height:"200px", borderRadius:"50%", background:`radial-gradient(circle,${a}${isDark?"20":"12"},transparent 70%)`, filter:"blur(30px)", pointerEvents:"none" }} />

      {/* Mockup UI elements */}
      <div style={{ position: "relative", zIndex: 1, padding: "clamp(20px,3vw,32px)", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: `${a}55` }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: `${a}33` }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: `${a}22` }} />
          <div style={{ flex: 1 }} />
          <div style={{ width: "60px", height: "6px", borderRadius: "3px", background: `${a}20` }} />
        </div>

        {/* Content blocks */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ width: "70%", height: "10px", borderRadius: "5px", background: `${a}28` }} />
          <div style={{ width: "45%", height: "8px", borderRadius: "4px", background: `${a}18` }} />

          {/* Metric cards row */}
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {[0.9, 0.65, 0.45].map((o, i) => (
              <div key={i} style={{
                flex: 1, borderRadius: "8px", padding: "10px",
                background: `${a}${isDark ? "0c" : "08"}`, border: `1px solid ${a}18`,
              }}>
                <div style={{ width: "50%", height: "14px", borderRadius: "4px", background: a, opacity: o * 0.5, marginBottom: "6px" }} />
                <div style={{ width: "80%", height: "6px", borderRadius: "3px", background: `${a}15` }} />
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div style={{ flex: 1, minHeight: 0, borderRadius: "10px", background: `${a}${isDark ? "08" : "05"}`, border: `1px solid ${a}12`, position: "relative", overflow: "hidden", marginTop: "4px" }}>
            <svg viewBox="0 0 300 100" fill="none" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} aria-hidden>
              <polyline
                points="0,80 40,60 80,70 120,30 160,45 200,20 240,35 280,15 300,25"
                stroke={a} strokeWidth="2" strokeOpacity="0.6" fill="none"
              />
              <polyline
                points="0,80 40,60 80,70 120,30 160,45 200,20 240,35 280,15 300,25 300,100 0,100"
                fill={a} fillOpacity="0.06"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"
  const t = th(isDark)

  return (
    <>
      <Header />

      <main style={{ background: t.pageBg, minHeight: "100vh", color: t.pageColor, transition: "background 0.3s ease" }}>

        {/* ── Hero ── */}
        <section style={{
          position: "relative", padding: "138px 0 80px", overflow: "hidden",
          backgroundImage: "linear-gradient(rgba(0,212,255,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.032) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}>
          <div style={{ position:"absolute", top:"-60px", left:"-60px", width:"440px", height:"440px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.10),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-60px", right:"-60px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p style={{ ...MONO, marginBottom: "18px" }}>&#x2726; Our Products</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "clamp(34px,6vw,68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", color: t.heading, marginBottom: "24px" }}
            >
              Software that{" "}
              <span style={GRAD}>works harder</span>
              {" "}than you do.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "clamp(15px,2vw,18px)", color: t.muted, lineHeight: 1.72, maxWidth: "600px" }}
            >
              AI-powered products designed for scale, built for performance, and trusted by enterprises across East Africa and beyond.
            </motion.p>
          </div>
        </section>

        {/* ── Product List — image left, content right ── */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <div className="flex flex-col gap-10">
              {products.map((product, idx) => {
                const Icon = product.icon
                return (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    style={{
                      borderRadius: "20px", overflow: "hidden", position: "relative",
                      background: isDark
                        ? "linear-gradient(145deg, rgba(8,14,32,0.95) 0%, rgba(4,10,24,0.98) 100%)"
                        : "#ffffff",
                      border: `1px solid ${isDark ? product.accent + "22" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? `0 8px 40px rgba(0,0,0,0.5), 0 0 60px ${product.accent}08`
                        : "0 4px 24px rgba(0,0,0,0.06)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    {/* Corner bloom */}
                    <div className="pointer-events-none absolute -top-16 -right-16 rounded-full" style={{
                      width: "200px", height: "200px",
                      background: `radial-gradient(circle, ${product.accent}, transparent 68%)`,
                      filter: "blur(50px)", opacity: 0.1,
                    }} />

                    {/* Two-column: image left + content right */}
                    <div className="flex flex-col md:flex-row">
                      {/* Left — product mockup */}
                      <div className="md:w-[45%] p-5 md:p-8 flex-shrink-0">
                        <ProductMockup product={product} isDark={isDark} />
                      </div>

                      {/* Right — content */}
                      <div className="flex-1 p-6 md:p-8 md:pl-0 flex flex-col justify-center">
                        {/* Number */}
                        <div className="pointer-events-none absolute top-6 right-8 hidden md:block" style={{
                          fontSize: "72px", fontWeight: 800, lineHeight: 1,
                          color: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
                        }}>
                          0{idx + 1}
                        </div>

                        {/* Icon + name */}
                        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                          <div style={{
                            width: "44px", height: "44px", borderRadius: "12px",
                            background: `${product.accent}15`, border: `1px solid ${product.accent}30`,
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                          }}>
                            <Icon size={22} style={{ color: product.accent }} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: "22px", fontWeight: 700, color: t.heading, lineHeight: 1.2 }}>{product.name}</h3>
                            <p style={{ fontSize: "13px", fontWeight: 600, color: product.accent, letterSpacing: "0.02em", marginTop: "2px" }}>{product.tagline}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p style={{ fontSize: "14.5px", color: t.muted, lineHeight: 1.72, marginBottom: "18px", maxWidth: "480px" }}>
                          {product.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.highlights.map((h) => (
                            <span key={h} style={{
                              fontSize: "11.5px", fontWeight: 600, padding: "4px 10px", borderRadius: "8px",
                              background: t.tagBg, border: `1px solid ${t.tagBdr}`, color: t.tagColor,
                            }}>{h}</span>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/products/${product.slug}`}
                          aria-label={`Learn more about ${product.name}`}
                          style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: product.accent, textDecoration: "none" }}
                        >
                          Learn more <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, marginBottom: "12px" }}>&#x2726; Why 4loops Products</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em", marginBottom: "16px" }}>
                Built Different,{" "}
                <span style={GRAD}>Built Better</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: t.muted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Every product shares the same engineering principles: performance, security, and local-first design.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b, idx) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
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
                      border: `1px solid ${isDark ? b.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: isDark
                        ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                      width: "100px", height: "100px",
                      background: `radial-gradient(circle, ${b.accent}, transparent 68%)`,
                      filter: "blur(30px)", opacity: 0.08,
                    }} />
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px",
                      background: `${b.accent}15`, border: `1px solid ${b.accent}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                    }}>
                      <Icon size={20} style={{ color: b.accent }} />
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: t.heading, marginBottom: "8px" }}>{b.title}</p>
                    <p style={{ fontSize: "13px", color: t.muted, lineHeight: 1.7 }}>{b.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Uptime banner ── */}
        <section style={{ padding: "0 24px 40px" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            borderRadius: "16px", padding: "20px 28px",
            background: isDark ? "rgba(0,212,255,0.04)" : "rgba(0,212,255,0.06)",
            border: `1px solid ${isDark ? "rgba(0,212,255,0.12)" : "rgba(0,212,255,0.18)"}`,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap",
          }}>
            <Check size={16} style={{ color: "#4ade80" }} />
            <p style={{ fontSize: "14px", fontWeight: 600, color: t.heading }}>
              All products backed by <span style={{ color: "#00d4ff" }}>99.9% uptime</span> and enterprise-grade security
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "40px 24px 80px" }}>
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
              <p style={{ ...MONO, marginBottom: "18px" }}>&#x2726; Get Started</p>
              <h2 style={{ fontSize: "clamp(24px,4.5vw,50px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.022em", marginBottom: "18px", lineHeight: 1.15 }}>
                Ready to see our products{" "}
                <span style={GRAD}>in action?</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: t.muted, maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.72 }}>
                Schedule a personalised demo or start a free trial. Our team will help you find the right product for your needs.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                <Link href="/contact"
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:"linear-gradient(135deg,#00d4ff 0%,#00b4d8 50%,#2d9a7a 100%)", color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 4px 22px rgba(0,212,255,0.36)", transition:"opacity 0.2s ease,transform 0.2s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
                >
                  Request a Demo <ArrowRight size={16} />
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

      </main>
      <Footer />
    </>
  )
}
