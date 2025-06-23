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
import aiera from '../../assets/AI Era Logo.jpg';
import idpbt from '../../assets/IDRBT Logo.jpg';
import infynix from '../../assets/infynix logo.png';
import mentor from '../../assets/MentorMe-logo.svg';
import metisoft from '../../assets/Metisoft-Logo.png';
import obulreddy from '../../assets/Obul_reddy_school_logo.png';
import techoptima from '../../assets/techoptima logo.png';
import aws from '../../assets/aws.png'
import Vishwa from '../../assets/Vishwa.png'


const partners = [
  {
    title: 'Head Held High Foundation, Bangalore',
    description: `Major not-for-profit partner working with CSR donors, NASSCOM, and others for youth-focused skill development.`,
    logo: hhh_logo,
    link: 'https://head-held-high.org/',
  },
  {
    title: 'Intense Technologies',
    description: `Partner for govt-funded bridge courses focused on low-code/no-code, AI/ML, AWS, MERN, and cloud programs.`,
    logo: intense,
    link: 'https://www.in10stech.com/',
  },
  {
    title: 'E-Government Foundation, Bangalore',
    description: `Custodian of the DIGIT stack, supporting open-source implementation in urban local bodies.`,
    logo: egov,
    link: 'https://egov.org.in/',
  },
  {
    title: 'We The Changemakers, Netherlands',
    description: `Provides global best practices and promotes peace-tech and ed-tech for employment enhancement.`,
    logo: Changemakers,
    link: 'https://wearechangemakers.org/',
  },
  {
    title: 'IITM Pravartak, Chennai',
    description: `Consulting in quantum computing, cybersecurity, and AI/ML analytics courses.`,
    logo: iitm,
    link: 'https://pravartak.org.in/',
  },
  {
    title: 'Ingram Micro',
    description: `Supports AWS cloud migration, modernization, and managed services.`,
    logo: ingram,
    link: 'https://www.ingrammicro.com/',
  },
  {
    title: 'Kloudmate',
    description: `India-made app observability and log monitoring tool using OpenTelemetry, supports multi-cloud environments.`,
    logo: kloudmate,
    link: 'https://kloudmate.com/',
  },
  {
    title: 'Centurion University, Vizianagaram',
    description: `Collaborating to reshape engineering courses with NSDC Academy-led online programs.`,
    logo: Centurion,
    link: 'https://cutm.ac.in/',
  },
  {
    title: 'Data Meadows, Hyderabad',
    description: `BI and data analytics company offering both proprietary and open-source reporting solutions.`,
    logo: datamedow,
    link: 'https://datameadows.com/',
  },
  {
    title: 'AI Era',
    description: 'Driving innovation in artificial intelligence and data science through practical applications and research.',
    logo: aiera,
    link: 'https://www.aiera.com/', // Replace with the correct URL if needed
  },
  {
    title: 'IDRBT',
    description: 'Institute for Development and Research in Banking Technology—focused on banking tech and cybersecurity.',
    logo: idpbt,
    link: 'https://www.idrbt.ac.in/', // Official site for IDRBT
  },
  {
    title: 'Infynix',
    description: 'Technology partner providing cutting-edge solutions in software development and digital transformation.',
    logo: infynix,
    link: 'https://infynix.com/', // Replace with actual URL if different
  },
  {
    title: 'MentorMe',
    description: 'Ed-tech platform offering mentorship and career guidance for students and professionals.',
    logo: mentor,
    link: 'https://mentormecareers.com/', // Official site
  },
  {
    title: 'Metisoft',
    description: 'Providing enterprise software and digital solutions across industries.',
    logo: metisoft,
    link: 'https://www.metisoft.in/', // Italian company – confirm if this is the right one
  },
  {
    title: 'Obul Reddy Public School',
    description: 'Partnering for digital literacy and smart education initiatives in primary and secondary education.',
    logo: obulreddy,
    link: 'https://www.amsporps.org/', // Official site
  },
  {
    title: 'Techoptima',
    description: 'Emerging technology partner focusing on cloud, DevOps, and software innovation.',
    logo: techoptima,
    link: 'https://techoptima.in/', // Confirm or update as needed
  },
  {
    title: 'Amazon Web Services (AWS)',
    description: 'Global cloud service provider supporting scalable computing, storage, and infrastructure solutions.',
    logo: aws,
    link: 'https://aws.amazon.com/',
  },
  {
    title: 'Vishwa Vishwani Institute of Systems and Management',
    description: 'Academic partner enabling industry-aligned training and certification programs for students.',
    logo: Vishwa,
    link: 'https://www.vishwavishwani.ac.in/',
  }
  
  

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
            <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline h-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white h-full rounded-xl shadow-md p-6 border-t-4 border-[#7655b7] transition-all flex flex-col justify-between"
            >
              <div className="w-full flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className="h-20 max-w-[140px] object-contain"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-[#21204C] mb-2">{partner.title}</h2>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </motion.div>
          </a>
          
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsTechPartners;

