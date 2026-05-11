"use client"

import Link from "next/link"
import { Code2, MessageSquare, Briefcase, Play } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────

const nav = [
  {
    heading: "Highlights",
    links: [
      { label: "Docs",       href: "#" },
      { label: "GitHub",     href: "#" },
      { label: "Portfolio",  href: "#portfolio" },
      { label: "Blog",       href: "#" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "AI Assistant Pro",  href: "#" },
      { label: "Analytics Hub",     href: "#" },
      { label: "DocuFlow",          href: "#" },
      { label: "CommUnify",         href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Custom Software",        href: "#" },
      { label: "AI & Machine Learning",  href: "#" },
      { label: "Cloud Solutions",        href: "#" },
      { label: "Web & Mobile Apps",      href: "#" },
      { label: "Cybersecurity",          href: "#" },
      { label: "Digital Transformation", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",  href: "#about" },
      { label: "Careers",   href: "#" },
      { label: "Contact",   href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy",    href: "#" },
    ],
  },
]

const social = [
  { label: "GitHub",   href: "#", Icon: Code2 },
  { label: "Twitter",  href: "#", Icon: MessageSquare },
  { label: "LinkedIn", href: "#", Icon: Briefcase },
  { label: "YouTube",  href: "#", Icon: Play },
]

// ─── Footer ───────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#09090f" }}
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
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {section.heading}
              </p>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.48)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.48)")
                      }
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
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

        {/* ── Copyright + social row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p
            className="text-xs order-2 sm:order-1"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
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
                style={{ color: "rgba(255,255,255,0.32)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.32)")
                }
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom branding — full-viewport-width "4loops" ── */}
      {/*
        SVG with textLength="1200" matching the viewBox width guarantees
        the text spans exactly 100% of the container at every breakpoint.
        The SVG scales uniformly (aspect-ratio preserved), so the text
        height also scales proportionally — no distortion, no clipping.

        Gradient: dark navy → neon green → forest green → dark navy
        Glow: SVG feGaussianBlur merge creates a soft neon bloom.
      */}
      <div className="w-full select-none overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1200 290"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            {/* Horizontal gradient: dark navy → neon green → forest green → navy */}
            <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#1a365d" />
              <stop offset="26%"  stopColor="#00e676" />
              <stop offset="58%"  stopColor="#2d9a7a" />
              <stop offset="100%" stopColor="#1a2f52" />
            </linearGradient>

            {/* Neon bloom: wider blur radius for a more luminous glow */}
            <filter id="brand-glow" x="-4%" y="-25%" width="108%" height="150%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/*
            fontSize="215" in SVG user-units gives the glyphs their intrinsic height.
            At 1440px viewport: each unit = 1440/1200 = 1.2px → text appears 258px tall.
            textLength="1200" forces the text to span exactly the full viewBox width.
            y="248" baseline: cap-tops sit ~90 units from the viewBox top edge;
            the "p" descender (~47 units) lands at 295 → viewBox clips it slightly,
            creating the cinematic flush-to-edge effect identical to Laravel.com.
          */}
          <text
            x="600"
            y="248"
            fontSize="215"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
            fontWeight="900"
            textLength="1200"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#brand-grad)"
            filter="url(#brand-glow)"
            letterSpacing="-6"
          >
            4loops
          </text>
        </svg>
      </div>
    </footer>
  )
}
