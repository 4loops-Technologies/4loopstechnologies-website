import Image from "next/image"
import dynamic from "next/dynamic"

const StatsSection = dynamic(
  () => import("@/components/stats-section").then((mod) => ({ default: mod.StatsSection })),
  { ssr: true }
)

const ServicesCarousel = dynamic(
  () => import("@/components/services-carousel").then((mod) => ({ default: mod.ServicesCarousel })),
  { loading: () => <div className="min-h-[550px]" /> }
)

export function About() {
  return (
    <section id="about" aria-label="About 4loops Technologies — software engineering company in Ethiopia" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-green/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              4loops Technologies is a trusted software engineering company dedicated to transforming
              businesses through innovative technology solutions. Since 2019, we have been at the
              forefront of digital transformation in Ethiopia and East Africa, helping organizations
              across industries achieve their goals with custom software, AI-powered systems, and
              enterprise-grade cloud infrastructure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of expert software engineers, designers, and technology consultants work
              collaboratively to deliver solutions that are not only technically excellent but also
              aligned with your business objectives. We combine modern technology stack proficiency
              with deep industry knowledge to create meaningful impact and drive sustainable growth.
            </p>
          </div>

          <div className="relative">
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
                  alt="4loops Technologies digital innovation — custom software development and AI solutions for enterprise"
                  width={1024}
                  height={957}
                  className="h-full w-full object-cover scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <StatsSection />

        <div id="solutions">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Comprehensive Technology Solutions for{" "}
              <span className="bg-gradient-to-r from-neon-blue to-forest-green bg-clip-text text-transparent">
                Every Business Challenge
              </span>
            </h2>
          </div>

          <ServicesCarousel />
        </div>
      </div>
    </section>
  )
}
