"use client"

import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { featuredProjects } from "@/lib/projects"

export function FeaturedProjects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  const heading   = isDark ? "#f1f5f9"                    : "#0f172a"
  const muted     = isDark ? "rgba(226,232,240,0.58)"     : "rgba(15,23,42,0.58)"
  const sep       = isDark ? "rgba(255,255,255,0.06)"     : "rgba(0,0,0,0.08)"
  const tagColor  = isDark ? "rgba(226,232,240,0.55)"     : "rgba(15,23,42,0.50)"
  const tagBg     = isDark ? "rgba(255,255,255,0.05)"     : "rgba(0,0,0,0.04)"
  const tagBdr    = isDark ? "rgba(255,255,255,0.09)"     : "rgba(0,0,0,0.08)"

  return (
    <section id="portfolio" aria-label="Featured software development projects by 4loops Technologies" className="relative py-24 sm:py-32 overflow-hidden bg-background"
      style={isDark ? {
        background: "linear-gradient(to bottom, transparent 0%, #04091a 6%, #04091a 94%, transparent 100%)",
      } : undefined}
    >
      <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p style={{
            fontFamily: "ui-monospace,'Courier New',monospace",
            fontSize: "12px", fontWeight: 600,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#00d4ff",
            marginBottom: "12px",
          }}>
            &#x2726; Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: heading }}>
            Featured{" "}
            <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div style={{ height: "1px", background: sep }} />

        {featuredProjects.map((project) => (
          <div key={project.name}>
            <div
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(24px, 5vw, 48px)",
                padding: "clamp(28px, 4vw, 44px) 0",
                borderBottom: `1px solid ${sep}`,
              }}
            >
              <div style={{
                width: "clamp(60px, 9vw, 88px)",
                height: "clamp(60px, 9vw, 88px)",
                borderRadius: "14px",
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                overflow: "hidden",
                padding: "10px",
                transition: "border-color 0.3s ease",
              }}
                className="group-hover:!border-[rgba(0,212,255,0.25)]"
              >
                <Image
                  src={project.logo}
                  alt={`${project.name} logo — ${project.industry} project`}
                  width={72}
                  height={72}
                  className="object-contain"
                  style={{ maxWidth: "100%", maxHeight: "100%", filter: isDark ? "brightness(0.9)" : "none" }}
                  loading="lazy"
                />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: tagColor, background: tagBg,
                  border: `1px solid ${tagBdr}`, borderRadius: "6px",
                  padding: "3px 9px", display: "inline-block",
                  marginBottom: "8px",
                }}>
                  {project.industry}
                </span>
                <h3 style={{
                  fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700,
                  color: heading, letterSpacing: "-0.02em",
                  lineHeight: 1.25, marginBottom: "6px",
                }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: "14px", color: muted, lineHeight: 1.68, maxWidth: "480px" }}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 26px", borderRadius: "12px",
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.11)"}`,
              color: isDark ? "rgba(226,232,240,0.85)" : heading,
              fontWeight: 600, fontSize: "15px", textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
          >
            View All Work <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
