"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import AnimatedLearningCards from "@/components/animated-learning-cards"
import Navigation from "@/components/navigation"

export default function Home() {
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [demoInstructions, setDemoInstructions] = useState("Click the card to see the answer, then rate your recall")
  const statsRef = useRef<HTMLDivElement>(null)

  const handleShowAnswer = () => {
    setIsCardFlipped(true)
    setDemoInstructions("How well did you recall the answer?")
  }

  const handleRating = (rating: "correct" | "almost" | "wrong") => {
    const feedback =
      rating === "correct"
        ? "Next review: 7 days ✓"
        : rating === "almost"
          ? "Next review: Tomorrow 📅"
          : "Starting over: Tomorrow 🔄"

    setDemoInstructions(feedback)

    setTimeout(() => {
      setIsCardFlipped(false)
      setDemoInstructions("Click the card to see the answer, then rate your recall")
    }, 3000)
  }

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  useEffect(() => {
    // Stats counter animation
    const statNumbers = document.querySelectorAll(".stat-number")

    const countUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const finalValue = target.textContent || ""
            const isPercentage = finalValue.includes("%")
            const isMultiplier = finalValue.includes("x")

            let numericValue: number
            if (isPercentage) {
              numericValue = Number.parseInt(finalValue.replace("%", ""))
            } else if (isMultiplier) {
              numericValue = Number.parseInt(finalValue.replace("x", ""))
            } else {
              numericValue = Number.parseInt(finalValue)
            }

            animateCounter(target, 0, numericValue, isPercentage, isMultiplier)
            countUpObserver.unobserve(target)
          }
        })
      },
      { threshold: 0.5 },
    )

    statNumbers.forEach((stat) => {
      countUpObserver.observe(stat)
    })

    return () => {
      statNumbers.forEach((stat) => countUpObserver.unobserve(stat))
    }
  }, [])

  const animateCounter = (
    element: HTMLElement,
    start: number,
    end: number,
    isPercentage: boolean,
    isMultiplier: boolean,
  ) => {
    const duration = 2000
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(start + (end - start) * easeOutQuart)

      let displayValue = currentValue.toString()
      if (isPercentage) {
        displayValue = currentValue + "%"
      } else if (isMultiplier) {
        displayValue = currentValue + "x"
      }

      element.textContent = displayValue

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <h1>Spaced</h1>
          <p className="tagline">
            Master everything with the FSRS algorithm. The learning app built for your brain.
          </p>
          <a href="#features" className="cta-button">
            Discover How It Works
          </a>
          <Link href="/pricing" className="cta-button-primary">
            Get Spaced Now
          </Link>
        </div>
        <AnimatedLearningCards />
        <div className="scroll-indicator">
          <div style={{ color: "white", fontSize: "2rem" }}>↓</div>
        </div>
      </section>

      <section className="problem-solution">
        <div className="container">
          <h2>Tired of Generic Learning Apps?</h2>
          <div className="comparison">
            <div className="pain-points">
              <h3>The Problem with Quizlet & Anki</h3>
              <ul>
                <li>Overwhelming features</li>
                <li>Too Expensive</li>
                <li>Outdated algorithms (SM-2)</li>
                <li>Short Term Focus</li>
              </ul>
            </div>
            <div className="solution-points">
              <h3>The Spaced Solution</h3>
              <ul>
                <li>Clean, focused interface</li>
                <li>Affordable</li>
                <li>FSRS algorithm - state-of-the-art</li>
                <li>Long Term Recall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Make Remembering Easy</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>FSRS Algorithm</h3>
            <p>
              Powered by the Free Spaced Repetition Scheduler (FSRS) - a state-of-the-art algorithm that uses machine learning to optimize your review schedule. More accurate than traditional algorithms, FSRS adapts to your unique learning patterns for maximum retention.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>
              The FSRS algorithm learns from your performance and continuously optimizes review intervals. Whether you&apos;re memorizing art pieces, financial terms, or complex theorems, FSRS adapts to match how your brain best processes information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Distraction-Free Focus</h3>
            <p>
              No ads, no social features, no gamification gimmicks. Just you, your content, and proven learning science.
              Study with complete focus and privacy.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real Progress Tracking</h3>
            <p>
              See your actual retention rates, study streaks, and mastery progress. Know exactly which concepts need
              work and celebrate what you&apos;ve truly mastered.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Multiple Learning Modes</h3>
            <p>
              Text, images, audio support. Perfect for language learning, art history, geography, or any subject that
              benefits from visual and auditory memory cues.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Your Data, Your Control</h3>
            <p>
              Everything stays local with automatic backups. No accounts, no cloud dependency, no privacy concerns.
              Import and export your data anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>See It In Action</h2>
        <div className="demo-mockup">
          <div className="demo-content">
            <div className="demo-card" id="demoCard">
              <div className="card-bg-pattern"></div>
              <div className="card-bg-circle-1"></div>
              <div className="card-bg-circle-2"></div>

              <div className="card-header">
                <div className="card-badges">
                  <span className="badge badge-deck">Personal Finance</span>
                  <span className="badge badge-tag">Book-notes</span>
                  <span className="badge badge-tag">Concept</span>
                </div>
              </div>

              <div className="card-content">
                <div className={`demo-front ${isCardFlipped ? 'fade-out' : 'fade-in'}`} id="cardFront">
                  <div className="question-text">
                    What are the 5 obstacles to financial success according to Rich Dad Poor Dad?
                  </div>
                </div>
                <div className={`demo-back ${isCardFlipped ? 'fade-in' : 'fade-out'}`} id="cardBack">
                  <div className="answer-section">
                    <div className="answer-text">1. Fear 2. Cynicism 3. Laziness 4. Bad Habits 5. Arrogance</div>
                    <div className="answer-notes">
                      <p>
                        Remember: These psychological barriers often prevent people from taking financial risks and
                        building wealth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {!isCardFlipped ? (
                <div className="show-answer-section" id="showAnswerSection">
                  <button className="show-answer-btn" onClick={handleShowAnswer}>
                    <span className="btn-icon">👁️</span>
                    Show Answer
                  </button>
                  <button className="skip-btn">
                    <span className="btn-icon">⏭️</span>
                    Skip for now (S)
                  </button>
                </div>
              ) : (
                <div className="demo-buttons" id="ratingButtons">
                  <button className="demo-button wrong" onClick={() => handleRating("wrong")}>
                    <span className="btn-icon">❌</span>
                    Wrong (3)
                  </button>
                  <button className="demo-button almost" onClick={() => handleRating("almost")}>
                    <span className="btn-icon">⚠️</span>
                    Almost (2)
                  </button>
                  <button className="demo-button correct" onClick={() => handleRating("correct")}>
                    <span className="btn-icon">✅</span>
                    Correct (1)
                  </button>
                </div>
              )}
            </div>
            <p className="demo-instructions">
              <span id="demoInstructions">{demoInstructions}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="learning-stats" ref={statsRef}>
        <h2>Learning That Actually Works</h2>
        <p className="stats-subtitle">
          Stop wasting time with ineffective study methods. See the difference the FSRS algorithm makes.
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">⏱️</div>
            <div className="stat-number">60%</div>
            <div className="stat-label">Less Study Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📈</div>
            <div className="stat-number">3x</div>
            <div className="stat-label">Faster Mastery</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">90%</div>
            <div className="stat-label">Long-term Recall</div>
          </div>
        </div>
      </section>

      <section className="developer-section">
        <div className="container">
          <h2>Meet the Developer</h2>
          <div className="developer-content">
            <div className="developer-image">
              <img src="/images/developer-headshot.jpg" alt="Developer headshot" />
            </div>
            <div className="developer-bio">
              <h3>Built by a Student, For Students</h3>
              <p>
                Hi, I&apos;m the creator of Spaced. As a student frustrated with overcomplicated and expensive learning
                apps, I built Spaced to be the tool I wished existed. No unnecessary features, no subscriptions that
                break the bank—just the FSRS algorithm, the most advanced spaced repetition system available, that actually helps you remember what you learn.
              </p>
              <p>
                I believe learning should be accessible, effective, and distraction-free. That&apos;s why Spaced uses
                FSRS (Free Spaced Repetition Scheduler), a state-of-the-art algorithm based on machine learning that
                outperforms traditional methods. It adapts to your learning patterns and helps you retain information for the long term using proven cognitive science principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Learn Smarter?</h2>
          <p>Join thousands of learners who&apos;ve already discovered the power of the FSRS algorithm</p>
          <Link href="/pricing" className="cta-button-large">
            Start Learning Today
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Spaced. Built for learners who demand better.</p>
      </footer>
    </>
  )
}
