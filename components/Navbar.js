"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" }, 
    { href: "/shorten", label: "Shorten" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="h-16 bg-purple-700 text-white flex justify-between items-center px-6 shadow-md">
      {/* Logo */}
      <div className="font-extrabold text-2xl tracking-tight">
        <Link href="/" className="hover:text-purple-200 transition">
          BitLinks
        </Link>
      </div>

      <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-purple-200 transition ${
                pathname === href ? "underline underline-offset-4" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}

        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 hover:bg-purple-600 rounded-lg shadow-md px-4 py-1 font-semibold transition">
              Try Now
            </button>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md px-4 py-1 font-semibold transition">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <span className="text-lg font-bold">☰</span>
      </div>
    </nav>
  );
};

export default Navbar;
