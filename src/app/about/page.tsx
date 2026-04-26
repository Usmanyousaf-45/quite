"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [showPage, setShowPage] = useState(false);

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;

    const run = () => {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();
      utterance.voice =
        voices.find(v => v.lang.includes("en")) || voices[0];

      utterance.rate = 0.92;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = run;
    } else {
      run();
    }
  };

  useEffect(() => {
    const t1 = setTimeout(() => {
      speakText("Welcome to About Section");
    }, 300);

    const t2 = setTimeout(() => setShowPage(true), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {!showPage ? (
        <section className="min-h-screen flex items-center justify-center bg-black text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-7xl"
            >
              ⚡
            </motion.div>

            <h2 className="mt-6 text-xl text-gray-400 tracking-wider">
              Welcome to About Section
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6 py-28">

          {/* Ambient Glow */}
          <motion.div
            className="absolute top-20 left-10 h-96 w-96 bg-pink-500/20 blur-3xl rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-20 right-10 h-120 w-120 bg-cyan-500/20 blur-3xl rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 max-w-6xl text-center"
          >

            {/* Name */}
            <h1 className="text-7xl font-extrabold tracking-tight">
              Usman <span className="text-cyan-400">Yousaf</span>
            </h1>

            {/* Role */}
            <p className="mt-5 text-gray-400 text-lg tracking-wide">
              Building Modern Web • AI Systems • Digital Experiences
            </p>

            {/* Divider */}
            <div className="my-12 h-px bg-white/10 w-1/2 mx-auto" />

            {/* Big Statement */}
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-4xl mx-auto">
              I design and build <span className="text-pink-400">high-performance web applications</span>  
              with a focus on speed, scalability, and clean user experience.
            </h2>

            {/* Description blocks */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-pink-400 font-semibold mb-2">⚡ Performance</h3>
                <p className="text-sm text-gray-400">
                  Optimized Next.js apps with smooth UI and fast loading.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-cyan-400 font-semibold mb-2">🤖 AI Systems</h3>
                <p className="text-sm text-gray-400">
                  Automation, bots and intelligent workflows.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-purple-400 font-semibold mb-2">🎨 Design</h3>
                <p className="text-sm text-gray-400">
                  Clean UI/UX with modern aesthetic principles.
                </p>
              </div>

            </div>

            {/* Skills line */}
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind", "AI", "Automation"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

          </motion.div>
        </section>
      )}
    </>
  );
}