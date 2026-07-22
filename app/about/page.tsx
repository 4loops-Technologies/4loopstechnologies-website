"use client"

import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const LazyInfinityAnimation = lazy(() =>
  Promise.resolve({ default: InfinityAnimation })
)

// ─── Section themes ─────────────────────────────────────────────────────────

const THEMES = [
  { hue: 192, label: "Our Origin"   },
  { hue: 142, label: "Our Mission"  },
  { hue: 267, label: "Our Values"   },
  { hue: 30,  label: "Our Approach" },
  { hue: 322, label: "Our People"   },
  { hue: 174, label: "Our Vision"   },
]

// ─── Page content ───────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "origin",
    num: "01",
    title: "Born from ambition,\nbuilt on craft.",
    body: "4loops Technologies was founded in 2019 with a single conviction: that African businesses deserve world-class technology partners. We started as a small team of engineers who were tired of watching promising companies struggle with outdated systems and one-size-fits-all software.\n\nToday we serve clients across Ethiopia, East Africa, and beyond — but our founding conviction has never changed.",
    bullets: ["Founded 2019", "Pan-African focus", "50+ projects delivered"],
  },
  {
    id: "mission",
    num: "02",
    title: "Technology as a force\nfor transformation.",
    body: "Our mission is to build software that genuinely changes how businesses operate and how people experience their work. We measure success not in lines of code or features shipped, but in the business outcomes our clients achieve.\n\nEvery engagement begins with deep listening — understanding your industry, your constraints, and the specific problem you need solved — before a single line of production code is written.",
    bullets: ["Outcome-driven delivery", "Industry-first thinking", "Deep discovery process"],
  },
  {
    id: "values",
    num: "03",
    title: "Four principles that\nguide everything.",
    body: "These are not aspirational statements. They are the standards we hold ourselves to on every project, with every client, every day.",
    values: [
      { title: "Innovation",  desc: "We pursue better solutions relentlessly, challenging convention when it serves our clients." },
      { title: "Integrity",   desc: "We say what we mean, build what we promise, and own our mistakes openly." },
      { title: "Impact",      desc: "We optimise for real-world outcomes, not technical elegance for its own sake." },
      { title: "Inclusion",   desc: "We build technology that works for everyone and build it with diverse teams." },
    ],
  },
  {
    id: "approach",
    num: "04",
    title: "A process designed\nfor clarity.",
    body: "We follow a structured, transparent process across every engagement. Discovery workshops map your goals and constraints. Architecture blueprints are designed before code is written. Agile sprints with weekly demos keep you informed. Rigorous QA happens before launch, not after.\n\nWhat sets us apart is not the process itself — it is how rigorously we follow it, and how openly we communicate at every step.",
    bullets: ["Deep discovery workshops", "Agile sprint delivery", "Transparent communication"],
  },
  {
    id: "people",
    num: "05",
    title: "A team of builders\nwho care deeply.",
    body: "Our team is made up of engineers, designers, and strategists who chose this work because they genuinely love building things. We hire for craft and curiosity, and we invest heavily in keeping our people at the frontier of what is technically possible.\n\nWe believe the best software comes from teams who trust each other, argue respectfully about ideas, and share a relentless drive to make things better.",
    bullets: ["30+ expert engineers", "Continuous learning culture", "Global perspective, local expertise"],
  },
  {
    id: "vision",
    num: "06",
    title: "Building the infrastructure\nfor Africa's digital future.",
    body: "We are working toward a future where every African business — regardless of size or sector — has access to the kind of technology infrastructure that the world's most successful companies run on.\n\nThat means AI systems trained on local data. ERP platforms that understand local regulations. Mobile-first products built for variable connectivity. And developer talent that stays on the continent because the work here is as exciting as anywhere in the world.",
    bullets: ["AI-native products", "Local-first infrastructure", "Continent-wide ambition"],
  },
]

// ─── Canvas infinity animation ───────────────────────────────────────────────
//
// Particle trajectories follow the exact Lemniscate of Bernoulli path:
//   x(t) = cx + sx·cos(t) / (1 + sin²t)
//   y(t) = cy + sy·sin(t)·cos(t) / (1 + sin²t)
//
// As t runs 0→2π the curve traces both loops, crossing at (cx,cy) twice —
// once at t=π/2 and once at t=3π/2 — producing a true ∞ trajectory.
//
// ── Particle appearance:  comet head + glowing tail + random spark burst ──

type Particle = {
  pos:     number                      // 0–1 position along the path
  speed:   number                      // position increment per animation frame
  size:    number                      // head radius (px)
  tailLen: number                      // history positions kept for tail
  history: Array<[number, number]>
  hue:     number                      // base HSL hue
  sat:     number                      // base saturation %
  lit:     number                      // base lightness %
  opacity: number                      // tail opacity multiplier
}

