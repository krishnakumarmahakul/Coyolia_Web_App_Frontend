import React from 'react';
import { motion } from 'framer-motion';

const CareersLife = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Life @ COYOLIA</h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience a workplace where innovation meets personal growth. At COYOLIA, we believe in creating an environment that nurtures talent, encourages creativity, and celebrates diversity.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Work-Life Balance</h2>
            <p className="text-gray-600">
              We understand the importance of maintaining a healthy work-life balance and offer flexible working arrangements to support our team members.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Learning Culture</h2>
            <p className="text-gray-600">
              Continuous learning is part of our DNA. We provide resources and opportunities for professional development and skill enhancement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Team Events</h2>
            <p className="text-gray-600">
              From hackathons to team outings, we create opportunities for collaboration and fun beyond the regular workday.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareersLife;