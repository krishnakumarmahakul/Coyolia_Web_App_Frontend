import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    title: 'Head Held High Foundation, Bangalore',
    description: `Major not-for-profit partner working with CSR donors, NASSCOM, and others for youth-focused skill development.`,
  },
  {
    title: 'Intense Tech Ltd',
    description: `Partner for govt-funded bridge courses focused on low-code/no-code, AI/ML, AWS, MERN, and cloud programs.`,
  },
  {
    title: 'E-Government Foundation, Bangalore',
    description: `Custodian of the DIGIT stack, supporting open-source implementation in urban local bodies.`,
  },
  {
    title: 'We The Changemakers, Netherlands',
    description: `Provides global best practices and promotes peace-tech and ed-tech for employment enhancement.`,
  },
  {
    title: 'IITM Pravartak, Chennai',
    description: `Consulting in quantum computing, cybersecurity, and AI/ML analytics courses.`,
  },
  {
    title: 'Ingram Micro',
    description: `Supports AWS cloud migration, modernization, and managed services.`,
  },
  {
    title: 'Kloudmate',
    description: `India-made app observability and log monitoring tool using OpenTelemetry, supports multi-cloud environments.`,
  },
  {
    title: 'Centurion University, Vizianagaram',
    description: `Collaborating to reshape engineering courses with NSDC Academy-led online programs.`,
  },
  {
    title: 'Data Meadows, Hyderabad',
    description: `BI and data analytics company offering both proprietary and open-source reporting solutions.`,
  },
];

const ClientsTechPartners = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 bg-[#f9f9fc]"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Technology & Strategic Partners</h1>
        <p className="text-xl text-gray-600 mb-12">
          Our collaborations span global institutions, cloud providers, ed-tech leaders, and innovative startups to deliver impact-driven skill development and career readiness solutions.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#7655b7] transition-all"
            >
              <h2 className="text-xl font-semibold text-[#21204C] mb-2">{partner.title}</h2>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsTechPartners;
