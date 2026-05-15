"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ServicesCarousel } from "@/components/services-carousel"
import { StatsSection } from "@/components/stats-section"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              4loops Technologies is a forward-thinking software company dedicated to transforming 
              businesses through innovative technology solutions. Since 2019, we have been at the 
              forefront of digital transformation, helping organizations across industries achieve 
              their goals with cutting-edge software and AI-powered systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to 
              deliver solutions that are not only technically excellent but also aligned with 
              your business objectives. We believe in the power of technology to create meaningful 
              impact and drive sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[5%] -z-10 rounded-full bg-gradient-to-br from-neon-blue/22 via-light-blue/6 to-forest-green/28 blur-3xl"
              />
              <div
                className="h-full w-full"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 88% 86% at 50% 45%, #000 48%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 88% 86% at 50% 45%, #000 48%, transparent 100%)",
                }}
              >
                <Image
                  src="/about-digital-innovation.png"
                  alt="Glowing 4loops chip held between fingertips, representing digital innovation"
                  width={1024}
                  height={957}
                  className="h-full w-full object-cover scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Services Carousel */}
        <div id="solutions">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Comprehensive Solutions for{" "}
              <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
                Every Challenge
              </span>
            </h2>
          </motion.div>

          <ServicesCarousel />
        </div>
      </div>
    </section>
  )
}
