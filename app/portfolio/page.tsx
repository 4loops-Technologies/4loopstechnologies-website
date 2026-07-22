"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"

function th(isDark: boolean) {
  return {
    pageBg:    isDark ? "#060d1a"                : "var(--background)",
    pageColor: isDark ? "#e2e8f0"                : "var(--foreground)",
    heading:   isDark ? "#f1f5f9"                : "#0f172a",
    muted:     isDark ? "rgba(226,232,240,0.58)" : "rgba(15,23,42,0.58)",
    mutedMore: isDark ? "rgba(226,232,240,0.38)" : "rgba(15,23,42,0.38)",
    sep:       isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
    tagBg:     isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    tagBdr:    isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)",
    tagColor:  isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.50)",
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

export default function PortfolioPage() {
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

          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p style={{ ...MONO, marginBottom: "18px" }}>&#x2726; Selected Work</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "clamp(34px,6vw,68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", color: t.heading, marginBottom: "24px" }}
            >
              Work that{" "}
              <span style={GRAD}>speaks</span>
              {" "}for itself.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: "clamp(15px,2vw,18px)", color: t.muted, lineHeight: 1.72, maxWidth: "560px" }}
            >
              A selection of projects delivered for clients across industries. Each built to solve a real problem, ship on time, and last.
            </motion.p>
          </div>
        </section>

        {/* ── Selected Work List ── */}
        <section style={{ padding: "0 0 100px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>

            {/* Top border */}
            <div style={{ height: "1px", background: t.sep }} />

            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div
                  className="group"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(24px, 5vw, 48px)",
                    padding: "clamp(28px, 4vw, 48px) 0",
                    borderBottom: `1px solid ${t.sep}`,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {/* Logo / Image — left */}
                  <div
                    style={{
                      width: "clamp(64px, 10vw, 100px)",
                      height: "clamp(64px, 10vw, 100px)",
                      borderRadius: "16px",
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                      padding: "12px",
                      transition: "border-color 0.3s ease, background 0.3s ease",
                    }}
                    className="group-hover:!border-[rgba(0,212,255,0.25)]"
                  >
                    <Image
                      src={project.logo}
                      alt={`${project.name} — ${project.industry} project by 4loops Technologies`}
                      width={80}
                      height={80}
                      className="object-contain"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        filter: isDark ? "brightness(0.9)" : "none",
                      }}
                    />
                  </div>

                  {/* Content — right */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Industry label */}
                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: t.tagColor,
                      background: t.tagBg,
                      border: `1px solid ${t.tagBdr}`,
                      borderRadius: "6px",
                      padding: "3px 9px",
                      display: "inline-block",
                      marginBottom: "10px",
                    }}>
                      {project.industry}
                    </span>

                    {/* Project name */}
                    <h2 style={{
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: 700,
                      color: t.heading,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      marginBottom: "8px",
                      transition: "color 0.3s ease",
                    }}>
                      {project.name}
                    </h2>

                    {/* Description */}
                    <p style={{
                      fontSize: "14.5px",
                      color: t.muted,
                      lineHeight: 1.72,
                      maxWidth: "520px",
                    }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{
            maxWidth: "960px", margin: "0 auto",
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
              <h2 style={{ fontSize: "clamp(24px,4.5vw,50px)", fontWeight: 800, color: t.heading, letterSpacing: "-0.022em", marginBottom: "18px", lineHeight: 1.15 }}>
                Have a project{" "}
                <span style={GRAD}>in mind?</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: t.muted, maxWidth: "440px", margin: "0 auto 36px", lineHeight: 1.72 }}>
                We would love to hear about it. Tell us what you are building and we will get back to you within one business day.
              </p>
              <Link href="/contact"
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"13px 26px", borderRadius:"12px", background:"linear-gradient(135deg,#00d4ff 0%,#00b4d8 50%,#2d9a7a 100%)", color:"#060d1a", fontWeight:700, fontSize:"15px", textDecoration:"none", boxShadow:"0 4px 22px rgba(0,212,255,0.36)", transition:"opacity 0.2s ease,transform 0.2s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
