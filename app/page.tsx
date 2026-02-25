"use client"

import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { RegistrationModal } from "@/components/registration-modal"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false)

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <AnimatedBackground />
      <Navbar onRegisterClick={() => setShowRegistration(true)} />
      <HeroSection onRegisterClick={() => setShowRegistration(true)} />

      {/* Animated Divider */}
      <ScrollReveal animation="scale-pop" className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00d4ff]" />
        </div>
      </ScrollReveal>

      <EventsSection onRegisterClick={() => setShowRegistration(true)} />

      <Footer />

      {/* Registration Modal - only shows on button click */}
      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </main>
  )
}
