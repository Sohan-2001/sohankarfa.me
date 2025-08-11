"use client"

import React, { useState, useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

// Spring physics parameters
const DAMPING = 0.9
const STIFFNESS = 0.1
const MASS = 0.5
const SCROLL_MULTIPLIER = 0.1

export function WobbleContainer({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})
  
  const velocity = useRef({ x: 0, y: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0 })
  const position = useRef({ x: 0, y: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 })
  const lastScrollY = useRef(0)
  const isVisible = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
      },
      { threshold: 0 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible.current) return

      const scrollY = window.scrollY
      const scrollDelta = scrollY - lastScrollY.current
      lastScrollY.current = scrollY
      
      const intensity = isMobile ? 0.5 : 1
      const force = Math.min(Math.max(scrollDelta * SCROLL_MULTIPLIER * intensity, -20), 20)
      
      velocity.current.y += force
      velocity.current.scaleY += force * 0.005
      velocity.current.skewX += force * 0.1
    }

    const animate = () => {
      // Calculate spring forces
      const forceX = -STIFFNESS * position.current.x
      const forceY = -STIFFNESS * position.current.y
      const forceScaleX = -STIFFNESS * (position.current.scaleX - 1)
      const forceScaleY = -STIFFNESS * (position.current.scaleY - 1)
      const forceSkewX = -STIFFNESS * position.current.skewX
      const forceSkewY = -STIFFNESS * position.current.skewY

      // Update velocity
      velocity.current.x = (velocity.current.x + forceX / MASS) * DAMPING
      velocity.current.y = (velocity.current.y + forceY / MASS) * DAMPING
      velocity.current.scaleX = (velocity.current.scaleX + forceScaleX / MASS) * DAMPING
      velocity.current.scaleY = (velocity.current.scaleY + forceScaleY / MASS) * DAMPING
      velocity.current.skewX = (velocity.current.skewX + forceSkewX / MASS) * DAMPING
      velocity.current.skewY = (velocity.current.skewY + forceSkewY / MASS) * DAMPING
      
      // Update position
      position.current.x += velocity.current.x
      position.current.y += velocity.current.y
      position.current.scaleX += velocity.current.scaleX
      position.current.scaleY += velocity.current.scaleY
      position.current.skewX += velocity.current.skewX
      position.current.skewY += velocity.current.skewY
      
      // Set style for transform
      setStyle({
        transform: `translate(${position.current.x}px, ${position.current.y}px) scale(${position.current.scaleX}, ${position.current.scaleY}) skew(${position.current.skewX}deg, ${position.current.skewY}deg)`,
        willChange: 'transform'
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    const animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div ref={containerRef} style={style}>
      {children}
    </div>
  )
}
