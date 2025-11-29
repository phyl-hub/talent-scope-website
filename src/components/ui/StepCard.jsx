import React from 'react';

export default function StepCard({ num, title, desc }) {
  return (
    <div className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition duration-300">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-sm border border-blue-100">
        {num}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
}