import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-500/25 via-purple-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

      {/* Neon Blobs */}
      <div className="absolute top-16 -left-24 h-96 w-96 rounded-full bg-pink-500/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400">
              Hey, I’m
            </span>
            <span className="block text-white">Usman Yousaf</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            I build <span className="text-pink-400 font-semibold">modern web applications</span> and
            design <span className="text-cyan-400 font-semibold">AI-powered automation systems</span>{" "}
            using <span className="font-semibold">Next.js, TypeScript</span> and{" "}
            <span className="font-semibold text-pink-400">n8n workflows</span> to help businesses
            save time, reduce manual work, and scale faster.
          </p>

          <p className="mt-4 max-w-xl text-base text-gray-400">
            My focus is clean UI, strong performance, and practical automation
            that actually solves real problems.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 to-cyan-400 blur-3xl opacity-70" />
            <Image
              src="/1.jpg"
              alt="Usman Yousaf"
              width={420}
              height={420}
              priority
              className="relative h-80 w-80 rounded-full object-cover border-4 border-white/30 shadow-2xl transition hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