// Section index → dominant hue
const SECTION_HUES = [192, 142, 267, 30, 322, 174]

// Per-particle base [hue, sat%, lit%] — purple / blue / pink / cyan / violet / magenta / sky / lavender
const PARTICLE_CFG: [number, number, number][] = [
  [276, 90, 72], [213, 96, 68], [330, 96, 70],
  [188,100, 65], [263, 86, 74], [292, 90, 70],
  [199, 96, 67], [238, 80, 72],
]

function InfinityAnimation({ sectionIdx }: { sectionIdx: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const stateRef  = useRef<{
    currentHue: number
    targetHue:  number
    particles:  Particle[]
    path:       [number, number][]
  } | null>(null)

  // Keep target hue in sync with active section
  useEffect(() => {
    if (stateRef.current) stateRef.current.targetHue = SECTION_HUES[sectionIdx] ?? 192
  }, [sectionIdx])

  // One-time canvas setup + animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const W = 460, H = 460, CX = W / 2, CY = H / 2

    // ── Lemniscate path (2 000 samples for silky motion) ──
    const N = 2000
    const SX = 178  // x-amplitude → each loop extends 178 px from centre
    const SY = 252  // y-amplitude → max y ≈ SY/3 ≈ 84 px from centre
    const path: [number, number][] = []
    for (let i = 0; i < N; i++) {
      const t  = (i / N) * 2 * Math.PI
      const s2 = Math.sin(t) ** 2
      const d  = 1 + s2
      path.push([CX + SX * Math.cos(t) / d, CY + SY * Math.sin(t) * Math.cos(t) / d])
    }

    // ── 8 particles, evenly spaced, varying speed / size / tail ──
    const particles: Particle[] = PARTICLE_CFG.map(([hue, sat, lit], i) => ({
      pos:     i / PARTICLE_CFG.length,
      speed:   0.00052 + i * 0.000068,   // slightly different speeds for depth
      size:    2.8 + (i % 3) * 0.9,
      tailLen: 85 + i * 20,
      history: [],
      hue, sat, lit,
      opacity: 0.70 + (i % 3) * 0.10,
    }))

    stateRef.current = {
      currentHue: SECTION_HUES[sectionIdx] ?? 192,
      targetHue:  SECTION_HUES[sectionIdx] ?? 192,
      particles, path,
    }

    function animate() {
      const st = stateRef.current
      if (!st) return

      ctx.clearRect(0, 0, W, H)

      // Smooth hue lerp (≈ 1.5 s to settle)
      st.currentHue += (st.targetHue - st.currentHue) * 0.018
      const hShift = (st.currentHue - 192) * 0.32

      // ── Ghost ∞ outline — structural guide, barely visible ──
      ctx.save()
      ctx.beginPath()
      st.path.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y))
      ctx.closePath()
      ctx.strokeStyle = `hsla(${((200 + hShift) % 360 + 360) % 360},80%,60%,0.05)`
      ctx.lineWidth   = 1.5
      ctx.stroke()
      ctx.restore()

      // ── Particles ──
      for (const p of st.particles) {
        // Advance along the lemniscate
        p.pos = (p.pos + p.speed) % 1
        const [x, y] = st.path[Math.floor(p.pos * N)]

        // Record position history for tail
        p.history.unshift([x, y])
        if (p.history.length > p.tailLen) p.history.pop()

        // Effective hue — base hue shifted by section colour
        const h = ((p.hue + hShift) % 360 + 360) % 360

        // Draw tail — oldest point first (dimmest), newest last (brightest)
        for (let i = p.history.length - 1; i >= 0; i--) {
          const [hx, hy] = p.history[i]
          const frac  = 1 - i / p.history.length   // 0 (oldest) → 1 (newest)
          const alpha = frac * frac * p.opacity * 0.88
          const rad   = Math.max(0.35, p.size * frac ** 0.52)
          ctx.beginPath()
          ctx.arc(hx, hy, rad, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${h},${p.sat}%,${p.lit}%,${alpha})`
          ctx.fill()
        }

        // Head — outer glow ring
        ctx.save()
        ctx.shadowBlur  = 24
        ctx.shadowColor = `hsl(${h},${p.sat}%,${p.lit}%)`
        ctx.beginPath()
        ctx.arc(x, y, p.size * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${h},${p.sat}%,${Math.min(p.lit + 14, 95)}%)`
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.restore()

        // Head — white-hot core dot
        ctx.beginPath()
        ctx.arc(x, y, p.size * 0.62, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.97)"
        ctx.fill()

        // Sparks — random micro-particles near the head
        if (Math.random() < 0.09) {
          const ang  = Math.random() * Math.PI * 2
          const dist = Math.random() * 10 + 2
          ctx.beginPath()
          ctx.arc(x + Math.cos(ang) * dist, y + Math.sin(ang) * dist,
                  Math.random() * 1.3 + 0.2, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${h},100%,88%,${Math.random() * 0.8 + 0.2})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, []) // ← intentionally empty: state lives in refs

  // React-managed CSS values (transition handled by browser)
  const H     = THEMES[sectionIdx]?.hue ?? 192
  const label = THEMES[sectionIdx]?.label ?? ""

  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>

      {/* Ambient nebula — CSS-transitioned on section change */}
      <div style={{
        position:"absolute", inset:0,
        background:`radial-gradient(ellipse 75% 52% at 50% 50%, hsla(${H},72%,28%,0.42) 0%, transparent 100%)`,
        filter:"blur(28px)",
        transition:"background 1.6s ease",
        pointerEvents:"none",
      }} />

      {/* GPU-composited canvas */}
      <canvas
        ref={canvasRef}
        width={460}
        height={460}
        style={{ maxWidth:"100%", maxHeight:"100%", objectFit:"contain", position:"relative", zIndex:1, willChange:"transform" }}
      />

      {/* Section label */}
      <div style={{
        position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)",
        fontFamily:"ui-monospace,monospace", fontSize:"11px", fontWeight:600,
        letterSpacing:"0.22em", textTransform:"uppercase",
        color:`hsl(${H},100%,70%)`,
        transition:"color 1.6s ease",
        whiteSpace:"nowrap", pointerEvents:"none",
      }}>
        ✦ {label}
      </div>
    </div>
  )
}

