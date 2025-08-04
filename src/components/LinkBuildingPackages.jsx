'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const packages = [
  {
    title: 'Basic SEO Package',
    price: 'One-Time Fee',
    links: 10,
    daDr: 'UP TO 90',
    keyPages: '1-2 Key Pages',
    keywords: '1-3 Primary Keywords',
    features: [
      'Keyword Research',
      'Backlink Analysis',
      'Comp. Link Analysis',
      '30-Day Delivery',
    ],
  },
  {
    title: 'Advanced SEO Package',
    price: 'One-Time Fee',
    links: 20,
    daDr: 'UP TO 90',
    keyPages: '2-4 Key Pages',
    keywords: '2-6 Primary Keywords',
    features: [
      'Keyword Research',
      'Backlink Analysis',
      'Comp. Link Analysis',
      '30-Day Delivery',
    ],
  },
  {
    title: 'Premium SEO Package',
    price: 'One-Time Fee',
    links: 30,
    daDr: 'UP TO 90',
    keyPages: '2-6 Key Pages',
    keywords: '3-9 Primary Keywords',
    features: [
      'Keyword Research',
      'Backlink Analysis',
      'Comp. Link Analysis',
      '30-Day Delivery',
    ],
  },
];

const LinkBuildingPackages = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">White Label SEO Link Building Packages</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Boost your website’s authority and rankings with our top-tier, in-content backlinks tailored to your niche.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{pkg.price}</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4 text-left">
                  <li><strong>{pkg.links}</strong> High-Authority Premium Backlinks</li>
                  <li><strong>DA/DR:</strong> {pkg.daDr}</li>
                  <li><strong>Pages:</strong> {pkg.keyPages}</li>
                  <li><strong>Keywords:</strong> {pkg.keywords}</li>
                  {pkg.features.map((f, i) => (
                    <li key={i}>✅ {f}</li>
                  ))}
                </ul>
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Need a Custom Package?</h3>
          <p className="text-gray-600 mb-4">Request a <strong>FREE Quote</strong> tailored to your unique SEO goals.</p>
          <Button className="bg-gray-800 hover:bg-gray-900">Get a Free Quote</Button>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6">Real Results. Real Clients.</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4 border rounded shadow-sm">
              <p className="text-sm text-gray-500">Niche: <strong>SEO Tools</strong></p>
              <p className="text-xl font-semibold">Organic Traffic: 4.9M+</p>
              <Button variant="link">View Case Study</Button>
            </div>
            <div className="p-4 border rounded shadow-sm">
              <p className="text-sm text-gray-500">Niche: <strong>iGaming</strong></p>
              <p className="text-xl font-semibold">Organic Traffic: 32.5K+</p>
              <Button variant="link">View Case Study</Button>
            </div>
            <div className="p-4 border rounded shadow-sm">
              <p className="text-sm text-gray-500">Niche: <strong>Information</strong></p>
              <p className="text-xl font-semibold">Traffic Doubled in 30 Days!</p>
              <Button variant="link">View Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkBuildingPackages;
