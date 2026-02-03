"use client"

import { useEffect, useState } from "react"

export default function SocialLinks() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex gap-6 transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61578277601062"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:scale-110 transition drop-shadow-[0_0_10px_rgba(24,119,242,0.8)]"
      >
        <svg className="w-7 h-7 fill-[#1877F2]" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H16l-.4 3h-2.2v7A10 10 0 0022 12z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/usmanyousaf597/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:scale-110 transition drop-shadow-[0_0_10px_rgba(221,42,123,0.8)]"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f58529" />
              <stop offset="50%" stopColor="#dd2a7b" />
              <stop offset="100%" stopColor="#515bd4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#igGrad)"
            d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 10-2 0 1 1 0 002 0z"
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/usman-yousaf-733142378/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition drop-shadow-[0_0_10px_rgba(10,102,194,0.8)]"
      >
        <svg className="w-7 h-7 fill-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm1 6H3v12h2V9zm4 0H7v12h2v-6c0-3.3 4-3.6 4 0v6h2v-7c0-5.4-6-5.2-6-2.5V9z"/>
        </svg>
      </a>
    </div>
  )
}
