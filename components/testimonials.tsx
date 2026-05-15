"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────
//
// 7 cards split across 3 columns exactly like the reference image:
//
//  Col 1 (2 cards)  │  Col 2 (3 cards)  │  Col 3 (2 cards)
//  ─────────────────┼───────────────────┼──────────────────
//  T1  (large)      │  T2  (compact)    │  T3  (medium)
//  T4  (medium)     │  T5  (FEATURED)   │  T6  (medium)
//                   │  T7  (compact)    │
//
// Because card heights differ, the column bottoms land at different
// vertical positions — that is the "irregular / asymmetric" effect.
//
// ──────────────────────────────────────────────────────────────────────────

type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  accent: string
  initials: string
  variant: "large" | "medium" | "compact" | "featured"
}

const col1: Testimonial[] = [
  {
    quote:
      "4loops Technologies transformed our entire digital infrastructure. Their expertise in AI and cloud solutions helped us reduce operational costs by 40% while dramatically improving customer satisfaction scores across the board.",
    author: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "TechVentures Inc.",
    rating: 5,
    accent: "#00d4ff",
    initials: "SJ",
    variant: "large",
  },
  {
    quote:
      "4loops built our logistics platform in record time without compromising quality. The ML route optimisation alone saves us thousands every month.",
    author: "James Okafor",
    role: "VP Operations",
    company: "FastTrack Logistics",
    rating: 5,
    accent: "#FF9900",
    initials: "JO",
    variant: "medium",
  },
]

const col2: Testimonial[] = [
  {
    quote:
      "The team delivered beyond our expectations. Real-time insights we never had before — and a product shipped ahead of schedule.",
    author: "Michael Chen",
    role: "CEO",
    company: "GlobalRetail Co.",
    rating: 5,
    accent: "#2d9a7a",
    initials: "MC",
    variant: "compact",
  },
  {
    // Featured hero card — no quote, shows brand stats instead
    quote: "",
    author: "",
    role: "",
    company: "",
    rating: 5,
    accent: "#00d4ff",
    initials: "",
    variant: "featured",
  },
  {
    quote:
      "Our real estate CRM now runs 10× faster. The 4loops team grasped our domain on day one.",
    author: "Priya Nair",
    role: "Founder",
    company: "PropTech Global",
    rating: 5,
    accent: "#5fb8e8",
    initials: "PN",
    variant: "compact",
  },
]

const col3: Testimonial[] = [
  {
    quote:
      "Working with 4loops has been a game-changer for our healthcare platform. Their attention to security and compliance, combined with innovative features, sets them apart from every vendor we have worked with.",
    author: "Dr. Emily Roberts",
    role: "Director of Technology",
    company: "MedTech Solutions",
    rating: 5,
    accent: "#635BFF",
    initials: "ER",
    variant: "medium",
  },
  {
    quote:
      "The EdTech platform they built has engaged over 50,000 students. AI tutoring increased course completion rates by 60% in the first semester alone.",
    author: "Prof. David Kim",
    role: "Head of Digital Learning",
    company: "LearnSphere Academy",
    rating: 5,
    accent: "#4ade80",
    initials: "DK",
    variant: "medium",
  },
]

// ─── Featured hero card ────────────────────────────────────────────────────

function FeaturedCard({ index, isDark }: { index: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center"
      style={{
        minHeight: "280px",
        background: isDark
          ? "linear-gradient(145deg, rgba(0,16,44,0.98) 0%, rgba(0,8,28,1) 100%)"
          : "linear-gradient(145deg, #e8f4ff 0%, #f0f8ff 100%)",
        border: isDark
          ? "1px solid rgba(0,212,255,0.22)"
          : "1px solid rgba(0,212,255,0.30)",
        boxShadow: isDark
          ? "0 12px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,212,255,0.12), 0 0 80px rgba(0,212,255,0.06)"
          : "0 8px 40px rgba(0,0,0,0.08)",
        backdropFilter: "blur(18px)",
      }}
    >
      {/* Radial atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.12), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full"
        style={{
          background: "radial-gradient(circle, #00d4ff, transparent 68%)",
          filter: "blur(55px)",
          opacity: 0.18,
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, #2d9a7a, transparent 68%)",
          filter: "blur(50px)",
          opacity: 0.14,
        }}
      />

      <div className="relative z-10 px-8 py-10">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#00d4ff] text-[#00d4ff]" />
          ))}
        </div>

        {/* Large stat */}
        <p
          className="font-bold leading-none bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent"
          style={{ fontSize: "clamp(48px, 7vw, 72px)" }}
        >
          98%
        </p>
        <p className="text-sm mt-1 mb-6 tracking-wide" style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>
          Client satisfaction rate
        </p>

        {/* Divider */}
        <div
          className="mx-auto mb-6 h-px w-20"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(0,212,255,0.5), transparent)",
          }}
        />

        <p className="text-base font-medium leading-snug max-w-[200px] mx-auto" style={{ color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.75)" }}>
          Trusted by industry leaders worldwide
        </p>

        {/* Corner badge */}
        <div
          className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{
            color: "#00d4ff",
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.25)",
          }}
        >
          4loops
        </div>
      </div>

      {/* Bottom shimmer */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,212,255,0.7), transparent)",
        }}
      />
    </motion.div>
  )
}

