import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { countries } from "../data/countries";
import countriesBackground from "../assets/countries_background.png";

// Counter component for animated numbers
const AnimatedCounter = ({ end, duration = 3000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Linear interpolation for even increments
      const currentCount = Math.floor(
        progress * (endValue - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function CountriesPage({onGetStarted}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleCountryClick = (slug) => {
    navigate(`/countries/${slug}`);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative pt-5"
      style={{
        backgroundImage: `url(${countriesBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      {/* Header Section */}
      <div className="pt-8 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Study Destinations
            </h1>
            <p className="text-xl text-black-600 max-w-3xl mx-auto mb-8">
              Explore world-class education opportunities across the globe.
              Discover your perfect study destination and unlock your potential.
            </p>

            {/* Additional descriptive content */}
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-black-700 leading-relaxed">
                From the historic universities of the United Kingdom to the
                innovative campuses of Australia, each destination offers unique
                opportunities for academic growth and cultural enrichment.
                Whether you're seeking cutting-edge research facilities, diverse
                cultural experiences, or pathways to global career
                opportunities, we'll help you find the perfect match.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-fes-deep mb-2">
                    <AnimatedCounter end={12} duration={2000} />
                  </div>
                  <div className="text-gray-700 font-medium">Countries</div>
                  <div className="text-sm text-gray-600">
                    Top study destinations worldwide
                  </div>
                </div>
                <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-fes-deep mb-2">
                    <AnimatedCounter end={500} duration={2000} suffix="+" />
                  </div>
                  <div className="text-gray-700 font-medium">Universities</div>
                  <div className="text-sm text-gray-600">
                    World-renowned institutions
                  </div>
                </div>
                <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-fes-deep mb-2">
                    <AnimatedCounter end={1000} duration={2000} suffix="+" />
                  </div>
                  <div className="text-gray-700 font-medium">Programs</div>
                  <div className="text-sm text-gray-600">
                    Diverse academic opportunities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Countries Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {countries.map((country, index) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                onClick={() => handleCountryClick(country.slug)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 ease-out cursor-pointer overflow-hidden group border border-gray-100"
              >
                {/* Flag Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-fes-deep transition-colors duration-200 ease-out">
                    {country.name}
                  </h3>

                  <p className="text-fes-deep font-semibold mb-3 text-sm uppercase tracking-wide">
                    {country.tagline}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {country.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-fes-deep opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 ease-out"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fes-blue/5 to-fes-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert consultants can help you find the perfect study
              destination based on your goals, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/course-finder")}
                className="px-6 py-3 bg-fes-deep text-white rounded-full hover:bg-blue-900 transition-colors duration-300 font-semibold"
              >
                Find Courses
              </button>
              <button
                onClick={() => navigate("/book-session")}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
