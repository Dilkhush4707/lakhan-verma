"use client";
import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import DotGrid from "@/components/bg/DotGrid";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          className="rounded-2xl w-full h-full bg-black"
          dotSize={2}
          gap={40}
          baseColor="E9E3DF"
          activeColor="#5227FF"
          proximity={350}
          shockRadius={550}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
        {/* Heading */}
        <h1 className="text-white text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-tight font-extrabold">
          Architects of <br />
          <span className="text-[#00b38a]">SEO Excellence</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
          At SeoServices.com, we navigate the complex world of SEO with surgical
          precision — fueling sustainable growth, long-term traffic, and
          financial wins for businesses ready to play the long game.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <a
            href="#services"
            className="inline-block bg-[#00b38a] hover:bg-[#019f7a] transition-all duration-300 text-black font-bold uppercase text-xs tracking-wider px-6 py-3 rounded-full shadow-lg"
          >
            Discover Our Services
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-white opacity-60">
          <FaCircleNotch className="animate-spin text-xs" />
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
