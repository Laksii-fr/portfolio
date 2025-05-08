export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 py-6 mt-20">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Lakshay Sharma. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and ShadCN UI</p>
        </div>
      </div>
    </footer>
  )
}