"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      {/* Logo */}
      <Link
        href="/"
        className="text-lg font-bold tracking-wide text-white"
      >
        Usman<span className="text-pink-400">.</span>
      </Link>

      {/* Links */}
      <ul className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition ${
                  active
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
