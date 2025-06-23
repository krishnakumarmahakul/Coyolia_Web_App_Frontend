import React, { useState } from "react";
import { motion } from "framer-motion";
import AvinashKulkarni from "../assets/Avinash Kulkarni.jpg";
import RaviKant from "../assets/Ravikanth Taduri.jpg";
import cto from "../assets/Cto.jpg";

import {
  ArrowRight,
  Brain,
  Target,
  BarChart as ChartBar,
  BookOpen,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Services from "./services/services";
import Testimonies from "./Testimonials/Testimonies";
import Contactmail from "./Contactmail/Contactmail";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Curriculum Development Services",
      description:
        "AI-powered insights to match your skills and interests with the best career options.",
    },
    {
      icon: ChartBar,
      title: "Professional Services",
      description:
        "Track your skill development, job applications, and career progress.",
    },
    {
      icon: Target,
      title: "AI Solutions",
      description:
        "Automate hiring and talent acquisition with smart AI tools.",
    },
    {
      icon: BookOpen,
      title: "HR and Recruitment Analytics",
      description:
        "Access curated resources and mentorship programs to enhance your skills.",
    },
  ];

  const founders = [
    {
      name: "Avinash Kulkarni",
      title: "Founder & CEO",
      image: AvinashKulkarni,
      description:
        "With 29 years of experience in leading global corporations like Xerox, Hitachi, RIL, and IL&FS, Avinash Kulkarni brings a wealth of expertise to Coyolia Technologies. His diverse background spans the not-for-profit sector and dynamic startup environments. Avinash is a recognized expert in cloud computing, IT infrastructure, sales training, and forging global alliances, driving innovation and success across various industries.",
      linkedin: "https://www.linkedin.com/in/avinash-kulkarni-2257375/",
    },
    {
      name: "Ravikanth Taduri",
      title: "Co-Founder & HR Head",
      image: RaviKant,
      description:
        "With 21 years of experience in mid-market companies, Ravikanth Taduri has excelled as a Head of HR and business partner. Ravikanth specializes in developing and implementing SOPs, cultivating organisational culture, and building strong foundations for IT and ITES companies.",
      linkedin: "https://www.linkedin.com/in/raviekant/",
    },
    {
      name: "Aniruddha Deswandikar ",
      title: "Chief Technology Officer",
      image: cto,
      description:
        "Seasoned technologist with 30 years of experience across startups, dotcoms, and large enterprises. Author of Engineering Data Mesh in Azure Cloud (https://a.co/d/4Xw62DQ). For 18 years, helped Microsoft’s enterprise clients and partners solve complex challenges through innovative architectures and scalable solutions. Led a Technology Showcase Center for a decade and managed senior teams of developers and architects. Known for fostering creativity, challenging the status quo, and aligning teams with strategic goals.",
      linkedin: "https://www.linkedin.com/in/anideswandikar/",
    },
  ];
  const handleScrollUp = () => {
    // Wait a moment to ensure DOM is updated
    setTimeout(() => {
      const frontElement = document.querySelector('.front-component-class'); // Replace with real class
      const frontBottom = frontElement
        ? frontElement.getBoundingClientRect().bottom + window.scrollY
        : window.innerHeight;
  
      const scrollPosition = frontBottom + 20; // Add small buffer below
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }, 50);
  };
  
  
  
 
  const ReadMore = ({ text, limit = 200 }: any) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <>
        <p className="text-sm text-gray-600">
          {expanded ? text : `${text.slice(0, limit)}...`}
        </p>
        {text.length > limit && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-[#7655b7] mt-2 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r h-[80vh] from-[#21204C] to-[#7655b7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                COYOLIA
                <br />
                <span className="text-2xl md:text-3xl font-medium ">
                  Cohort Of Young Leaders In Action
                </span>
              </h1>

              <p className="text-xl mb-8">
                Powering Workforce Agility Through AI, Analytics, and Skilling
              </p>
              <div className="space-x-4">
              <button
  onClick={handleScrollUp}
  className="bg-[#7655b7] hover:bg-[#634a99] px-6 py-3 rounded-full inline-flex items-center transition-colors"
>
  Get Started
  <ArrowRight className="ml-2 w-5 h-5" />
</button>

                <Link
                  to="/about"
                  className="border border-white hover:bg-white hover:text-[#21204C] px-6 py-3 rounded-full inline-flex items-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#21204C] mb-4">
              Transform Your Career with AI
            </h2>
            <p className="text-xl text-gray-600">
              Discover how our AI-powered solutions can help you achieve your
              career goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#7655b7] mb-4" />
                <h3 className="text-xl font-semibold text-[#21204C] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#f5f7fa] to-[#e4e7eb] text-[#21204C]">
        <div className="max-w-6xl mx-auto grid gap-16 text-center">
          {[
            {
              title: "Our Vision",
              text: "At Coyolia Technologies, our vision is to create a world of abundant opportunities for youth by leveraging the power of the Digital Public Goods Alliance. We aim to harness Indian and open-source IP to tackle global challenges, reduce corruption, and empower communities worldwide.",
            },
            {
              title: "Our Mission",
              text: "As Digital Ambassadors, Coyolia Technologies will champion open-source community projects in India and beyond. Collaborating with the Government of India and DPGA, we will promote these solutions in new regions, infuse innovative skills and training for youth in Ethiopia, India, and African Union members, and support open standards-based technologies to foster a zero-corruption environment. We stay local while integrating global best practices.",
            },
            {
              title: "Our Values",
              text: "Coyolia Technologies embodies energy, youthful enthusiasm, cultural collaboration, fearless competition, and strong Indo-African friendship. As Digital Ambassadors, Coyolia Technologies will champion open-source community projects in India and beyond. Collaborating with the Government of India and DPGA, we will promote these solutions in new regions, infuse innovative skills and training for youth in India, the Middle East and African Union members, and support open standards-based technologies to foster a positive and ethical environment. We stay local while integrating global best practices.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-4xl font-bold mb-4 inline-block px-6 py-2 border-2 border-[#21204C] rounded-full hover:bg-[#21204C] hover:text-white transition-all cursor-pointer"
              >
                {item.title}
              </motion.h2>
              <p className="text-lg max-w-4xl mx-auto">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Services />


      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg-texture.png")',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex justify-center relative mb-12 group">
            
            <div className="absolute top-0 left-[33%] w-1 h-12 bg-[#21204C] z-10"></div>
            <div className="absolute top-0 right-[33%] w-1 h-12 bg-[#21204C] z-10"></div>

            
            <motion.div
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
              className="w-full bg-white border-4 border-[#7655b7] rounded-3xl shadow-2xl px-8 py-10 relative z-20"
            >
              
              <div className="absolute -top-4 left-10 w-4 h-4 bg-[#7655b7] rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute -top-4 right-10 w-4 h-4 bg-[#21204C] rounded-full border-2 border-white shadow-md"></div>

              
              <h2 className="text-5xl font-extrabold text-center mb-12">
                <span className="bg-gradient-to-r from-[#7655b7] to-[#21204C] text-transparent bg-clip-text">
                  Our Founders
                </span>
              </h2>

              
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }, 
                }}
              >
                {founders.map((founder, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-[#f8f7fc] shadow-md rounded-xl p-6 text-center h-full flex flex-col justify-between">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-1 text-[#21204C]">
                        {founder.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {founder.title}
                      </p>
                      <ReadMore text={founder.description} />
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-[#0077B5] hover:text-[#005582] font-medium mt-3"
                      >
                        <Linkedin className="w-5 h-5 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>
      <Testimonies />
      <Contactmail />
    </motion.div>
  );
};

export default Home;
