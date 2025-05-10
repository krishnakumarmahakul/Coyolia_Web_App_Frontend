import React from "react";
import { motion } from "framer-motion";

const AboutCulture = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 px-4 bg-white text-[#21204C]"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 border-b-4 border-[#21204C] inline-block pb-2">
          Our Culture
        </h1>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          • We will fight the “fake busy “culture that has emerged as number one
          killer of all startups, entrepreneurship in India. People who assume
          that they are privileged to occupy GM/VP/director positions and hence
          use the phrase “we are busy, we will come back to you next
          year/month”. Being “fake busy” means avoiding innovation, never
          accepting solutions that can solve their own problems, avoiding work,
          avoiding calls from qualified startups, seeking regulator or govt
          approval for new technology, afraid of upsetting status quo.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Innovation First
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              • We don’t want the “approval seeking” working habits of any
              employee. We want every employee to use their confidence,
              knowledge and meet the customer/partner needs first, without
              waiting for approvals. The organization will back them when there
              are losses/ mistakes, allow them to learn and adapt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Collaborative Spirit
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              • Think big, start small, move fast. Fail fast and fail safe
              without any fear.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Growth Mindset
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              • We welcome diversity of all hues, age, gender, and locations to
              work with us, without any barrier
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Growth Mindset
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              • Invest 10% of the working time in training, upskilling and
              enhancement of knowledge
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCulture;
