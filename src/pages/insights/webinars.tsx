import React from 'react';
import { motion } from 'framer-motion';

const Webinars: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'Building a Future-Ready Career with AI & Tech',
      date: 'April 30, 2025',
      time: '5:00 PM - 6:30 PM IST',
      description: 'Learn how emerging technologies are reshaping the job market and how you can position yourself with the right skills and mindset.',
    },
    {
      title: 'Resume Masterclass: Stand Out in 6 Seconds',
      date: 'May 10, 2025',
      time: '3:00 PM - 4:30 PM IST',
      description: 'Discover how to craft a compelling resume that catches the eye of recruiters and passes through ATS filters effectively.',
    },
    {
      title: 'LinkedIn for Career Growth',
      date: 'May 20, 2025',
      time: '6:00 PM - 7:00 PM IST',
      description: 'This session covers powerful tips to optimize your LinkedIn profile, grow your network, and attract job opportunities and professional connections.',
    },
  ];

  const pastWebinars = [
    {
      title: 'Cracking the Interview: HR Insider Tips',
      date: 'March 15, 2025',
      time: '4:00 PM - 5:30 PM IST',
      description: 'Learn top strategies to impress interviewers, avoid common mistakes, and communicate your strengths effectively.',
    },
    {
      title: 'Personal Branding for Students & Freshers',
      date: 'February 28, 2025',
      time: '5:00 PM - 6:00 PM IST',
      description: 'Explore how to build your online presence and present your unique value as a job candidate and thought leader.',
    },
    {
      title: 'Career Planning 101: What to Do in College',
      date: 'January 10, 2025',
      time: '2:00 PM - 3:30 PM IST',
      description: 'From internships to online courses, learn how to make the most of your college years for a solid career foundation.',
    },
  ];

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="py-16 px-4"
    // >
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-4xl font-bold text-[#21204C] mb-8">Webinars</h1>

    //     {/* Upcoming Webinars */}
    //     <section className="mb-16">
    //       <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Upcoming Webinars</h2>
    //       <div className="grid md:grid-cols-2 gap-8">
    //         {upcomingWebinars.map((webinar, index) => (
    //           <div
    //             key={index}
    //             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    //           >
    //             <h3 className="text-2xl font-semibold text-[#21204C] mb-2">{webinar.title}</h3>
    //             <p className="text-sm text-gray-500 mb-2">📅 {webinar.date} | 🕒 {webinar.time}</p>
    //             <p className="text-gray-600">{webinar.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     {/* Past Webinars */}
    //     <section>
    //       <h2 className="text-3xl font-semibold text-[#21204C] mb-6">Past Webinars</h2>
    //       <div className="grid md:grid-cols-2 gap-8">
    //         {pastWebinars.map((webinar, index) => (
    //           <div
    //             key={index}
    //             className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
    //           >
    //             <h3 className="text-2xl font-semibold text-[#21204C] mb-2">{webinar.title}</h3>
    //             <p className="text-sm text-gray-500 mb-2">📅 {webinar.date} | 🕒 {webinar.time}</p>
    //             <p className="text-gray-600">{webinar.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
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

export default Webinars;
