"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "30+",
    label: "Happy Clients",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
