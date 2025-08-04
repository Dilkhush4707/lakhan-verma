// app/local-seo/page.tsx

import React from "react";
import Link from "next/link";

const packages = [
  {
    title: "Basic Local SEO",
    price: "One-time Fee",
    content: "New SEO Content (3000 words)",
    backlinks: "2 Editorial Backlinks",
    extras: [
      "Keyword Database",
      "Technical SEO Audit",
      "Weekly Updates",
      "1 Location",
    ],
  },
  {
    title: "Standard Local SEO",
    price: "One-time Fee",
    content: "New SEO Content (5000 words)",
    backlinks: "4 Editorial Backlinks",
    extras: [
      "Keyword Database",
      "Technical SEO Audit",
      "Weekly Updates",
      "1 Location",
    ],
  },
  {
    title: "Premium Local SEO",
    price: "One-time Fee",
    content: "New SEO Content (8000 words)",
    backlinks: "8 Editorial Backlinks",
    extras: [
      "Keyword Database",
      "Technical SEO Audit",
      "Weekly Updates",
      "1 Location",
    ],
  },
];

const features = [
  {
    title: "⚡ Rapid Results",
    desc: "Proven strategies that show ranking and traffic improvements within weeks. No fluff, just results.",
  },
  {
    title: "💸 One-Time Fee, Pay as You Go",
    desc: "No long-term contracts. Pay when you’re happy. Simple, honest, effective.",
  },
  {
    title: "📊 Comprehensive Reports",
    desc: "Weekly updates with key metrics like backlinks, GMB insights & local rankings to keep you in the loop.",
  },
];

const testimonials = [
  {
    name: "Lucas Muller",
    title: "Founder, Germany",
    quote:
      "Their SEO expertise has been invaluable. Our search rankings are much better now.",
  },
  {
    name: "Michelle Fanto",
    title: "Marketing Manager, USA",
    quote:
      "Excellent communication. The team explains every step they take. Looking forward to more improvements.",
  },
  {
    name: "Alan Wilson",
    title: "CEO, USA",
    quote:
      "I was hesitant at first, but already impressed with the early SEO results. Worth the leap.",
  },
  {
    name: "Andreas Johnson",
    title: "Founder at Giveaways.org, USA",
    quote:
      "Professional, responsive, and thorough. Can’t wait to see what’s ahead!",
  },
  {
    name: "Anika Mehta",
    title: "CEO, India",
    quote: "Excellent service with remarkable results. Highly recommended!",
  },
  {
    name: "Chloe Foster",
    title: "Co-Founder, Australia",
    quote:
      "Significant traffic boost in 2 months. These folks know what they’re doing.",
  },
];

export default function Home() {
  return (
    <main className="px-6 py-16 mx-auto max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Boost Your Local Visibility with Expert GMB Optimization
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Our comprehensive Google My Business optimization services ensure
        accurate info, local keywords, tech audits, fresh content, and
        high-quality backlinks. Start attracting more local customers today!
        📍🚀
      </p>

      {/* Packages */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {pkg.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{pkg.price}</p>
            <p className="text-gray-700 mb-1">📝 {pkg.content}</p>
            <p className="text-gray-700 mb-3">🔗 {pkg.backlinks}</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {pkg.extras.map((extra, i) => (
                <li key={i}>✅ {extra}</li>
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

      {/* Features */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Effortless Local SEO for Maximum Visibility
        </h3>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Leave the local SEO grind to us. We optimize your business to stand
          out in local search. You keep doing what you do best — running your
          biz. We&aposll bring the customers. 😎📈
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

      {/* Testimonials */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Success Stories
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="border p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between h-full"
            >
              <div className="flex items-center mb-2 text-yellow-500 text-lg">
                {"★★★★★"}
              </div>
              <div className="mb-1">
                <p className="font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                “{testimonial.quote}”
              </p>
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
          Request a <strong>FREE Quote</strong> today and let’s get your
          business ranking where it belongs — top of local search. 💼📍
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
