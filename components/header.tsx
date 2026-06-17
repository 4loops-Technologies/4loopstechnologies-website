"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About Us", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = !mounted || theme === "dark"

  const navStyle: React.CSSProperties = isDark
    ? {
        background: "rgba(10, 14, 25, 0.58)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 10px 35px rgba(0, 0, 0, 0.28)",
      }
    : {
        background: "transparent",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.04), 0 4px 24px rgba(0, 0, 0, 0.07)",
      }

  const mobileMenuStyle: React.CSSProperties = isDark
    ? {
        background: "rgba(10, 14, 25, 0.58)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 10px 35px rgba(0, 0, 0, 0.28)",
      }
    : {
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.07)",
      }

  const linkClass = isDark
    ? "text-[15px] font-[500] text-white/72 transition-all duration-[250ms] ease-out hover:text-white hover:-translate-y-[2px] hover:drop-shadow-lg"
    : "text-[15px] font-[500] text-foreground/65 transition-all duration-[250ms] ease-out hover:text-foreground hover:-translate-y-[2px]"

  const mobileLinkClass = isDark
    ? "px-4 py-3 text-[15px] font-[500] text-white/72 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-250"
    : "px-4 py-3 text-[15px] font-[500] text-foreground/65 hover:text-foreground hover:bg-black/5 rounded-lg transition-all duration-250"

  const iconColor = isDark ? "text-white/70" : "text-foreground/60"

  const toggleButtonStyle: React.CSSProperties = isDark
    ? { background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }
    : { background: "rgba(0, 0, 0, 0.04)", border: "1px solid rgba(0, 0, 0, 0.08)" }

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5">
      <nav
        className="w-[88%] h-[74px] flex items-center justify-between px-[30px] py-[8px] rounded-[20px] group"
        style={navStyle}
      >
        {/* Logo — always routes to landing page; ~2× visual scale inside fixed navbar height */}
        <Link
          href="/"
          className="relative flex flex-col items-start flex-shrink-0 group/logo leading-none py-0 -my-1"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1.5 -right-2.5 -top-0.5 -bottom-0.5 -z-10 rounded-2xl"
            style={{
              background: isDark
                ? "radial-gradient(ellipse 95% 90% at 38% 48%, rgba(45, 154, 122, 0.38) 0%, rgba(0, 212, 255, 0.09) 40%, transparent 70%)"
                : "radial-gradient(ellipse 95% 90% at 38% 48%, rgba(45, 154, 122, 0.22) 0%, rgba(0, 212, 255, 0.06) 40%, transparent 70%)",
              boxShadow: isDark
                ? "0 0 28px rgba(45, 154, 122, 0.22), 0 0 12px rgba(0, 212, 255, 0.06)"
                : "0 0 22px rgba(45, 154, 122, 0.14), 0 0 10px rgba(0, 212, 255, 0.04)",
              filter: "blur(14px)",
            }}
          />
          <div className="relative h-[50px] overflow-hidden flex items-center">
            <Image
              src="/logo.png"
              alt="4loops Technologies"
              width={312}
              height={156}
              className="h-[108px] w-auto max-w-none shrink-0 transition-all duration-300 group-hover/logo:scale-[1.03] dark:drop-shadow-[0_0_15px_rgba(0,212,255,0.3)] group-hover/logo:dark:drop-shadow-[0_0_25px_rgba(0,212,255,0.5)]"
              priority
            />
          </div>
          <span
            className={`text-[8px] font-semibold tracking-[0.22em] uppercase -mt-1 ml-0.5 transition-colors duration-300 ${
              isDark ? "text-white/35 group-hover/logo:text-white/55" : "text-foreground/40 group-hover/logo:text-foreground/60"
            }`}
          >
            Technologies
          </span>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center gap-[34px] absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={linkClass}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side - Theme Toggle & CTA Button */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-[400ms] ease-out ${isDark ? "hover:bg-white/10" : "hover:bg-black/8"}`}
              style={toggleButtonStyle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className={`h-5 w-5 ${iconColor} rotate-0 transition-all duration-[400ms]`} />
              ) : (
                <Moon className={`h-5 w-5 ${iconColor} rotate-0 transition-all duration-[400ms]`} />
              )}
            </button>
          )}

          {/* CTA Button */}
          <Link href="/contact" className="hidden sm:block">
            <Button className="h-[44px] px-[22px] rounded-full bg-[#00e676] text-[#022010] font-semibold border-0 shadow-[0_0_48px_rgba(0,230,118,0.62)] transition-all duration-[300ms] hover:shadow-[0_0_68px_rgba(0,230,118,0.85)] hover:scale-[1.05] hover:bg-[#1aed88]">
              Contact Us
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-all duration-250 ${isDark ? "text-white/70 hover:text-white hover:bg-white/10" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="lg:hidden fixed top-[94px] left-1/2 -translate-x-1/2 w-[88%] rounded-[20px] z-40"
          style={mobileMenuStyle}
        >
          <div className="px-[30px] py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2">
                <Button className="w-full h-[44px] rounded-full bg-[#00e676] text-[#022010] font-semibold border-0 shadow-[0_0_48px_rgba(0,230,118,0.62)] transition-all duration-300 hover:shadow-[0_0_68px_rgba(0,230,118,0.85)] hover:scale-[1.05] hover:bg-[#1aed88]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
