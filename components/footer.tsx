"use client"

import { useState, useEffect } from "react"

function Footer() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show footer styling when near bottom of page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer
      className={`transition-all duration-500 ${
        scrolled
          ? "glass backdrop-blur-xl shadow-2xl border-t border-slate-700/50"
          : "glass-dark backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center py-8">
          <div className="text-sm text-slate-300">© 2024 Saranya JS. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
