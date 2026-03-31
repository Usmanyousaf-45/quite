"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionTitle from "@/components/SectionTitle"
import ProjectCard from "../../components/ProjectCard"

type Project = {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "E-commerce Store",
    description: "Modern e-commerce platform with clean UI and smooth UX.",
    image: "/3.png",
    link: "https://e-commerece-two-theta.vercel.app/",
  },
  {
    title: "Usman GPT",
    description: "AI-powered automation tool for intelligent workflows.",
    image: "/2.png",
    link: "https://usman-gpt.vercel.app/",
  },
  {
    title: "Shop Billing App",
    description: "Professional shop billing system with invoices & item management.",
    image: "/4.png",
    link: "https://billing-psi-eight.vercel.app/",
  },
]

export default function ProjectsPage() {
  const [showPage, setShowPage] = useState(false)

  // Function to speak loader text smoothly
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      const voices = window.speechSynthesis.getVoices()
      const friendlyVoice =
        voices.find(v => v.lang.includes("en") && !v.name.toLowerCase().includes("child")) ||
        voices[0]

      utterance.voice = friendlyVoice
      utterance.rate = 0.9  // smooth and clear
      utterance.pitch = 1    // normal pitch
      utterance.volume = 1

      window.speechSynthesis.speak(utterance)
    }
  }

  useEffect(() => {
    // Speak immediately when loader appears
    const voiceTimeout = setTimeout(() => {
      speakText("Here are some of my projects")
    }, 100)

    // Show main page after 2.5s
    const pageTimer = setTimeout(() => setShowPage(true), 2500)

    return () => {
      clearTimeout(voiceTimeout)
      clearTimeout(pageTimer)
    }
  }, [])

  return (
    <>
      {!showPage ? (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-9xl"
            >
              🤖
            </motion.div>
            <h2 className="mt-6 text-3xl font-bold">
              Here are some of my projects 🛠️
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-tr from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

          {/* Animated Blobs */}
          <motion.div
            className="absolute top-24 -left-32 h-96 w-96 rounded-full bg-purple-600/40 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 mx-auto max-w-7xl">
            <SectionTitle
              title="Featured Projects"
              subtitle="A selection of projects showcasing design, performance, and automation excellence."
            />

            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}