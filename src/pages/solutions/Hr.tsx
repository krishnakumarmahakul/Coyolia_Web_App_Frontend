import React from 'react';

const HR: React.FC = () => {
  return (
    <section className="h-[90vh] p-[100px] shadow-lg box-border rounded-[14px] space-y-6  flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#7955b7]">
        HR and Recruitment Analytics
      </h2>
      <p className="text-lg leading-relaxed">
        Coyolia's HR & Recruitment Analytics solutions are designed to provide deep, data-driven visibility into the entire talent lifecycle — from sourcing to retention.
      </p>
      <p className="text-lg leading-relaxed">
        What sets our solution apart is its ability to turn data into strategy. With customizable KPIs, predictive models, and visual insights, stakeholders can monitor recruitment performance and optimize workforce planning.
      </p>
    </section>
  );
};

export default HR;
