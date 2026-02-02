interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          {subtitle}
        </p>
      )}

      {/* Accent line */}
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-pink-500 to-cyan-400" />
    </div>
  )
}
