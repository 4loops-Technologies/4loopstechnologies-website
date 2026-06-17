"use client"

import { motion } from "framer-motion"
import { useState, useRef, useCallback, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"

// ─── SVG preview graphics ──────────────────────────────────────────────────

function FinTechGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 200" fill="none" className="w-full h-full" aria-hidden>
      {[0, 50, 100, 150, 200].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="white" strokeOpacity=".04" strokeWidth="1" />
      ))}
      {[0, 64, 128, 192, 256, 320].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="white" strokeOpacity=".04" strokeWidth="1" />
      ))}
      {[
        { x: 20, h: 80, o: .4 }, { x: 60, h: 120, o: .55 }, { x: 100, h: 65, o: .4 },
        { x: 140, h: 150, o: .75 }, { x: 180, h: 95, o: .5 }, { x: 220, h: 170, o: 1 },
        { x: 260, h: 110, o: .6 }, { x: 300, h: 145, o: .7 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={200 - b.h} width="26" height={b.h} rx="5"
              fill={accent} fillOpacity={b.o * 0.45} />
      ))}
      <polyline
        points="20,150 60,110 100,135 140,60 180,90 220,35 260,70 300,25"
        fill="none" stroke={accent} strokeWidth="2.5" strokeOpacity=".95"
      />
      <polyline
        points="20,150 60,110 100,135 140,60 180,90 220,35 260,70 300,25 300,200 20,200"
        fill={accent} fillOpacity=".07"
      />
      <circle cx="300" cy="25" r="5" fill={accent} />
      <circle cx="300" cy="25" r="12" fill={accent} fillOpacity=".18" />
      <circle cx="300" cy="25" r="22" fill={accent} fillOpacity=".07" />
    </svg>
  )
}

function HealthGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 220 120" fill="none" className="w-full h-full" aria-hidden>
      <polyline
        points="0,60 28,60 44,60 56,15 68,105 80,60 96,60 108,35 120,85 132,60 158,60 220,60"
        fill="none" stroke={accent} strokeWidth="2.5" strokeOpacity=".95" strokeLinejoin="round"
      />
      <polyline
        points="0,60 28,60 44,60 56,15 68,105 80,60 96,60 108,35 120,85 132,60 158,60 220,60 220,120 0,120"
        fill={accent} fillOpacity=".06"
      />
      <rect x="170" y="22" width="7" height="28" rx="2" fill={accent} fillOpacity=".85" />
      <rect x="160" y="31" width="28" height="7" rx="2" fill={accent} fillOpacity=".85" />
      <circle cx="183" cy="38" r="22" stroke={accent} strokeWidth="1" strokeOpacity=".2" />
      <circle cx="56"  cy="15" r="3" fill={accent} />
      <circle cx="108" cy="35" r="3" fill={accent} />
    </svg>
  )
}

function EcommerceGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full" aria-hidden>
      {[
        { x: 8,  y: 8,  w: 54, h: 60 },
        { x: 74, y: 8,  w: 54, h: 60 },
        { x: 140,y: 8,  w: 54, h: 60 },
        { x: 8,  y: 80, w: 120,h: 28 },
        { x: 140,y: 80, w: 54, h: 28 },
      ].map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx="8"
              fill={accent} fillOpacity=".07" stroke={accent} strokeOpacity=".22" strokeWidth="1" />
      ))}
      <text x="18"  y="54" fontSize="8" fill={accent} fillOpacity=".65" fontFamily="monospace">$49.99</text>
      <text x="84"  y="54" fontSize="8" fill={accent} fillOpacity=".65" fontFamily="monospace">$89.00</text>
      <text x="150" y="54" fontSize="8" fill={accent} fillOpacity=".65" fontFamily="monospace">$24.50</text>
      <circle cx="35"  cy="32" r="12" fill={accent} fillOpacity=".12" />
      <circle cx="101" cy="32" r="12" fill={accent} fillOpacity=".12" />
      <circle cx="167" cy="32" r="12" fill={accent} fillOpacity=".12" />
    </svg>
  )
}

function LogisticsGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-full h-full" aria-hidden>
      <path d="M18,110 Q55,45 105,68 T198,28" stroke={accent} strokeWidth="1.5"
            strokeOpacity=".45" strokeDasharray="6 4" fill="none" />
      {[{ cx:18,cy:110 },{ cx:65,cy:52 },{ cx:105,cy:68 },{ cx:152,cy:44 },{ cx:198,cy:28 }].map((n,i)=>(
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="5" fill={accent} fillOpacity={i===4?1:.55} />
          <circle cx={n.cx} cy={n.cy} r="11" fill={accent} fillOpacity=".1" />
        </g>
      ))}
      <rect x="84" y="88" width="44" height="28" rx="5" fill={accent} fillOpacity=".14"
            stroke={accent} strokeOpacity=".35" strokeWidth="1" />
      <rect x="64" y="100" width="24" height="16" rx="5" fill={accent} fillOpacity=".1"
            stroke={accent} strokeOpacity=".28" strokeWidth="1" />
      <circle cx="76"  cy="118" r="4" fill={accent} fillOpacity=".8" />
      <circle cx="116" cy="118" r="4" fill={accent} fillOpacity=".8" />
    </svg>
  )
}

function EdTechGraphic({ accent }: { accent: string }) {
  const nodes = [{ cx:110,cy:60 },{ cx:48,cy:28 },{ cx:172,cy:28 },{ cx:38,cy:96 },{ cx:182,cy:96 },{ cx:110,cy:118 }]
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,5],[4,5]]
  return (
    <svg viewBox="0 0 220 140" fill="none" className="w-full h-full" aria-hidden>
      {edges.map(([a,b],i)=>(
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
              stroke={accent} strokeOpacity=".22" strokeWidth="1.2" />
      ))}
      {nodes.map((n,i)=>(
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={i===0?18:9}
                  fill={accent} fillOpacity={i===0?.16:.09}
                  stroke={accent} strokeOpacity={i===0?.55:.28} strokeWidth="1" />
          {i===0 && <circle cx={n.cx} cy={n.cy} r="5" fill={accent} />}
        </g>
      ))}
    </svg>
  )
}

function RealEstateGraphic({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-full h-full" aria-hidden>
      {[
        "M8,120 L8,72 L28,72 L28,50 L48,50 L48,72 L58,72 L58,120",
        "M63,120 L63,40 L88,40 L88,28 L113,28 L113,40 L138,40 L138,120",
        "M143,120 L143,60 L163,60 L163,78 L183,78 L183,54 L205,54 L205,120",
      ].map((d,i)=>(
        <path key={i} d={d} fill={accent} fillOpacity=".07"
              stroke={accent} strokeOpacity=".28" strokeWidth="1" />
      ))}
      {[{x:13,y:80},{x:23,y:80},{x:13,y:94},{x:23,y:94},
        {x:70,y:48},{x:80,y:48},{x:70,y:60},{x:80,y:60},
        {x:153,y:68},{x:163,y:68},{x:188,y:62},{x:188,y:74}].map((w,i)=>(
        <rect key={i} x={w.x} y={w.y} width="6" height="6" rx="1"
              fill={accent} fillOpacity=".42" />
      ))}
      <line x1="0" y1="120" x2="220" y2="120" stroke={accent} strokeOpacity=".2" strokeWidth="1" />
    </svg>
  )
}

