"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FAQSection from "./Faqs";

const fadeIn = (direction = "up", delay = 0.1) => {
  const distance = 60;
  return {
    initial: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

export default function ContactForm() {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 sm:px-10 md:px-16 lg:px-20 py-20"
      style={{
        background:
          "radial-gradient(circle at top right, #8fc9d9 0%, #c3d1f0 40%, #ffffff 100%)",
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Info Block */}
      <motion.div
        className="max-w-xl mx-auto text-center lg:text-left"
        variants={fadeIn("right", 0.1)}
      >
        <Link
          href="#"
          className="inline-block mb-6 text-xs text-[#00b388] border border-[#00b388] rounded-full px-3 py-1 font-semibold"
        >
          Contact Us
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-md mx-auto lg:mx-0">
          Feel free to <em className="font-serif italic">reach</em> out to us anytime
        </h1>
        <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
          Our dedicated team is here to offer expert guidance, answer your
          questions, and show how SeoServices.com can boost your business.
        </p>
        <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0 text-sm text-gray-900 font-semibold">
          <p className="flex items-center justify-center lg:justify-start">
            <FaEnvelope className="mr-3 text-gray-600" />
            info@seoservices.com
          </p>
          <p className="flex items-center justify-center lg:justify-start">
            <FaBuilding className="mr-3 text-gray-600" />
            A.M.E.X. Internet Marketing ltd
          </p>
          <p className="flex items-center justify-center lg:justify-start">
            <FaMapMarkerAlt className="mr-3 text-gray-600" />
            Makariou III No.9, Ormideia, 7530, Larnaca, Cyprus
          </p>
        </div>
        <hr className="border-gray-300 my-8 max-w-md mx-auto lg:mx-0" />
        <p className="text-sm max-w-md mx-auto lg:mx-0">
          Have a simple question?{" "}
          <Link href="#" className="text-[#00b388] font-semibold">
            Check out our FAQ
          </Link>
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="bg-white rounded-lg p-6 sm:p-8 shadow-md max-w-md w-full mx-auto"
        aria-label="Contact form for SEO services questions and assistance"
        variants={fadeIn("left", 0.2)}
      >
        <h2 className="text-gray-900 font-semibold text-lg mb-6">
          Have questions about our SEO services or need assistance?
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b388]"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b388]"
          required
        />
        <input
          type="text"
          placeholder="Company Name (Optional)"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b388]"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#00b388]"
          required
        ></textarea>
        <p className="text-[10px] text-gray-500 mb-6 leading-tight">
          By clicking the Submit button, I consent to having this website store my
          submitted information so they can respond to my inquiry, in accordance
          with the{" "}
          <Link href="#" className="text-[#00b388] underline">
            Privacy Policy.
          </Link>{" "}
          I am aware of my rights regarding my personal data.
        </p>
        <button
          type="submit"
          className="w-full bg-[#00b388] text-white font-semibold py-3 rounded-md hover:bg-[#00996f] transition-colors"
        >
          Submit
        </button>
      </motion.form>

      {/* FAQ Section */}
      <motion.div
        className="col-span-1 lg:col-span-2 mt-12"
        variants={fadeIn("up", 0.4)}
      >
        <FAQSection />
      </motion.div>
    </motion.div>
  );
}
