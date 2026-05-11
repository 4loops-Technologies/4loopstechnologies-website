"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    value: 73,
    suffix: "%",
    title: "faster delivery",
    description: "of enterprises report accelerated project completion after adopting AI-powered solutions",
  },
  {
    value: 4,
    suffix: "×",
    title: "productivity boost",
    description: "more likely to exceed targets when using intelligent automation systems",
  },
  {
    value: 52,
    suffix: "%",
    title: "cost reduction",
    description: "in operational expenses through strategic digital transformation initiatives",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats — three equal columns in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/20 dark:divide-white/[0.06]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col gap-3 px-6 py-10 sm:py-8 lg:px-10 first:pl-0 last:pr-0"
            >
              {/* Large stat number */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:via-light-blue group-hover:to-forest-green group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Title */}
              <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                {stat.title}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-border/20 dark:border-white/[0.06]"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
            <span className="text-muted-foreground">The future belongs to those who </span>
            <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
              adapt faster
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
