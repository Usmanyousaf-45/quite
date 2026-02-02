export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-white">Usman Yousaf</span>.  
        All rights reserved.
      </p>

      <p className="mt-2 text-xs text-gray-500">
        Built with Next.js, TypeScript & Tailwind CSS
      </p>
    </div>
  )
}
