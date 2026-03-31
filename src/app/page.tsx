"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SocialLinks from "../components/SocialLinks"

export default function Home() {
  const [showPage, setShowPage] = useState(false)

  // Function to speak welcome message safely
  const speakWelcome = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      // Wait for voices to load
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices()
        const friendlyVoice =
          voices.find(v => v.lang.includes("en") && !v.name.toLowerCase().includes("child")) ||
          voices[0]
        utterance.voice = friendlyVoice
        utterance.rate = 0.9
        utterance.pitch = 1
        utterance.volume = 1
        window.speechSynthesis.speak(utterance)
      }

      // Check if voices already loaded
      if (window.speechSynthesis.getVoices().length > 0) {
        setVoice()
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          setVoice()
        }
      }
    }
  }

  useEffect(() => {
    // Speak welcome when component mounts (every page load)
    speakWelcome("Welcome to my Portfolio")

    // Show main page after 2.5 seconds
    const timer = setTimeout(() => setShowPage(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!showPage ? (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-9xl"
            >
              🤖
            </motion.div>
            <h2 className="mt-6 text-3xl font-bold">
              Welcome to My Portfolio🚀
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-black text-white">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff6ec7,#4facfe,#00f2fe)] animate-gradient-x" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

          {/* Animated blobs */}
          <motion.div
            className="absolute top-16 left-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 20, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-24 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], rotate: [0, -20, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Main Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-16 max-w-6xl items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m <span className="text-pink-400">Usman Yousaf</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Crafting <span className="text-cyan-400 font-semibold">AI-driven automation</span> and
                intelligent workflows with <span className="font-semibold">Next.js</span>,{" "}
                <span className="font-semibold">TypeScript</span>, & <span className="font-semibold">n8n</span>.
              </p>
              <p className="text-gray-400 max-w-xl">
                Transforming ideas into scalable, high-performance digital solutions for modern businesses.
              </p>

              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="/projects"
                  className="px-7 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg hover:scale-105"
                >
                  Explore Projects
                </a>
                <a
                  href="/contact"
                  className="px-7 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-cyan-400 blur-3xl opacity-70"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <Image
                  src="/1.jpg"
                  alt="Usman Yousaf"
                  width={380}
                  height={380}
                  className="relative rounded-full object-cover border-4 border-white/40 shadow-2xl hover:scale-105 transition-transform"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}
      <SocialLinks />
    </>
  )
}