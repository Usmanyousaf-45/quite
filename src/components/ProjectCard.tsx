"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <div className="mt-4">
          <a
            href={link || "#"}
            target="_blank"
            className="inline-block text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-shine" />
      </div>
    </motion.div>
  )
}