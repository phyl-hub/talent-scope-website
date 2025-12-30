import React from 'react';

export default function StepCard({ num, title, desc }) {
  return (
    <div className="text-center group p-5 rounded-2xl hover:bg-slate-900/40 transition duration-300 border border-transparent hover:border-slate-800">
      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-300 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-5 group-hover:scale-110 transition duration-300 shadow-sm border border-emerald-500/20">
        {num}
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
}