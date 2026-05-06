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
    image: "/com.png",
    link: "https://v0-ecommerce-platform-build-five.vercel.app/",
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
  {
    title: "Games Collection",
    description: "A fun collection of interactive mini games with smooth UI and engaging experience.",
    image: "/5.png",
    link: "https://v0-gamehub-arcade.vercel.app/",
  },

  // ✅ NEW PROJECT (no link yet)
  {
    title: "construction company website",
    description:"A professional construction company website featuring modern UI, service highlights, project showcase, and fully responsive design.",
    image: "/image.png",
    link: "https://v0-construction-company-website-olive.vercel.app/",
  },
]

export default function ProjectsPage() {
  const [showPage, setShowPage] = useState(false)

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return

    const utterance = new SpeechSynthesisUtterance(text)
    const voices = window.speechSynthesis.getVoices()

    const friendlyVoice =
      voices.find(v => v.lang.includes("en") && !v.name.toLowerCase().includes("child")) ||
      voices[0]

    if (friendlyVoice) utterance.voice = friendlyVoice

    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 1

    window.speechSynthesis.cancel() // 🔥 fix overlapping
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    const voiceTimeout = setTimeout(() => {
      speakText("Here are some of my projects")
    }, 200)

    const pageTimer = setTimeout(() => setShowPage(true), 2000)

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
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-8xl"
            >
              🤖
            </motion.div>

            <h2 className="mt-6 text-3xl font-bold tracking-wide">
              Loading Projects...
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

          {/* Animated Blobs */}
          <motion.div
            className="absolute top-24 -left-32 h-96 w-96 rounded-full bg-purple-600/40 blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative z-10 mx-auto max-w-7xl">
            <SectionTitle
              title="🚀 Featured Projects"
              subtitle="A selection of my best projects with modern UI and performance."
            />

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}