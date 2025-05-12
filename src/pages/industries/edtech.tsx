import React from 'react';

const Editech: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-20" id="editech">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#21204C] mb-6 text-center">
          Empowering Education with Editech
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At Coyolia, we’re transforming the education landscape by leveraging cutting-edge technologies to enable personalized, scalable, and accessible learning experiences.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#f8f7fc] rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-[#7655b7] mb-2">Smart Learning Platforms</h3>
            <p className="text-gray-700">
              We build AI-enabled platforms that adapt to student needs, provide actionable insights to educators, and enhance learning outcomes.
            </p>
          </div>

          <div className="bg-[#f8f7fc] rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-[#7655b7] mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-700">
              From K-12 to higher education, our scalable cloud architectures support massive concurrent users without compromising speed or security.
            </p>
          </div>

          <div className="bg-[#f8f7fc] rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-[#7655b7] mb-2">Interactive Content Delivery</h3>
            <p className="text-gray-700">
              We develop intuitive content management systems with multimedia integration, gamification, and mobile-first accessibility.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Whether you're a university, edtech startup, or training provider, Coyolia delivers tech-driven solutions that drive engagement and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Editech;
