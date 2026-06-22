"use client"

import { Star } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

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
    quote: "4loops Technologies transformed our entire digital infrastructure. Their expertise in AI and cloud solutions helped us reduce operational costs by 40% while dramatically improving customer satisfaction scores across the board.",
    author: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "TechVentures Inc.",
    rating: 5,
    accent: "#00d4ff",
    initials: "SJ",
    variant: "large",
  },
  {
    quote: "4loops built our logistics platform in record time without compromising quality. The ML route optimisation alone saves us thousands every month.",
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
    quote: "The team delivered beyond our expectations. Real-time insights we never had before — and a product shipped ahead of schedule.",
    author: "Michael Chen",
    role: "CEO",
    company: "GlobalRetail Co.",
    rating: 5,
    accent: "#2d9a7a",
    initials: "MC",
    variant: "compact",
  },
  { quote: "", author: "", role: "", company: "", rating: 5, accent: "#00d4ff", initials: "", variant: "featured" },
  {
    quote: "Our real estate CRM now runs 10× faster. The 4loops team grasped our domain on day one.",
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
    quote: "Working with 4loops has been a game-changer for our healthcare platform. Their attention to security and compliance, combined with innovative features, sets them apart from every vendor we have worked with.",
    author: "Dr. Emily Roberts",
    role: "Director of Technology",
    company: "MedTech Solutions",
    rating: 5,
    accent: "#635BFF",
    initials: "ER",
    variant: "medium",
  },
  {
    quote: "The EdTech platform they built has engaged over 50,000 students. AI tutoring increased course completion rates by 60% in the first semester alone.",
    author: "Prof. David Kim",
    role: "Head of Digital Learning",
    company: "LearnSphere Academy",
    rating: 5,
    accent: "#4ade80",
    initials: "DK",
    variant: "medium",
  },
]

function FeaturedCard({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center"
      style={{
        minHeight: "280px",
        background: isDark
          ? "linear-gradient(145deg, rgba(0,16,44,0.98) 0%, rgba(0,8,28,1) 100%)"
          : "linear-gradient(145deg, #e8f4ff 0%, #f0f8ff 100%)",
        border: isDark ? "1px solid rgba(0,212,255,0.22)" : "1px solid rgba(0,212,255,0.30)",
        boxShadow: isDark ? "0 12px 60px rgba(0,0,0,0.7)" : "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      <div className="relative z-10 px-8 py-10">
        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#00d4ff] text-[#00d4ff]" />
          ))}
        </div>
        <p className="font-bold leading-none bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent" style={{ fontSize: "clamp(48px, 7vw, 72px)" }}>
          98%
        </p>
        <p className="text-sm mt-1 mb-6 tracking-wide" style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>
          Client satisfaction rate
        </p>
        <div className="mx-auto mb-6 h-px w-20" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,255,0.5), transparent)" }} />
        <p className="text-base font-medium leading-snug max-w-[200px] mx-auto" style={{ color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.75)" }}>
          Trusted by industry leaders worldwide
        </p>
        <div className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full" style={{ color: "#00d4ff", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)" }}>
          4loops
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ item, isDark }: { item: Testimonial; isDark: boolean }) {
  const isLarge = item.variant === "large"
  const isCompact = item.variant === "compact"
  const padX = isLarge ? "28px" : isCompact ? "20px" : "24px"
  const padY = isLarge ? "28px" : isCompact ? "18px" : "22px"
  const qSize = isLarge ? "15px" : isCompact ? "12.5px" : "13.5px"

  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2"
      style={{
        background: isDark
          ? "linear-gradient(145deg, rgba(8,14,32,0.93) 0%, rgba(4,9,22,0.97) 100%)"
          : "#ffffff",
        border: `1px solid ${isDark ? item.accent + "1a" : "rgba(0,0,0,0.08)"}`,
        boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.45)" : "0 2px 18px rgba(0,0,0,0.07)",
      }}
    >
      <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full opacity-50" style={{ background: `linear-gradient(to bottom, ${item.accent}, ${item.accent}33)` }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: `${padY} ${padX}` }}>
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="fill-current" style={{ color: item.accent, width: isLarge ? 15 : 13, height: isLarge ? 15 : 13 }} />
          ))}
        </div>

        <blockquote className="leading-relaxed" style={{ fontSize: qSize, color: isDark ? "rgba(255,255,255,0.68)" : "rgba(15,23,42,0.72)" }}>
          &ldquo;{item.quote}&rdquo;
        </blockquote>

        <div className="mt-4 mb-3 h-px" style={{ background: `linear-gradient(to right, ${item.accent}38, transparent)` }} />

        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white"
            style={{ width: isLarge ? 42 : 34, height: isLarge ? 42 : 34, fontSize: isLarge ? 14 : 12, background: `linear-gradient(135deg, ${item.accent}, ${item.accent}77)` }}
          >
            {item.initials}
          </div>
          <div>
            <p className="font-semibold" style={{ fontSize: isLarge ? 14 : 12.5, color: isDark ? "#ffffff" : "#0f172a" }}>
              {item.author}
            </p>
            <p style={{ fontSize: isLarge ? 12 : 11, color: isDark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.50)" }}>
              {item.role}<span className="mx-1" style={{ color: isDark ? "rgba(255,255,255,0.20)" : "rgba(15,23,42,0.25)" }}>·</span>{item.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Column({ cards, isDark }: { cards: Testimonial[]; isDark: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((item, i) =>
        item.variant === "featured" ? (
          <FeaturedCard key="featured" isDark={isDark} />
        ) : (
          <TestimonialCard key={item.author} item={item} isDark={isDark} />
        )
      )}
    </div>
  )
}

export function Testimonials() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  return (
    <section
      aria-label="Client testimonials and reviews of 4loops Technologies software development services"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
      style={isDark ? { background: "linear-gradient(to bottom, transparent 0%, #040917 6%, #040917 94%, transparent 100%)" } : undefined}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase mb-3" style={{ color: isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.40)" }}>
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-foreground">
            What Our{" "}
            <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.36)" : "rgba(0,0,0,0.52)" }}>
            Industry leaders share how 4loops turned complex challenges into measurable results.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-5 items-start">
          <Column cards={col1} isDark={isDark} />
          <Column cards={col2} isDark={isDark} />
          <Column cards={col3} isDark={isDark} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {[...col1, ...col2, ...col3].map((item, i) =>
            item.variant === "featured" ? (
              <FeaturedCard key="featured" isDark={isDark} />
            ) : (
              <TestimonialCard key={item.author} item={item} isDark={isDark} />
            )
          )}
        </div>
      </div>
    </section>
  )
}
