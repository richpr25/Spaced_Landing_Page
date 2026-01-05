import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">How to Use Spaced</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Master the art of spaced repetition with the FSRS algorithm and unlock your brain&apos;s full potential. Follow these guides to get
            the most out of your learning journey.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Video Tutorials</h2>
            <p className="text-xl text-white/70">Watch step-by-step guides to master Spaced</p>
          </div>

          {/* Getting Started Videos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-white/90">Getting Started</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    5:32
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Creating Your First Deck</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Learn how to organize your learning material into decks and set up your first study session.
                    We&apos;ll cover deck naming, organization strategies, and best practices.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    8:15
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Making Effective Flashcards</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Discover the art of creating flashcards that stick. Learn the one-concept-per-card rule, how to add
                    images and audio, and formatting tips for maximum retention.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    6:45
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Your First Study Session</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Walk through your first study session step-by-step. Learn how to rate your recall, understand the
                    review interface, and build a daily study habit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-white/90">Advanced Techniques</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    12:20
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Understanding FSRS</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Deep dive into the FSRS (Free Spaced Repetition Scheduler) algorithm. Learn about the forgetting curve, optimal intervals, and
                    how FSRS uses machine learning to adapt to your unique learning patterns for superior retention.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    9:40
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Customizing Your Settings</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Optimize Spaced for your learning style. Adjust interval multipliers, daily review limits, and
                    notification preferences to match your schedule and goals.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    11:05
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Importing & Exporting Decks</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Learn how to import pre-made decks, share your own creations, and backup your progress. Compatible
                    with popular formats and easy to sync across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subject-Specific Guides */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white/90">Subject-Specific Guides</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    14:30
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Language Learning with Spaced</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Master vocabulary, grammar, and pronunciation using spaced repetition. Includes tips for adding
                    audio, creating sentence cards, and tracking fluency progress.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    10:15
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Medical & Science Studies</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Tackle complex terminology, diagrams, and processes. Learn how to break down difficult concepts and
                    use visual aids effectively for STEM subjects.
                  </p>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    13:50
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">Professional Certifications</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Prepare for exams and certifications efficiently. Strategies for organizing study material, tracking
                    weak areas, and maintaining knowledge for the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🚀</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">1. Create Your First Deck</h3>
                    <p>
                      Start by organizing your learning material into decks. Think of decks as folders for different
                      subjects - one for Spanish vocabulary, another for biology terms, or whatever you&apos;re
                      studying.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">2. Add Your Cards</h3>
                    <p>
                      Create flashcards with questions on the front and answers on the back. Keep them focused - one
                      concept per card works best. You can add text, images, or even audio to make your cards more
                      memorable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">3. Start Studying</h3>
                    <p>
                      Review your cards daily. Spaced will automatically schedule reviews based on how well you know
                      each card. The better you know something, the less often you&apos;ll see it - but you&apos;ll
                      never forget it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🧠</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Understanding FSRS Algorithm</h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Spaced repetition is a learning technique that shows you information right before you&apos;re about
                    to forget it. This strengthens your memory and moves knowledge from short-term to long-term storage.
                    Spaced uses the FSRS (Free Spaced Repetition Scheduler) algorithm, which is more accurate and adaptive than traditional algorithms.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Why FSRS?</h3>
                    <p className="mb-3">
                      FSRS is a state-of-the-art spaced repetition algorithm that uses machine learning to optimize review schedules. Unlike older algorithms like SM-2 (used by Anki), FSRS:
                    </p>
                    <ul className="space-y-3 list-disc list-inside mb-4">
                      <li>
                        <strong>Learns from your performance:</strong> The algorithm analyzes your recall patterns and adjusts intervals accordingly
                      </li>
                      <li>
                        <strong>More accurate predictions:</strong> Better at predicting when you&apos;ll forget, reducing unnecessary reviews
                      </li>
                      <li>
                        <strong>Personalized optimization:</strong> Adapts to your unique learning speed and retention patterns
                      </li>
                      <li>
                        <strong>Open-source and research-backed:</strong> Based on extensive research and continuously improved by the community
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">How It Works</h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>
                        <strong>First Review:</strong> You see a new card and try to remember it. FSRS analyzes your response and schedules the next review based on your performance.
                      </li>
                      <li>
                        <strong>Building Memory:</strong> Each time you recall correctly, FSRS calculates the optimal next interval - which may be 3 days, 7 days, 2 weeks, or longer, depending on your learning patterns.
                      </li>
                      <li>
                        <strong>Adaptive Scheduling:</strong> If you forget, FSRS adjusts the interval and schedules more frequent reviews until the information sticks.
                      </li>
                      <li>
                        <strong>Long-term Retention:</strong> As you master cards, FSRS extends intervals intelligently. Well-known cards may only need review every few months to stay fresh.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
            <div className="flex items-start gap-6">
              <div className="text-5xl">💡</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Tips for Effective Learning</h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Keep Cards Simple</h3>
                    <p>
                      One concept per card. Instead of &quot;What are the three types of rocks and their
                      characteristics?&quot; create three separate cards. This makes recall easier and more effective.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Study Daily</h3>
                    <p>
                      Consistency beats intensity. 15 minutes every day is far more effective than cramming for hours
                      once a week. Make it a habit, like brushing your teeth.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Be Honest with Yourself</h3>
                    <p>
                      When rating your recall, be truthful. If you hesitated or weren&apos;t 100% confident, mark it as
                      &quot;Almost&quot; or &quot;Wrong.&quot; This ensures you&apos;ll review it again before it slips
                      away.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Use Images and Context</h3>
                    <p>
                      Your brain remembers visuals better than text alone. Add images, diagrams, or real-world examples
                      to your cards whenever possible.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Don&apos;t Skip Reviews</h3>
                    <p>
                      The FSRS algorithm works best when you follow the schedule. Skipping reviews breaks the spacing effect
                      and weakens your memory. Trust FSRS - it uses machine learning to determine the optimal time for each review based on your performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🎯</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Best Practices by Subject</h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                    <p>
                      Include pronunciation guides, example sentences, and images. Create separate cards for vocabulary,
                      grammar rules, and verb conjugations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Science & Math</h3>
                    <p>
                      Break complex formulas into steps. Include diagrams and real-world applications. For theorems,
                      create cards for both the statement and the proof.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">History & Geography</h3>
                    <p>
                      Use timelines, maps, and images. Connect events to create narratives. For dates, include context
                      about why the event matters.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Skills</h3>
                    <p>
                      Focus on practical application. Include code snippets, case studies, or scenarios. Review
                      regularly to keep skills sharp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="text-5xl">📊</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Tracking Your Progress</h2>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Spaced tracks your learning journey with detailed statistics. Monitor your retention rates, study
                    streaks, and mastery levels to stay motivated and identify areas that need more attention.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Key Metrics to Watch</h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>
                        <strong>Retention Rate:</strong> The percentage of cards you recall correctly. Aim for 85-90%
                        for optimal learning.
                      </li>
                      <li>
                        <strong>Study Streak:</strong> Consecutive days of reviewing. Building a streak creates a
                        powerful habit.
                      </li>
                      <li>
                        <strong>Mastery Level:</strong> How many cards have reached long-term memory (30+ day
                        intervals).
                      </li>
                      <li>
                        <strong>Review Load:</strong> How many cards are due today. This helps you plan your study
                        sessions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            Now that you know how to use Spaced effectively, it&apos;s time to put it into practice. Get started today
            and experience the power of the FSRS algorithm.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-black py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all"
          >
            Get Spaced Now
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60">&copy; 2025 Spaced. Built for learners who demand better.</p>
          <div className="flex gap-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/tutorials" className="text-white/60 hover:text-white transition-colors">
              Tutorials
            </Link>
            <Link href="/pricing" className="text-white/60 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
