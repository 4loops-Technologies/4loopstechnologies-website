"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts } from "@/lib/products"
import type { Product, ProductFAQ } from "@/lib/products"

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

function FAQItem({ faq, accent, isDark }: { faq: ProductFAQ; accent: string; isDark: boolean }) {
  const [open, setOpen] = useState(false)
  const t = th(isDark)
  return (
    <div style={{
      borderRadius: "14px", overflow: "hidden",
      background: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.02)",
      border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}`,
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 22px", cursor: "pointer", background: "transparent", border: "none",
          color: t.heading, fontSize: "15px", fontWeight: 600, textAlign: "left",
        }}
      >
        {faq.question}
        <ChevronDown size={16} style={{
          color: accent, transition: "transform 0.3s ease", flexShrink: 0, marginLeft: "12px",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }} />
      </button>
      <div style={{
        maxHeight: open ? "200px" : "0px", overflow: "hidden",
        transition: "max-height 0.35s ease, padding 0.35s ease",
        padding: open ? "0 22px 18px" : "0 22px 0",
      }}>
        <p style={{ fontSize: "14px", color: t.muted, lineHeight: 1.72 }}>{faq.answer}</p>
      </div>
    </div>
  )
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug)
  if (!product) notFound()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"
  const t = th(isDark)

  const Icon = product.icon
  const related = getRelatedProducts(product.slug)

  return (
    <>
      <Header />

      <div style={{ background: t.pageBg, minHeight: "100vh", color: t.pageColor, transition: "background 0.3s ease" }}>

        {/* ── Hero ── */}
        <section style={{
          position: "relative", padding: "138px 0 80px", overflow: "hidden",
          backgroundImage: "linear-gradient(rgba(0,212,255,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.032) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}>
          <div style={{ position:"absolute", top:"-60px", left:"-60px", width:"440px", height:"440px", borderRadius:"50%", background:`radial-gradient(circle,${product.accent}22,transparent 65%)`, filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-60px", right:"-60px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}
            >
              <Link href="/products" style={{ ...MONO, color: t.mutedMore, textDecoration: "none" }}>Products</Link>
              <span style={{ color: t.mutedMore, fontSize: "12px" }}>/</span>
              <span style={{ ...MONO, color: product.accent }}>{product.name}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "24px" }}
            >
              <div style={{
                width: "64px", height: "64px", borderRadius: "18px",
                background: `${product.accent}15`, border: `1px solid ${product.accent}30`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={32} style={{ color: product.accent }} />
              </div>
              <div>
                <h1 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", color: t.heading }}>
                  {product.name}
                </h1>
                <p style={{ fontSize: "15px", fontWeight: 600, color: product.accent, marginTop: "4px" }}>{product.tagline}</p>
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ fontSize: "clamp(15px,2vw,17px)", color: t.muted, lineHeight: 1.72, maxWidth: "640px", marginBottom: "32px" }}
            >
              {product.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              <Link href="/contact"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:`linear-gradient(135deg,${product.accent} 0%,${product.accent}cc 100%)`, color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:`0 4px 22px ${product.accent}55`, transition:"opacity 0.2s,transform 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
              >
                Request a Demo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p style={{ ...MONO, color: product.accent, marginBottom: "12px" }}>&#x2726; Key Features</p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em" }}>
                Everything you need,{" "}
                <span style={GRAD}>nothing you don&apos;t</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((f, idx) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{
                    borderRadius: "16px", padding: "28px 24px", position: "relative", overflow: "hidden",
                    background: isDark
                      ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                      : "#ffffff",
                    border: `1px solid ${isDark ? product.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                    boxShadow: isDark
                      ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                      : "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                    width: "100px", height: "100px",
                    background: `radial-gradient(circle, ${product.accent}, transparent 68%)`,
                    filter: "blur(30px)", opacity: 0.07,
                  }} />
                  <div style={{
                    display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px",
                  }}>
                    <div style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: product.accent, flexShrink: 0,
                    }} />
                    <p style={{ fontSize: "15px", fontWeight: 700, color: t.heading }}>{f.title}</p>
                  </div>
                  <p style={{ fontSize: "13px", color: t.muted, lineHeight: 1.7 }}>{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack & Use Cases ── */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{
                  borderRadius: "16px", padding: "28px 24px",
                  background: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}`,
                }}
              >
                <p style={{ ...MONO, color: product.accent, marginBottom: "18px" }}>&#x2726; Technology</p>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span key={tech} style={{
                      fontSize: "12.5px", fontWeight: 600, padding: "6px 14px", borderRadius: "8px",
                      background: t.tagBg, border: `1px solid ${t.tagBdr}`, color: t.tagColor,
                    }}>{tech}</span>
                  ))}
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  borderRadius: "16px", padding: "28px 24px",
                  background: isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}`,
                }}
              >
                <p style={{ ...MONO, color: product.accent, marginBottom: "18px" }}>&#x2726; Use Cases</p>
                <div className="flex flex-col gap-3">
                  {product.useCases.map((uc) => (
                    <div key={uc} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
                        background: `${product.accent}15`, border: `1px solid ${product.accent}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Check size={10} style={{ color: product.accent }} />
                      </div>
                      <span style={{ fontSize: "13.5px", color: t.muted, lineHeight: 1.6 }}>{uc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p style={{ ...MONO, color: product.accent, marginBottom: "12px" }}>&#x2726; FAQ</p>
              <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em" }}>
                Common Questions
              </h2>
            </motion.div>
            <div className="flex flex-col gap-3">
              {product.faqs.map((faq, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <FAQItem faq={faq} accent={product.accent} isDark={isDark} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.025em" }}>
                Explore More{" "}
                <span style={GRAD}>Products</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rp, idx) => {
                const RpIcon = rp.icon
                return (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link href={`/products/${rp.slug}`} style={{ textDecoration: "none", display: "block" }}>
                      <div style={{
                        borderRadius: "16px", padding: "24px 20px", position: "relative", overflow: "hidden",
                        background: isDark
                          ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
                          : "#ffffff",
                        border: `1px solid ${isDark ? rp.accent + "1a" : "rgba(0,0,0,0.08)"}`,
                        boxShadow: isDark
                          ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
                          : "0 2px 16px rgba(0,0,0,0.06)",
                      }}>
                        <div className="pointer-events-none absolute -top-10 -right-10 rounded-full" style={{
                          width: "100px", height: "100px",
                          background: `radial-gradient(circle, ${rp.accent}, transparent 68%)`,
                          filter: "blur(30px)", opacity: 0.08,
                        }} />
                        <div style={{
                          width: "40px", height: "40px", borderRadius: "12px",
                          background: `${rp.accent}15`, border: `1px solid ${rp.accent}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "14px",
                        }}>
                          <RpIcon size={20} style={{ color: rp.accent }} />
                        </div>
                        <p style={{ fontSize: "16px", fontWeight: 700, color: t.heading, marginBottom: "4px" }}>{rp.name}</p>
                        <p style={{ fontSize: "12.5px", color: t.muted, lineHeight: 1.6 }}>{rp.tagline}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            position: "relative", borderRadius: "24px", overflow: "hidden",
            padding: "64px 48px", textAlign: "center",
            background: isDark
              ? "linear-gradient(145deg,rgba(0,14,36,0.95),rgba(4,10,26,0.98))"
              : "linear-gradient(145deg,rgba(240,248,255,0.98),rgba(235,245,255,0.99))",
            border: `1px solid ${isDark ? `${product.accent}33` : `${product.accent}44`}`,
            boxShadow: isDark ? `0 0 80px ${product.accent}0e` : "0 4px 40px rgba(0,0,0,0.06)",
          }}>
            <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"300px", height:"300px", borderRadius:"50%", background:`radial-gradient(circle,${product.accent}22,transparent 70%)`, filter:"blur(60px)", pointerEvents:"none" }} />
            <div style={{ position:"absolute", bottom:"-80px", right:"-80px", width:"260px", height:"260px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.10),transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ ...MONO, color: product.accent, marginBottom: "18px" }}>&#x2726; Get {product.name}</p>
              <h2 style={{ fontSize: "clamp(24px,4.5vw,50px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.022em", marginBottom: "18px", lineHeight: 1.15 }}>
                Start using {product.name}{" "}
                <span style={GRAD}>today</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: t.muted, maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.72 }}>
                Get a personalised demo and see how {product.name} can transform your operations.
              </p>
              <Link href="/contact"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:`linear-gradient(135deg,${product.accent} 0%,${product.accent}cc 100%)`, color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:`0 4px 22px ${product.accent}55`, transition:"opacity 0.2s,transform 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
              >
                Request a Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
