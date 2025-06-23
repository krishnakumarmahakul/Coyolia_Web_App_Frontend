import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FreeSessionBrief = () => {
  const navigate = useNavigate();
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleLoginClick = () => {
  //   navigate("/services/counselor-login"); // ✅ Correct route
  // };

  return (
    <div className="p-6 md:p-12 bg-gray-50 text-[#21204C] space-y-12">
      {/* Header with Counselor Login */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#7655b7]">Career Counseling</h1>
        {/* <button
  onClick={handleLoginClick}
  className="flex items-center gap-3 bg-[#7655b7] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-[#6346a3] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Example image (counselor icon)
    alt="login"
    className="w-5 h-5 rounded-full"
  />
  <span>Counselor Login</span>
</button> */}
      </div>

      {/* Section: Free Session Overview (Clickable) */}
      <section
        onClick={scrollToBooking}
        className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#21204c]">
          Free 15-Minute Counseling Session
        </h2>
        <p className="text-lg mb-4">
          Unlock clarity and direction in just 15 minutes! Our free introductory
          session is designed to give parents and students a quick, yet powerful
          insight into the career counseling process.
        </p>
        <h3 className="text-xl font-semibold mb-2">🔍 What You’ll Gain:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Understand your child’s potential and key interest areas</li>
          <li>
            Clarify doubts about career options after 10th/12th or graduation
          </li>
          <li>Personalized feedback from a certified counselor</li>
          <li>Actionable tips on how to move forward with career planning</li>
        </ul>
        <p className="mt-4 text-sm italic text-gray-500">
          No cost. No pressure. Just clarity and care from someone who’s been
          there.
        </p>
      </section>

      {/* Section: Sruti's Profile */}
      <section className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-[#7655b7]">
          Meet Sruti – Your Career Coach
        </h2>
        <p className="mb-3">
          Sruti is a passionate and experienced career counselor with over{" "}
          <strong>7+ years</strong> in guiding students toward the right
          academic and professional paths. With a background in psychology and
          career development, she’s known for her empathetic approach and
          data-driven guidance.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Certified Career Coach & Psychometric Analyst</li>
          <li>Has counseled 1200+ students across India</li>
          <li>
            Specialist in helping students identify their strengths and career
            roadmap
          </li>
          <li>Guest speaker at multiple career summits and webinars</li>
        </ul>
      </section>

      {/* Section: FAQs */}
      <section className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-[#7655b7]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Is the session really free?</h3>
            <p className="text-gray-700">
              Yes! The 15-minute session is 100% free with no strings attached.
              It’s meant to give you an idea of what full counseling looks like.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              2. Do I need to prepare anything before the session?
            </h3>
            <p className="text-gray-700">
              Not at all. Just come with an open mind and a willingness to
              explore possibilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              3. Can my child also attend the session?
            </h3>
            <p className="text-gray-700">
              Absolutely. In fact, we recommend the student be present along
              with the parent for best results.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-[#7655b7]">
          What Parents Say
        </h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 border-[#7655b7] italic">
            “Sruti’s advice was the wake-up call we needed. We finally saw where
            our son’s strengths truly lie. Thank you for your calm, clear
            guidance.”
            <div className="mt-2 font-semibold">
              – Ananya, Parent of Class 12 Student
            </div>
          </blockquote>
          <blockquote className="border-l-4 pl-4 border-[#7655b7] italic">
            “I wish we had found her earlier. The free session opened our eyes
            to career options we never considered.”
            <div className="mt-2 font-semibold">
              – Ravi Kumar, Parent from Hyderabad
            </div>
          </blockquote>
        </div>
      </section>

      {/* Section: CTA/Booking - This is the Target of Scroll */}
      <section
        ref={bookingRef}
        className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#7655b7]">
          Ready to Discover the Right Path?
        </h2>
        <p className="text-lg mb-6">
          Book your <strong>free 15-minute career counseling session</strong>{" "}
          now and get expert guidance from Sruti.
        </p>
        <button
          onClick={() => navigate("/services/sessionbooking")}
          className="bg-[#7655b7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6346a3] transition duration-300 shadow-md"
        >
          Book Free 15-min Session
        </button>
        
        <button
          onClick={() => navigate("/services/paidsessioninitial")}
          className=" ml-4 bg-[#7655b7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6346a3] transition duration-300 shadow-md"
        >
             Book 1 Hour Paid Session
        </button>
      </section>
    </div>
  );
};

export default FreeSessionBrief;
