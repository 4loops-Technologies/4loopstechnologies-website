"use client"

import { motion } from "framer-motion"

const STYLES = `
  @keyframes partner-float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  .partner-float {
    animation: partner-float 3.8s ease-in-out infinite;
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
        <rect x="12" y="1"  width="10" height="10" fill="currentColor" opacity=".7" />
        <rect x="1"  y="12" width="10" height="10" fill="currentColor" opacity=".55" />
        <rect x="12" y="12" width="10" height="10" fill="currentColor" opacity=".85" />
      </svg>
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    logo: (
      <svg viewBox="0 0 80 50" className="w-full h-full" aria-hidden>
        <text x="0" y="36" fontSize="36" fontWeight="bold" fontFamily="Arial,sans-serif"
              fill="currentColor" letterSpacing="-1">aws</text>
        <path
          d="M64 42c-7 4.5-18 7-27 7a50 50 0 01-34-13c-.7-.6-.1-1.4.8-.9 10 6 22 9.5 35 9.5
             8.5 0 18-1.8 26.5-5.5 1.3-.6 2.4.8 1.1 1.7-1 .7-.7 1.4.6.7zm4-4.5
             c-1-1.2-6.4-.6-8.8-.3-.8.1-.9-.6-.2-1 4.4-3 11.5-2.2 12.4-1.2.9 1-.3
             8.2-4.3 11.6-.6.5-1.3.3-1-.4.9-2.3 2.9-7.5 1.9-8.7z"
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
        <path d="M40.3 17.7L44 14l.3-1.5A23.1 23.1 0 0014.9 43l1.3-.2 7.3-1.2.6-.6A13.7 13.7 0 0140 19.1l.3-1.4z"
              fill="currentColor" opacity=".4" />
        <path d="M49 13a23.1 23.1 0 00-5-3L40.3 17.7a13.7 13.7 0 015 17.1l7.4 9.1A23.1 23.1 0 0049 13z"
              fill="currentColor" />
        <path d="M16.3 54c5 3.8 11.4 5.6 17.8 4.9l9.4-9.5-.5-.8A13.7 13.7 0 0123.6 42l-.6.1-6.7 11.9z"
              fill="currentColor" opacity=".6" />
        <path d="M52.7 43.9L44 34.8a13.7 13.7 0 01-5 14.6l.2 1 9.3 9.5 1.3-.2a23.1 23.1 0 002.9-15.8z"
              fill="currentColor" opacity=".8" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    logo: (
      <svg viewBox="0 0 60 25" className="w-full h-full" aria-hidden>
        <path
          d="M6 9.8c0-1 .8-1.4 2.1-1.4 1.9 0 4.3.6 6.2 1.6V4.2C12.4 3.4 10.6 3 8.1 3 3.3 3 0 5.5 0
             10.1c0 7.3 10 6.1 10 9.3 0 1.1-1 1.6-2.4 1.6-2.1 0-4.7-.9-6.8-2.1v5.9C2.9 25.8 5.5 26
             8.1 26c5 0 8.4-2.5 8.4-7.1-.1-7.8-10-6.4-10-9.1zm16.1-6.4L16 4.8l-.1 15.7 6.2.1V3.4zm6.3
             5.2l-.4-5.2H22.3l-.1 21.7h6.2v-11c1.4-1.9 3.9-1.5 4.6-1.3v-9c-.8-.2-3.6-.6-4.6
             1.8zm9.5-5.2l-6.2 1.4.1 19.7 6.2-.1V3.4zm10.7 0c-6.1 0-10.7 4.7-10.7 11.4v.3c0 7.6 4.9
             11.3 11 11.3 3 0 5.3-.7 7-1.8v-5.5c-1.6 1.1-3.5 1.8-5.7 1.8-2 0-3.8-.8-4.1-3.4h10.6c.1-.5.1-1.1.1-1.6
             0-6.5-3.3-12.5-8.2-12.5zm-2.5 9.3c.3-2.5 1.7-3.4 2.5-3.4.7 0 2.1.9 2.2 3.4h-4.7z"
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
          d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8
             -1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3
             -5.5-1.3-5.5-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0
             016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5
             5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"
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
          d="M37.5 16.6a10.3 10.3 0 00-.9-8.5 10.5 10.5 0 00-11.3-5 10.3 10.3 0 00-7.8-3.5
             10.5 10.5 0 00-10 7.3 10.3 10.3 0 00-6.9 5 10.5 10.5 0 001.3 12.3 10.3 10.3 0 00.9
             8.5 10.5 10.5 0 0011.3 5 10.3 10.3 0 007.8 3.5 10.5 10.5 0 0010-7.3 10.3 10.3 0 006.9
             -5 10.5 10.5 0 00-1.3-12.3zM22.5 37a7.8 7.8 0 01-5-1.8l.2-.1 8.4-4.8a1.4 1.4 0
             00.7-1.2V17.6l3.5 2a.1.1 0 010 .1V28c0 5-4 9-9 9zm-19.4-8.3a7.8 7.8 0 01-.9-5.3l.2.1
             8.4 4.8a1.4 1.4 0 001.4 0l10.2-5.9v4.1a.1.1 0 010 .1l-8.5 4.9a9 9 0 01-10.8-2.8zm
             -2.5-20.8A7.8 7.8 0 015.7 4l8.4 4.9a1.4 1.4 0 001.4 0L25.7 3l.1.1v4a.1.1 0 010 .1
             L17.3 12a9 9 0 01-16.7-4zM33 24.5l-10.2-5.9-3.5 2V16.5l.1-.1 8.5-4.8a9 9 0 0113.1
             11.7l-7.9 1.2zm-1.2-8.4l-.2-.1-8.4-4.8a1.4 1.4 0 00-1.4 0l-10.2 5.9v-4a.1.1 0 010
             -.1l8.5-4.9a9 9 0 0111.7 4v3.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#888888",
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Meta",
    color: "#0082fb",
    logo: (
      <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden>
        <path
          d="M3.2 18.6c0 3.8 1 6.8 2.4 8.6.9 1.2 2 1.8 3 1.8 1.4 0 2.7-.9 4.2-3.5.9-1.7 2-4.2
             3.3-7.4l1.5-3.8c1-2.7 2.2-5.2 3.3-7 .9-1.4 1.9-2.5 3-3.2a5.8 5.8 0 013.1-.9c2.4 0
             4.6 1.4 6.4 4 1.7 2.5 2.6 5.8 2.6 9.3C36 23.5 34 28 30.6 30c-1.3.8-2.6 1.1-4.1
             1.1v-2.7c2.8-.4 4.5-3.2 4.5-8 0-3-.6-5.5-1.8-7.3-1-1.4-2-2.1-3.3-2.1-.8 0-1.6.3
             -2.4 1-1 .9-2 2.5-3.2 5.3l-1.3 3.2c-1.6 4-2.8 6.6-3.9 8.3-1.5 2.3-3 3.3-4.7 3.3
             -1.6 0-3.2-.9-4.7-2.7C.8 28 0 25.1 0 21.7c0-4 1-7.3 2.8-9.7 1.5-2 3.3-3 5.3-3 1.5
             0 2.7.4 3.8 1.3-2.4 1.4-4.1 4.4-5.3 8.5-.2.8-.4 1.9-.4 3.2-.7-1.3-1-3-.9-3.4zM14
             19.5c-1 2.6-2 4.7-2.8 6-1.1 1.8-2 2.7-3 2.7s-1.7-.4-2.4-1.3c-1-1.3-1.7-3.5-1.7-6.3
             0-3.1.7-5.7 2-7.3.6-.8 1.2-1.1 1.8-1.1 1.3 0 2.8 2.2 4.6 6.3l1.5 1z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

// ─── Stagger variants ──────────────────────────────────────────────────────
const grid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const tile = {
  hidden: { opacity: 0, y: 22, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Single logo tile ──────────────────────────────────────────────────────
function PartnerLogo({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.div
      variants={tile}
      className="group"
      // float animation: each logo at a different phase
      style={{
        animation: `partner-float 3.8s ease-in-out ${index * 0.38}s infinite`,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center w-[52px] h-[52px] sm:w-[64px] sm:h-[64px]"
        title={partner.name}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 340, damping: 17 }}
      >
        {/* per-brand radial glow on hover */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at 50% 65%, ${partner.color}50, transparent 70%)`,
            filter: "blur(12px)",
          }}
        />

        {/* logo — grayscale + dim by default, brand colour on hover */}
        <motion.span
          className="w-full h-full block"
          initial={{ color: "#9ca3af", filter: "grayscale(1)", opacity: 0.4 }}
          whileHover={{ color: partner.color, filter: "grayscale(0)", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {partner.logo}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────
export function Partnerships() {
  return (
    <section className="relative py-20 sm:py-24 bg-background">
      <style>{STYLES}</style>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-muted-foreground/55 mb-3">
            Trusted by
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground/85">
            The platforms and partners we build with
          </h2>

          {/* short centered accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 mx-auto h-px w-14 origin-center rounded-full bg-gradient-to-r from-neon-blue/60 via-light-blue/80 to-forest-green/60"
          />
        </motion.div>

        {/* ── Logo grid — wraps naturally on every breakpoint ── */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 sm:gap-x-14 sm:gap-y-10 lg:gap-x-16 lg:gap-y-12"
        >
          {partners.map((partner, i) => (
            <PartnerLogo key={partner.name} partner={partner} index={i} />
          ))}
        </motion.div>

        {/* ── Bottom rule ── */}
        <div className="border-t border-border/30 mt-14" />

      </div>
    </section>
  )
}
