import React from 'react';
import { motion } from 'framer-motion';
import coyoliaLogo from '../../assets/CoyoliaPrimarylogo.avif';

const InsightsEvents: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#e1d1ff] font-sans text-gray-800"
    >
      {/* Header */}
      {/* <header className="flex justify-start items-center gap-8 p-5 bg-white border-b border-gray-300">
        <img 
          src={coyoliaLogo} 
          alt="coyolia logo" 
          className="h-10 w-[109px]"
        />
      </header> */}

      {/* Hero Section */}
      <section className="text-center py-10 px-5 bg-gradient-to-br from-[#26255f] to-[#7655b7]">
        <div className="inline-block bg-[#d8e9ff] px-4 py-2 rounded-full mb-4 font-bold text-[#004aad]">
          July 8th , 2025 · Hybrid Event
        </div>
        <h1 className="text-4xl my-2">
          <strong>EDM Webinar</strong>: <span className="text-white">Cloud Migration</span>
        </h1>
        <p className="text-lg mt-2 text-[#f0f0f0]">
          Transform your legacy and on-premise applications to the cloud with expert guidance from industry leaders
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfL-bNpgy7P_rK-plcFkFq9eQnzkhj2FD4zIZqCQuqtMkKztA/viewform?usp=dialog" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 font-bold text-white bg-[#7655b7] rounded-lg hover:bg-[#0061aa] transition-colors"
        >
          Register Now – It's Free!
        </a>
      </section>

      {/* Event Details */}
      <section className="py-10 px-5 text-center">
        <h2 className="mb-8 text-2xl">Event Details</h2>
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Date</h3>
            <p>July 8th , 2025<br />(Tuesday)</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Time</h3>
            <p>4:00 PM – 5:00 PM IST</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Venue</h3>
            <p>Apeejay Business Centre<br />Park Hotel, Somajiguda, Hyderabad</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Format</h3>
            <p>Hybrid (In-person + Zoom)</p>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-10 px-5 text-center">
        <h2 className="mb-8 text-2xl">Expert Speakers</h2>
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Avinash Kulkarni</h3>
            <p><strong> CEO ,Coyolia Technologies</strong><br />Industry Expert</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Ravikanth Taduri</h3>
            <p><strong>Co-Founder, Data Meadows</strong><br />Industry Expert</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Aniruddha Deswandikar</h3>
            <p><strong>CTO, Coyolia Technologies</strong><br />AWS SME</p>
          </div>
          <div className="bg-white p-5 rounded-xl w-64 shadow-sm">
            <h3 className="mb-1">Naveen Andey</h3>
            <p><strong> COO, Data Meadows</strong><br />Cloud BI Expert</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 px-5 text-center">
        <h2 className="mb-8 text-2xl">What You'll Learn</h2>
        <p className="mb-4">
          Get expert insights on migrating your legacy and on-premise applications to the cloud
        </p>
        <ul className="text-left inline-block list-none pl-0">
          <li className="py-1 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0077c0]">
            Legacy application modernization strategies
          </li>
          <li className="py-1 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0077c0]">
            On-premise to cloud migration best practices
          </li>
          <li className="py-1 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0077c0]">
            Cost optimization and security considerations
          </li>
          <li className="py-1 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0077c0]">
            Real-world case studies and success stories
          </li>
        </ul>
      </section>

      {/* About */}
      <section className="py-10 px-5 text-center">
        <h2 className="mb-8 text-2xl">About Data Meadows</h2>
        <p className="max-w-2xl mx-auto">
          Data Meadows is a cutting-edge cloud-based Business Intelligence tool designed to empower organizations with
          dashboarding, forecasting, and data-driven decision-making. Our platform turns raw data into actionable insights for the cloud era.
        </p>
      </section>

      {/* CTA */}
      <section className="py-10 px-5 text-center bg-gradient-to-r from-[#26255f] to-[#7655b7]">
        <h2 className="text-2xl mb-4">Ready to Transform Your Cloud Journey?</h2>
        <p className="mb-4 text-[#f0f0f0]">
          Don't miss this opportunity to learn from industry experts and get your free migration roadmap.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfL-bNpgy7P_rK-plcFkFq9eQnzkhj2FD4zIZqCQuqtMkKztA/viewform?usp=dialog" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 font-bold text-white bg-[#7655b7] rounded-lg hover:bg-[#0061aa] transition-colors"
        >
          Secure Your Spot Now →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0f0f0] text-center p-5 text-sm">
        &copy; 2025 Coyolia Technologies · Powered by AWS
      </footer>
    </motion.div>
  );
};

export default InsightsEvents;