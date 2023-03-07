import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full flex-none border-b border-slate-900/10 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 my-2">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-row items-center justify-center space-x-3">
              <p className="text-xl font-bold hover:text-neutral-500">Logo</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-6">
              <Link
                className="text-base text-neutral-500 hover:text-neutral-600"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-base text-neutral-500 hover:text-neutral-600"
                href="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
