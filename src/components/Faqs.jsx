"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const faqs = [
    {
      question: "What SEO services do you offer?",
      answer:
        "We offer complete SEO services — technical SEO, keyword research, content strategy, on-page optimization, link building, and local SEO tailored to your needs.",
    },
    {
      question: "How long does it take to see results from your SEO services?",
      answer:
        "Typically, you’ll see early signs of progress in 3–4 months. Long-term, compounding results often become more visible after 6–12 months.",
    },
    {
      question: "How can I track the progress of my SEO campaign?",
      answer:
        "We provide transparent reporting via Google Analytics, keyword tracking dashboards, and monthly progress summaries.",
    },
    {
      question: "What information do you need from me to start an SEO campaign?",
      answer:
        "We need your website access, business goals, target audience, current analytics tools, and preferred keywords — we’ll handle the rest.",
    },
    {
      question: "Do you offer customized SEO packages for different business needs?",
      answer:
        "Absolutely. Whether you're a startup or enterprise, we customize strategies based on your industry, audience, and goals.",
    },
    {
      question: "Can you guarantee first-page rankings on Google?",
      answer:
        "No ethical SEO agency guarantees rankings. But we do guarantee best practices, consistent effort, and measurable growth.",
    },
    {
      question: "What is link building and why is it important?",
      answer:
        "Link building earns backlinks from other websites, boosting your domain authority and helping you rank higher in search results.",
    },
    {
      question: "Do you offer local SEO services?",
      answer:
        "Yes! We optimize your Google Business Profile, create local citations, and target geo-specific keywords to improve local visibility.",
    },
    {
      question: "How do you handle SEO for e-commerce websites?",
      answer:
        "We focus on product page optimization, site speed, structured data, duplicate content fixes, and keyword-driven content strategies.",
    },
    {
      question: "How do you measure the ROI of SEO services?",
      answer:
        "We measure ROI through increased organic traffic, conversions, and revenue growth — using analytics, heatmaps, and sales data.",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
     
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-10">
          Have any questions?
          <br />
          Our team is here to help.
        </h2>

        <div className="rounded-xl shadow-sm divide-y divide-gray-200 overflow-hidden">
          {faqs.map((faq, index) => {
            const isHovered = hoverIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="border-l-5 border-l-blue-500 mb-5 rounded-3xl "
              >
                <button
                  type="button"
                  className="w-full text-left px-4 sm:px-6 py-5 flex justify-between items-center transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900">{faq.question}</span>
                  <motion.span
                    className="text-xl text-gray-400"
                    animate={{ rotate: isHovered ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      key="hover-content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2,
                        ease: "easeInOut",
                      }}
                      className="px-4 sm:px-6 pb-5 text-sm text-gray-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs sm:text-sm text-gray-600">
          Feel free to reach out to us if you have any more questions or need assistance!
        </p>
      </div>
    </div>
  );
}
