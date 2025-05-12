import React from 'react';
import { motion } from 'framer-motion';

const ClientsResellers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 min-h-screen px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#21204C] mb-8">Resellers</h1>
        <p className="text-xl text-gray-600 mb-8">
          Join COYOLIA's network of trusted resellers and help organizations transform their career development and talent acquisition processes with AI-powered solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Partner Benefits</h2>
            <p className="text-gray-600">
              Our reseller program offers competitive margins, comprehensive training, and dedicated support to help you succeed in the growing AI career development market.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#21204C] mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Discover how our resellers are helping organizations across different industries implement AI-powered career development solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsResellers;