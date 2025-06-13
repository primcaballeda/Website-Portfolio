"use client"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

import Certifications from "./pages/Certifications"
import Navbar from "./components/NavBar/navbar"
import Footer from "./components/Footer/footer"
import Home from "./pages/AboutMe"
import Projects from "./pages/Projects"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = [homeRef.current, projectsRef.current, certificationsRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      certifications: certificationsRef
    }
  const targetRef = refs[sectionId]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (isLoading) {
    const waveText = "Princess Caballeda"
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="flex space-x-1 text-3xl font-bold">
          {waveText.split("").map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ 
                y: [0, -10, 0], 
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: idx * 0.07,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onSectionChange={scrollToSection} />

      <main>
        <section id="home" ref={homeRef}>
          <Home />
        </section>

        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>

        <section id="certifications" ref={certificationsRef}>
          <Certifications />
        </section>

      </main>

      <Footer onSectionChange={scrollToSection} />
    </div>
  )
}

export default App
