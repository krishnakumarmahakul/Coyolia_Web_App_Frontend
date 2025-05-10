import React from 'react';
import { motion } from 'framer-motion';

const AboutTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Our Team</h1>
        <p className="text-xl text-gray-600 mb-8">
          Meet the innovative minds behind COYOLIA's AI-powered solutions. Our diverse team of experts combines deep technical knowledge with industry expertise to deliver cutting-edge career development solutions.
        </p>

        <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#21204C] mb-2">Dr. Mansee Bal Bhargava</h3>
            <p className="text-gray-600">
              An Entrepreneur, Researcher, Educator, and Speaker focusing on Environment-Design-Policy. She inspires learners through experience-based mentoring and workshops, combining innovation with sustainability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#21204C] mb-2">Anubha Maneshwar</h3>
            <p className="text-gray-600">
              Founder of GirlScript Foundation, she is known for revolutionizing tech education among underserved communities, empowering thousands through inclusive coding programs and events.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#21204C] mb-2">Aditya Dubey</h3>
            <p className="text-gray-600">
              A Climate Activist and Social Entrepreneur committed to sustainability. He drives initiatives for climate action, engaging youth to create impactful ecological solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#21204C] mb-2">Vibha Tripathi</h3>
            <p className="text-gray-600">
              Founder of Boond, she is a social entrepreneur focused on rural electrification and clean energy access. Her efforts have transformed numerous underserved communities.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Technical Experts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#21204C] mb-4">Technical Team</h3>
            <p className="text-gray-600">
              Our technical team consists of AI researchers, data scientists, and software engineers who work together to build and maintain our cutting-edge career development platform.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTeam;
