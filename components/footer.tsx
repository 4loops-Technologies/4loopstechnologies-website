"use client"

import Link from "next/link"
import { Briefcase } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────

const nav = [
  {
    heading: "Highlights",
    links: [
      { label: "Portfolio",  href: "/portfolio" },
      { label: "Products",   href: "/products" },
      { label: "Solutions",  href: "/solutions" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "AI Assistant Pro",  href: "/products/ai-assistant-pro" },
      { label: "Analytics Hub",     href: "/products/analytics-hub" },
      { label: "DocuFlow",          href: "/products/docuflow" },
      { label: "CommUnify",         href: "/products/communify" },
      { label: "TapConnect NFC",    href: "/products/nfc-business-card" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Custom Software",        href: "/solutions" },
      { label: "AI & Machine Learning",  href: "/solutions" },
      { label: "Cloud & DevOps",         href: "/solutions" },
      { label: "Mobile Development",     href: "/solutions" },
      { label: "Cybersecurity",          href: "/solutions" },
      { label: "Digital Transformation", href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",  href: "/about" },
      { label: "Contact",   href: "/contact" },
    ],
  },
]

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/4loops-technologies", Icon: Briefcase },
]

// ─── Footer ───────────────────────────────────────────────────────────────

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  // Colour tokens that flip with the theme
  // Dark mode uses a dark-navy → near-black gradient matching the reference image.
  const bg         = isDark ? "linear-gradient(to bottom, #060d1a 0%, #03080f 100%)" : undefined
  const headingC   = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.42)"
  const linkC      = isDark ? "rgba(255,255,255,0.48)" : "rgba(0,0,0,0.58)"
  const linkHoverC = isDark ? "rgba(255,255,255,0.9)"  : "rgba(0,0,0,0.88)"
  const separatorC = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.09)"
  const metaC      = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.40)"
  const iconC      = isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.42)"
  const iconHoverC = isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.82)"

  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
      className="relative overflow-hidden bg-background"
      style={bg ? { background: bg } : undefined}
    >
      {/* ── Navigation columns ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 py-14 sm:py-16 lg:py-20">
          {nav.map((section, i) => (
            <div
              key={section.heading}
              className={i === 2 ? "col-span-2 sm:col-span-1" : "col-span-1"}
            >
              <p
                className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: headingC }}
              >
                {section.heading}
              </p>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: linkC }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverC)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = linkC)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Separator ── */}
        <div style={{ height: "1px", background: separatorC }} />

        {/* ── Copyright + social row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs order-2 sm:order-1" style={{ color: metaC }}>
            © {new Date().getFullYear()} 4loops Technologies. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {social.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: iconC }}
                onMouseEnter={(e) => (e.currentTarget.style.color = iconHoverC)}
                onMouseLeave={(e) => (e.currentTarget.style.color = iconC)}
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom branding ── */}
      <div className="w-full select-none overflow-hidden leading-none" aria-hidden>
        <svg
          viewBox="0 0 1200 360"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#0c1c35" />
              <stop offset="16%"  stopColor="#1a3a6e" />
              <stop offset="36%"  stopColor="#2468b4" />
              <stop offset="54%"  stopColor="#3a98d4" />
              <stop offset="72%"  stopColor="#00ccf0" />
              <stop offset="86%"  stopColor="#00d8c4" />
              <stop offset="100%" stopColor="#00e5b5" />
            </linearGradient>
          </defs>

          <text
            x="600"
            y="318"
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-instrument-sans), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "318px",
              lineHeight: "24px",
              letterSpacing: "normal",
              fontStyle: "normal",
              textDecoration: "none",
              textTransform: "none",
            }}
            fill="url(#brand-grad)"
          >
            4loops
          </text>
        </svg>
      </div>
    </footer>
  )
}
