"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
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
    speakText("Welcome to my Portfolio");
    const t = setTimeout(() => setShowPage(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!showPage ? (
        <section className="min-h-screen flex items-center justify-center bg-black text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-8xl"
            >
              ⚡
            </motion.div>

            <h2 className="mt-6 text-lg tracking-widest text-gray-400">
              Welcome to my Portfolio
            </h2>
          </motion.div>
        </section>
      ) : (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">

          {/* Deep cinematic gradient layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a2e,#000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0f0c29,#000000)] opacity-70" />

          {/* Neon grid effect */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[
          size-[60px_60px]" />

          {/* Floating glow orbs */}
          <motion.div
            className="absolute w-125] h-125 bg-pink-500/20 blur-3xl rounded-full top-10 left-10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-150 h-150 bg-cyan-500/20 blur-3xl rounded-full bottom-10 right-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* Main Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-20 max-w-6xl items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                Usman <span className="text-cyan-400">Yousaf</span>
              </h1>

              <p className="text-lg text-gray-300">
                Building <span className="text-pink-400 font-semibold">AI Systems</span>,  
                Modern Web Apps & High-Performance Digital Products.
              </p>

              <p className="text-gray-500 max-w-xl">
                Specializing in Next.js, TypeScript, automation workflows and scalable UI engineering for modern businesses.
              </p>

              {/* CTA */}
              <div className="flex gap-4 pt-4">
                <a
                  href="/projects"
                  className="px-8 py-3 rounded-xl bg-linear-to-r from-pink-500 to-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  View Work
                </a>

                <a
                  href="/contact"
                  className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative">

                {/* glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 blur-3xl opacity-70"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />

                <Image
                  src="/1.jpg"
                  alt="Usman"
                  width={400}
                  height={400}
                  className="relative rounded-full border border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <SocialLinks />
    </>
  );
}