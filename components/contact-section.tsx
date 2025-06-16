"use client"

import { useState } from "react"
import { Send, Mail, MapPin } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const titleRef = useScrollAnimation()
  const formRef = useScrollAnimation()
  const contactInfoRef = useScrollAnimation()
  const socialRefs = [useStaggeredAnimation(0), useStaggeredAnimation(100), useStaggeredAnimation(200)]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      const mailtoLink = `mailto:saranyajothi.subram@gmail.com?subject=${encodeURIComponent(
        formData.subject,
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`

      window.location.href = mailtoLink

      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200 py-16 flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full animate-spin-very-slow"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-gray-600/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-5 w-16 h-16 border-2 border-white/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping-slow particle"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-gray-600/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>

        {/* Contact symbols */}
        <div className="absolute top-1/4 left-20 text-white/10 text-4xl animate-pulse-slow">@</div>
        <div className="absolute bottom-1/4 right-20 text-gray-600/10 text-3xl animate-bounce-slow">✉</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-8 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          Contact Me
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div
            ref={contactInfoRef}
            className="glass-card p-8 rounded-xl shadow-2xl border border-slate-600/30 hover:shadow-2xl transition-all duration-500 scroll-animate opacity-0 translate-x-8 group relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>

            <h2 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
              <Mail className="w-6 h-6 group-hover:animate-bounce text-gray-400" />
              Get In Touch
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                {
                  href: "https://www.linkedin.com/in/saranya-jothisubramanian-770b46246/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  ),
                  bg: "bg-gradient-to-r from-gray-600 to-gray-700",
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/Saranyajothis/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ),
                  bg: "bg-gradient-to-r from-gray-600 to-gray-700",
                  label: "GitHub",
                },
                {
                  href: "https://leetcode.com/u/Saranya_JS/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  ),
                  bg: "bg-gradient-to-r from-gray-600 to-gray-700",
                  label: "LeetCode",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  ref={socialRefs[index]}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 ${social.bg} flex items-center justify-center rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 group scroll-animate opacity-0 translate-y-4`}
                  aria-label={social.label}
                >
                  <div className="group-hover:animate-pulse">{social.icon}</div>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 glass rounded-lg hover:bg-slate-700/30 transition-colors border border-slate-600/20">
                <MapPin className="w-5 h-5 text-gray-400 animate-pulse-gentle" />
                <p className="text-slate-200">Boston, MA</p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently available for freelance work, full-time positions, and consulting opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="glass-card p-8 rounded-xl shadow-2xl border border-slate-600/30 hover:shadow-2xl transition-all duration-500 scroll-animate opacity-0 translate-x-8 animation-delay-200 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-400/10 to-transparent rounded-bl-full"></div>

            <h2 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
              <Send className="w-6 h-6 text-gray-400" />
              Send Me a Message
            </h2>

            {submitSuccess ? (
              <div className="glass p-4 rounded-lg mb-6 shadow-sm animate-fade-in-up border border-green-400/30">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "Your email" },
                { name: "subject", label: "Subject", type: "text", placeholder: "Subject of your message" },
              ].map((field, index) => (
                <div key={field.name} className="group">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-slate-200 mb-2 group-focus-within:text-gray-400 transition-colors"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 glass border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent transition-all duration-300 hover:border-gray-400/50 text-slate-200 placeholder-slate-400 ${
                      errors[field.name] ? "border-red-500 animate-shake" : ""
                    }`}
                    placeholder={field.placeholder}
                  />
                  {errors[field.name] && (
                    <p className="mt-2 text-sm text-red-400 animate-fade-in-up">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-200 mb-2 group-focus-within:text-gray-400 transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 glass border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent transition-all duration-300 hover:border-gray-400/50 resize-none text-slate-200 placeholder-slate-400 ${
                    errors.message ? "border-red-500 animate-shake" : ""
                  }`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-2 text-sm text-red-400 animate-fade-in-up">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-3 disabled:opacity-70 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send
                  size={20}
                  className={`relative z-10 ${isSubmitting ? "animate-spin" : "group-hover:animate-bounce"}`
