"use client"

import { useEffect, useState } from "react"
import { Calendar, MapPin, Users, Zap, ArrowDown } from "lucide-react"
import { TypewriterText } from "./glitch-text"
import { RippleButton } from "./ripple-button"

interface HeroSectionProps {
  onRegisterClick?: () => void
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const eventDate = new Date("2026-04-15T09:00:00")

    const update = () => {
      const now = new Date()
      const diff = eventDate.getTime() - now.getTime()

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge with pulse */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-2 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
          </span>
          <span className="text-xs font-medium tracking-wider text-neon-cyan uppercase">
            Department of Information Technology
          </span>
        </div>

        {/* Main title with glitch effect */}
        <h1
          className={`mb-2 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl transition-all duration-1000 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-glow-cyan text-neon-cyan">ELIT</span>
          <span className="text-glow-green text-neon-green">ERA</span>
        </h1>

        <p
          className={`mb-2 text-lg font-medium tracking-widest text-neon-orange sm:text-xl transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Zap className="inline h-4 w-4 mr-1 animate-bounce-soft" />
          {"'"}26
          <Zap className="inline h-4 w-4 ml-1 animate-bounce-soft" style={{ animationDelay: "300ms" }} />
        </p>

        {/* Typewriter subtitle */}
        <div
          className={`mb-4 h-8 flex items-center justify-center transition-all duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms", fontFamily: "var(--font-inter), sans-serif" }}
        >
          <TypewriterText
            texts={[
              "National Level Technical Symposium",
              "Code. Create. Conquer.",
              "12+ Exciting Events Await You",
              "Compete. Innovate. Win Prizes.",
            ]}
            className="text-base text-muted-foreground sm:text-lg"
            speed={60}
          />
        </div>

        <div
          className={`mb-8 flex flex-col items-center gap-1 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-sm font-semibold tracking-wide text-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            RVS College of Engineering and Technology
          </p>
          <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Coimbatore, Tamil Nadu
          </p>
        </div>

        {/* Info chips with staggered reveal */}
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {[
            { icon: Calendar, text: "April 03 and 04, 2026", color: "text-neon-cyan", delay: 900 },
            { icon: MapPin, text: "RVS CET, Coimbatore", color: "text-neon-green", delay: 1000 },
            { icon: Users, text: "500+ Participants", color: "text-neon-orange", delay: 1100 },
          ].map((item) => (
            <div
              key={item.text}
              className={`flex items-center gap-2 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Countdown Timer with flip-style animation */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "Days", value: countdown.days, delay: 1200 },
            { label: "Hours", value: countdown.hours, delay: 1300 },
            { label: "Minutes", value: countdown.minutes, delay: 1400 },
            { label: "Seconds", value: countdown.seconds, delay: 1500 },
          ].map((item) => (
            <div
              key={item.label}
              className={`group flex flex-col items-center rounded-xl border border-border bg-card/60 px-5 py-4 backdrop-blur-sm box-glow-cyan min-w-[80px] hover-lift card-neon-border transition-all duration-700 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <span className="text-3xl font-bold text-neon-cyan tabular-nums sm:text-4xl transition-transform duration-300 group-hover:scale-110">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons with ripple */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1600ms" }}
        >
          <RippleButton
            onClick={onRegisterClick}
            className="rounded-xl bg-neon-cyan px-8 py-3.5 text-sm font-bold text-background hover:shadow-[0_0_30px_#00d4ff50] hover:scale-105 transition-all cursor-pointer"
          >
            Register Now
          </RippleButton>
          <RippleButton
            href="#events"
            className="rounded-xl border border-border bg-card/40 px-8 py-3.5 text-sm font-bold text-foreground backdrop-blur-sm hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
          >
            Explore Events
          </RippleButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2000ms" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Scroll Down
        </span>
        <div className="flex flex-col items-center animate-bounce">
          <ArrowDown className="h-4 w-4 text-neon-cyan" />
        </div>
      </div>
    </section>
  )
}
