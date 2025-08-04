import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 font-['Inter',sans-serif]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Mission Card */}
        <div className=" bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-[linear-gradient(180deg,_#5a3ff2_0%,_#0fc1a1_100%)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white leading-tight">
            Our <br /> Mission
          </h2>
          <p className="text-sm sm:text-base  leading-relaxed font-medium">
            Our mission is to empower businesses by providing top-tier,
            up-to-date SEO strategies that drive measurable success. We are
            dedicated to delivering quality solutions, fostering long-term
            partnerships, and ensuring our clients achieve their digital
            marketing goals through innovative and effective optimization
            techniques.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-[linear-gradient(180deg,_#5a3ff2_0%,_#0fc1a1_100%)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white leading-tight ">
            Our <br /> Vision
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
            Our vision is to be the foremost authority in the SEO industry,
            known for our commitment to quality and our ability to stay ahead of
            digital trends. We aim to create a dynamic digital environment where
            businesses can thrive, leveraging cutting-edge SEO strategies to
            unlock their full potential and achieve sustainable growth.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-[linear-gradient(180deg,_#5a3ff2_0%,_#0fc1a1_100%)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white leading-tight">
            Our <br /> Philosophy
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
            We believe in a client-centric approach, where your success is our
            success. By understanding your unique business goals and challenges,
            we craft customized SEO strategies that drive tangible results. Our
            commitment to transparency, integrity, and excellence has earned us
            the trust of countless clients worldwide.
          </p>
        </div>

        {/* Journey Card */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-[linear-gradient(180deg,_#5a3ff2_0%,_#0fc1a1_100%)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white leading-tight">
            Our <br /> Journey
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
            Since our inception in 2008, we have been at the forefront of the
            SEO industry, helping businesses around the globe achieve
            unparalleled online visibility and growth. Our team of seasoned
            experts combines years of experience with cutting-edge techniques to
            deliver results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
