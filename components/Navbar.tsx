"use client";
import React from "react";
import Link from "next/link";
import Socials from "./Socials";

const Navbar = () => {
  return (
    <header className="absolute  w-full text-white">
      <nav className="mx-auto flex max-w-3xl my-4 items-center justify-between px-6 md:px-0">
        <div className="flex">
          <div className="hidden md:block">
            <Link className="text-xl font-bold hover:text-neutral-500" href="/">
              Blog Starter Template
            </Link>
          </div>
          <div className="flex md:hidden">
            <Link className="text-xl font-bold hover:text-neutral-500" href="/">
              BST
            </Link>
          </div>
        </div>
        <div className="flex">
          <Socials />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
