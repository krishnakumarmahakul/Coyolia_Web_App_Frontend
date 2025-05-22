import { motion } from "framer-motion";

const AboutUsSection = () => {
  const sections = [
    {
      title: "Our Vision",
      text: "We envision a world full of opportunity, powered by digital public goods and open-source innovation. At Coyolia Technologies, we aim to reduce corruption, tackle global challenges, and uplift communities through Indian and global IP.",
    },
    {
      title: "Our Mission",
      text: "As Digital Ambassadors, we support and scale open-source projects by collaborating with the Government of India and DPGA. We're committed to skill-building programs for youth in Ethiopia, India, and African Union nations.",
    },
    {
      title: "Our Values",
      text: "Our spirit thrives on youth-driven energy, fearless innovation, and Indo-African friendship. We champion cultural exchange, tech education, and ethical development of open-source technologies across borders.",
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
