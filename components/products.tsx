"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, FileText, LineChart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Bot,
    name: "AI Assistant Pro",
    description: "Intelligent conversational AI that understands context and delivers human-like responses for customer support and internal operations.",
    features: ["24/7 Availability", "Multi-language Support", "Custom Training"],
    gradient: "from-neon-blue to-light-blue",
  },
  {
    icon: LineChart,
    name: "Analytics Hub",
    description: "Real-time business intelligence platform with powerful visualizations and predictive analytics for data-driven decisions.",
    features: ["Real-time Dashboards", "Custom Reports", "Predictive Insights"],
    gradient: "from-light-blue to-teal",
  },
  {
    icon: FileText,
    name: "DocuFlow",
    description: "End-to-end document management system with AI-powered processing, OCR, and workflow automation.",
    features: ["Smart OCR", "Workflow Automation", "Secure Storage"],
    gradient: "from-teal to-forest-green",
  },
  {
    icon: MessageSquare,
    name: "CommUnify",
    description: "Unified communication platform that brings together chat, video, and collaboration tools in one seamless experience.",
    features: ["Video Conferencing", "Team Chat", "File Sharing"],
    gradient: "from-forest-green to-light-green",
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-background text-muted-foreground rounded-full mb-4 border border-border">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered solutions designed for scale, built for performance, trusted by enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-neon-blue/30 transition-all duration-300"
            >
              {/* Product number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-muted/20">
                0{index + 1}
              </div>

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}
              >
                <product.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {product.name}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                className="group/btn p-0 h-auto font-medium text-neon-blue hover:text-neon-blue/80 hover:bg-transparent"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All products backed by 99.9% uptime and enterprise-grade security
        </motion.p>
      </div>
    </section>
  )
}
