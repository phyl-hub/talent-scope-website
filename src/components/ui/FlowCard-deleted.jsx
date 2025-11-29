import React from 'react';

export default function FlowCard({ step, icon, title, desc, color }) {
  // Note: Handling dynamic gradients with string concatenation works here 
  // because we are passing full class strings like "from-blue-500"
  return (
    <div className={`rounded-2xl p-6 bg-gradient-to-br ${color}/10 border border-white/5 backdrop-blur-sm group hover:scale-105 transition duration-300`}>
      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 text-white font-bold group-hover:shadow-lg text-xl`}>
        {step}
      </div>
      <div className="text-cyan-300 mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}