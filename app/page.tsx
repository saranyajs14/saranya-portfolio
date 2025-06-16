"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, ChevronDown } from "lucide-react"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import { useScrollAnimation, useParallax } from "@/components/scroll-animations"

export default function Home() {
  const [profession, setProfession] = useState("Backend Engineer")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const professions = ["Backend Engineer", "Social Worker"]
  const heroRef = useScrollAnimation()
  const parallaxRef = useParallax()

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % professions.length
      const fullText = professions[i]

      const updatedText = isDeleting
        ? fullText.substring(0, profession.length - 1)
        : fullText.substring(0, profession.length + 1)

      setProfession(updatedText)
      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }, typingSpeed)

    return () => clearTimeout(ticker)
  }, [profession, isDeleting, loopNum, typingSpeed, professions])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center relative overflow-hidden scroll-animate opacity-0 translate-y-8"
      >
        {/* Backend Engineering Background Graphics */}
        <div className="absolute inset-0 overflow-hidden" ref={parallaxRef}>
          {/* Server rack animations */}
          <div
            className="absolute w-4 h-4 bg-white/20 rounded-sm transition-all duration-1000 ease-out animate-server-pulse"
            style={{
              left: mousePosition.x * 0.02 + 20,
              top: mousePosition.y * 0.02 + 80,
            }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-blue-800/20 rounded-sm transition-all duration-700 ease-out animate-database-sync"
            style={{
              right: (window.innerWidth - mousePosition.x) * 0.03 + 80,
              top: mousePosition.y * 0.03 + 160,
            }}
          ></div>

          {/* Backend system elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-sm animate-api-flow"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-800/30 rounded-sm animate-circuit-flow"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-slate-600/20 rounded-sm animate-data-stream"></div>
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-white/25 rounded-sm animate-bounce-delayed"></div>
          <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-blue-800/20 rounded-sm animate-pulse-delayed"></div>
          <div className="absolute top-80 right-10 w-4 h-4 bg-slate-600/25 rounded-sm animate-ping-delayed"></div>

          {/* Backend architecture symbols */}
          <div className="absolute top-32 right-1/4 w-12 h-12 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-blue-800/30 rotate-12 animate-pulse-slow"></div>

          {/* Simplified code elements */}
          <div className="absolute bottom-1/4 right-5 text-blue-800/20 text-4xl font-mono animate-server-pulse">
            [DB]
          </div>
          <div className="absolute top-3/4 left-1/5 text-slate-400/20 text-3xl font-mono animate-pulse-delayed">
            &lt;/&gt;
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 space-y-6">
              <p className="text-xl mb-2 text-slate-300 animate-fade-in-up animation-delay-200">Hey there!</p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text relative animate-fade-in-up animation-delay-400">
                Saranya J S
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
              </h1>

              <h2 className="text-2xl md:text-3xl mb-6 text-slate-200 h-10 animate-fade-in-up animation-delay-600">
                <span className="gradient-text font-semibold">{profession}</span>
                <span className="animate-blink text-white">|</span>
              </h2>

              <div className="mb-8 animate-fade-in-up animation-delay-800">
                <p className="text-lg mb-4 text-slate-300 leading-relaxed">
                  <span className="inline-block mr-2 animate-bounce-gentle text-2xl">⚡</span>
                  Passionate about building scalable, high-performance applications, I bring over six years of
                  experience in Java, with expertise in Spring Boot, Node.js, MongoDB. Currently pursuing my
                  Master&apos;s in Software Engineering Systems at Northeastern University, I thrive on solving complex
                  problems and optimizing system efficiency.
                </p>
              </div>

              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden group animate-fade-in-up animation-delay-1000 hover:scale-105"
                download
              >
                <span className="relative z-10">Download Resume</span>
                <Download size={20} className="relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Right Column - Profile Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end relative animate-fade-in-left animation-delay-600">
              {/* Simplified decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-white/30 rounded-sm animate-server-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-800/40 rounded-sm animate-database-sync"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-slate-600/30 rotate-45 animate-circuit-flow"></div>

              <div className="gradient-border p-4 rounded-full shadow-2xl overflow-hidden w-96 h-96 relative hover:scale-105 transition-transform duration-500">
                <Image
                  src="/profile-image.jpg"
                  alt="Saranya J S"
                  width={800}
                  height={800}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-slate-300 hover:text-white transition-colors group"
          >
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce-slow group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  )
}
