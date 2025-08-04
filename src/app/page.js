"use client"
import React, { useState } from 'react';

const SeoHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"></div>
        
        <div className="text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 max-w-5xl mx-auto mb-6">
              Seeking Professional 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600"> SEO Services</span>
              <br className="hidden sm:block" />
              that Deliver Results?
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
              We provide state-of-the-art SEO services for every niche. Elevate your Google rankings with our powerful SEO packages and premium content.
            </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-400">
            <button className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm sm:text-base font-semibold rounded-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative mt-16 sm:mt-20 lg:mt-24">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold transform rotate-12">
                SEO
              </div>
              
              {/* Dashboard mockup */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">SEO Dashboard</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-600">245%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">#1</div>
                    <div className="text-xs sm:text-sm text-gray-600">Google Ranking</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">89%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-100 to-teal-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Monthly Growth</span>
                    <span className="text-green-600 font-bold">+124%</span>
                  </div>
                  <div className="mt-2 bg-white rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SeoSuccessSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  
  const accordionItems = [
    {
      title: "Proven Success with Case Studies",
      content: "We have a track record of helping businesses achieve top Google rankings. Our case studies showcase the success stories of our clients, demonstrating how our tailored strategies have significantly improved their online presence and search engine rankings."
    },
    {
      title: "Customized Strategies for Your Business",
      content: "Every business is unique, and so should be your SEO strategy. We analyze your specific market, competitors, and target audience to create a customized approach that delivers maximum ROI."
    },
    {
      title: "Expert Team Committed to Your Success",
      content: "Our team of certified SEO specialists brings years of experience and stays updated with the latest algorithm changes to ensure your website maintains its competitive edge."
    }
  ];

  const ChevronIcon = ({ isOpen }) => (
    <svg 
      className={`w-4 h-4 sm:w-5 sm:h-5 text-teal-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why you should
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">choose us</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our experts provide tailored solutions to meet your unique needs, ensuring exceptional results and a strong online presence.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                      className="w-full flex justify-between items-center py-4 text-left hover:text-teal-600 transition-colors duration-200"
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-800">
                        {item.title}
                      </span>
                      <ChevronIcon isOpen={openAccordion === index} />
                    </button>
                    {openAccordion === index && (
                      <div className="pb-4 text-sm sm:text-base text-gray-600 leading-relaxed animate-fade-in">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-16 right-16 w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-1/2 ml-8 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60"></div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 underline decoration-teal-400 decoration-2 underline-offset-4"> SEO Benefits</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Discover the full suite of SEO advantages we bring to the table: from keyword analysis and technical audits to backlink strategies and content marketing — everything tailored to skyrocket your growth.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-6 sm:p-8 rounded-2xl border border-teal-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Increased Visibility</h3>
              <p className="text-sm sm:text-base text-gray-600">Appear in top search results and dominate your niche with strategic optimization.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-6 sm:p-8 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Better UX</h3>
              <p className="text-sm sm:text-base text-gray-600">Optimized site structure ensures better performance and user engagement.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Long-Term ROI</h3>
              <p className="text-sm sm:text-base text-gray-600">Organic growth that compounds over time, no ad budget needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SeoServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: "Link Building Packages",
      desc: "Elevate your website's authority and rankings with our expert link-building SEO services. We acquire high-quality backlinks from reputable sites relevant to your niche.",
      color: "teal"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Local SEO Packages",
      desc: "Increase your local visibility with our tailored Local SEO packages. We optimize your online presence to attract more local customers.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Content Writing",
      desc: "Engage and convert your audience with our premium content writing services. Our skilled writers create high-quality, SEO-optimized content.",
      color: "green"
    }
  ];

  const workSteps = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Initial Consultation",
      desc: "We take the time to understand your business, goals, and current online presence to create a strong foundation."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Strategy Development",
      desc: "Based on our insights, we craft a tailored SEO strategy that aligns with your specific needs and objectives."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Implementation",
      desc: "We put the plan into action, executing the strategy meticulously to achieve measurable and impactful results."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Monitoring & Optimization",
      desc: "Continuous tracking of performance allows us to optimize and refine our approach, ensuring sustained success and growth."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      teal: "border-teal-400 text-teal-600 bg-teal-50 hover:bg-teal-100",
      blue: "border-blue-400 text-blue-600 bg-blue-50 hover:bg-blue-100",
      green: "border-green-400 text-green-600 bg-green-50 hover:bg-green-100"
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="bg-white">
      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How can we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 underline decoration-teal-400 decoration-2 underline-offset-4">help</span>{" "}
              your business grow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`mb-6 p-4 border-2 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center transition-all duration-300 ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm sm:text-base transition-colors duration-200 group-hover:gap-3">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How We Work
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our clear and effective process ensures your SEO success, from understanding your needs to delivering measurable results and continuous optimization.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {workSteps.map((step, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 border-2 border-teal-400 rounded-xl text-teal-600 bg-teal-50 group-hover:bg-teal-100 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



// Main App Component
export default function SeoLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        /* Enhanced Animations */
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) translateX(15px) scale(1.05);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-15px);
          }
          75% {
            transform: translateY(-25px) translateX(20px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes twinkle-delayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @keyframes twinkle-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        /* Animation Classes */
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-twinkle-slow {
          animation: twinkle-slow 4s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-on-hover:hover {
          animation: bounce-gentle 0.6s ease-in-out;
        }

        .animate-scale-on-hover:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
      
      <SeoHeroSection />
      <SeoSuccessSection />
      <SeoServicesSection />
      {/* <SeoCallToAction /> */}
    </div>
  );
}