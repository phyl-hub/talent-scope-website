import React from 'react';
import RosterCard from '../ui/RosterCard';

export default function WeeklyMenu() {
  return (
    <section id="roster" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
        What You Get Every Monday
      </h2>
      <p className="text-center text-slate-400 mb-16 text-lg">Your product demo. No fake anonymized disclaimers.</p>

      <div className="grid md:grid-cols-3 gap-8">
        <RosterCard 
          initials="SM" name="Sarah M." title="Top 1% Scorer" score={9.2}
          highlight="Closed $500k ARR at Series B startup. 3x quota." videoReady
        />
        <RosterCard 
          initials="AJ" name="Alex J." title="Top 3% Scorer" score={8.7}
          highlight="Discovery specialist. 11 calls/week. Strong close rate." videoReady
        />
        <RosterCard 
          initials="JK" name="Jordan K." title="Top 5% Scorer" score={8.9}
          highlight="Territory expansion expert. 168% quota attainment." videoReady
        />
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-400 mb-4 font-semibold">Real candidates. Real data. Real videos included.</p>
        <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition duration-300">
          See This Week's Full Menu
        </button>
      </div>
    </section>
  );
}