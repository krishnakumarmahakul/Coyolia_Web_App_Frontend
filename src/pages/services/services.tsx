import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="w-full h-[60vh] px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center text-[#2c3e50] mb-12 font-semibold">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#21204c] text-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Skill Development and Courses
          </h3>
          <p className="text-[wheat] leading-relaxed">
            Coyolia Technologies has custom made programs for both, rural and urban youth. We also have intense programs for mid career professionals who wish to upskill.
          </p>
        </div>
        <div className="bg-[#21204c] text-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Staff Augmentation
          </h3>
          <p className="text-[wheat] leading-relaxed">
            Specific, domain-based head hunting and different financial models for staff augmentation.
          </p>
        </div>
        <div className="bg-[#21204c] text-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Career Counseling
          </h3>
          <p className="text-[wheat] leading-relaxed">
            Niche, affordable and short term assignments on making your IT Department future ready.
          </p>
          <button className="mt-6 inline-block bg-gradient-to-r from-[goldenrod] to-[#ffd700] text-[#21204c] font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-[#ffd700] hover:to-[goldenrod] w-full sm:w-auto">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
