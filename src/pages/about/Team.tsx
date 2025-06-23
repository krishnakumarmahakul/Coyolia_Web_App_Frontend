import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import AvinashKulkarni from "../../assets/Avinash Kulkarni.jpg";
import RaviKant from "../../assets/Ravikanth Taduri.jpg";
import cto from "../../assets/Cto.jpg"; 
import aditya from "../../assets/Aditya Telkar.jpg"; 
import kanchan from "../../assets/kanchna.jpg"; 
import Chinmay from '../../assets/Chinmay.png'

const leadershipTeam = [
  {
    name: 'Avinash Kulkarni',
    description:
      'With 29 years of experience in leading global corporations like Xerox, Hitachi, RIL, and IL&FS, Avinash Kulkarni brings a wealth of expertise to Coyolia Technologies. His diverse background spans the not-for-profit sector and dynamic startup environments. Avinash is a recognized expert in cloud computing, IT infrastructure, sales training, and forging global alliances, driving innovation and success across various industries.',
    image: AvinashKulkarni,
    linkedin: 'https://www.linkedin.com/in/avinash-kulkarni-2257375/',
  },
  {
    name: 'Ravikanth Taduri',
    description:
      'With 21 years of experience in mid-market companies, Ravikanth Taduri has excelled as a Head of HR and business partner. Ravikanth specializes in developing and implementing SOPs, cultivating organisational culture, and building strong foundations for IT and ITES companies.',
    image: RaviKant,
    linkedin: 'https://www.linkedin.com/in/raviekant/',
  },
  {
    name: 'Aniruddha Deswandikar',
    description:
      'Seasoned technologist with 30 years of experience across startups, dotcoms, and large enterprises. Author of Engineering Data Mesh in Azure Cloud (https://a.co/d/4Xw62DQ). For 18 years, helped Microsoft’s enterprise clients and partners solve complex challenges through innovative architectures and scalable solutions. Led a Technology Showcase Center for a decade and managed senior teams of developers and architects. Known for fostering creativity, challenging the status quo, and aligning teams with strategic goals.',
    image: cto,
    linkedin: 'https://www.linkedin.com/in/anideswandikar/',
  },
];

const technicalExperts = [
  {
    name: 'Aditya Telkar',
    description: 'Software Developer',
    image: aditya,
    linkedin: 'https://www.linkedin.com/in/aditya-telkar-a7a331263/', 
  },
  {
    name: 'Kanchana kulkarni',
    description: 'Training Manager',
    image: kanchan,
    linkedin: 'https://www.linkedin.com/in/dr-kanchana-kulkarni-72b602ba/', 
  },
  {
    name: 'Chinmay chittranjan',
    description: 'Presales Cloud Engineer',
    image: Chinmay,
    linkedin: 'https://www.linkedin.com/in/chinmayachittaranjanbarik/ ', 
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
              <div className="flex-1 flex flex-col justify-between h-full">
                <p className="text-gray-600 mb-4">{member.description}</p>
                {member.linkedin && (
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">{member.name}</span>
                    </a>
                  </div>
                )}
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
              <div className="flex-1 flex flex-col justify-between h-full">
                <p className="text-gray-600 mb-4">{expert.description}</p>
                {expert.linkedin && (
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={expert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">{expert.name}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTeam;
