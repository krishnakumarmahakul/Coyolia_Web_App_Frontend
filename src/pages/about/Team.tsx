import React from 'react';
import { motion } from 'framer-motion';

import AvinashKulkarni from "../../assets/Avinash Kulkarni.jpg";
import RaviKant from "../../assets/Ravikanth Taduri.jpg";
import cto from "../../assets/Cto.jpg"; 
import aditya from "../../assets/Aditya Telkar.jpg"; 
import kanchan from "../../assets/kanchna.jpg"; 

const leadershipTeam = [
  {
    name: 'Avinash Kulkarni',
    description:
      'With 29 years of experience in leading global corporations like Xerox, Hitachi, RIL, and IL&FS, Avinash Kulkarni brings a wealth of expertise to Coyolia Technologies. His diverse background spans the not-for-profit sector and dynamic startup environments. Avinash is a recognized expert in cloud computing, IT infrastructure, sales training, and forging global alliances, driving innovation and success across various industries.',
    image: AvinashKulkarni,
  },
  {
    name: 'Ravikanth Taduri',
    description:
      ' With 21 years of experience in mid-market companies, Ravikanth Taduri has excelled as a Head of HR and business partner. Ravikanth specializes in developing and implementing SOPs, cultivating organisational culture, and building strong foundations for IT and ITES companies',
    image: RaviKant,
  },
  {
    name: 'Aniruddha Deswandikar',
    description:
      'Seasoned technologist with 30 years of experience across startups, dotcoms, and large enterprises. Author of Engineering Data Mesh in Azure Cloud (https://a.co/d/4Xw62DQ). For 18 years, helped Microsoft’s enterprise clients and partners solve complex challenges through innovative architectures and scalable solutions. Led a Technology Showcase Center for a decade and managed senior teams of developers and architects. Known for fostering creativity, challenging the status quo, and aligning teams with strategic goals.',
    image: cto,
  },
];

const technicalExperts = [
  {
    name: 'Aditya Telkar',
    description:
      'Software Developer',
    image: aditya,
  },
  {
    name: 'Kanchana kulkarni',
    description:
      ' Training Manager',
    image: kanchan,
  },
];

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

        {/* Leadership Team */}
        <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex gap-4 items-start">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-[#21204C] mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Experts */}
        <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Technical Experts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {technicalExperts.map((expert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex gap-4 items-start">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#21204C] mb-1">{expert.name}</h3>
                <p className="text-gray-600">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTeam;
