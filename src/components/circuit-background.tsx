"use client"

import React, { useEffect, useMemo, useRef } from "react"

const random = (min: number, max: number) => Math.random() * (max - min) + min

export function CircuitBackground() {
  const Svg = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full opacity-30"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 0%, black 70%)",
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g stroke="hsl(var(--primary))" strokeWidth="1">
          {/* Main paths */}
          <path d="M 50 20 H 150 V 80 H 250 V 20" fill="none" />
          <path d="M 250 20 H 450" fill="none" />
          <path d="M 150 80 V 150 H 50 V 250 H 150 V 350 H 50" fill="none" />
          <path d="M 250 80 V 200 H 350 V 150" fill="none" />
          <path d="M 350 150 H 450 V 250 H 350 V 350 H 450" fill="none" />
          <path d="M 250 200 V 300 H 150" fill="none" />
          <path d="M 350 350 V 450 H 250 V 480" fill="none" />
          <path d="M 150 350 V 450 H 50" fill="none" />
          <path d="M 250 300 H 350" fill="none" />

          {/* Branching paths */}
          <path d="M 100 20 V -10" fill="none" />
          <path d="M 200 80 H 220" fill="none" />
          <path d="M 100 150 H 80" fill="none" />
          <path d="M 100 250 V 270" fill="none" />
          <path d="M 300 200 H 280" fill="none" />
          <path d="M 400 150 V 130" fill="none" />
          <path d="M 400 250 V 270" fill="none" />
          <path d="M 400 350 H 420" fill="none" />
          <path d="M 300 450 H 280" fill="none" />
          <path d="M 100 450 V 470" fill="none" />
          <path d="M 200 480 V 510" fill="none" />
        </g>
        <g
          className="circuit-dots"
          fill="hsl(var(--primary))"
          filter="url(#glow)"
        >
          {/* Nodes */}
          {[
            [50, 20],
            [150, 20],
            [250, 20],
            [450, 20],
            [150, 80],
            [250, 80],
            [50, 150],
            [150, 150],
            [350, 150],
            [450, 150],
            [50, 250],
            [150, 250],
            [250, 200],
            [350, 200],
            [250, 300],
            [350, 300],
            [50, 350],
            [150, 350],
            [350, 350],
            [450, 350],
            [50, 450],
            [150, 450],
            [250, 450],
            [350, 450],
            [250, 480],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" />
          ))}
        </g>
      </svg>
    ),
    []
  )

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const dots = containerRef.current.querySelectorAll(".circuit-dots circle")
    dots.forEach((dot) => {
      const animation = dot.animate(
        [
          { opacity: 0.2 },
          { opacity: 1 },
          { opacity: 0.2 },
        ],
        {
          duration: random(2000, 5000),
          iterations: Infinity,
          delay: random(0, 3000),
          easing: "ease-in-out",
        }
      )
      return () => animation.cancel()
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10">
      {Svg}
    </div>
  )
}
