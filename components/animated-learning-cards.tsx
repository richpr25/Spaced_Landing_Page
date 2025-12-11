"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function AnimatedLearningCards() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cards = [
    { subject: "Math", color: "#3b82f6", symbol: "∑", delay: 0 },
    { subject: "Science", color: "#10b981", symbol: "⚛", delay: 0.5 },
    { subject: "History", color: "#f59e0b", symbol: "📜", delay: 1 },
    { subject: "Language", color: "#8b5cf6", symbol: "A", delay: 1.5 },
    { subject: "Art", color: "#ec4899", symbol: "🎨", delay: 2 },
    { subject: "Code", color: "#06b6d4", symbol: "</>", delay: 2.5 },
  ]

  return (
    <div className="animated-cards-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`floating-card ${mounted ? "animate" : ""}`}
          style={
            {
              "--delay": `${card.delay}s`,
              "--color": card.color,
            } as React.CSSProperties
          }
        >
          <div className="card-front">
            <div className="card-symbol">{card.symbol}</div>
            <div className="card-subject">{card.subject}</div>
          </div>
          <div className="card-back">
            <div className="card-checkmark">✓</div>
          </div>
        </div>
      ))}

      {/* Neural network connections */}
      <svg className="neural-connections" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="connection-line"
          d="M 100 200 Q 250 100, 400 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="connection-line"
          d="M 400 200 Q 550 300, 700 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          style={{ animationDelay: "1s" }}
        />
        <path
          className="connection-line"
          d="M 200 150 Q 400 250, 600 150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated nodes */}
        <circle className="neural-node" cx="100" cy="200" r="4" fill="#3b82f6" />
        <circle className="neural-node" cx="400" cy="200" r="4" fill="#10b981" style={{ animationDelay: "0.5s" }} />
        <circle className="neural-node" cx="700" cy="200" r="4" fill="#f59e0b" style={{ animationDelay: "1s" }} />
      </svg>
    </div>
  )
}
