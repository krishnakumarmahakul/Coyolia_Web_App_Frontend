import { motion } from "framer-motion";

const AboutUsSection = () => {
  const sections = [
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
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#f5f7fa] to-[#e4e7eb] text-[#21204C]">
      <div className="max-w-6xl mx-auto grid gap-16 text-center">
        {sections.map((item, idx) => (
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
  );
};

export default AboutUsSection;
