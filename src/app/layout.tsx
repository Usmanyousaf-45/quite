import "./globals.css"
import type { Metadata } from "next"
import Navbar from ".././components/Navbar"
import Footer from ".././components/Footer"

export const metadata: Metadata = {
  title: "Usman Yousaf — Portfolio",
  description:
    "Modern portfolio showcasing projects, automation workflows, and creative web experiences built with Next.js & TypeScript.",
  keywords: [
    "Usman Yousaf",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI Automation",
  ],
  authors: [{ name: "Usman Yousaf" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
          <Navbar />
        </header>

        {/* Main */}
        <main className="flex-1 w-full">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
