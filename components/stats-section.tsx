"use client"

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
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
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
        }
      },
      { rootMargin: "-100px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section aria-label="Industry statistics on AI and digital transformation impact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/20 dark:divide-white/[0.06]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 px-6 py-10 sm:py-8 lg:px-10 first:pl-0 last:pr-0"
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:via-light-blue group-hover:to-forest-green group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                {stat.title}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
