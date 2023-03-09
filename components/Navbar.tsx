"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="absolute  w-full">
      <nav className="mx-auto flex max-w-3xl my-4 items-center justify-between px-6 md:px-0">
        <div className="flex">
          <Link className="text-xl font-bold hover:text-neutral-500" href="/">
            Logo
          </Link> 
        </div>
        <div className="flex">
          <Link
            className={
              pathname == "/"
                ? "rounded-md py-2 px-3 text-sm font-bold text-neutral-500 transition duration-300"
                : "rounded-md py-2 px-3 text-sm text-neutral-400  transition duration-300  hover:text-neutral-50"
            }
            href="/"
          >
            Home
          </Link>
          <Link
            className={
              pathname == "/blog"
                ? "rounded-md py-2 px-3 text-sm font-bold text-neutral-500 transition duration-300"
                : "rounded-md py-2 px-3 text-sm text-neutral-400  transition duration-300  hover:text-neutral-50"
            }
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
