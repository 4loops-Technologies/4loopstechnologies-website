"use client"

import { motion } from "framer-motion"

// ─── CSS: marquee keyframe + hover-pause + float ───────────────────────────
const STYLES = `
  @keyframes scroll-ltr {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0%); }
  }
  @keyframes logo-float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-5px); }
  }
  .marquee-track {
    animation: scroll-ltr 28s linear infinite;
    will-change: transform;
  }
  .marquee-root:hover .marquee-track {
    animation-play-state: paused;
  }
  .logo-float {
    animation: logo-float 3.6s ease-in-out infinite;
  }
`

type Partner = { name: string; color: string; logo: React.ReactNode }

const partners: Partner[] = [
  // 1 ── Microsoft Azure ─────────────────────────────────────────────────────
  {
    name: "Microsoft Azure",
    color: "#0078D4",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
        alt="Microsoft Azure"
        className="w-full h-full object-contain"
      />
    ),
  },

  // 2 ── Google ──────────────────────────────────────────────────────────────
  {
    name: "Google",
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
        {/* Full-colour Google "G" — grayscale filter desaturates on default, reveals colours on hover */}
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },

  // 3 ── AII Ethiopia (AI Institute of Ethiopia) ─────────────────────────────
  {
    name: "AII Ethiopia",
    color: "#1565C0",
    logo: (
      <svg viewBox="0 0 110 56" className="w-full h-full" aria-hidden>
        {/* "AII" bold wordmark */}
        <text
          x="4" y="46"
          fontSize="48" fontWeight="900"
          fontFamily="Arial Black,Arial,sans-serif"
          fill="currentColor" letterSpacing="-2"
        >AII</text>
        {/* Neural-network accent dot above the two I's */}
        <circle cx="76" cy="6" r="5" fill="currentColor"/>
        <circle cx="92" cy="6" r="5" fill="currentColor" opacity=".55"/>
        <line x1="76" y1="6" x2="92" y2="6" stroke="currentColor" strokeWidth="1.5" opacity=".4"/>
      </svg>
    ),
  },

  // 4 ── Temar Lije ─────────────────────────────────────────────────────────
  {
    name: "Temar Lije",
    color: "#E65100",
    logo: (
      <svg viewBox="0 0 140 56" className="w-full h-full" aria-hidden>
        <text x="70" y="30" fontSize="20" fontWeight="800"
          fontFamily="Arial,sans-serif" textAnchor="middle"
          fill="currentColor" letterSpacing="-0.5">TemarLije</text>
        <text x="70" y="48" fontSize="13" fontWeight="500"
          fontFamily="Arial,sans-serif" textAnchor="middle"
          fill="currentColor" opacity=".7">ተማር ልጄ</text>
      </svg>
    ),
  },

  // 5 ── Numark ──────────────────────────────────────────────────────────────
  {
    name: "Numark",
    color: "#1B5E20",
    logo: (
      <svg viewBox="0 0 128 42" className="w-full h-full" aria-hidden>
        <text
          x="64" y="34"
          fontSize="30" fontWeight="900"
          fontFamily="Arial Black,Arial,sans-serif"
          textAnchor="middle" fill="currentColor" letterSpacing="3"
        >NUMARK</text>
        {/* Accent underline */}
        <rect x="20" y="38" width="88" height="2" rx="1" fill="currentColor" opacity=".4"/>
      </svg>
    ),
  },

  // 6 ── Zekre Semaetat ──────────────────────────────────────────────────────
  {
    name: "Zekre Semaetat",
    color: "#6A1B9A",
    logo: (
      <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
        {/* Geometric frame */}
        <rect x="4" y="4" width="56" height="56" rx="5"
          fill="none" stroke="currentColor" strokeWidth="2.5"/>
        {/* "ZS" monogram */}
        <text x="32" y="44" fontSize="28" fontWeight="900"
          fontFamily="Arial,sans-serif" textAnchor="middle"
          fill="currentColor">ZS</text>
        {/* Top accent dots */}
        <circle cx="20" cy="12" r="3" fill="currentColor" opacity=".6"/>
        <circle cx="44" cy="12" r="3" fill="currentColor" opacity=".6"/>
      </svg>
    ),
  },

  // 7 ── Neovend ─────────────────────────────────────────────────────────────
  {
    name: "Neovend",
    color: "#00838F",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://cdn.prod.website-files.com/688a26320b7ed61246f380ef/68920eb57de67d8f179ad328_Neovend%20logo.avif"
        alt="Neovend"
        className="w-full h-full object-contain"
      />
    ),
  },

  // 8 ── Buna Bello ──────────────────────────────────────────────────────────
  {
    name: "Buna Bello",
    color: "#5D4037",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://bunabello.com/wp-content/uploads/2025/02/We-Mean-Coffee1.png"
        alt="Buna Bello"
        className="w-full h-full object-contain"
      />
    ),
  },

  // 9 ── ERPNext / Frappe ────────────────────────────────────────────────────
  {
    name: "ERPNext",
    color: "#2490EF",
    logo: (
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
        {/* Frappe four-petal pinwheel */}
        <ellipse cx="50" cy="28" rx="14" ry="26" fill="currentColor"/>
        <ellipse cx="72" cy="50" rx="26" ry="14" fill="currentColor" opacity=".78"/>
        <ellipse cx="50" cy="72" rx="14" ry="26" fill="currentColor" opacity=".56"/>
        <ellipse cx="28" cy="50" rx="26" ry="14" fill="currentColor" opacity=".34"/>
        {/* Centre hub */}
        <circle cx="50" cy="50" r="10" fill="currentColor"/>
      </svg>
    ),
  },

  // 10 ── Neovend Ethiopia ───────────────────────────────────────────────────
  {
    name: "Neovend Ethiopia",
    color: "#00695C",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://cdn.prod.website-files.com/688a26320b7ed61246f380ef/68920eb57de67d8f179ad328_Neovend%20logo.avif"
        alt="Neovend Ethiopia"
        className="w-full h-full object-contain"
      />
    ),
  },
]

