import React from "react";

const PersonalPage = () => {
  return (
    <main className="bg-black text-white font-['Inter',sans-serif] min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Lakhan Verma</h1>
        <p className="text-xl text-gray-400 mb-2">SEO Specialist & Web Developer</p>
        <p className="text-sm text-gray-500">
          Jaipur, Rajasthan ·{" "}
          <a href="mailto:lakhankumar222000@gmail.com" className="underline hover:text-white">
            lakhankumar222000@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/in/lakhan-verma-1b2526224"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            LinkedIn
          </a>
        </p>
      </section>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">

        {/* Summary */}
        <Section title="👨‍💻 Summary">
          <p className="text-gray-300 leading-relaxed">
            I'm a Web Developer & SEO Specialist with a knack for WordPress, Wix, Shopify, and all things technical SEO.
            I optimize for performance, visibility, and results. From content optimization to advanced analytics, I turn
            clicks into conversions using tools like SEMrush, Ahrefs, and Google Analytics.
          </p>
        </Section>

        {/* Experience */}
        <Section title="💼 Work Experience">
          <ul className="space-y-6">
            <ExperienceItem
              role="SEO Manager"
              company="Seocial Media Solutions"
              location="Jaipur"
              duration="Aug 2024 – Present"
              details="Developed and executed data-driven SEO strategies to improve client rankings and online visibility."
            />
            <ExperienceItem
              role="SEO Manager"
              company="Biz Box Story"
              location="Gurgaon"
              duration="Dec 2023 – Aug 2024"
              details="Led comprehensive SEO campaigns, optimizing websites for increased organic traffic and engagement."
            />
            <ExperienceItem
              role="Senior SEO Executive"
              company="Satnam Webtech Pvt. Ltd."
              location="Alwar"
              duration="Jan 2022 – Nov 2023"
              details="Implemented On-Page and Off-Page SEO techniques, improving rankings and domain authority."
            />
          </ul>
        </Section>

        {/* Skills */}
        <Section title="🛠 Skills & Tools">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-300">
            {[
              "On-Page SEO",
              "Off-Page SEO",
              "Technical SEO",
              "WordPress",
              "Shopify",
              "Wix",
              "SEMrush",
              "Ahrefs",
              "Google Analytics",
              "Content Marketing",
              "Schema Markup",
              "Local SEO",
            ].map((skill, i) => (
              <Skill key={i} name={skill} />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="🚀 Projects">
          <ul className="space-y-2 text-sm text-gray-300">
            <ProjectItem name="HighThere.me" url="https://highthere.me" />
            <ProjectItem name="NirvanaDC" url="https://www.nirvanadc.com/" />
            <ProjectItem name="Zaza City DC" url="https://zazacitydc.com/" />
            <ProjectItem name="JustCBD Store" url="https://justcbdstore.com/" />
          </ul>
        </Section>

        {/* Education */}
        <Section title="🎓 Education">
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <strong>B.Tech in Electrical Engineering</strong> – Laxmi Devi Institute of Engineering & Technology, Alwar (2019–2023)
            </p>
            <p>
              <strong>Senior Secondary</strong> – Star Public School, Alwar (2018–2019)
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, company, location, duration, details }) => (
  <li>
    <h3 className="text-xl font-semibold">{role} @ {company}</h3>
    <p className="text-sm text-gray-400">{location} · {duration}</p>
    <p className="text-sm mt-1 text-gray-300">{details}</p>
  </li>
);

const Skill = ({ name }) => (
  <div className="bg-gray-800 py-2 px-4 rounded-lg text-center">{name}</div>
);

const ProjectItem = ({ name, url }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{name}</a>
  </li>
);

export default PersonalPage;
