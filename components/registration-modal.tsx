"use client"

import { useEffect, useCallback, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { RippleButton } from "./ripple-button"

const GOOGLE_FORM_URL = "https://forms.gle/fNe2QQvcKXJ5vBzo7"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setVisible(false)
    setTimeout(() => onClose(), 300)
  }, [onClose])

  const handleRegister = () => {
    // Open Google Form in a new tab and close the modal
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer")
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Registration form">
      <div
        className={`absolute inset-0 bg-background/80 backdrop-blur-xl transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div className="relative flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-[0_0_60px_#00d4ff10] transition-all duration-300 ${
            visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-neon-cyan/50 hover:text-neon-cyan hover:rotate-90 hover:scale-110 hover:bg-secondary"
            aria-label="Close registration"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="p-6 sm:p-8">
            <div className="mb-8 text-center pr-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-neon-green">Join Us</p>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"><span className="text-neon-green">Register</span> Now</h2>
              <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Secure your spot at TECHMARA 2026</p>
            </div>

            <div className="rounded-xl border border-border/50 bg-secondary/10 p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center py-8">
                <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2"><Sparkles className="h-5 w-5 text-neon-cyan" />Register for TECHMARA 2026</h3>
                <p className="mb-6 max-w-md text-center text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Click below to complete registration via Google Forms.</p>

                <div className="mt-4 flex items-center justify-center">
                  <RippleButton onClick={handleRegister} className="flex items-center gap-2 rounded-xl bg-neon-cyan px-8 py-3 text-sm font-bold text-background hover:shadow-[0_0_20px_#00d4ff40] transition-all">
                    Register Now
                  </RippleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
