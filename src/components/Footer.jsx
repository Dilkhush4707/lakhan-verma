"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[#d9e6e9] bg-[#f9fcfc]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left Description */}
        <div className="md:w-1/3 text-[#5f6d7e] text-base leading-relaxed font-normal">
          At <span className="font-bold text-black">SEOServices.com</span>,
          quality is our top priority, ensuring we deliver measurable results
          through a comprehensive approach tailored to your unique needs and
          challenges. Our team is available 24/7, dedicated to excellence,
          reliability, and pushing your business to its full marketing
          potential.
        </div>

        {/* Right Links */}
        <div className="md:w-2/3 flex justify-between text-[#5f6d7e] text-sm font-normal flex-wrap gap-8">
          {/* Services */}
          <div>
            <div className="font-semibold mb-3 text-[#4b5563]">Services</div>
            <ul className="space-y-3">
              <li>
                <Link className="font-bold text-black block" href="#">
                  White Label Link Building Packages
                </Link>
              </li>
              <li>
                <Link className="font-bold text-black block" href="#">
                  Local SEO Packages
                </Link>
              </li>
              <li>
                <Link className="font-bold text-black block" href="#">
                  Premium Content Creation
                </Link>
              </li>
              <li className="flex items-center gap-2 font-semibold text-[#2c9d8f]">
                <Link className="inline-block" href="#">
                  Free SEO Tools
                </Link>
                <FaExternalLinkAlt className="text-[#2c9d8f] text-xs" />
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold mb-3 text-[#4b5563]">Legal</div>
            <ul className="space-y-3 font-bold text-black">
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#">Refund Policy</Link>
              </li>
              <li>
                <Link href="#">GDPR Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold mb-3 text-[#4b5563]">Company</div>
            <ul className="space-y-3 font-bold text-black">
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link className="text-2xl text-center" href="#" aria-label="X social icon">
                  X
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d9e6e9] bg-[#f9fcfc]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-[#5f6d7e] text-sm font-normal gap-2 sm:gap-0">
          <div>© 2008–{currentYear} SEOServices.com. All Rights Reserved.</div>
          <div>Proudly serving the industry for over 16 years.</div>
          <button
            aria-label="Scroll to top"
            className="ml-auto sm:ml-6 p-2 rounded-md bg-white shadow-md hover:bg-gray-100"
            onClick={scrollToTop}
          >
            <FaChevronUp className="text-[#4b5563]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
