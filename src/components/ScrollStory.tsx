"use client";

import { motion } from "framer-motion";

export default function ScrollStory() {
  return (
    <div className="space-y-32 py-32">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold">I Build Experiences</h2>
        <p className="text-gray-400 mt-4">
          Not just websites — I create interactive digital systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold">AI + Automation</h2>
        <p className="text-gray-400 mt-4">
          Smart workflows that replace manual work.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold">Scalable Systems</h2>
        <p className="text-gray-400 mt-4">
          Built for performance, not just design.
        </p>
      </motion.div>

    </div>
  );
}