"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const categories = {
  Frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind", level: 92 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Prisma", level: 80 },
  ],
  "AI & Tools": [
    { name: "AI Automation", level: 87 },
    { name: "Git & GitHub", level: 83 },
    { name: "n8n", level: 75 },
  ],
}

export default function SkillsPage() {
  const [active, setActive] = useState("All")
  const [dark, setDark] = useState(true)
  const [typing, setTyping] = useState("")
  const [showPage, setShowPage] = useState(false)

  const allSkills =
    active === "All"
      ? Object.values(categories).flat()
      : categories[active as keyof typeof categories]

  // Typing effect for main page
  useEffect(() => {
    if (showPage) {
      let i = 0
      const text = "My Professional Skills"
      const interval = setInterval(() => {
        setTyping(text.slice(0, i))
        i++
        if (i > text.length) clearInterval(interval)
      }, 60)
      return () => clearInterval(interval)
    }
  }, [showPage])

  // Function to speak loader text smoothly
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

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
  }

  // Loader animation + TTS
  useEffect(() => {
    // Speak immediately when loader appears
    const voiceTimeout = setTimeout(() => {
      speakText("Loading my professional skills")
    }, 100)

    // Show main page after 2s
    const pageTimer = setTimeout(() => setShowPage(true), 2000)

    return () => {
      clearTimeout(voiceTimeout)
      clearTimeout(pageTimer)
    }
  }, [])

  // --- Main Render ---
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
              Loading my professional skills… ⚡
            </h2>
          </motion.div>
        </section>
      ) : (
        <section
          className={`min-h-screen px-6 py-24 transition ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } relative overflow-hidden`}
        >
          {/* Background gradients */}
          <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

          <div className="relative z-10 max-w-6xl mx-auto">

            {/* Dark/Light toggle */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDark(!dark)}
                className="px-4 py-2 rounded-lg border transition"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Typing Title */}
            <h1 className="text-4xl font-bold text-center mb-4">
              {typing}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-center text-green-400 mb-12">
              Technologies, AI automation tools, and frameworks I use to build modern apps.
            </p>

            {/* Experience counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="text-5xl font-bold text-cyan-400">1+</div>
              <p className="text-gray-400">Years Experience</p>
            </motion.div>

            {/* Category filter buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              {["All", ...Object.keys(categories)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full border transition ${
                    active === cat
                      ? "bg-cyan-500 text-black"
                      : "border-white/20 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition"
                >
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className="h-full bg-linear-to-r from-pink-500 to-cyan-500"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 font-semibold"
                  >
                    {skill.level}%
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}