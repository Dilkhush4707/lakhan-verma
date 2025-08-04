// app/case-studies/page.tsx

import React from "react";
import Link from "next/link";

const caseStudies = [
  {
    title: "SmallSEOTools.com",
    description:
      "An all-in-one SEO tool hub for pros and beginners alike. From plagiarism checks to keyword magic, this platform’s got it all.",
    niche: "SEO Tools",
    traffic: "4.9M+",
    clientSince: "2021",
    url: "/case-studies/smallseotools",
  },
  {
    title: "SoftSwiss.com",
    description:
      "Powering the pulse of iGaming. SoftSwiss leads the charge in online casino tech with robust, scalable solutions.",
    niche: "iGaming",
    traffic: "32.5K+",
    clientSince: "2021",
    url: "/case-studies/softswiss",
  },
  {
    title: "Giveaways.org",
    description:
      "Your go-to destination for giveaways and sweepstakes. Watch their traffic *double* in just 30 days. Yup, we did that.",
    niche: "Information",
    traffic: "Doubled in 30 days",
    clientSince: "2024",
    url: "/case-studies/giveaways",
  },
];

export default function Home() {
  return (
    <main className="px-6 py-16 mx-auto max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        Our Client Success Stories
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Explore our portfolio of successful SEO campaigns and client case
        studies showcasing our expertise and results. 📈✨
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((client, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {client.title}
            </h2>
            <p className="text-gray-700 mb-4">{client.description}</p>
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>
                🧩 <strong className="text-gray-800">Niche:</strong>{" "}
                {client.niche}
              </li>
              <li>
                📊 <strong className="text-gray-800">Organic Traffic:</strong>{" "}
                {client.traffic}
              </li>
              <li>
                📅 <strong className="text-gray-800">Client Since:</strong>{" "}
                {client.clientSince}
              </li>
            </ul>
            <Link
              href={client.url}
              className="inline-block text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
            >
              View Case Study →
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-16 text-sm text-gray-400 max-w-xl">
        🔒 Note: To respect the privacy and confidentiality of our clients, we
        only showcase case studies from those who’ve given us explicit
        permission. Wanna learn more about the stories behind the curtain?{" "}
        <Link href="/contact" className="underline hover:text-indigo-500">
          Contact us directly.
        </Link>
      </p>
    </main>
  );
}
