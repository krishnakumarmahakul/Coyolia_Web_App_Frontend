import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <>
    <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
    <div className="w-full h-[90vh] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <h2 className="text-3xl text-center text-[#2c3e50] mb-8 font-semibold">
        Our Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Consulting: AIML Adoption Consulting
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            We provide comprehensive consulting services to help organizations adopt and integrate Artificial Intelligence and Machine Learning (AIML) technologies into their business operations. Our team guides clients through strategy, implementation, and optimization, ensuring seamless integration and maximum ROI.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Forecasting and BI Consulting for SMB Segment (Manufacturing)
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Tailored forecasting and business intelligence consulting for SMBs in manufacturing. Using analytics, predictive modeling, and data visualization to drive data-based decisions and improve efficiency.
          </p>
        </div>
        {/* careerer */}
        <div className="bg-[#21204c] text-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Career Counseling
           </h3>
           <p className="text-[wheat] leading-relaxed">
             Niche, affordable and short term assignments on making your IT
             Department future ready.
           </p>
           <Link to="/services/career-counseling">
             <button className="mt-6 inline-block bg-gradient-to-r from-[goldenrod] to-[#ffd700] text-[#21204c] font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-[#ffd700] hover:to-[goldenrod] w-full sm:w-auto">
              Book a Session             </button>
           </Link>
         </div>

        {/* 3 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Talent Analytics and Consulting for SMB Segment (IT Industry)
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Comprehensive talent analytics and consulting for SMBs in IT. Analyzing workforce data to identify skill gaps and optimize talent management to boost engagement and performance.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Cloud Consulting (AWS)
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Helping clients navigate cloud computing on AWS, including strategy, architecture, migration planning, and ongoing optimization to maximize cloud benefits.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Incubation: Startup Incubator Hub Creation in Academia
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Collaborating with academic institutions to establish startup incubators, providing resources, mentorship, and networking to foster innovative tech startups.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Product Consulting: Kloudmate, Flowtrack, etc.
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Consulting on cloud-based products like Kloudmate and Flowtrack to streamline business operations, improve productivity, and enable digital transformation.
          </p>
        </div>

        {/* 7 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Startup Staffing: On-Demand Freelance Staffing
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Providing freelance staffing solutions for startups and SMEs in sales, HR, marketing, AI, and more, with a flexible, curated talent pool.
          </p>
        </div>

        {/* 8 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Training: Curriculum Design and Delivery
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Designing and delivering customized training curricula covering technical and soft skills to help organizations upskill their workforce.
          </p>
        </div>

        {/* 9 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Softskills Training
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Training focused on leadership, teamwork, communication, problem-solving, and emotional intelligence tailored to client needs.
          </p>
        </div>

        {/* 10 */}
        

        {/* 11 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            AIML/Data Science Training
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Training covering foundational to advanced AI, ML, and data analytics techniques, empowering participants to leverage data-driven innovation.
          </p>
        </div>

        {/* 12 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Generative AI, GenAI Tools, and Prompt Engineering
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Specialized training in generative AI technologies, including prompt engineering and using GenAI tools to automate tasks and create content.
          </p>
        </div>

        {/* 13 */}
        <div className="bg-[#21204c] text-white rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Teacher Transformation Training
          </h3>
          <p className="text-[wheat] leading-relaxed text-sm">
            Empowering educators with skills in technology integration, student-centered learning, and innovative teaching methodologies.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
