"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

const projects = [
  {
    id: 1,
    title: "Hopeful Sign",
    description: "Provides people in war zone to find the nearby shelter, food and Hospitals",
    image: "/hopeful-sign-logo.png",
    link: "#",
    techStack: "React.js, Node.js, Mongo DB, CSS, HTML",
  },
  {
    id: 2,
    title: "Headcount Management Tool",
    description:
      "Helps projects managers and HR to recruit and manage the resource for the projects for each quarter accordingly.",
    image: "/apple-logo.png",
    link: "#",
    techStack: "Java 8, Spring Boot, REST API, Mongo DB",
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Custom CMS with MongoDB integration, achieving 45x performance improvement for ViacomCBS.",
    image: "/viacomcbs-logo.jpeg",
    link: "#",
    techStack: "Java 8, Spring Boot, REST API, Mongo DB, Grafana, Sumo Logic, AWS",
  },
  {
    id: 4,
    title: "British Airways Review Analysis",
    description:
      "Developed an interactive dashboard analyzing British Airways customer reviews, focusing on cabin staff service across time, aircraft type, country, and traveler demographics to uncover service trends and insights.",
    image: "/british-airways-dashboard.png",
    link: "#",
    techStack: "Tableau, SQL",
  },
  {
    id: 5,
    title: "King County House Sales Dashboard",
    description:
      "Designed a dynamic dashboard visualizing King County, Washington house sales to explore trends in pricing, property conditions, and location-based insights, enabling data-driven decision-making for real estate analysis.",
    image: "/king-county-dashboard.png",
    link: "#",
    techStack: "Tableau, SQL",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const titleRef = useScrollAnimation()
  const projectRefs = projects.map((_, index) => useStaggeredAnimation(index * 100))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5 w-20 h-20 border border-white/10 rounded-full animate-spin-very-slow"></div>
        <div className="absolute bottom-20 right-5 w-16 h-16 border border-gray-600/15 rounded-full animate-bounce-very-slow"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-white/10 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping-slow particle"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gray-600/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-16 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectRef = projectRefs[index]
            return (
              <div
                key={project.id}
                ref={projectRef}
                className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-600/30 transition-all duration-500 h-[300px] hover:shadow-2xl scroll-animate opacity-0 translate-y-8 hover:scale-105 hover:-translate-y-2 group glass-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={project.link} className="block h-full">
                  <div className="h-full relative">
                    {/* Fixed title at the top - hidden on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 p-4 glass-dark z-10 border-b border-slate-600/30 transition-all duration-500 ${
                        hoveredProject === project.id ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-center gradient-text">{project.title}</h3>
                    </div>

                    {/* Project image */}
                    <div className="absolute inset-0 flex items-center justify-center p-10 pt-20">
                      <div
                        className={`relative w-full h-full transition-all duration-700 ${
                          (project.id === 4 || project.id === 5) && hoveredProject === project.id
                            ? "scale-110 rotate-1"
                            : (project.id === 4 || project.id === 5)
                              ? "scale-90"
                              : hoveredProject === project.id
                                ? "scale-105 rotate-1"
                                : ""
                        }`}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Overlay that appears on hover for the entire tile */}
                    <div
                      className={`absolute inset-0 glass p-6 flex flex-col items-center transition-all duration-500 z-20 overflow-y-auto project-tile-content border border-slate-600/20 ${
                        hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {/* Content for the entire tile */}
                      <div className="text-center w-full pt-2">
                        <h3 className="text-xl font-semibold text-slate-100 mb-4 animate-fade-in-up gradient-text">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-xs mx-auto animate-fade-in-up animation-delay-100 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-4 glass-card p-4 rounded-lg inline-block shadow-lg animate-fade-in-up animation-delay-200 hover:scale-105 transition-transform border border-slate-600/30">
                          <p className="text-slate-200 text-sm">
                            <span className="font-semibold gradient-text">Tech Stack: </span>
                            {project.techStack}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Border effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                        hoveredProject === project.id ? "border-2 border-white/30" : ""
                      }`}
                    ></div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
