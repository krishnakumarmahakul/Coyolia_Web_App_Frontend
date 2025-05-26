import React from 'react';
import { motion } from 'framer-motion';

const InsightsEvents: React.FC = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="py-16 px-4"
    // >
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-4xl font-bold text-[#21204C] mb-8">Upcoming Events</h1>
    //     <p className="text-lg text-gray-600 mb-12">
    //       Stay updated with AmbarGlow’s latest webinars, career talks, and skill-development workshops. These events are designed to help you grow professionally and stay ahead in your career journey.
    //     </p>

    //     <div className="grid md:grid-cols-2 gap-8">
    //       {/* Event 1 */}
    //       <div className="bg-white p-6 rounded-lg shadow-lg">
    //         <h2 className="text-2xl font-semibold text-[#21204C] mb-2">AI Career Bootcamp</h2>
    //         <p className="text-sm text-gray-500 mb-2">📅 April 25, 2025 | 🕒 4:00 PM - 6:00 PM IST</p>
    //         <p className="text-gray-600">
    //           Join our exclusive AI Bootcamp to explore real-world applications of AI in the workplace. Ideal for students and early professionals.
    //         </p>
    //       </div>

    //       {/* Event 2 */}
    //       <div className="bg-white p-6 rounded-lg shadow-lg">
    //         <h2 className="text-2xl font-semibold text-[#21204C] mb-2">Webinar: Navigating Career Transitions</h2>
    //         <p className="text-sm text-gray-500 mb-2">📅 May 3, 2025 | 🕒 5:00 PM - 6:30 PM IST</p>
    //         <p className="text-gray-600">
    //           A panel discussion featuring HR experts and industry mentors to guide you through successful career pivots and upskilling strategies.
    //         </p>
    //       </div>

    //       {/* Event 3 */}
    //       <div className="bg-white p-6 rounded-lg shadow-lg">
    //         <h2 className="text-2xl font-semibold text-[#21204C] mb-2">Campus Hiring Connect</h2>
    //         <p className="text-sm text-gray-500 mb-2">📅 May 15, 2025 | 🕒 11:00 AM - 1:00 PM IST</p>
    //         <p className="text-gray-600">
    //           Connect with recruiters from top companies and understand hiring trends, internship opportunities, and expectations from fresh graduates.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
    <h1 className="text-5xl font-bold text-[#21204c] mb-4">
      Page Under Construction
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      Our team is currently working on this page. Please check back soon!
    </p>
    {/* Optional: Add a link/button to go back home */}
    <a
      href="/"
      className="inline-block px-6 py-3 bg-[#21204c] text-white rounded-md hover:bg-[#5a3e9a] transition"
    >
      Go to Home
    </a>
  </div>
  );
};

export default InsightsEvents;
