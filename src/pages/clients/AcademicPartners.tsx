import React from 'react';
import { motion } from 'framer-motion';

const ClientsAcademicPartners = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Academic Partners</h1>
        <p className="text-xl text-gray-600 mb-8">
          COYOLIA partners with leading educational institutions to bridge the gap between academic learning and industry requirements. Our academic partnerships help shape the future of career development.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Universities</h2>
            <p className="text-gray-600">
              We collaborate with top universities to integrate AI-powered career guidance into academic programs and provide students with industry-relevant skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Research Institutions</h2>
            <p className="text-gray-600">
              Our partnerships with research institutions drive innovation in career development technologies and methodologies.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsAcademicPartners;