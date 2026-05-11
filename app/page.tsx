import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partnerships } from "@/components/partnerships"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partnerships />
      <About />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  )
}