// ─── Standard testimonial card ─────────────────────────────────────────────

function TestimonialCard({
  item,
  index,
  isDark,
}: {
  item: Testimonial
  index: number
  isDark: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isLarge   = item.variant === "large"
  const isCompact = item.variant === "compact"

  const padX  = isLarge ? "28px" : isCompact ? "20px" : "24px"
  const padY  = isLarge ? "28px" : isCompact ? "18px" : "22px"
  const qSize = isLarge ? "15px" : isCompact ? "12.5px" : "13.5px"
  // compact cards show ~3 lines, large ~4; hover opens fully
  const collapsedHeight = isLarge ? "96px" : isCompact ? "58px" : "76px"

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: isDark
          ? hovered
            ? "linear-gradient(145deg, rgba(14,24,56,0.98) 0%, rgba(8,16,42,0.99) 100%)"
            : "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
          : hovered ? "#f0f7ff" : "#ffffff",
        border: `1px solid ${
          hovered
            ? item.accent + "55"
            : isDark ? item.accent + "1a" : "rgba(0,0,0,0.08)"
        }`,
        boxShadow: hovered
          ? isDark
            ? `0 24px 70px rgba(0,0,0,0.70), 0 0 0 1px ${item.accent}33, 0 0 60px ${item.accent}1a`
            : `0 20px 55px rgba(0,0,0,0.14), 0 0 0 1px ${item.accent}30`
          : isDark
            ? "0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 2px 18px rgba(0,0,0,0.07)",
        backdropFilter: "blur(14px)",
        transition: "background 0.35s ease, border-color 0.3s ease, box-shadow 0.35s ease",
      }}
    >
      {/* Gradient glow overlay — fades in on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          background: `linear-gradient(135deg, ${item.accent}12 0%, transparent 50%, ${item.accent}08 100%)`,
        }}
      />

      {/* Left accent bar — thickens on hover */}
      <div
        className="absolute left-0 top-5 bottom-5 rounded-full"
        style={{
          width: hovered ? "4px" : "3px",
          background: `linear-gradient(to bottom, ${item.accent}, ${item.accent}33)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s ease, width 0.3s ease",
        }}
      />

      {/* Corner bloom — expands on hover */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 rounded-full"
        style={{
          width: hovered ? "180px" : "130px",
          height: hovered ? "180px" : "130px",
          background: `radial-gradient(circle, ${item.accent}, transparent 70%)`,
          filter: "blur(36px)",
          opacity: hovered ? 0.28 : 0.07,
          transition: "opacity 0.4s ease, width 0.4s ease, height 0.4s ease",
        }}
      />

      {/* Decorative quote mark */}
      <div
        className="pointer-events-none absolute select-none font-serif"
        style={{
          fontSize: isLarge ? "100px" : "72px",
          lineHeight: 1,
          color: item.accent,
          opacity: hovered ? 0.1 : 0.045,
          top: isLarge ? "12px" : "8px",
          right: isLarge ? "20px" : "14px",
          transition: "opacity 0.3s ease",
        }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div
        className="relative z-10 flex flex-col h-full"
        style={{ padding: `${padY} ${padX}` }}
      >
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              className="fill-current"
              style={{
                color: item.accent,
                width: isLarge ? 15 : 13,
                height: isLarge ? 15 : 13,
              }}
            />
          ))}
        </div>

        {/* Quote — smoothly expands to full text on hover */}
        <motion.blockquote
          className="leading-relaxed overflow-hidden"
          animate={{ maxHeight: hovered ? "320px" : collapsedHeight }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: qSize,
            color: isDark ? "rgba(255,255,255,0.68)" : "rgba(15,23,42,0.72)",
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </motion.blockquote>

        {/* Verified badge — slides in below expanded quote */}
        <motion.div
          className="overflow-hidden"
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? "28px" : "0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: hovered ? 0.08 : 0 }}
        >
          <div
            className="flex items-center gap-1.5 mt-3"
            style={{ color: item.accent }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em" }}>
              VERIFIED CLIENT
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="mt-4 mb-3 h-px"
          style={{
            background: `linear-gradient(to right, ${item.accent}${hovered ? "66" : "38"}, transparent)`,
            transition: "background 0.3s ease",
          }}
        />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
            style={{
              color: "#ffffff",
              width:  isLarge ? 42 : 34,
              height: isLarge ? 42 : 34,
              fontSize: isLarge ? 14 : 12,
              background: `linear-gradient(135deg, ${item.accent}, ${item.accent}77)`,
              boxShadow: hovered ? `0 0 24px ${item.accent}55` : `0 0 14px ${item.accent}3a`,
              transition: "box-shadow 0.3s ease",
            }}
          >
            {item.initials}
          </div>
          <div>
            <p
              className="font-semibold"
              style={{
                fontSize: isLarge ? 14 : 12.5,
                color: isDark ? "#ffffff" : "#0f172a",
              }}
            >
              {item.author}
            </p>
            <p
              style={{
                fontSize: isLarge ? 12 : 11,
                color: isDark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.50)",
              }}
            >
              {item.role}
              <span className="mx-1" style={{ color: isDark ? "rgba(255,255,255,0.20)" : "rgba(15,23,42,0.25)" }}>·</span>
              {item.company}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom shimmer */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${item.accent}99, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.div>
  )
}

// ─── Column wrapper ────────────────────────────────────────────────────────

function Column({
  cards,
  startIndex,
  isDark,
  className = "",
}: {
  cards: Testimonial[]
  startIndex: number
  isDark: boolean
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {cards.map((item, i) =>
        item.variant === "featured" ? (
          <FeaturedCard key="featured" index={startIndex + i} isDark={isDark} />
        ) : (
          <TestimonialCard key={item.author} item={item} index={startIndex + i} isDark={isDark} />
        )
      )}
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────

export function Testimonials() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
      style={isDark ? {
        background: "linear-gradient(to bottom, transparent 0%, #040917 6%, #040917 94%, transparent 100%)",
      } : undefined}
    >
      {/* Background atmosphere — only in dark mode */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div style={{ position:"absolute", top:"15%",  left:"5%",  width:520, height:520, opacity:.042, background:"radial-gradient(circle,#00d4ff,transparent 62%)", filter:"blur(90px)" }} />
          <div style={{ position:"absolute", bottom:"10%",right:"6%", width:440, height:440, opacity:.038, background:"radial-gradient(circle,#635BFF,transparent 62%)", filter:"blur(90px)" }} />
          <div style={{ position:"absolute", top:"55%",  left:"38%", width:380, height:380, opacity:.028, background:"radial-gradient(circle,#2d9a7a,transparent 65%)", filter:"blur(80px)" }} />
          <div style={{ position:"absolute", inset:0, opacity:.016, backgroundImage:"radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)", backgroundSize:"30px 30px" }} />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(2,6,18,0.5) 100%)" }} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.24em] uppercase mb-3"
            style={{ color: isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.40)" }}
          >
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-foreground">
            What Our{" "}
            <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: isDark ? "rgba(255,255,255,0.36)" : "rgba(0,0,0,0.52)" }}
          >
            Industry leaders share how 4loops turned complex challenges into measurable results.
          </p>
        </motion.div>

        {/* ── Desktop 3-column layout ── */}
        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-5 items-start">
          <Column cards={col1} startIndex={0} isDark={isDark} />
          <Column cards={col2} startIndex={2} isDark={isDark} />
          <Column cards={col3} startIndex={5} isDark={isDark} />
        </div>

        {/* ── Mobile / tablet ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {[...col1, ...col2, ...col3].map((item, i) =>
            item.variant === "featured" ? (
              <FeaturedCard key="featured" index={i} isDark={isDark} />
            ) : (
              <TestimonialCard key={item.author} item={item} index={i} isDark={isDark} />
            )
          )}
        </div>

      </div>
    </section>
  )
}
