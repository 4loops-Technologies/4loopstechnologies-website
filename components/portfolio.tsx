"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Financial Services",
    description: "A comprehensive financial management platform with real-time analytics and AI-powered insights.",
    image: "from-navy to-neon-blue",
  },
  {
    title: "HealthCare Portal",
    category: "Healthcare",
    description: "Patient management system with telemedicine integration and secure medical records.",
    image: "from-neon-blue to-teal",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail",
    description: "Scalable online marketplace with personalized recommendations and seamless checkout.",
    image: "from-teal to-forest-green",
  },
  {
    title: "Smart Logistics",
    category: "Transportation",
    description: "Fleet management and route optimization system powered by machine learning.",
    image: "from-forest-green to-light-green",
  },
  {
    title: "EdTech Learning",
    category: "Education",
    description: "Interactive learning management system with AI tutoring and progress tracking.",
    image: "from-light-green to-neon-blue",
  },
  {
    title: "Real Estate CRM",
    category: "Property",
    description: "Property management platform with virtual tours and automated lead nurturing.",
    image: "from-light-blue to-navy",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-neon-blue/30 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.image} opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/80">
                  <ExternalLink className="h-8 w-8 text-foreground" />
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-neon-blue">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
