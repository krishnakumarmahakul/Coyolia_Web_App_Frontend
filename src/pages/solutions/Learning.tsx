import React from 'react';
import { motion } from 'framer-motion';

const SolutionsLearning = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">AI in Learning & Development</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your learning and development initiatives with COYOLIA's AI-powered solutions. Our platform delivers personalized learning experiences that adapt to individual needs and organizational goals.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Personalized Learning Paths</h2>
            <p className="text-gray-600">
              Our AI algorithms create customized learning journeys based on individual skills, goals, and learning preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Skill Gap Analysis</h2>
            <p className="text-gray-600">
              Advanced analytics identify skill gaps and recommend targeted learning resources to bridge them effectively.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionsLearning;