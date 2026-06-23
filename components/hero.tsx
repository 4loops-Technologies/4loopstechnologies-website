import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero — Custom Software Development and AI Solutions by 4loops Technologies"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          style={{ animationDelay: "150ms" }}
        >
          <span className="text-foreground">Custom Software Development</span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue via-light-blue to-forest-green bg-clip-text text-transparent">
            & AI Solutions for Enterprise
          </span>
        </h1>

        <p
          className="animate-fade-up mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-foreground"
          style={{ animationDelay: "200ms" }}
        >
          4loops Technologies
        </p>

        <p
          className="animate-fade-up mt-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{ animationDelay: "250ms" }}
        >
          As Ethiopia's #1 AI technology company, we build AI-powered software, cloud infrastructure, and enterprise systems that help businesses across East Africa scale with confidence.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="px-8 h-12 text-base bg-[#00e676] text-[#022010] font-semibold hover:bg-[#1aed88] shadow-[0_0_48px_rgba(0,230,118,0.42)]"
            >
              Start a Project
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-12 text-base border-border hover:bg-secondary"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
