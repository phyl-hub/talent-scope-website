import React from 'react';

export default function WeeklyMenuCard({ name, role, score, highlight }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/40 transition duration-300">
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-slate-400">{role}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-cyan-400">{score}</p>
        <p className="text-xs text-slate-400">{highlight}</p>
      </div>
    </div>
  );
}