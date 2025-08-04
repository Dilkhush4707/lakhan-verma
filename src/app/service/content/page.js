// app/article-writing/page.tsx

import React from "react";
import Link from "next/link";

const packages = [
  {
    title: "Essential Content Boost",
    price: "One-Time Fee",
    words: "1000 words minimum",
    notes: "Per Article",
    features: [
      "Advanced SEO Optimization",
      "Keyword Research and Strategy",
      "Free Revision",
      "Images Included",
    ],
  },
  {
    title: "Pro Content Creation",
    price: "One-Time Fee",
    words: "2000 words minimum",
    notes: "Per Article",
    features: [
      "Advanced SEO Optimization",
      "Keyword Research and Strategy",
      "Free Revision",
      "Images Included",
    ],
  },
  {
    title: "Premium Article Writing",
    price: "One-Time Fee",
    words: "3000 words minimum",
    notes: "Per Article",
    features: [
      "Advanced SEO Optimization",
      "Keyword Research and Strategy",
      "Unlimited Revisions",
      "Images Included",
    ],
  },
];

const features = [
  {
    title: "🧠 Expert Writers",
    desc: "Our team consists of seasoned professionals who craft engaging, SEO-friendly content tailored to your niche.",
  },
  {
    title: "📊 SEO Optimization",
    desc: "We use advanced SEO techniques to ensure your content ranks higher, drives traffic, and increases visibility.",
  },
  {
    title: "🎯 Custom Solutions",
    desc: "Our personalized strategies align content with your business goals for maximum engagement and conversion.",
  },
];

export default function Home() {
  return (
    <main className="px-6 py-16 mx-auto max-w-6xl">
      {/* Hero */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Transform Your SEO Strategy with High-Quality Article Writing
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        In today’s digital age, content is king 👑. Our premium content creation services drive traffic, engage readers, and convert visitors into loyal customers — all while boosting your SEO rankings.
      </p>

      {/* Packages */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {pkg.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">{pkg.price}</p>
            <p className="text-gray-700 font-medium mb-1">📝 {pkg.words}</p>
            <p className="text-sm italic text-gray-500 mb-3">{pkg.notes}</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {pkg.features.map((f, idx) => (
                <li key={idx}>✅ {f}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 italic mb-4">
              You can select quantity on the next page
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Effortless Content Creation for Maximum SEO Impact
        </h3>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Let us handle the writing while you focus on growing your business. Our expert team delivers compelling, optimized articles that rank, convert, and impress. ✍️📈
        </p>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-700">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 border">
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-indigo-50 py-12 rounded-2xl">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          Looking for a tailored solution?
        </h3>
        <p className="text-gray-700 mb-6">
          Request a <strong>FREE Quote</strong> today and get custom-crafted content that elevates your SEO and builds authority. 🚀📚
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
