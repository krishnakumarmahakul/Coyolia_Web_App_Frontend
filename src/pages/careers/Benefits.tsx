import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Globe, Sun } from 'lucide-react';

const CareersBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Benefits</h1>
        <p className="text-xl text-gray-600 mb-12">
          At COYOLIA, we believe in taking care of our team members. We offer a comprehensive benefits package designed to support your health, wealth, and career growth.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Heart className="w-12 h-12 text-[#7655b7] mb-6" />
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Health & Wellness</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Comprehensive health insurance</li>
              <li>Mental health support</li>
              <li>Fitness membership allowance</li>
              <li>Annual wellness programs</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-[#7655b7] mb-6" />
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Learning & Development</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Professional development budget</li>
              <li>Online learning subscriptions</li>
              <li>Conference attendance support</li>
              <li>Mentorship programs</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-[#7655b7] mb-6" />
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Work Environment</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Modern office amenities</li>
              <li>Team building events</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Sun className="w-12 h-12 text-[#7655b7] mb-6" />
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Time Off</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Generous paid time off</li>
              <li>Paid holidays</li>
              <li>Parental leave</li>
              <li>Sabbatical opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareersBenefits;