"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO / BRAND */}
        <Link href="/" className="group">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
            <span className="text-white">Usman</span>{" "}
            <span className="bg-linear-to-r from-pink-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
              Portfolio
            </span>
          </h1>

          {/* subtle underline */}
          <div className="h-0.5 w-0 group-hover:w-full bg-linear-to-r from-pink-400 to-cyan-400 transition-all duration-500" />
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {/* active / hover indicator */}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-pink-400 to-cyan-400 transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
