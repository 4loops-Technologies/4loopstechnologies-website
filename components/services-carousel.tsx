"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code2, Cpu, Globe, Layers, Lightbulb, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent systems that automate processes, analyze data, and drive smarter decision-making.",
  },
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description: "Responsive, user-friendly applications that deliver exceptional experiences across all devices.",
  },
  {
    icon: Layers,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced performance and reliability.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Strategic consulting to modernize operations and unlock new opportunities for growth.",
  },
]

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const getCardPosition = (index: number) => {
    const distance = Math.abs(index - activeIndex)
    const minDistance = Math.min(distance, services.length - distance)

    if (minDistance === 0) {
      return "center"
    } else if (
      (index > activeIndex && distance <= services.length / 2) ||
      (index < activeIndex && distance > services.length / 2)
    ) {
      return "right"
    } else {
      return "left"
    }
  }

  const getCardStyles = (position: string) => {
    switch (position) {
      case "center":
        return {
          scale: 1.15,
          opacity: 1,
          filter: "blur(0px)",
          zIndex: 50,
          x: 0,
        }
      case "right":
        return {
          scale: 0.75,
          opacity: 0.35,
          filter: "blur(6px)",
          zIndex: 30,
          x: 320,
        }
      case "left":
        return {
          scale: 0.75,
          opacity: 0.35,
          filter: "blur(6px)",
          zIndex: 30,
          x: -320,
        }
      default:
        return {}
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden py-20"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Left fade blur overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/30 to-transparent z-40 pointer-events-none backdrop-blur-lg" />

      {/* Right fade blur overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/30 to-transparent z-40 pointer-events-none backdrop-blur-lg" />

      {/* Carousel container with increased vertical space */}
      <div className="flex items-center justify-center min-h-[550px] relative">
        {services.map((service, index) => {
          const position = getCardPosition(index)
          const styles = getCardStyles(position)

          return (
            <motion.div
              key={index}
              className="absolute w-80"
              animate={styles}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 18,
                mass: 0.8,
              }}
            >
              <motion.div
                className="group h-96 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/40 p-8 flex flex-col justify-between hover:border-neon-blue/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{
                  boxShadow:
                    position === "center"
                      ? "0 20px 60px rgba(0, 212, 255, 0.3)"
                      : "none",
                }}
              >
                {/* Gradient background on active */}
                {position === "center" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-forest-green/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-blue/20 to-forest-green/20 flex items-center justify-center mb-6 group-hover:from-neon-blue/30 group-hover:to-forest-green/30 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-neon-blue" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Center card highlight */}
                {position === "center" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-light-blue to-forest-green"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-16 relative z-50">
        {services.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setActiveIndex(index)
              setIsAutoplay(false)
            }}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-10 h-3 bg-gradient-to-r from-neon-blue to-forest-green"
                : "w-3 h-3 bg-border hover:bg-muted-foreground"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </div>
  )
}
