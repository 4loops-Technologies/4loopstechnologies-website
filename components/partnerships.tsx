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
  {
    name: "Microsoft",
    color: "#00A4EF",
    logo: (
      <svg viewBox="0 0 23 23" className="w-full h-full" aria-hidden>
        <rect x="1"  y="1"  width="10" height="10" fill="currentColor" />
        <rect x="12" y="1"  width="10" height="10" fill="currentColor" opacity=".75" />
        <rect x="1"  y="12" width="10" height="10" fill="currentColor" opacity=".55" />
        <rect x="12" y="12" width="10" height="10" fill="currentColor" opacity=".9" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    logo: (
      <svg viewBox="0 0 80 50" className="w-full h-full" aria-hidden>
        <text
          x="0" y="36" fontSize="36" fontWeight="bold"
          fontFamily="Arial,sans-serif" fill="currentColor" letterSpacing="-1"
        >aws</text>
        <path
          d="M64 42c-7 4.5-18 7-27 7a50 50 0 01-34-13c-.7-.6-.1-1.4.8-.9 10 6 22 9.5 35 9.5
             8.5 0 18-1.8 26.5-5.5 1.3-.6 2.4.8 1.1 1.7zm4-4.5c-1-1.2-6.4-.6-8.8-.3-.8.1-.9-.6
             -.2-1 4.4-3 11.5-2.2 12.4-1.2.9 1-.3 8.2-4.3 11.6-.6.5-1.3.3-1-.4.9-2.3 2.9-7.5 1.9-8.7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
        <path d="M40.3 17.7 44 14l.3-1.5A23.1 23.1 0 0 0 14.9 43l1.3-.2 7.3-1.2.6-.6A13.7 13.7 0 0 1 40 19.1z"
              fill="currentColor" opacity=".45"/>
        <path d="M49 13a23.1 23.1 0 0 0-5-3L40.3 17.7a13.7 13.7 0 0 1 5 17.1l7.4 9.1A23.1 23.1 0 0 0 49 13z"
              fill="currentColor"/>
        <path d="M16.3 54c5 3.8 11.4 5.6 17.8 4.9l9.4-9.5-.5-.8A13.7 13.7 0 0 1 23.6 42l-.6.1z"
              fill="currentColor" opacity=".65"/>
        <path d="M52.7 43.9 44 34.8a13.7 13.7 0 0 1-5 14.6l.2 1 9.3 9.5 1.3-.2a23.1 23.1 0 0 0 2.9-15.8z"
              fill="currentColor" opacity=".85"/>
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    logo: (
      <svg viewBox="0 0 60 26" className="w-full h-full" aria-hidden>
        <path
          d="M6 9.8c0-1 .8-1.4 2.1-1.4 1.9 0 4.3.6 6.2 1.6V4.2C12.4 3.4 10.6 3 8.1 3 3.3 3 0 5.5 0 10.1c0
             7.3 10 6.1 10 9.3 0 1.1-1 1.6-2.4 1.6-2.1 0-4.7-.9-6.8-2.1v5.9C2.9 25.8 5.5 26 8.1 26c5 0 8.4-2.5
             8.4-7.1-.1-7.8-10-6.4-10-9.1zm16.1-6.4L16 4.8l-.1 15.7 6.2.1zm6.3 5.2-.4-5.2H22.3l-.1 21.7h6.2
             v-11c1.4-1.9 3.9-1.5 4.6-1.3v-9c-.8-.2-3.6-.6-4.6 1.8zm9.5-5.2-6.2 1.4.1 19.7 6.2-.1zm10.7 0
             c-6.1 0-10.7 4.7-10.7 11.4v.3c0 7.6 4.9 11.3 11 11.3 3 0 5.3-.7 7-1.8v-5.5c-1.6 1.1-3.5 1.8-5.7
             1.8-2 0-3.8-.8-4.1-3.4h10.6c.1-.5.1-1.1.1-1.6 0-6.5-3.3-12.5-8.2-12.5zm-2.5 9.3c.3-2.5 1.7-3.4
             2.5-3.4.7 0 2.1.9 2.2 3.4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#6e40c9",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
        <path
          d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7
             1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.4 1.2-3.2
             -.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8
             1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#10a37f",
    logo: (
      <svg viewBox="0 0 41 41" className="w-full h-full" aria-hidden>
        <path
          d="M37.5 16.6a10.3 10.3 0 0 0-.9-8.5 10.5 10.5 0 0 0-11.3-5 10.3 10.3 0 0 0-7.8-3.5 10.5 10.5 0 0 0-10
             7.3 10.3 10.3 0 0 0-6.9 5 10.5 10.5 0 0 0 1.3 12.3 10.3 10.3 0 0 0 .9 8.5 10.5 10.5 0 0 0 11.3 5
             10.3 10.3 0 0 0 7.8 3.5 10.5 10.5 0 0 0 10-7.3 10.3 10.3 0 0 0 6.9-5 10.5 10.5 0 0 0-1.3-12.3z
             M22.5 37a7.8 7.8 0 0 1-5-1.8l.2-.1 8.4-4.8a1.4 1.4 0 0 0 .7-1.2V17.6l3.5 2v10.4c0 5-4 9-9 9z
             m-19.4-8.3a7.8 7.8 0 0 1-.9-5.3l.2.1 8.4 4.8a1.4 1.4 0 0 0 1.4 0l10.2-5.9v4.1l-8.5 4.9a9 9 0 0 1-10.8-2.8z
             m-2.5-20.8A7.8 7.8 0 0 1 5.7 4l8.4 4.9a1.4 1.4 0 0 0 1.4 0L25.7 3v4l-8.4 4.9a9 9 0 0 1-16.7-4z
             M33 24.5l-10.2-5.9-3.5 2v-4.1l8.5-4.8a9 9 0 0 1 5.2 8.8zm-1.2-8.4-.2-.1-8.4-4.8a1.4 1.4 0 0 0-1.4
             0l-10.2 5.9v-4l8.5-4.9a9 9 0 0 1 11.7 3.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#888",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
        <path d="M24 22.525H0L12 1.475z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Meta",
    color: "#0082fb",
    logo: (
      <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden>
        <path
          d="M3.2 18.6c0 3.8 1 6.8 2.4 8.6.9 1.2 2 1.8 3 1.8 1.4 0 2.7-.9 4.2-3.5.9-1.7 2-4.2 3.3-7.4l1.5-3.8
             c1-2.7 2.2-5.2 3.3-7 .9-1.4 1.9-2.5 3-3.2a5.8 5.8 0 0 1 3.1-.9c2.4 0 4.6 1.4 6.4 4 1.7 2.5 2.6 5.8 2.6
             9.3C36 23.5 34 28 30.6 30c-1.3.8-2.6 1.1-4.1 1.1v-2.7c2.8-.4 4.5-3.2 4.5-8 0-3-.6-5.5-1.8-7.3-1-1.4
             -2-2.1-3.3-2.1-.8 0-1.6.3-2.4 1-1 .9-2 2.5-3.2 5.3l-1.3 3.2c-1.6 4-2.8 6.6-3.9 8.3-1.5 2.3-3 3.3-4.7
             3.3-1.6 0-3.2-.9-4.7-2.7C.8 28 0 25.1 0 21.7c0-4 1-7.3 2.8-9.7 1.5-2 3.3-3 5.3-3 1.5 0 2.7.4 3.8
             1.3-2.4 1.4-4.1 4.4-5.3 8.5l-.4 3.2c-.7-1.3-1-3-.9-3.4z
             M14 19.5c-1 2.6-2 4.7-2.8 6-1.1 1.8-2 2.7-3 2.7s-1.7-.4-2.4-1.3c-1-1.3-1.7-3.5-1.7-6.3 0-3.1.7-5.7
             2-7.3.6-.8 1.2-1.1 1.8-1.1 1.3 0 2.8 2.2 4.6 6.3z"
          fill="currentColor"
        />
      </svg>
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