// ─── Theme style helper ──────────────────────────────────────────────────────

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

// ─── Right-side content section ─────────────────────────────────────────────

function Section({
  section, isActive, setRef, isDark, accentHue,
}: {
  section: typeof SECTIONS[0]
  isActive: boolean
  setRef: (el: Element | null) => void
  isDark: boolean
  accentHue: number
}) {
  const t = th(isDark)
  const accent = `hsl(${accentHue},90%,62%)`
  const accentDim = `hsl(${accentHue},70%,40%)`

  return (
    <div
      ref={setRef}
      data-section-id={section.id}
      style={{
        padding: "64px 0 64px 40px",
        borderBottom: `1px solid ${t.sep}`,
        position: "relative",
        transition: "opacity 0.4s ease",
        opacity: isActive ? 1 : 0.38,
      }}
    >
      {/* Active left bar */}
      <div style={{
        position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
        width: "3px",
        height: isActive ? "65%" : "0%",
        background: `linear-gradient(to bottom,transparent,${accent},transparent)`,
        borderRadius: "999px",
        transition: "height 0.5s cubic-bezier(0.4,0,0.2,1), background 1.6s ease",
      }} />

      {/* Step number + section id */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <span style={{ ...MONO, color: isActive ? accent : t.mutedMore, transition: "color 1.6s ease" }}>
          {section.num}
        </span>
        <div style={{ height: "1px", width: "32px", background: isActive ? accent : t.sep, transition: "background 1.6s ease" }} />
        <span style={{ ...MONO, color: isActive ? accent : t.mutedMore, letterSpacing: "0.14em", transition: "color 1.6s ease" }}>
          {section.id}
        </span>
      </div>

      {/* Title */}
      <h2 style={{
        fontSize: "clamp(24px,3.5vw,40px)",
        fontWeight: 800,
        lineHeight: 1.18,
        letterSpacing: "-0.025em",
        color: isActive ? t.heading : (isDark ? "rgba(241,245,249,0.42)" : "rgba(15,23,42,0.38)"),
        marginBottom: "22px",
        whiteSpace: "pre-line",
        transition: "color 0.4s ease",
      }}>
        {section.title}
      </h2>

      {/* Body text */}
      {section.body && (
        <div>
          {section.body.split("\n\n").map((para, i) => (
            <p key={i} style={{
              fontSize: "15.5px", color: t.muted, lineHeight: 1.78,
              marginBottom: i < section.body!.split("\n\n").length - 1 ? "16px" : "0",
              maxWidth: "520px",
            }}>
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Values grid */}
      {"values" in section && section.values && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "6px", maxWidth: "560px" }}>
          {section.values.map((v) => (
            <div key={v.title} style={{
              background: t.cardBg, border: `1px solid ${t.cardBdr}`,
              borderRadius: "14px", padding: "18px 20px",
              backdropFilter: "blur(12px)",
            }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "8px",
                background: `hsl(${accentHue},80%,55%)22`,
                border: `1px solid hsl(${accentHue},80%,55%)30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "10px",
                transition: "all 1.6s ease",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, transition: "background 1.6s ease" }} />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: t.heading, marginBottom: "6px" }}>{v.title}</p>
              <p style={{ fontSize: "12.5px", color: t.muted, lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bullet highlights */}
      {section.bullets && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "26px" }}>
          {section.bullets.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                background: `${accent}18`, border: `1px solid ${accent}38`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 1.6s ease",
              }}>
                <Check size={10} style={{ color: accent }} />
              </div>
              <span style={{
                fontFamily: "ui-monospace,monospace", fontSize: "12px",
                fontWeight: 600, color: isActive ? accent : t.mutedMore,
                letterSpacing: "0.08em", transition: "color 1.6s ease",
              }}>
                {b}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"
  const t = th(isDark)

  const [activeIdx, setActiveIdx] = useState(0)
  const refsMap = useRef(new Map<string, Element>())

  const setRef = useCallback(
    (id: string) => (el: Element | null) => {
      if (el) refsMap.current.set(id, el)
      else    refsMap.current.delete(id)
    },
    []
  )

  useEffect(() => {
    const map = refsMap.current
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e
        }
        if (best) {
          const id = best.target.getAttribute("data-section-id")
          const idx = SECTIONS.findIndex((s) => s.id === id)
          if (idx >= 0) setActiveIdx(idx)
        }
      },
      { rootMargin: "-28% 0px -28% 0px", threshold: [0, 0.15, 0.35, 0.5] }
    )
    map.forEach((el) => observer.observe(el))
    return () => { map.forEach((el) => observer.unobserve(el)) }
  }, [])

  const accentHue = THEMES[activeIdx]?.hue ?? 192

  return (
    <>
      <Header />

      <main style={{ background: t.pageBg, minHeight: "100vh", color: t.pageColor, transition: "background 0.3s ease" }}>

        {/* ── Hero ── */}
        <section style={{
          position: "relative", padding: "118px 0 72px", overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,212,255,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.032) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}>
          <div style={{ position:"absolute", top:"-60px", left:"-60px", width:"440px", height:"440px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.10),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-60px", right:"-60px", width:"380px", height:"380px", borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.08),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <p style={{ ...MONO, marginBottom: "18px" }}>✦ About 4loops Technologies</p>
            <h1 style={{
              fontSize: "clamp(34px,6vw,68px)", fontWeight: 800,
              lineHeight: 1.08, letterSpacing: "-0.025em",
              color: t.heading, marginBottom: "24px",
            }}>
              We exist to make{" "}
              <span style={GRAD}>technology work</span>
              {" "}for Africa.
            </h1>
            <p style={{ fontSize: "clamp(15px,2vw,18px)", color: t.muted, lineHeight: 1.72, maxWidth: "580px" }}>
              A software company built in Ethiopia, working across the continent and beyond — combining engineering craft with genuine understanding of the markets we serve.
            </p>
          </div>
        </section>

        {/* ── Split layout ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ab-split">

            {/* LEFT — sticky infinite-loop animation (lazy loaded) */}
            <div className="ab-left">
              <div className="ab-sticky">
                <Suspense fallback={<div style={{ width: "100%", height: "100%" }} />}>
                  <LazyInfinityAnimation sectionIdx={activeIdx} />
                </Suspense>
              </div>
            </div>

            {/* RIGHT — scrollable content sections */}
            <div className="ab-right">
              {SECTIONS.map((section, idx) => (
                <Section
                  key={section.id}
                  section={section}
                  isActive={activeIdx === idx}
                  setRef={setRef(section.id)}
                  isDark={isDark}
                  accentHue={accentHue}
                />
              ))}
              <div style={{ height: "24vh" }} />
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
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
              <p style={{ ...MONO, marginBottom: "18px" }}>✦ Work With Us</p>
              <h2 style={{
                fontSize: "clamp(24px,4.5vw,50px)", fontWeight: 800,
                color: t.heading, letterSpacing: "-0.022em",
                marginBottom: "18px", lineHeight: 1.15,
              }}>
                Ready to build something{" "}
                <span style={GRAD}>that lasts?</span>
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: t.muted, maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.72 }}>
                Tell us about your challenge and we will get back to you within one business day.
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
                  View our services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Layout styles ── */}
      <style>{`
        /* Split layout */
        .ab-split { display: flex; flex-direction: column; }
        .ab-left  { display: none; }
        .ab-right { width: 100%; }

        @media (min-width: 1024px) {
          .ab-split {
            flex-direction: row;
            align-items: stretch;
            gap: 40px;
          }
          .ab-left {
            display: block;
            width: 46%;
            flex-shrink: 0;
          }
          .ab-sticky {
            position: sticky;
            top: 110px;
            height: calc(100vh - 146px);
            min-height: 480px;
          }
          .ab-right { flex: 1; min-width: 0; }
        }

        /* Mobile: show animation panel above content */
        @media (max-width: 1023px) {
          .ab-left {
            display: block;
            width: 100%;
            height: 300px;
            margin-bottom: 8px;
          }
          .ab-sticky {
            position: static !important;
            height: 300px !important;
          }
        }
      `}</style>
      <Footer />
    </>
  )
}
