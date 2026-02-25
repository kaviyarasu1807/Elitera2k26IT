"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { RippleButton } from "./ripple-button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
]

interface NavbarProps {
  onRegisterClick?: () => void
}

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-neon-cyan/10 shadow-[0_4px_30px_-10px_#00d4ff15]"
          : "bg-background/50 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with spark animation */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-neon-cyan bg-neon-cyan/10 transition-all duration-300 group-hover:bg-neon-cyan/20 group-hover:shadow-[0_0_15px_#00d4ff40]">
              <Zap className="h-4 w-4 text-neon-cyan transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            </div>
            <span className="font-sans text-lg font-bold tracking-wider text-foreground transition-all duration-300 group-hover:tracking-[0.2em]">
              ELIT<span className="text-neon-cyan">ERA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline-slide text-sm font-medium text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
            <RippleButton
              onClick={onRegisterClick}
              className="rounded-lg bg-neon-cyan px-5 py-2 text-sm font-bold text-background transition-all hover:shadow-[0_0_20px_#00d4ff40] hover:scale-105 cursor-pointer"
            >
              Register Now
            </RippleButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground transition-transform duration-300 active:scale-90"
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-neon-cyan hover:translate-x-2"
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
            <RippleButton
              onClick={() => {
                setIsOpen(false)
                onRegisterClick?.()
              }}
              className="mt-2 rounded-lg bg-neon-cyan px-4 py-3 text-center text-sm font-bold text-background cursor-pointer"
            >
              Register Now
            </RippleButton>
          </div>
        </div>
      </div>
    </nav>
  )
}
