"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "👤" },
    { name: "Projects", href: "/projects", icon: "💼" },
    { name: "Skills", href: "/skills", icon: "⚡" },
    { name: "Contact", href: "/contact", icon: "📩" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="text-white font-bold text-xl">
            Usman <span className="text-pink-400">Portfolio</span>
          </Link>

          {/* DESKTOP */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-pink-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* SLIDE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-white/10 backdrop-blur-2xl border-r border-white/10 z-50 p-6"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 120 }}
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) setOpen(false);
              }}
            >
              <h2 className="text-white text-xl font-bold mb-8">
                Navigation
              </h2>

              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 text-lg transition ${
                      pathname === link.href
                        ? "text-pink-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔥 BOTTOM MOBILE NAV */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-black/70 backdrop-blur-xl border-t border-white/10 flex justify-around py-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex flex-col items-center text-xs ${
              pathname === link.href
                ? "text-pink-400"
                : "text-gray-300"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}