import { Mail, Phone, MapPin, Zap, Code2 } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* College Info */}
          <ScrollReveal animation="reveal-left" delay={0}>
            <div>
              <a href="#home" className="group mb-1 flex items-center gap-2">
                <Zap className="h-5 w-5 text-neon-cyan transition-transform duration-300 group-hover:rotate-12" />
                <h3 className="text-lg font-bold tracking-wider text-foreground transition-all duration-300 group-hover:tracking-[0.2em]">
                  ELIT<span className="text-neon-cyan">ERA</span> {"'"}26
                </h3>
              </a>
              <p className="mb-4 text-xs text-neon-cyan font-medium tracking-wide">
                Department of Information Technology
              </p>
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                RVS College of Engineering and Technology
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal animation="reveal-up" delay={150}>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {[
                  { label: "Home", href: "#home" },
                  { label: "Events", href: "#events" },
                  { label: "Register", href: "#register" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="underline-slide inline-block w-fit text-sm text-muted-foreground transition-all duration-300 hover:text-neon-cyan hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="reveal-right" delay={300}>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <div className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 text-neon-cyan shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span>kaviyarasur013@gmail.com</span>
                </div>
                <div className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 text-neon-green shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span>+919790021108</span>
                </div>
                <div className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <MapPin className="h-4 w-4 text-neon-orange shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce-soft" />
                  <span>RVS CET,Kannampalayam,Sulur, Coimbatore - 641402</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="reveal-up" delay={400}>
          <div className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between w-full">
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {"© 2026 ELITERA. RVS College of Engineering and Technology. All rights reserved."}
              </p>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Department of Information Technology
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-neon-cyan/40 hover:bg-secondary/80 box-glow-cyan" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <Code2 className="h-3.5 w-3.5 text-neon-cyan" />
              <span className="text-xs text-muted-foreground">
                Designed & Developed by
              </span>
              <span className="text-xs font-semibold tracking-wide text-neon-cyan">
                Kaviyarasu R
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
