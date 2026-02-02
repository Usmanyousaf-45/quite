export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

      {/* Blobs */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center md:text-left">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          About <span className="text-pink-400">Me</span>
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          I’m a developer focused on building{" "}
          <span className="font-semibold text-cyan-400">
            scalable, modern web applications
          </span>{" "}
          and intelligent automation systems that help businesses move faster.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          My stack includes{" "}
          <span className="font-semibold">
            Next.js, TypeScript, Tailwind CSS
          </span>{" "}
          and automation tools like{" "}
          <span className="font-semibold text-pink-400">n8n</span>.  
          I care deeply about clean code, performance, and user experience.
        </p>

        <div>
          <h3 className="mb-4 text-2xl font-semibold text-white">
            Skills & Tools
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-300 sm:grid-cols-3">
            <li>Next.js (App Router)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>n8n Automation</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
