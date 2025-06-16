import { CheckSquare } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

export default function AboutSection() {
  const titleRef = useScrollAnimation()
  const contentRef = useScrollAnimation()
  const skillsRef = useScrollAnimation()
  const socialRef = useScrollAnimation()
  const skillRefs = [
    useStaggeredAnimation(0),
    useStaggeredAnimation(100),
    useStaggeredAnimation(200),
    useStaggeredAnimation(300),
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 py-16 flex items-center relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full animate-spin-very-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-gray-600/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-5 w-16 h-16 border-2 border-white/10 rotate-45 animate-spin-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gray-600/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-12 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          About <span className="gradient-text">Me</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </h1>

        <div ref={contentRef} className="text-center scroll-animate opacity-0 translate-y-8 animation-delay-200">
          <p className="text-lg mb-8 text-slate-300 leading-relaxed">
            This page was, is, and will always be a work in progress as I keep exploring new technologies, building
            exciting projects, and pushing my boundaries (at least for now). Go ahead, click around—who knows what
            you&apos;ll find! <span className="text-2xl animate-wiggle">😉</span>
          </p>

          <p className="text-lg mb-8 text-slate-300 leading-relaxed">
            I am a Software Engineer with a strong background in backend development, iOS apps, and system optimization.
            Currently, I&apos;m a graduate student in Software Engineering Systems at Northeastern University,
            fine-tuning my skills in Java, Python, Swift, and system architecture.
          </p>
        </div>

        <div
          ref={skillsRef}
          className="space-y-6 max-w-2xl mx-auto scroll-animate opacity-0 translate-y-8 animation-delay-400"
        >
          <h2 className="text-xl font-semibold text-center gradient-text mb-6">
            <span className="text-white mr-2 animate-bounce-gentle">✨</span> What I Do Best:
          </h2>

          <div className="space-y-4">
            {[
              "Backend Development – Designing robust architectures with Spring Boot, MongoDB, and REST APIs",
              "iOS Development – Crafting seamless user experiences using Swift & UIKit",
              "System Optimization – Boosted MongoDB performance by 45x at ViacomCBS",
              "Project Management – Leading Agile teams with Scrum, Jira, and Confluence",
            ].map((skill, index) => {
              return (
                <div
                  key={index}
                  ref={skillRefs[index]}
                  className="flex items-start gap-3 glass-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer scroll-animate opacity-0 translate-x-8 hover:scale-105 border border-slate-600/30"
                >
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full p-2 mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <CheckSquare className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    <span className="font-semibold gradient-text">{skill.split(" – ")[0]}</span>
                    {skill.includes(" – ") && ` – ${skill.split(" – ")[1]}`}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div ref={socialRef} className="mt-8 space-y-6 scroll-animate opacity-0 translate-y-8 animation-delay-800">
          <h2 className="text-xl font-semibold text-center gradient-text mb-6">
            <span className="text-gray-300 mr-2 animate-pulse-gentle">💡</span> Passion for Social Impact
          </h2>
          <div className="glass-card p-8 rounded-xl shadow-lg relative overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-slate-600/30">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>
            <p className="text-lg text-slate-200 relative z-10 leading-relaxed">
              Beyond tech, I&apos;m committed to making a difference through social work. I&apos;ve contributed to
              projects that improve healthcare accessibility, education, and welfare services. My HopefulSign project—a
              web app providing real-time hospital, pantry, and shelter details for civilians in war zones—reflects my
              dedication to using technology for good.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
