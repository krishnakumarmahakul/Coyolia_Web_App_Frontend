import React from 'react';
import { motion } from 'framer-motion';

const SolutionsTalent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 min-h-screen px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">AI in Talent Acquisition & HR</h1>
        <p className="text-xl text-gray-600 mb-8">
          Revolutionize your talent acquisition and HR processes with COYOLIA's AI-powered solutions. Our platform helps you identify, attract, and retain top talent while streamlining HR operations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Smart Recruitment</h2>
            <p className="text-gray-600">
              AI-driven candidate matching and assessment tools help you find the perfect fit for your organization.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">HR Analytics</h2>
            <p className="text-gray-600">
              Powerful analytics and insights to optimize workforce planning and employee development strategies.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionsTalent;