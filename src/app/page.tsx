export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

      {/* Floating Shapes */}
      <div className="absolute top-24 -left-24 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
          Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Building <span className="text-pink-500">Modern</span> &{" "}
          <span className="text-cyan-400">Scalable</span> Digital Experiences
        </h1>

        <p className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
          I design and develop high-quality web applications with clean UI,
          strong performance, and modern technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  )
}
