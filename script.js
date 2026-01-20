// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      const navHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = target.offsetTop - navHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
      const navbarToggler = document.querySelector(".navbar-toggler")
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const bsCollapse = new window.bootstrap.Collapse(document.querySelector("#navbarNav"), { toggle: false })
        bsCollapse.hide()
      }
    }
  })
})
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")
  const navHeight = document.querySelector(".navbar").offsetHeight

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - navHeight - 100) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const mailtoLink = `mailto:Chantrea2508@gmail.com?subject=New Message from ${encodeURIComponent(fullName)}&body=${encodeURIComponent(`From: ${fullName}\nEmail: ${email}\n\n${message}`)}`

    window.location.href = mailtoLink
    this.reset()
    alert("Your message has been sent successfully. Thank you!")
  })
}
const revealElements = () => {
  const elements = document.querySelectorAll(".service-card, .experience-item, .skill-item")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}
document.querySelectorAll(".service-card, .skill-item").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "all 0.6s ease"
})

window.addEventListener("scroll", revealElements)
window.addEventListener("load", revealElements)
const navbarToggler = document.querySelector(".navbar-toggler")
if (navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    this.classList.toggle("active")
  })
}
const themeToggle = document.getElementById("themeToggle")
const themeIcon = document.getElementById("themeIcon")
const html = document.documentElement
const currentTheme = localStorage.getItem("theme") || "dark"
html.setAttribute("data-theme", currentTheme)

function updateThemeIcon(theme) {
  if (theme === "light") {
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
  } else {
    themeIcon.classList.remove("fa-sun")
    themeIcon.classList.add("fa-moon")
  }
}

updateThemeIcon(currentTheme)

function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme)
}

console.log("Portfolio website loaded successfully!")
