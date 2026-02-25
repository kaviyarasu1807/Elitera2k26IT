"use client"

import { type ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "reveal-up" | "reveal-left" | "reveal-right" | "scale-pop" | "spin-in"
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  animation = "reveal-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold })

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  )
}
