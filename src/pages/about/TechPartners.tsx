
import React from 'react';
import { motion } from 'framer-motion';

import hhh_logo from '../../assets/hhh-logo.png';
import intense from '../../assets/intenseTechnology.jpg';
import egov from '../../assets/eGov-logo.png';
import Changemakers from '../../assets/changemakers.png';
import iitm from '../../assets/pravarta.jpeg';
import ingram from '../../assets/ingram.png';
import kloudmate from '../../assets/kloudmate.svg';
import Centurion from '../../assets/Centurion.png';
import datamedow from '../../assets/datamedaos.png';


const partners = [
  {
    title: 'Head Held High Foundation, Bangalore',
    description: `Major not-for-profit partner working with CSR donors, NASSCOM, and others for youth-focused skill development.`,
    logo: hhh_logo,
  },
  {
    title: 'Intense Tech Ltd',
    description: `Partner for govt-funded bridge courses focused on low-code/no-code, AI/ML, AWS, MERN, and cloud programs.`,
    logo: intense,
  },
  {
    title: 'E-Government Foundation, Bangalore',
    description: `Custodian of the DIGIT stack, supporting open-source implementation in urban local bodies.`,
    logo: egov,
  },
  {
    title: 'We The Changemakers, Netherlands',
    description: `Provides global best practices and promotes peace-tech and ed-tech for employment enhancement.`,
    logo: Changemakers,
  },
  {
    title: 'IITM Pravartak, Chennai',
    description: `Consulting in quantum computing, cybersecurity, and AI/ML analytics courses.`,
    logo: iitm,
  },
  {
    title: 'Ingram Micro',
    description: `Supports AWS cloud migration, modernization, and managed services.`,
    logo: ingram,
  },
  {
    title: 'Kloudmate',
    description: `India-made app observability and log monitoring tool using OpenTelemetry, supports multi-cloud environments.`,
    logo: kloudmate,
  },
  {
    title: 'Centurion University, Vizianagaram',
    description: `Collaborating to reshape engineering courses with NSDC Academy-led online programs.`,
    logo: Centurion,
  },
  {
    title: 'Data Meadows, Hyderabad',
    description: `BI and data analytics company offering both proprietary and open-source reporting solutions.`,
    logo: datamedow,
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
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#7655b7] transition-all flex flex-col items-start gap-4"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className="h-20 max-w-[140px] object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#21204C] mb-2">{partner.title}</h2>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsTechPartners;
