import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partnerships } from "@/components/partnerships"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" aria-label="Main content">
        <Hero />
        <Partnerships />
        <About />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