function NFCBusinessCardGraphic({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 220 130"
      fill="none"
      className="w-full h-full"
      aria-hidden
    >
      {/* Left Phone */}
      <rect
        x="15"
        y="25"
        width="42"
        height="80"
        rx="8"
        fill={accent}
        fillOpacity=".05"
        stroke={accent}
        strokeOpacity=".28"
      />

      <rect
        x="28"
        y="31"
        width="16"
        height="2"
        rx="1"
        fill={accent}
        fillOpacity=".35"
      />

      {/* NFC Card Center */}
      <rect
        x="75"
        y="38"
        width="70"
        height="44"
        rx="8"
        fill={accent}
        fillOpacity=".07"
        stroke={accent}
        strokeOpacity=".28"
      />

      <rect
        x="86"
        y="50"
        width="30"
        height="4"
        rx="2"
        fill={accent}
        fillOpacity=".45"
      />

      <rect
        x="86"
        y="60"
        width="20"
        height="3"
        rx="1.5"
        fill={accent}
        fillOpacity=".3"
      />

      {/* NFC Waves */}
      <path
        d="M120 54 C126 48,132 48,138 54"
        stroke={accent}
        strokeOpacity=".6"
        strokeWidth="2"
      />

      <path
        d="M124 60 C128 56,132 56,136 60"
        stroke={accent}
        strokeOpacity=".4"
        strokeWidth="2"
      />

      {/* Right Phone */}
      <rect
        x="165"
        y="25"
        width="42"
        height="80"
        rx="8"
        fill={accent}
        fillOpacity=".05"
        stroke={accent}
        strokeOpacity=".28"
      />

      <rect
        x="178"
        y="31"
        width="16"
        height="2"
        rx="1"
        fill={accent}
        fillOpacity=".35"
      />

      {/* Connection Waves Between Devices */}
      <path
        d="M58 65 Q75 45 92 65"
        stroke={accent}
        strokeOpacity=".25"
        strokeWidth="1.5"
      />

      <path
        d="M128 65 Q145 45 162 65"
        stroke={accent}
        strokeOpacity=".25"
        strokeWidth="1.5"
      />

      {/* Floating Contact Nodes */}
      {[
        { x: 40, y: 110 },
        { x: 75, y: 100 },
        { x: 110, y: 110 },
        { x: 145, y: 100 },
        { x: 180, y: 110 },
      ].map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3"
          fill={accent}
          fillOpacity=".35"
        />
      ))}

      {/* Ground Line */}
      <line
        x1="0"
        y1="120"
        x2="220"
        y2="120"
        stroke={accent}
        strokeOpacity=".2"
      />
    </svg>
  );
}

// ─── Project data with explicit grid placement ─────────────────────────────

const projects = [
  {
    title: "#1 AI Solutions in Ethiopia",
    category: "AI Powered Systems",
    description: "End-to-end AI transformation — from intelligent automation and predictive analytics to custom model deployment for Ethiopian enterprises.",
    accent: "#00d4ff",
    Graphic: FinTechGraphic,
    featured: true,
    // PRIMARY featured card — dominates left 7 cols, full top section height
    desktop: { col: "1 / 8", row: "1 / 9" },
    mobileClass: "sm:col-span-2 min-h-[380px]",
  },
  {
    title: "ERP & Business Solutions",
    category: "Enterprise Software",
    description: "ERPNext-powered systems tailored for Ethiopian businesses — finance, HR, inventory, and operations unified.",
    accent: "#2d9a7a",
    Graphic: HealthGraphic,
    featured: false,
    // Right-column TOP — shares same top edge as featured card
    desktop: { col: "8 / 13", row: "1 / 5" },
    mobileClass: "min-h-[200px]",
  },
  {
    title: "Intelligent Chatbot Platforms",
    category: "Conversational AI",
    description: "AI-driven chatbots and virtual assistants that handle support, sales, and workflows in Amharic and English.",
    accent: "#635BFF",
    Graphic: EcommerceGraphic,
    featured: false,
    // Right-column BOTTOM — flush against Healthcare, unified right panel
    desktop: { col: "8 / 13", row: "5 / 9" },
    mobileClass: "min-h-[200px]",
  },
  {
    title: "ERP and CRM System Solutions",
    category: "ERP & CRM Systems",
    description: "Robotic process automation and intelligent workflows that eliminate manual tasks and scale operations effortlessly.",
    accent: "#FF9900",
    Graphic: LogisticsGraphic,
    featured: false,
    // Bottom row LEFT — all three bottom cards share identical row start → clean alignment
    desktop: { col: "1 / 5", row: "9 / 15" },
    mobileClass: "min-h-[220px]",
  },
  {
    title: "Business Intelligence & Analytics",
    category: "Business Intelligence",
    description: "Real-time dashboards and ML-driven insights that turn raw business data into clear, actionable decisions.",
    accent: "#4ade80",
    Graphic: EdTechGraphic,
    featured: false,
    // Bottom row CENTER — same row start as Logistics → perfectly aligned
    desktop: { col: "5 / 9", row: "9 / 15" },
    mobileClass: "min-h-[220px]",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud & DevOps",
    description: "End-to-end modernisation — cloud migration, API integration, and scalable architecture built for growth.",
    accent: "#5fb8e8",
    Graphic: RealEstateGraphic,
    featured: false,
    // Bottom row RIGHT — same row start as Logistics + EdTech → unified bottom band
    desktop: { col: "9 / 13", row: "9 / 15" },
    mobileClass: "min-h-[220px]",
  },
  {
  title: "TapConnect NFC",
  category: "NFC Digital Business Cards",
  description: "A modern NFC-powered digital business card platform that enables instant contact sharing through a simple tap or QR code scan. Features customizable profiles, social media integration, real-time updates, analytics tracking, and seamless networking for professionals and businesses.",
  accent: "#00d4ff",
  Graphic: NFCBusinessCardGraphic,
  featured: false,
  // Full-width bottom card with extra height for longer copy
  desktop: { col: "1 / 13", row: "15 / 22" },
  mobileClass: "min-h-[220px]",
},
]

