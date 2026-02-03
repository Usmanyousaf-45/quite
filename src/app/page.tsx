import Image from "next/image"
import SocialLinks from "../components/SocialLinks"

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-black text-white">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff6ec7,#4facfe,#00f2fe)] animate-gradient-x" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

        {/* Blobs */}
        <div className="absolute top-16 left-10 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-bounce" />

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-16 max-w-6xl items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m <br />
              <span className="text-pink-400">Usman Yousaf</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300">
              I build <span className="text-cyan-400 font-semibold">AI Automation</span> solutions
              and intelligent workflows using
              <span className="font-semibold"> Next.js</span>,
              <span className="font-semibold"> TypeScript</span> &
              <span className="font-semibold"> n8n</span>.
            </p>

            <p className="text-gray-400 max-w-xl">
              My focus is on creating scalable, modern and automated systems
              that help businesses save time and grow faster.
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="/projects"
                className="px-7 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-cyan-400 blur-3xl opacity-70 animate-pulse" />

              <Image
                src="/1.jpg"   // image public folder me honi chahiye
                alt="Usman Yousaf"
                width={380}
                height={380}
                className="relative rounded-full object-cover border-4 border-white/40 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FIXED SOCIAL LINKS */}
      <SocialLinks />
    </>
  )
}
