import React from 'react';
import { motion } from 'framer-motion';

const CareersOpenings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Current Openings</h1>
        <p className="text-xl text-gray-600 mb-8">
          Join our team of innovators and help shape the future of AI-powered career development. We're always looking for passionate individuals who share our vision.
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-2">AI Research Scientist</h2>
            <p className="text-gray-600 mb-4">
              Join our research team to develop cutting-edge AI solutions for career development and HR technology.
            </p>
            <button className="bg-[#7655b7] text-white px-6 py-2 rounded-full hover:bg-[#634a99] transition-colors">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-2">Senior Full Stack Developer</h2>
            <p className="text-gray-600 mb-4">
              Build and maintain our AI-powered platform using cutting-edge technologies.
            </p>
            <button className="bg-[#7655b7] text-white px-6 py-2 rounded-full hover:bg-[#634a99] transition-colors">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-2">Product Manager</h2>
            <p className="text-gray-600 mb-4">
              Lead the development of innovative AI products that transform career development.
            </p>
            <button className="bg-[#7655b7] text-white px-6 py-2 rounded-full hover:bg-[#634a99] transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareersOpenings;