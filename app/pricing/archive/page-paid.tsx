"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Pricing() {
  const handlePurchase = () => {
    alert("Redirecting to secure checkout...\n\nThis will integrate with Stripe for payment processing.")
    console.log("User initiated purchase of Spaced app")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Start Your Learning Journey Today</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Stop forgetting what you study. Start your free trial and experience 3x faster mastery with the FSRS algorithm - the most advanced spaced repetition system available.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🧠</div>
              <h2 className="text-3xl font-bold mb-3">Spaced Learning App</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                The intelligent learning companion. Master anything with FSRS (Free Spaced Repetition Scheduler) - the most advanced spaced repetition algorithm available.
              </p>
            </div>

            <div className="text-center py-8 mb-8 border-y border-white/10">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl text-white/70">$</span>
                <span className="text-6xl font-bold">3.99</span>
                <span className="text-xl text-white/70">one-time</span>
              </div>
              <p className="text-white/60">Own it forever • No subscriptions</p>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-white text-black py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all mb-6 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              <div className="flex flex-col items-start">
                <span>Get Spaced Now</span>
                <span className="text-sm font-normal text-black/60">Instant download</span>
              </div>
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <span className="text-xl">🛡️</span>
                <span>Lifetime updates included</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <span className="text-xl">💳</span>
                <span>Secure payment with Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-semibold mb-3">Download & Own</h4>
              <p className="text-white/70 leading-relaxed">
                Get your personal desktop app that works completely offline.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-3">Privacy First</h4>
              <p className="text-white/70 leading-relaxed">
                Your data stays on your device. No tracking, no ads, no distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-4xl font-bold mb-6">Take Control of Your Knowledge</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            Stop letting important information slip away. With Spaced, every study session builds lasting mastery that
            stays with you for life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white/90">
              🎯 FSRS Algorithm
            </span>
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white/90">
              🔒 Your Data, Your Control
            </span>
            <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white/90">
              📈 Proven Results
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">What exactly do I get when I purchase?</h4>
              <p className="text-white/70 leading-relaxed">
                You get the complete Spaced learning app that works on Windows, Mac, and Linux. It&apos;s yours forever
                - no subscriptions, no monthly fees, just pure learning power that adapts to your brain.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">Why is this so much cheaper than other learning apps?</h4>
              <p className="text-white/70 leading-relaxed">
                Because we believe in simple, honest pricing. No subscriptions, no ads, no data harvesting. You pay once
                and own it forever. We&apos;re building this for learners, not investors.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">Will this actually help me remember things better?</h4>
              <p className="text-white/70 leading-relaxed">
                Absolutely. Spaced repetition is scientifically proven to be the most effective way to build long-term
                memory. Spaced uses the FSRS algorithm, which is more accurate than traditional algorithms (like SM-2 used by Anki) and adapts to your unique learning patterns for optimal retention.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">What if I&apos;m not happy with my purchase?</h4>
              <p className="text-white/70 leading-relaxed">
                We&apos;re confident you&apos;ll love it, but if you&apos;re not completely satisfied, well...it&apos;s
                only a couple bucks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60">&copy; 2025 Spaced. Built for learners who demand better.</p>
          <div className="flex gap-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-white/60 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
