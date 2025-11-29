import React from 'react';
import StepCard from '../ui/StepCard';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-20 text-slate-900">
          Your New Hiring Engine.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            num="01" 
            title="We Source" 
            desc="Our algorithms scan LinkedIn, Social, and Communities for high-intent SDR talent."
          />
          <StepCard 
            num="02" 
            title="We Video-Vet" 
            desc="AI filters the noise; our Lead Recruiter verifies the pitch. You only see the top 5%."
          />
          <StepCard 
            num="03" 
            title="You Interview" 
            desc="You receive a curated menu of candidates every Monday. Click to watch, reply to book."
          />
        </div>
      </div>
    </section>
  );
}