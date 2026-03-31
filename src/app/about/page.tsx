"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const [showPage, setShowPage] = useState(false)

  // Function to speak loader text smoothly
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      const voices = window.speechSynthesis.getVoices()
      // Pick a clear English voice
      const friendlyVoice =
        voices.find(v => v.lang.includes("en") && !v.name.toLowerCase().includes("child")) ||
        voices[0]

      utterance.voice = friendlyVoice
      utterance.rate = 0.9    // smooth, easy to understand
      utterance.pitch = 1     // normal friendly pitch
      utterance.volume = 1

      window.speechSynthesis.speak(utterance)
    }
  }

  useEffect(() => {
    // Speak immediately when loader appears
    const voiceTimeout = setTimeout(() => {
      speakText("Loading About Me")
    }, 100)

    // Show main page after 1.5s
    const pageTimer = setTimeout(() => setShowPage(true), 1500)

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
              Loading About Me… 💡
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen px-6 py-24 flex items-center justify-center bg-black text-white overflow-hidden">
          
          {/* Background blobs */}
          <motion.div
            className="absolute top-10 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl text-center"
          >
            <h1 className="text-5xl font-extrabold mb-6">
              About <span className="text-pink-400">Me</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m <span className="text-cyan-400 font-semibold">Usman Yousaf</span>, 
              a passionate developer focused on building modern web applications 
              and intelligent automation solutions. I enjoy creating fast, scalable 
              and visually appealing digital experiences that help businesses grow.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              My work combines clean code, smooth animations, and smart automation. 
              I continuously explore new technologies and AI-driven workflows to 
              deliver powerful and efficient solutions. My goal is to build products 
              that are not only functional but also beautifully designed.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <button className="px-8 py-3 rounded-full bg-linear-to-r from-pink-500 to-cyan-400 font-semibold text-black">
                🚀 Let&apos;s Work Together
              </button>
            </motion.div>
          </motion.div>
        </section>
      )}
    </>
  )
}