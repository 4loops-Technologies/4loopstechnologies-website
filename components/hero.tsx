"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground border border-border">
            <Sparkles className="h-4 w-4 text-neon-blue" />
            Innovation Since 2019
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
        >
          <span className="text-foreground">Transform Your Business</span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
            with Cutting-Edge Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-foreground"
        >
          4loops Technologies
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-black dark:text-white"
        >
          Smart Solutions . Infinite Possibilities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <a href="#portfolio">
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-12 text-base border-border hover:bg-secondary"
            >
              View Our Work
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
