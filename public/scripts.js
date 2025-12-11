// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  initializeSmoothScrolling()
  initializeDemoCard()
  initializeAnimations()
  initializeStatsCounter()
})

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Demo card functionality
function initializeDemoCard() {
  const demoCard = document.getElementById("demoCard")
  const cardFront = document.getElementById("cardFront")
  const cardBack = document.getElementById("cardBack")
  const showAnswerSection = document.getElementById("showAnswerSection")
  const showAnswerBtn = document.getElementById("showAnswerBtn")
  const ratingButtons = document.getElementById("ratingButtons")
  const demoInstructions = document.getElementById("demoInstructions")

  let isFlipped = false
  let hasBeenRated = false

  if (showAnswerBtn) {
    showAnswerBtn.addEventListener("click", () => {
      if (!isFlipped) {
        // Show answer
        cardFront.style.display = "none"
        cardBack.style.display = "block"
        showAnswerSection.style.display = "none"
        ratingButtons.style.display = "flex"
        demoInstructions.textContent = "How well did you recall the answer?"
        isFlipped = true
      }
    })
  }

  // Legacy card click for backwards compatibility
  if (demoCard) {
    demoCard.addEventListener("click", (e) => {
      // Only trigger if clicking the card content area, not buttons
      if (
        !isFlipped &&
        !e.target.closest("button") &&
        !e.target.closest(".show-answer-section") &&
        !e.target.closest(".demo-buttons")
      ) {
        if (showAnswerBtn) showAnswerBtn.click()
      }
    })
  }

  // Reset demo card function
  function resetDemoCard() {
    if (cardFront && cardBack && showAnswerSection && ratingButtons && demoInstructions) {
      cardFront.style.display = "block"
      cardBack.style.display = "none"
      showAnswerSection.style.display = "flex"
      ratingButtons.style.display = "none"
      demoInstructions.textContent = "Click the card to see the answer, then rate your recall"
      isFlipped = false
      hasBeenRated = false
    }
  }

  // Demo button interactions
  document.querySelectorAll(".demo-button").forEach((button) => {
    button.addEventListener("click", function () {
      if (!isFlipped) return // Only work if card is flipped

      // Add a subtle animation feedback
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)

      // Show different feedback based on button type
      const feedback = this.classList.contains("correct")
        ? "Next review: 7 days ✓"
        : this.classList.contains("almost")
          ? "Next review: Tomorrow 📅"
          : "Starting over: Tomorrow 🔄"

      // Update instructions with feedback
      if (demoInstructions) {
        demoInstructions.textContent = feedback
      }
      hasBeenRated = true

      // Reset after a delay
      setTimeout(resetDemoCard, 3000)
    })
  })
}

// Initialize animations with Intersection Observer
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe feature cards for staggered animation
  document.querySelectorAll(".feature-card").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })

  // Observe stat items for animation
  document.querySelectorAll(".stat-item").forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = `all 0.8s ease ${index * 0.2}s`
    observer.observe(item)
  })
}

// Animated counter for statistics
function initializeStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number")

  const countUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const finalValue = target.textContent
          const isPercentage = finalValue.includes("%")
          const isMultiplier = finalValue.includes("x")

          let numericValue
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
}

// Counter animation function
function animateCounter(element, start, end, isPercentage, isMultiplier) {
  const duration = 2000 // 2 seconds
  const startTime = performance.now()

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = Math.floor(start + (end - start) * easeOutQuart)

    let displayValue = currentValue
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

// Additional utility functions

// Parallax effect for hero section
function initializeParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    if (hero) {
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    }
  })
}

// Add loading animation for images
function initializeImageLoading() {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })
}

// Mobile menu toggle (if needed in the future)
function initializeMobileMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  }
}

// Form validation (if forms are added later)
function initializeFormValidation() {
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      // Add form validation logic here
      console.log("Form submitted:", this)
    })
  })
}

// Initialize all additional features
document.addEventListener("DOMContentLoaded", () => {
  initializeParallax()
  initializeImageLoading()
  initializeMobileMenu()
  initializeFormValidation()
})

// Export functions for potential external use
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeSmoothScrolling,
    initializeDemoCard,
    initializeAnimations,
    initializeStatsCounter,
    animateCounter,
  }
}
