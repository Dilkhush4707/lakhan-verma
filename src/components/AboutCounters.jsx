"use client";
import React, { useEffect, useRef, useState } from "react";

const statItems = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "x", label: "SEO Improvement" },
];

// Custom hook for counting numbers
const useCountUp = (end, startWhenVisible) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startWhenVisible) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 16);

    const counter = setInterval(() => {
      start += 1;
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(counter);
          return end;
        }
        return start;
      });
    }, stepTime);

    return () => clearInterval(counter);
  }, [end, startWhenVisible]);

  return count;
};

const AboutCounter = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white font-inter  w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      {/* Avatars */}
      <div
        className={`  flex flex-wrap justify-center  gap-4 mb-6 transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {[
          "https://storage.googleapis.com/a1aa/image/c34ace8f-afe2-431c-ebb0-fbad85446e79.jpg",
          "https://storage.googleapis.com/a1aa/image/222400fc-0e2e-426f-5894-e1ab1c64825f.jpg",
          "https://storage.googleapis.com/a1aa/image/8b3fbbc2-aca1-4284-1abe-f785a405ebe9.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center overflow-hidden"
          >
            <img
              src={src}
              alt={`Avatar ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Quote */}
      <p
        className={`text-center font-medium text-black text-sm sm:text-base max-w-2xl mx-auto mb-10 transition-opacity duration-1000 delay-200 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        We take pride in consistently achieving measurable and significant
        outcomes for our clients.
      </p>

      {/* Stats */}
      <div
        ref={sectionRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mb-16"
      >
        {statItems.map((item, idx) => {
          const count = useCountUp(item.value, inView);
          return (
            <div
              key={idx}
              className={`bg-black rounded-xl flex flex-col justify-center items-center text-center px-4 py-6 sm:px-6 sm:py-8 transition-all duration-700 delay-${
                idx * 100
              } ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-none">
                {count}
                {item.suffix}
              </span>
              <span className="text-gray-400 text-sm sm:text-base mt-2">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
    </main>
  );
};

 const SeoCallToAction = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="cta-section"
      className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black transition-all duration-1000 ${
            isVisible
              ? "animate-slide-up opacity-100"
              : "opacity-0 translate-y-20"
          }`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float-reverse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl opacity-15 animate-float-medium"></div>
            </div>
          </div>

          {/* Animated Decorative Elements */}
          <div className="absolute top-8 right-8 w-3 h-3 bg-teal-400 rounded-full opacity-60 animate-twinkle"></div>
          <div className="absolute top-16 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-twinkle-delayed"></div>
          <div className="absolute bottom-12 left-12 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-bounce-gentle"></div>
          <div className="absolute bottom-20 left-6 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-twinkle-slow"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
                  isVisible
                    ? "animate-fade-in-down"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow"></div>
                <span className="text-teal-300 text-sm font-medium">
                  Limited Time Offer
                </span>
              </div>

              <h2
                className={`font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-6 transition-all duration-800 delay-200 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
              >
                Ready to take your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-blue-400 animate-gradient-shift">
                  {" "}
                  SEO
                </span>
                <br />
                to the next level?
              </h2>

              <p
                className={`text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-800 delay-400 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
              >
                Unlock the full potential of your online presence with our
                expert SEO services. Boost your rankings, drive targeted
                traffic, and grow your business today!
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-800 delay-600 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
              >
                <button className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 animate-bounce-on-hover">
                  <span>Get a Free Quote</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                <button className="group border-2 border-gray-600 hover:border-teal-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 hover:shadow-md">
                  <svg
                    className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Schedule a Call</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm transition-all duration-800 delay-800 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200 animate-scale-on-hover">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free SEO Audit</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200 animate-scale-on-hover">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No Long-term Contracts</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200 animate-scale-on-hover">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Results in 30 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function CTA(){
  return <>
  <AboutCounter/>
  <SeoCallToAction /></>
}
