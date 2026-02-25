"use client"

import { useCallback, useRef, type MouseEvent, type ReactNode } from "react"

interface RippleButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: "button" | "submit"
}

export function RippleButton({
  children,
  className = "",
  onClick,
  href,
  disabled,
  type = "button",
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const createRipple = useCallback(
    (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      const el = buttonRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      const ripple = document.createElement("span")
      ripple.className = "ripple-circle"
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`

      el.appendChild(ripple)
      ripple.addEventListener("animationend", () => ripple.remove())
    },
    []
  )

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      createRipple(e)
      onClick?.()
    },
    [createRipple, onClick]
  )

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`btn-ripple btn-magnetic ${className}`}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      className={`btn-ripple btn-magnetic ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
