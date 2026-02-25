"use client"

import { useState } from "react"
import {
  Code2,
  Bug,
  Globe,
  Cpu,
  Lightbulb,
  Presentation,
  Palette,
  Mic2,
  Gamepad2,
  Camera,
  Trophy,
  Clock,
  Users,
  IndianRupee,
} from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { RippleButton } from "./ripple-button"

type EventCategory = "all" | "technical" | "non-technical"

interface EventItem {
  id: string
  title: string
  category: "technical" | "non-technical"
  description: string
  icon: React.ElementType
  teamSize: string
  duration: string
  prize: string
  color: "cyan" | "green" | "orange"
}

const events: EventItem[] = [
 
  {
    id: "Hackathon",
    title: "Hackathon",
    category: "technical",
    description: "Find and fix hidden bugs in code snippets across multiple programming languages.",
    icon: Bug,
    teamSize: "1-4",
    duration: "3 Hours",
    prize: "",
    color: "cyan",
  },
  {
    id: "Paper-Presentation",
    title: "Paper Presentation",
    category: "technical",
    description: "Design and develop a responsive website on a given theme within the time limit.",
    icon: Globe,
    teamSize: "2-3",
    duration: "45 Minutes",
    prize: "",
    color: "cyan",
  },
  {
    id: "pixel-pulse",
    title: "Pixel Pulse",
    category: "technical",
    description: "Test your knowledge in computer science, latest technologies, and IT fundamentals.",
    icon: Cpu,
    teamSize: "2",
    duration: "30 Minutes",
    prize: "",
    color: "cyan",
  },
  {
    id: "Promt Studio",
    title: "Prompt Studio",
    category: "technical",
    description: "Present innovative tech solutions and project ideas to a panel of expert judges.",
    icon: Lightbulb,
    teamSize: "2",
    duration: "30 Minutes",
    prize: "",
    color: "cyan",
  },
  {
    id: "The-Hidden-Hack",
    title: "The Hidden Hack",
    category: "technical",
    description: "Present your research papers on trending topics in Information Technology.",
    icon: Presentation,
    teamSize: "1-2",
    duration: "25 Min",
    prize: "",
    color: "cyan",
  },
  {
    id: "Mind-Fetch",
    title: "Mind Fetch",
    category: "technical",
    description: "Showcase your creativity with poster design and digital art competition.",
    icon: Palette,
    teamSize: "1-2",
    duration: "30 mins",
    prize: "",
    color: "cyan",
  },
  {
    id: "IPL-Auction",
    title: "IPL Auction",
    category: "non-technical",
    description: "Speak on random topics for exactly one minute without hesitation or repetition.",
    icon: Mic2,
    teamSize: "2",
    duration: "1.5 Hours",
    prize: "",
    color: "green",
  },
  {
    id: "E-Sports",
    title: "E-Sports",
    category: "non-technical",
    description: "Solve clues and riddles to find hidden treasures across the campus.",
    icon: Gamepad2,
    teamSize: "3-4",
    duration: "1 Hours",
    prize: "",
    color: "green",
  },
  {
    id: "Dance",
    title: "Dance",
    category: "non-technical",
    description: "Showcase your dance skills in this competitive dance event.",
    icon: Users,
    teamSize: "Solo or Group",
    duration: "6 mins",
    prize: "",
    color: "green",
  },
  {
    id: "connections",
    title: "Connections",
    category: "non-technical",
    description: "A word-association game where you find the link between seemingly unrelated clues.",
    icon: Lightbulb,
    teamSize: "2",
    duration: "45 Min",
    prize: "",
    color: "green",
  },
  {
    id: "Video Creations",
    title: "Video Creations",
    category: "non-technical",
    description: "Capture the essence of the symposium through your lens in this photography contest.",
    icon: Camera,
    teamSize: "1",
    duration: "1 Hour",
    prize: "",
    color: "green",
  },
  {
    id: "Songs",
    title: "Songs",
    category: "non-technical",
    description: "Showcase your musical talents in this singing competition.",
    icon: Mic2,
    teamSize: "1",
    duration: "5 mins",
    prize: "",
    color: "green",
  },
]

const colorMap = {
  cyan: {
    border: "border-neon-cyan/30",
    hoverBorder: "hover:border-neon-cyan/60",
    bg: "bg-neon-cyan/5",
    iconBg: "bg-neon-cyan/10",
    iconColor: "text-neon-cyan",
    glow: "box-glow-cyan",
    badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  },
  green: {
    border: "border-neon-green/30",
    hoverBorder: "hover:border-neon-green/60",
    bg: "bg-neon-green/5",
    iconBg: "bg-neon-green/10",
    iconColor: "text-neon-green",
    glow: "box-glow-green",
    badge: "bg-neon-green/10 text-neon-green border-neon-green/20",
  },
  orange: {
    border: "border-neon-orange/30",
    hoverBorder: "hover:border-neon-orange/60",
    bg: "bg-neon-orange/5",
    iconBg: "bg-neon-orange/10",
    iconColor: "text-neon-orange",
    glow: "box-glow-orange",
    badge: "bg-neon-orange/10 text-neon-orange border-neon-orange/20",
  },
}

interface EventsSectionProps {
  onRegisterClick?: () => void
}

export function EventsSection({ onRegisterClick }: EventsSectionProps) {
  const [filter, setFilter] = useState<EventCategory>("all")

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.category === filter)

  const categories: { key: EventCategory; label: string }[] = [
    { key: "all", label: "All Events" },
    { key: "technical", label: "Technical" },
    { key: "non-technical", label: "Non-Technical" },
  ]

  return (
    <section id="events" className="relative z-10 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header with scroll reveal */}
        <ScrollReveal animation="reveal-up" className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
            Explore
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our <span className="text-neon-cyan">Events</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Compete, create, and conquer across a wide range of technical and non-technical events designed to challenge and inspire.
          </p>
        </ScrollReveal>

        {/* Filter Tabs with scale pop animation */}
        <ScrollReveal animation="scale-pop" delay={200} className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <RippleButton
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                filter === cat.key
                  ? "bg-neon-cyan text-background shadow-[0_0_20px_#00d4ff30]"
                  : "border border-border bg-card/40 text-muted-foreground hover:border-neon-cyan/40 hover:text-foreground"
              }`}
            >
              {cat.label}
            </RippleButton>
          ))}
        </ScrollReveal>

        {/* Events Grid with staggered reveal */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => {
            const colors = colorMap[event.color]
            const Icon = event.icon
            return (
              <ScrollReveal
                key={event.id}
                animation="reveal-up"
                delay={index * 100}
                threshold={0.05}
              >
                <div
                  className={`group relative rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.bg} bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover-lift card-neon-border scan-overlay`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${colors.badge}`}
                    >
                      {event.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    <div className="flex items-center gap-1.5">
                      <Users className={`h-3.5 w-3.5 ${colors.iconColor}`} />
                      <span>Team: {event.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className={`h-3.5 w-3.5 ${colors.iconColor}`} />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Trophy className={`h-3.5 w-3.5 ${colors.iconColor}`} />
                      <div className="flex items-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{event.prize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Register button that appears on hover */}
                  <div className="mt-4 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-12">
                    <RippleButton
                      onClick={onRegisterClick}
                      className={`block w-full rounded-lg py-2 text-center text-xs font-bold transition-all cursor-pointer ${
                        event.color === "cyan"
                          ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20"
                          : "bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green/20"
                      }`}
                    >
                      Register for this event
                    </RippleButton>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
