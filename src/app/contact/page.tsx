"use client"

import { useState, useEffect, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "@/components/SectionTitle"
import Confetti from "react-confetti"

export default function ContactPage() {
  const [showPage, setShowPage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [triggerConfetti, setTriggerConfetti] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Text-to-Speech function
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      const voices = window.speechSynthesis.getVoices()
      const voice =
        voices.find(v => v.lang.includes("en") && !v.name.toLowerCase().includes("child")) ||
        voices[0]

      utterance.voice = voice
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      window.speechSynthesis.speak(utterance)
    }
  }

  // Loader with initial TTS
  useEffect(() => {
    // Speak "Get in Touch"
    const voiceTimeout = setTimeout(() => speakText("Get in Touch"), 100)

    // Show page after 2 seconds
    const timer = setTimeout(() => setShowPage(true), 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(voiceTimeout)
    }
  }, [])

  // Auto-hide status after 3.5s
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3500)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTriggerConfetti(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTriggerConfetti(true)
        speakText("Message sent successfully!") // Success speech
      } else {
        setStatus("error")
        speakText("Failed to send message. Please try again.") // Error speech
      }
    } catch {
      setStatus("error")
      speakText("Failed to send message. Please try again.") // Error speech
    }

    setLoading(false)
  }

  const handleWhatsApp = () => {
    const text =
      `Name: ${formData.name || "Visitor"}%0A` +
      `Email: ${formData.email || "-"}%0A` +
      `Message: ${formData.message || "Hello"}%0A%0A` +
      `Sent to: Usman Yousaf`

    speakText("Opening WhatsApp")
    window.open(`https://wa.me/923428875879?text=${text}`, "_blank")
  }

  return (
    <>
      {triggerConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={250}
          gravity={0.3}
          colors={["#EC4899", "#22D3EE", "#8B5CF6"]}
        />
      )}

      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50
              rounded-2xl px-6 py-3 font-semibold shadow-xl border text-white ${
                status === "success"
                  ? "bg-linear-to-r from-sky-400 to-cyan-500 border-cyan-600"
                  : "bg-linear-to-r from-red-500 to-red-600 border-red-700"
              }`}
          >
            {status === "success"
              ? "🎉 Message sent successfully!"
              : "⚠️ Failed to send message. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>

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
              Get in Touch… 💌
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
          <div className="absolute inset-0 bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

          <div className="relative z-10 mx-auto w-full max-w-2xl">
            <SectionTitle
              title="Get in Touch"
              subtitle="Have a project or idea in mind? Send me a message."
            />

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl relative"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-white outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-white outline-none"
                required
              />

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full rounded-xl bg-black/40 px-4 py-3 text-white outline-none"
                required
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-xl bg-linear-to-r from-pink-500 to-cyan-400 py-3 font-semibold text-black"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              <motion.button
                type="button"
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white"
              >
                💬 Chat on WhatsApp
              </motion.button>
            </motion.form>
          </div>
        </section>
      )}
    </>
  )
}