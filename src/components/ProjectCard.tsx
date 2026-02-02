import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>

        <span className="mt-4 inline-block text-sm font-medium text-pink-400 transition group-hover:text-cyan-400">
          View Project →
        </span>
      </div>
    </Link>
  )
}
