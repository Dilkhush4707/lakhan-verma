"use client";
import React, { useState } from "react";

const initialServices = {
  "Keyword Research": false,
  "Link Building": false,
  "Local SEO": false,
  "Content Creation": false,
  "SEO Audit": false,
};

const GetQuote = () => {
  const [form, setForm] = useState({
    businessName: "",
    email: "",
    website: "",
    keywords: "",
    services: initialServices,
    businessGoals: "",
    challenges: "",
    additionalInfo: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in form.services) {
      setForm((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else if (name === "agree") {
      setForm((prev) => ({
        ...prev,
        agree: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedServices = Object.keys(form.services).filter(
      (key) => form.services[key]
    );

    const finalData = {
      businessName: form.businessName,
      email: form.email,
      website: form.website,
      keywords: form.keywords.split(",").map((kw) => kw.trim()),
      selectedServices,
      businessGoals: form.businessGoals,
      challenges: form.challenges,
      additionalInfo: form.additionalInfo,
      agreedToPrivacy: form.agree,
    };

    console.log("🚀 Form Submission Data:", finalData);
    // You can POST finalData to your backend here
  };

  return (
    <form className="max-w-4xl mx-auto my-auto p-4 text-black font-mono "
     onSubmit={handleSubmit}>
      <h2 className="font-bold text-base mb-2">Step 1: Tell Us About Your Business</h2>

      <input
        name="businessName"
        type="text"
        placeholder="Business Name:"
        value={form.businessName}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-2 px-2 py-1"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address *"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-2 px-2 py-1"
      />

      <input
        name="website"
        type="url"
        placeholder="Website URL:"
        value={form.website}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-2 px-2 py-1"
      />

      <input
        name="keywords"
        type="text"
        placeholder="Please enter keywords, separating each with a comma."
        value={form.keywords}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-400 placeholder-gray-400 mb-4 px-2 py-1"
      />

      <h2 className="font-bold text-base mb-2">Step 2: Select Services</h2>
      <div className="flex flex-col space-y-2 mb-4 text-xs text-gray-600">
        {Object.keys(form.services).map((service, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={service}
              checked={form.services[service]}
              onChange={handleChange}
              className="w-3 h-3"
            />
            <span>{service}</span>
          </label>
        ))}
      </div>

      <h2 className="font-bold text-base mb-2">Step 3: Describe Your Needs</h2>

      <label className="block font-semibold text-xs mb-1">Business Goals: – Optional</label>
      <textarea
        name="businessGoals"
        rows="3"
        placeholder="Describe your business goals..."
        value={form.businessGoals}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-4 px-2 py-1 resize-y"
      />

      <label className="block font-semibold text-xs mb-1">Current SEO Challenges: – Optional</label>
      <textarea
        name="challenges"
        rows="3"
        placeholder="Describe challenges you're facing..."
        value={form.challenges}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-4 px-2 py-1 resize-y"
      />

      <label className="block font-semibold text-xs mb-1">Additional Information: – Optional</label>
      <textarea
        name="additionalInfo"
        rows="3"
        placeholder="Anything else you'd like us to know..."
        value={form.additionalInfo}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-sm text-xs text-gray-600 placeholder-gray-400 mb-4 px-2 py-1 resize-y"
      />

      <label className="flex items-start space-x-2 text-[9px] text-gray-600 mb-3">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="w-3 h-3 mt-1"
        />
        <span>
          I agree to receive a quote and promotional marketing emails and agree to our{" "}
          <a href="#" className="underline">Privacy Policy</a>.
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-teal-500 text-white text-xs font-semibold rounded-sm py-1"
      >
        Submit
      </button>
    </form>
  );
};

export default GetQuote;
