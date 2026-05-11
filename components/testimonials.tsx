"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "4loops Technologies transformed our entire digital infrastructure. Their expertise in AI and cloud solutions helped us reduce operational costs by 40% while improving customer satisfaction.",
    author: "Sarah Johnson",
    role: "CTO, TechVentures Inc.",
    rating: 5,
  },
  {
    quote: "The team at 4loops delivered beyond our expectations. Their custom software solution streamlined our workflows and gave us real-time insights we never had before.",
    author: "Michael Chen",
    role: "CEO, GlobalRetail Co.",
    rating: 5,
  },
  {
    quote: "Working with 4loops has been a game-changer for our healthcare platform. Their attention to security and compliance, combined with innovative features, sets them apart.",
    author: "Dr. Emily Roberts",
    role: "Director, MedTech Solutions",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our{" "}
            <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="h-10 w-10 text-neon-blue/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-neon-blue text-neon-blue"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-forest-green flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
            &ldquo;The question isn&apos;t whether your business needs digital transformation — 
            it&apos;s whether your technology partner understands your vision.&rdquo;
          </blockquote>
          <p className="mt-4 text-neon-blue font-semibold">4loops does.</p>
        </motion.div>
      </div>
    </section>
  )
}
