import React from 'react';

const Solution: React.FC = () => {
  return (
    <div className="bg-[#f9f9fb] text-[#21204C] px-6 md:px-20 py-16 space-y-16">
      {[
        {
          title: 'Curriculum Development Services',
          content: [
            'At Coyolia, our Content and Curriculum Development Services are designed to equip youth and professionals with industry-relevant, future-ready skills. Rooted in our commitment to open-source technologies and digital empowerment, we create tailored learning modules that align with current market needs in sectors like Business Process Management, Cloud computing, IoT, Data Analytics, and Artificial Intelligence.',
            'Our curriculum emphasizes hands-on, experiential learning, combining theory with real-world applications to enhance employability and foster innovation. Whether it\'s a foundational digital literacy course or an advanced tech skill program, each offering is structured to deliver measurable outcomes and lifelong value.',
            'What sets Coyolia apart is our focus on local context and global relevance. We co-create content with educators, industry experts, and community partners to ensure cultural resonance and inclusivity. Our multilingual and multimedia-rich modules are accessible across diverse learning environments — rural, urban, and online — making them ideal for government skilling missions, CSR initiatives, and corporate L&D programs.'
          ]
        },
        {
          title: 'Professional Services',
          content: [
            'Coyolia’s professional services are uniquely powered by ZeroNP (Zero Notice Period), a pioneering concept that redefines the speed and efficiency of hiring.',
            'In today’s fast-paced business environment, companies often face critical delays due to extended notice periods of potential hires. ZeroNP solves this by maintaining a ready pool of pre-vetted professionals who are available to join immediately, without compromising on the quality of experience or background verification. This ensures that organizations can scale their teams rapidly with trusted talent, minimizing downtime and accelerating project delivery.',
            'What makes ZeroNP stand out is its focus on legitimacy, agility, and domain relevance. Every candidate undergoes rigorous screening for skills, experience, and cultural fit, ensuring they are not just quick hires — but the right hires. Ideal for startups, SMEs, and fast-growing tech firms, our model supports roles across IT, digital transformation, cloud, and data domains. By eliminating the traditional bottlenecks in recruitment, we empower businesses to stay ahead of demand while ensuring quality talent integration from day one.'
          ]
        },
        {
          title: 'AI Solutions',
          content: [
            'Our AI and Data Analytics Consulting Services empower organizations to make smarter, faster decisions by integrating cutting-edge technologies like intelligent chatbots, real-time data processing, and workflow automation. Our solutions are purpose-built to enhance the effectiveness of Sales, HR, and Customer Service teams by transforming raw consumer data into actionable insights. By combining conversational AI with predictive analytics, businesses can personalize engagement, anticipate customer needs, and streamline internal operations — all while maintaining a human-centric approach.',
            'At Coyolia, we treat AI and data analytics not just as tools, but as strategic assets. For Sales teams, we provide data-driven lead scoring and intelligent assistant tools that boost productivity and improve conversions. In HR, advanced analytics help optimize recruitment, employee retention, and workforce planning, while AI automates key tasks like resume screening and onboarding. Customer Service benefits from predictive support systems and AI chatbots that resolve queries quickly, improving satisfaction and reducing operational costs. Our end-to-end consulting ensures that every solution is secure, scalable, and aligned with your long-term business objectives.'
          ]
        },
        {
          title: 'HR and Recruitment Analytics',
          content: [
            'Coyolia’s HR & Recruitment Analytics solutions are designed to provide deep, data-driven visibility into the entire talent lifecycle — from sourcing to retention. By aggregating and analyzing key HR and recruitment metrics, we help HR leaders, People Managers, Recruiters, Hiring Managers, and other key stakeholders with real-time dashboards and insights that support informed, intelligent decision-making. Whether it\'s tracking hiring funnel efficiency, identifying bottlenecks, or understanding workforce trends, our analytics empower organizations to stay agile and aligned with their talent goals.',
            'What sets our solution apart is its ability to turn data into strategy. With customizable KPIs, predictive models, and visual insights, stakeholders can monitor recruitment performance, assess diversity and inclusion goals, forecast attrition risks, and optimize workforce planning. Coyolia’s HR & Recruitment Analytics ensures not just reporting, but strategic enablement — helping companies build resilient, data-literate HR functions that proactively respond to business needs while enhancing employee experience and organizational growth.'
          ]
        }
      ].map((section, index) => (
        <section key={index} className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7955b7]">
            {section.title}
          </h2>
          {section.content.map((para, idx) => (
            <p key={idx} className="text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Solution;
