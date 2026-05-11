"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const footerLinks = {
  highlights: [
    { name: "Docs", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
  ],
  products: [
    { name: "AI Assistant Pro", href: "#" },
    { name: "Analytics Hub", href: "#" },
    { name: "DocuFlow", href: "#" },
    { name: "CommUnify", href: "#" },
  ],
  solutions: [
    { name: "Custom Software", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Web & Mobile Apps", href: "#" },
    { name: "Cybersecurity", href: "#" },
    { name: "Digital Transformation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="relative bg-background overflow-hidden">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation sections */}
        <div className="border-b border-border/20 py-16 lg:py-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-[0.15em] mb-8">
                Highlights
              </h3>
              <ul className="space-y-4">
                {footerLinks.highlights.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-[0.15em] mb-8">
                Products
              </h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-[0.15em] mb-8">
                Solutions
              </h3>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-[0.15em] mb-8">
                Company
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-[0.15em] mb-8">
                Legal
              </h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6">
          <p className="text-xs text-foreground/50 text-center">
            © {new Date().getFullYear()} 4loops Technologies. All rights reserved.
          </p>
        </div>
      </div>

      {/* Logo wordmark — tight spacing, Laravel-style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-full px-4 flex items-end justify-center leading-none">
          <Image
            src="/logo.png"
            alt="4loops Technologies"
            width={2400}
            height={800}
            className="w-full max-w-[1400px] h-auto object-contain opacity-95 drop-shadow-[0_0_60px_rgba(0,212,255,0.15)] block"
            priority
          />
        </div>
      </motion.div>
    </footer>
  )
}
