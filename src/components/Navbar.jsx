"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChartBar,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Services dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile nav toggle

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <nav className="w-full border-b border-black/10 bg-white z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#00BFA6] text-2xl font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] select-none"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            SEOSERVICES.COM
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-[#00BFA6] font-semibold">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setOpen(true)}>
              <button
                className="inline-flex items-center font-semibold text-black"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                Services
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                onMouseLeave={() => setOpen(false)}
                className={`absolute left-0 mt-2 w-58 bg-white border border-gray-200 shadow-lg rounded-md transition-opacity duration-200 z-50 ${
                  open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {[
                  ["Link Building Packages", "/service/linkbuilding"],
                  ["Premium content creation", "/service/content"],
                  ["Local Seo Packages", "/service/localseopackages"],
                  ["Free Seo Tools", "/tool"],
                ].map(([label, href], i) => (
                  <Link
                    key={i}
                    href={href}
                    className="block px-4 py-2  w- auto text-sm font-bold text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/casestudies"
              className="inline-flex items-center font-semibold text-black"
            >
              <FaChartBar className="text-[#00BFA6] mr-1" />
              Case Studies
            </Link>

            <Link href="/about" className="font-semibold text-black">
              About us
            </Link>

            <Link href="/contact" className="font-semibold text-black">
              Contact
            </Link>
             <Link href="/blogs" className="font-semibold text-black">
              Blog
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            {/* <button className="text-black hover:text-black">
              <FaSearch className="text-lg" />
            </button>

            <button className="relative text-black hover:text-black">
              <FaShoppingBag className="text-lg" />
              <span className="absolute -top-1 -right-2 text-xs font-semibold text-black">
                0
              </span>
            </button> */}

            <Link
              href="/quote"
              className="hidden md:inline-block bg-[#00BFA6] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#00bfa6cc] transition-colors"
            >
              Get a Quote
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-2xl text-black focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block font-semibold text-black">
              Home
            </Link>
            <div className="relative group" onMouseEnter={() => setOpen(true)}>
              <button
                className="inline-flex items-center font-semibold text-black"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                Services
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                onMouseLeave={() => setOpen(false)}
                className={`absolute left-0 mt-2 w-58 bg-white border border-gray-200 shadow-lg rounded-md transition-opacity duration-200 z-50 ${
                  open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {[
                  ["Link Building Packages", "/service/linkbuilding"],
                  ["Premium content creation", "/service/content"],
                  ["Local Seo Packages", "/service/localseopackages"],
                  ["Free Seo Tools", "/tool"],
                ].map(([label, href], i) => (
                  <Link
                    key={i}
                    href={href}
                    className="block px-4 py-2  w- auto text-sm font-bold text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/casestudies"
              className="block font-semibold text-black"
            >
              Case Studies
            </Link>
            <Link href="/about" className="block font-semibold text-black">
              About us
            </Link>
            <Link href="/contact" className="block font-semibold text-black">
              Contact
            </Link>
             <Link href="/blog" className="font-semibold text-black">
             Blog
            </Link>
            <Link
              href="/quote"
              className="block text-center bg-[#00BFA6] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#00bfa6cc] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
