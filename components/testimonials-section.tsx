import { Quote } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

const testimonials = [
  {
    id: 1,
    content:
      "I would like to express my sincere appreciation for the commendable efforts of Saranya JS in successfully delivering the search module independently in Q3 2016. Their dedication, technical expertise, and problem-solving skills were instrumental in ensuring a seamless and efficient implementation. Their commitment to excellence and ability to navigate challenges with precision truly set a high standard. Thank you for your outstanding contribution to the project!",
    author: "Suresh Kumar A",
    company: "Standard Chartered GBS",
  },
  {
    id: 2,
    content:
      "I sincerely appreciate the exceptional efforts of Saranya JS in the successful implementation of the Java 8 Scheduled Executor Framework and REST API integration with MongoDB. Their deep technical expertise, problem-solving skills, and commitment to delivering high-quality solutions played a crucial role in the project's success. Their ability to optimize performance and ensure seamless integration has been truly commendable. Thank you for your dedication and outstanding contribution!",
    author: "Kailas",
    company: "Apple Inc",
  },
  {
    id: 3,
    content:
      "I sincerely appreciate Saranya JS for outstanding contributions to our Content Management System at ViacomCBS. Their leadership in integrating new functionalities and upgrading the MongoDB driver from 3.8 to 4.1 resulted in a 45x performance boost within four sprints, significantly improving system efficiency. Their expertise in Java, Spring, and performance tuning enhanced query creation, optimized MongoDB indices, and reduced backend latencies, leading to a 25% improvement in application performance. Collaborating with a global team of 15, they demonstrated exceptional problem-solving skills and technical acumen. Their dedication and innovation have made a lasting impact, and I truly appreciate their efforts.",
    author: "Viswanathan",
    company: "ViacomCBS",
  },
]

export default function TestimonialsSection() {
  const titleRef = useScrollAnimation()
  const testimonialRefs = testimonials.map((_, index) => useStaggeredAnimation(index * 200))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 via-slate-400 to-slate-300 py-16 flex items-center relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 border border-white/10 rounded-full animate-spin-very-slow"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 border border-gray-600/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-white/10 rotate-45 animate-spin-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gray-600/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>

        {/* Quote symbols */}
        <div className="absolute top-1/4 right-20 text-white/10 text-6xl font-serif animate-pulse-slow">"</div>
        <div className="absolute bottom-1/4 left-20 text-gray-600/10 text-6xl font-serif animate-bounce-slow">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-16 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          Testimonials
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={testimonialRefs[index]}
              className="glass-card rounded-xl p-8 shadow-2xl border border-slate-600/30 hover:shadow-2xl transition-all duration-500 scroll-animate opacity-0 translate-y-8 hover:scale-105 group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>

              {/* Quote icon */}
              <Quote className="h-10 w-10 gradient-text mb-6 group-hover:scale-110 transition-transform duration-300 text-gray-400" />

              {/* Content */}
              <p className="text-slate-200 mb-8 text-sm md:text-base leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author info */}
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold gradient-text text-lg">— {testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
