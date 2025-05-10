import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AboutLeadership = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 bg-white text-[#21204C]"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 border-b-4 border-[#21204C] inline-block pb-2">
          Leadership Principles
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          COYOLIA's leadership principles guide our decision-making and shape our organizational culture. These principles reflect our commitment to innovation, excellence, and customer success.
        </p>

        <div className="space-y-6 text-base text-gray-700 leading-loose">
          <p>
          <FontAwesomeIcon icon={faPlay} /> Hire the best people and set them free. Each leader should become redundant by encouraging younger talent to move up, faster. Hire better people than yourself, set them free and don’t get into micro-management
          </p>
          <p>
          <FontAwesomeIcon icon={faPlay} /> Be a trusted advisor to customers and partners. Always choose truth and convey it upfront irrespective of the costs
          </p>
          <p>
          <FontAwesomeIcon icon={faPlay} /> We are not here to win popularity polls. We earn trust, win the business and make all stakeholders happy with wealth creation
          </p>
          <p>
          <FontAwesomeIcon icon={faPlay} /> All our products and services must enhance quality of life for youth
          </p>
          <p>
          <FontAwesomeIcon icon={faPlay} /> We are responsible for our vendors profitability and contribute to their sustainability
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutLeadership;
