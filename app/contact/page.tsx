"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

// ─── Types ────────────────────────────────────────────────────────────────

type FormData = { name: string; email: string; subject: string; message: string }
type FormErrors = Partial<Record<keyof FormData, string>>
type Status = "idle" | "loading" | "success" | "error"

// ─── Validation ───────────────────────────────────────────────────────────

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim())                        errors.name    = "Name is required."
  if (!data.email.trim())                        errors.email   = "Email is required."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                                 errors.email   = "Enter a valid email address."
  if (!data.subject.trim())                      errors.subject = "Subject is required."
  if (data.message.trim().length < 20)           errors.message = "Message must be at least 20 characters."
  return errors
}

// ─── Contact info cards ───────────────────────────────────────────────────

const contactItems = [
  {
    Icon: Mail,
    label: "Email us",
    value: "hello@4loopstechnologies.com",
    href: "mailto:hello@4loopstechnologies.com",
    accent: "#00d4ff",
  },
  {
    Icon: Phone,
    label: "Call us",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
    accent: "#4ade80",
  },
  {
    Icon: MapPin,
    label: "Our office",
    value: "Addis Ababa, Ethiopia",
    href: "#",
    accent: "#635BFF",
  },
]

// ─── Input component ──────────────────────────────────────────────────────

function Field({
  label, id, error, isDark,
  children,
}: {
  label: string
  id: string
  error?: string
  isDark: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: isDark ? "rgba(255,255,255,0.75)" : "rgba(15,23,42,0.80)" }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "#f87171" }}
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === "dark"

  const [form, setForm]     = useState<FormData>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>("idle")
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set())

  const inputBase: React.CSSProperties = {
    width: "100%",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.12)"}`,
    color: isDark ? "rgba(255,255,255,0.88)" : "#0f172a",
  }

  const inputFocusStyle = (field: keyof FormData) => ({
    ...inputBase,
    borderColor: errors[field] ? "#f87171" : "#00d4ff",
    boxShadow: errors[field]
      ? "0 0 0 3px rgba(248,113,113,0.15)"
      : "0 0 0 3px rgba(0,212,255,0.12)",
  })

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (touched.has(field)) {
      const next = { ...form, [field]: value }
      const errs = validate(next)
      setErrors((prev) => ({ ...prev, [field]: errs[field] }))
    }
  }

  function handleBlur(field: keyof FormData) {
    setTouched((prev) => new Set(prev).add(field))
    const errs = validate(form)
    setErrors((prev) => ({ ...prev, [field]: errs[field] }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched = new Set(Object.keys(form) as (keyof FormData)[])
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus("loading")
    try {
      // Replace with your real endpoint — e.g. Formspree, Resend, or your API route
      await new Promise((res) => setTimeout(res, 1800))
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
      setTouched(new Set())
      setErrors({})
    } catch {
      setStatus("error")
    }
  }

  // ── Derived colours ────────────────────────────────────────────────────
  const cardBg = isDark
    ? "linear-gradient(145deg, rgba(8,14,32,0.92) 0%, rgba(4,9,22,0.96) 100%)"
    : "#ffffff"
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)"
  const cardShadow = isDark ? "0 8px 40px rgba(0,0,0,0.45)" : "0 4px 24px rgba(0,0,0,0.08)"
  const mutedText  = isDark ? "rgba(255,255,255,0.45)" : "rgba(15,23,42,0.52)"

  return (
    <>
      <Header />

      <main
        className="min-h-screen bg-background pt-28 pb-20 sm:pt-32 sm:pb-28"
        style={isDark ? { background: "linear-gradient(to bottom, #050a18 0%, #070d1e 100%)" } : undefined}
      >
        {/* ── Background atmosphere (dark only) ── */}
        {isDark && (
          <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
            <div style={{ position:"absolute", top:"10%", left:"5%", width:500, height:500, opacity:.05, background:"radial-gradient(circle,#00d4ff,transparent 62%)", filter:"blur(90px)" }} />
            <div style={{ position:"absolute", bottom:"15%", right:"5%", width:450, height:450, opacity:.04, background:"radial-gradient(circle,#635BFF,transparent 62%)", filter:"blur(90px)" }} />
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Top heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 max-w-2xl"
          >
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "#00d4ff" }}
            >
              Contact Us
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight"
              style={{ color: isDark ? "#ffffff" : "#000000" }}
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
                great together
              </span>
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: mutedText }}
            >
              Have a project in mind? We&apos;d love to hear about it. Send us a message and
              we&apos;ll get back to you within one business day.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-[1fr_1.55fr] gap-10 lg:gap-14 items-start">

            {/* ── LEFT — info cards ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-5"
            >
              {contactItems.map(({ Icon, label, value, href, accent }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 rounded-2xl p-5 group"
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    boxShadow: cardShadow,
                    backdropFilter: "blur(14px)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-1"
                      style={{ color: accent }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: isDark ? "rgba(255,255,255,0.80)" : "#0f172a" }}
                    >
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Extra card — quick response promise */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="rounded-2xl p-5"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(45,154,122,0.06) 100%)"
                    : "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(45,154,122,0.08) 100%)",
                  border: "1px solid rgba(0,212,255,0.20)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4" style={{ color: "#00d4ff" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                  >
                    Fast response guaranteed
                  </span>
                </div>
                <p className="text-sm" style={{ color: mutedText }}>
                  We typically respond within a few hours. For urgent matters, reach out directly via email.
                </p>
              </motion.div>
            </motion.div>

            {/* ── RIGHT — form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="rounded-3xl p-7 sm:p-9"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                boxShadow: isDark
                  ? "0 12px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
                  : "0 8px 40px rgba(0,0,0,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Form heading */}
              <div className="mb-7">
                <h2
                  className="text-xl sm:text-2xl font-bold mb-1.5"
                  style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                >
                  Send us a message
                </h2>
                <p className="text-sm" style={{ color: mutedText }}>
                  Fill in the details below and we&apos;ll be in touch shortly.
                </p>
              </div>

              {/* Success state */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 10 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center text-center py-12 gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.30)" }}
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: "#4ade80" }} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ color: isDark ? "#ffffff" : "#0f172a" }}
                      >
                        Message sent!
                      </h3>
                      <p className="text-sm" style={{ color: mutedText }}>
                        We&apos;ll get back to you within one business day.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-sm font-semibold underline underline-offset-4"
                      style={{ color: "#00d4ff" }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" id="name" error={errors.name} isDark={isDark}>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        autoComplete="name"
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        style={inputBase}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle("name"))}
                        // eslint-disable-next-line react/jsx-no-bind
                        onBlurCapture={(e) => {
                          Object.assign(e.currentTarget.style, inputBase)
                          if (errors.name) e.currentTarget.style.borderColor = "#f87171"
                        }}
                      />
                    </Field>

                    <Field label="Email address" id="email" error={errors.email} isDark={isDark}>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        autoComplete="email"
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        style={inputBase}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle("email"))}
                        onBlurCapture={(e) => {
                          Object.assign(e.currentTarget.style, inputBase)
                          if (errors.email) e.currentTarget.style.borderColor = "#f87171"
                        }}
                      />
                    </Field>
                  </div>

                  {/* Subject */}
                  <Field label="Subject" id="subject" error={errors.subject} isDark={isDark}>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      onBlur={() => handleBlur("subject")}
                      style={inputBase}
                      onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle("subject"))}
                      onBlurCapture={(e) => {
                        Object.assign(e.currentTarget.style, inputBase)
                        if (errors.subject) e.currentTarget.style.borderColor = "#f87171"
                      }}
                    />
                  </Field>

                  {/* Message */}
                  <Field label="Message" id="message" error={errors.message} isDark={isDark}>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project, goals, or any questions you have…"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      style={{ ...inputBase, resize: "vertical", minHeight: "130px" }}
                      onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputFocusStyle("message"), resize: "vertical", minHeight: "130px" })}
                      onBlurCapture={(e) => {
                        Object.assign(e.currentTarget.style, { ...inputBase, resize: "vertical", minHeight: "130px" })
                        if (errors.message) e.currentTarget.style.borderColor = "#f87171"
                      }}
                    />
                  </Field>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm"
                        style={{
                          background: "rgba(248,113,113,0.10)",
                          border: "1px solid rgba(248,113,113,0.28)",
                          color: "#fca5a5",
                        }}
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try again or email us directly.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : undefined}
                    whileTap={status !== "loading" ? { scale: 0.98 } : undefined}
                    className="relative flex items-center justify-center gap-2.5 rounded-xl py-3.5 px-6 font-semibold text-sm overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff 0%, #00b8d9 50%, #2d9a7a 100%)",
                      color: "#000e1a",
                      boxShadow: status === "loading"
                        ? "none"
                        : "0 4px 24px rgba(0,212,255,0.40), 0 1px 0 rgba(255,255,255,0.15) inset",
                      opacity: status === "loading" ? 0.75 : 1,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      transition: "box-shadow 0.3s ease, opacity 0.3s ease",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: mutedText }}>
                    By submitting this form you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: "#00d4ff" }}>
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