// ─── Single logo tile ──────────────────────────────────────────────────────
function LogoTile({ partner, floatDelay }: { partner: Partner; floatDelay: number }) {
  return (
    <div
      className="logo-float flex-shrink-0 group cursor-default"
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
        title={partner.name}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 340, damping: 18 }}
      >
        {/* radial glow — brand colour on hover */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at 50% 65%, ${partner.color}55, transparent 68%)`,
            filter: "blur(10px)",
          }}
        />

        {/* icon: grey + dim → brand colour on hover */}
        <motion.span
          className="block w-full h-full"
          initial={{ color: "#9ca3af", filter: "grayscale(1)", opacity: 0.42 }}
          whileHover={{ color: partner.color, filter: "grayscale(0)", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {partner.logo}
        </motion.span>
      </motion.div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────
export function Partnerships() {
  // Duplicate for seamless loop: when first set scrolls fully off, second set is already in place
  const track = [...partners, ...partners]

  return (
    <section className="relative py-20 sm:py-24 bg-background">
      <style>{STYLES}</style>

      {/* ── Heading block ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-center px-4 mb-12"
      >
        <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-muted-foreground/55 mb-2.5">
          Trusted by
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground/85">
          The platforms and partners we build with
        </h2>

        {/* short accent line — draws outward from centre */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 mx-auto h-px w-14 origin-center rounded-full
                     bg-gradient-to-r from-neon-blue/60 via-light-blue/80 to-forest-green/60"
        />
      </motion.div>

      {/* ── Marquee strip — constrained to centered column ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.18 }}
        className="mx-auto max-w-3xl px-0"
      >
        {/*
         * overflow-hidden + mask-image live on this inner div so fades apply
         * only to the constrained box — not the full viewport width.
         */}
        <div
          className="marquee-root overflow-hidden py-5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex items-center gap-10 sm:gap-14 w-max">
            {track.map((p, i) => (
              <LogoTile
                key={`${p.name}-${i}`}
                partner={p}
                floatDelay={(i % partners.length) * 0.4}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Bottom rule ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/30 mt-12" />
      </div>
    </section>
  )
}
