"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  glitchClassName?: string
}

export function GlitchText({ text, className = "", glitchClassName }: GlitchTextProps) {
  return (
    <span className={`glitch-text ${className}`} data-text={text} aria-label={text}>
      {text}
      <span className="sr-only">{text}</span>
    </span>
  )
}

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}

export function TypewriterText({
  texts,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))

          if (displayText.length === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime)
            return
          }
        } else {
          setDisplayText(currentFullText.slice(0, displayText.length - 1))

          if (displayText.length === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={className} aria-label={texts[textIndex]}>
      {displayText}
      <span
        className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-0.5 align-middle"
        style={{ animation: "blink-cursor 0.8s step-end infinite" }}
        aria-hidden="true"
      />
    </span>
  )
}
