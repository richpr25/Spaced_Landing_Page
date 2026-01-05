"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Pricing() {
  const handleDownload = () => {
    alert("Starting download...\n\nThe Spaced app will begin downloading shortly.")
    console.log("User initiated free download of Spaced app")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Start Your Learning Journey Today</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Stop forgetting what you study. Download Spaced for free and experience 3x faster mastery with the FSRS algorithm - the most advanced spaced repetition system available.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🧠</div>
              <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Download Spaced and start building lasting memories today. It&apos;s completely free, and there&apos;s nothing to sign up for.
              </p>
            </div>

            <div className="text-center py-8 mb-8">
              <p className="text-white/80 text-lg mb-6">
                Just download, install, and start learning. That&apos;s it.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="w-full bg-white text-black py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all mb-6 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">⬇️</span>
              <span>Download Spaced</span>
            </button>

            <div className="space-y-3 text-center">
              <p className="text-white/60 text-sm">
                Works on Windows, Mac, and Linux • Your data stays on your device
              </p>
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
                Get your personal desktop app that works completely offline. Free to download and use forever.
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">This is Just the Beginning</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              You&apos;re downloading the first version of Spaced. We&apos;re building something special, and this is just the foundation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-white/70 leading-relaxed">
                Future versions will include intelligent AI features to help generate study materials, answer questions, and personalize your learning experience.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-white/70 leading-relaxed">
                Get deeper insights into your learning patterns, retention rates, and performance metrics to optimize your study sessions.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">FSRS Algorithm</h3>
              <p className="text-white/70 leading-relaxed">
                Powered by FSRS (Free Spaced Repetition Scheduler), a state-of-the-art algorithm that uses machine learning to continuously optimize your review schedule based on your performance.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-white/60 text-lg">
              As we roll out these features, existing users will always have access to the latest improvements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5">
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
              <h4 className="text-lg font-semibold mb-3">What exactly do I get when I download?</h4>
              <p className="text-white/70 leading-relaxed">
                You get the complete Spaced learning app that works on Windows, Mac, and Linux. It&apos;s completely free
                - no subscriptions, no monthly fees, just pure learning power that adapts to your brain.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">Is it really free? What&apos;s the catch?</h4>
              <p className="text-white/70 leading-relaxed">
                Yes, it&apos;s completely free! No hidden fees, no subscriptions, no ads, no data harvesting. We believe
                in making powerful learning tools accessible to everyone. We&apos;re building this for learners, not investors.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">Will this actually help me remember things better?</h4>
              <p className="text-white/70 leading-relaxed">
                Absolutely. Spaced repetition is scientifically proven to be the most effective way to build long-term
                memory. Spaced uses the FSRS algorithm, which is more accurate than traditional algorithms and adapts to your unique learning patterns for optimal retention.
              </p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-lg font-semibold mb-3">Do I need to create an account?</h4>
              <p className="text-white/70 leading-relaxed">
                No account required! Just download and start using. All your data stays locally on your device for
                complete privacy and control.
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