// ─── Card component ────────────────────────────────────────────────────────

type Project = (typeof projects)[0]

function Card({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top })
  }, [])

  const { Graphic, accent, featured } = project

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, transition: { duration: 0.22, ease: "easeOut" } }}
      className="relative overflow-hidden flex flex-col w-full h-full"
      style={{
        borderRadius: featured ? "24px" : "20px",
        background: isDark
          ? featured
            ? "linear-gradient(160deg, rgba(0,16,40,0.98) 0%, rgba(3,10,24,1) 100%)"
            : "linear-gradient(150deg, rgba(8,14,32,0.96) 0%, rgba(5,10,24,0.98) 100%)"
          : featured
            ? "linear-gradient(160deg, #f0f6ff 0%, #eaf2ff 100%)"
            : "#ffffff",
        border: `1px solid ${
          hovered
            ? accent + "55"
            : isDark
              ? featured ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.065)"
              : "rgba(0,0,0,0.08)"
        }`,
        boxShadow: hovered
          ? `0 24px 70px rgba(0,0,0,${isDark ? "0.75" : "0.12"}), 0 0 0 1px ${accent}38, 0 0 70px ${accent}12`
          : featured
            ? isDark
              ? "0 10px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)"
              : "0 8px 40px rgba(0,0,0,0.10)"
            : isDark
              ? "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)"
              : "0 2px 16px rgba(0,0,0,0.07)",
        backdropFilter: "blur(16px)",
        transition: "border-color 0.32s ease, box-shadow 0.32s ease",
      }}
    >
      {/* Atmospheric corner bloom */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          top: featured ? "-100px" : "-70px",
          right: featured ? "-100px" : "-70px",
          width: featured ? "340px" : "220px",
          height: featured ? "340px" : "220px",
          background: `radial-gradient(circle, ${accent}35, transparent 68%)`,
          filter: "blur(50px)",
          opacity: hovered ? 0.55 : 0.2,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Secondary bloom — bottom-left counter-balance */}
      {featured && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            bottom: "-80px", left: "-80px",
            width: "260px", height: "260px",
            background: "radial-gradient(circle, #5fb8e840, transparent 70%)",
            filter: "blur(50px)",
            opacity: hovered ? 0.35 : 0.12,
            transition: "opacity 0.5s ease",
          }}
        />
      )}

      {/* Mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${featured ? 480 : 320}px circle at ${mouse.x}px ${mouse.y}px, ${accent}0f, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Graphic area */}
      <div
        className="relative z-0 w-full overflow-hidden flex items-center justify-center"
        style={{
          flex: featured ? "1" : "0 0 auto",
          minHeight: featured ? "150px" : "110px",
          maxHeight: featured ? "220px" : "150px",
          padding: featured ? "18px 20px 8px" : "12px 14px 6px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 55% 85%, ${accent}1c, transparent 62%)`,
            opacity: 0.9,
          }}
        />
        <Graphic accent={accent} />
      </div>

      {/* Divider */}
      <div
        className="mx-5 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}28, transparent)`,
        }}
      />

      {/* Text block */}
      <div
        className="relative z-20 flex flex-col"
        style={{ padding: featured ? "20px 24px 24px" : "14px 18px 18px" }}
      >
        <span
          className="font-bold tracking-[0.2em] uppercase mb-1.5"
          style={{ fontSize: "10px", color: accent }}
        >
          {project.category}
        </span>

        <h3
          className="font-bold leading-tight"
          style={{
            fontSize: featured ? "clamp(18px,2vw,24px)" : "15px",
            marginBottom: "8px",
            color: isDark ? "#ffffff" : "#0f172a",
          }}
        >
          {project.title}
        </h3>

        <p
          className="leading-relaxed"
          style={{
            fontSize: featured ? "13.5px" : "12px",
            color: isDark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.58)",
          }}
        >
          {project.description}
        </p>

        <motion.button
          whileHover={{ x: 4, transition: { duration: 0.14 } }}
          className="mt-4 self-start flex items-center gap-1.5 font-semibold transition-colors duration-200"
          style={{
            fontSize: "11px",
            color: hovered ? accent : isDark ? "rgba(255,255,255,0.32)" : "rgba(15,23,42,0.38)",
          }}
        >
          See More
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      {/* Bottom shimmer line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, transparent, ${accent}aa, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────

export function Portfolio() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
      style={isDark ? {
        background: "linear-gradient(to bottom, transparent 0%, #04091a 6%, #04091a 94%, transparent 100%)",
      } : undefined}
    >
      {/* ── Background atmosphere — only rendered in dark mode ── */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div style={{ position:"absolute", top:"18%",  left:"8%",   width:640, height:640, opacity:.055, background:"radial-gradient(circle,#00d4ff,transparent 62%)", filter:"blur(100px)" }} />
          <div style={{ position:"absolute", bottom:"12%",right:"6%",  width:560, height:560, opacity:.045, background:"radial-gradient(circle,#635BFF,transparent 62%)", filter:"blur(100px)" }} />
          <div style={{ position:"absolute", top:"55%",  left:"42%",  width:400, height:400, opacity:.03,  background:"radial-gradient(circle,#2d9a7a,transparent 65%)", filter:"blur(80px)" }} />
          <div style={{ position:"absolute", inset:0, opacity:.018, backgroundImage:"radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)", backgroundSize:"30px 30px" }} />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(2,6,18,0.55) 100%)" }} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: isDark ? "#ffffff" : "#000000" }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: isDark ? "rgba(255,255,255,0.38)" : "#000000" }}
          >
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP BENTO GRID
            12-column fine-grained grid.
            gridAutoRows: 40px → each row-track = 40px.
            Cards have explicit col/row placements so they sit at
            genuinely different vertical positions (not auto-aligned).

            Stagger in bottom row:
              EdTech    → row 9  → top = 8×54px = 432px  (highest)
              Logistics → row 10 → top = 9×54px = 486px  (middle)
              Real Est. → row 11 → top = 10×54px= 540px  (lowest)
            That is 54px of real vertical offset between each card.
        ════════════════════════════════════════════════════════════ */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "40px",
            gap: "14px",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              style={{
                gridColumn: project.desktop.col,
                gridRow: project.desktop.row,
              }}
            >
              <Card project={project} index={i} isDark={isDark} />
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════
            MOBILE / TABLET STACK
            Preserves the editorial feel through:
            - Featured card spanning full width (prominent)
            - 2-column grid for the rest
            - Intentionally different min-heights per card
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={project.mobileClass}
            >
              <Card project={project} index={i} isDark={isDark} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
