import SectionTitle from "@/components/SectionTitle"
import ProjectCard from "../../components/ProjectCard"

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-tr from-pink-500/30 via-purple-500/30 to-cyan-500/30" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />

      {/* Blobs */}
      <div className="absolute top-24 -left-32 h-96 w-96 rounded-full bg-purple-600/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects showcasing design, performance, and automation."
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Store"
            description="A modern e-commerce platform with clean UI and smooth user experience."
            image="/3.png"
            link="https://e-commerece-two-theta.vercel.app/"
          />

          <ProjectCard
            title="Usman GPT"
            description="An AI-powered tool built to experiment with automation and smart workflows."
            image="/2.png"
            link="https://usman-gpt.vercel.app/"
          />
        </div>
      </div>
    </section>
  )
}
