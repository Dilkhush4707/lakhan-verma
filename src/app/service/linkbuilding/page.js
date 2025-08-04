// app/link-building/page.tsx

import React from "react";
import Link from "next/link";

const packages = [
  {
    name: "Basic SEO Package",
    price: "One-Time Fee",
    backlinks: 10,
    content: "Custom Unique Content Creation for Each Link",
    pages: "1–2 Key Pages",
    keywords: "1–3 Primary Keywords",
    da: "DA/DR up to 90",
    features: [
      "Keyword Research",
      "Backlink Analysis",
      "Competitor Link Analysis",
      "30-Day Delivery",
    ],
  },
  {
    name: "Advanced SEO Package",
    price: "One-Time Fee",
    backlinks: 20,
    content: "Custom Unique Content Creation for Each Link",
    pages: "2–4 Key Pages",
    keywords: "2–6 Primary Keywords",
    da: "DA/DR up to 90",
    features: [
      "Keyword Research",
      "Backlink Analysis",
      "Competitor Link Analysis",
      "30-Day Delivery",
    ],
  },
  {
    name: "Premium SEO Package",
    price: "One-Time Fee",
    backlinks: 30,
    content: "Custom Unique Content Creation for Each Link",
    pages: "2–6 Key Pages",
    keywords: "3–9 Primary Keywords",
    da: "DA/DR up to 90",
    features: [
      "Keyword Research",
      "Backlink Analysis",
      "Competitor Link Analysis",
      "30-Day Delivery",
    ],
  },
];

export default function Home() {
  return (
    <main className="px-6 py-16 mx-auto max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        White Label SEO Link Building Packages
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        Boost your website’s authority and rankings with our top-tier,
        in-content backlinks tailored to your niche. At <strong>SeoServices.com</strong>, we
        prioritize quality over quantity to ensure exceptional results that earn
        trust and repeat business. 🔗🚀
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {pkg.name}
            </h2>
            <p className="text-sm text-gray-500 mb-1">{pkg.price}</p>
            <p className="text-gray-700 mb-2">
              <strong>{pkg.backlinks}</strong> High-Authority Premium SEO Backlinks
            </p>
            <p className="text-sm text-gray-600 mb-2 italic">
              {pkg.content}
            </p>
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>📄 {pkg.pages}</li>
              <li>🔑 {pkg.keywords}</li>
              <li>📈 {pkg.da}</li>
              {pkg.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Premium Link Building Services for Superior SEO Success!
        </h3>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Entrust us with your link building. Our experts secure top-tier backlinks to enhance your website’s authority and improve search rankings. Focus on growth while we deliver exceptional SEO results for higher visibility and organic traffic.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-700">
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h4 className="font-semibold mb-2">👨‍💼 Specialist Team</h4>
            <p>
              Our seasoned SEO pros know how to secure high-authority backlinks tailored to your industry.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h4 className="font-semibold mb-2">🔗 High-Quality Backlinks</h4>
            <p>
              Every link is vetted from credible, high-DA sources to supercharge your SEO game.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h4 className="font-semibold mb-2">🧠 Customized Strategies</h4>
            <p>
              No cookie-cutter stuff. We align link building with your business goals for real, lasting impact.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center bg-indigo-50 py-10 rounded-2xl">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          Looking for a tailored solution?
        </h3>
        <p className="text-gray-700 mb-6">
          Request a <strong>FREE Quote</strong> today and let&aposs build something big together. 🎯
        </p>
        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Get a Free Quote →
        </Link>
      </section>
    </main>
  );
}
