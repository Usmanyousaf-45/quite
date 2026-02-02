import SectionTitle from "@/components/SectionTitle"

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

      {/* Neon Blobs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-pink-500/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project or idea in mind? Let’s build something great together."
        />

        <form className="mt-12 space-y-6 rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-pink-500 to-cyan-400 py-3 font-semibold text-black shadow-lg transition hover:scale-[1.02] active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
