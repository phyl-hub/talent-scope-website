import React from 'react';
import { Play } from 'lucide-react';

export default function RosterCard({ initials, name, title, score, highlight, videoReady }) {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/40 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/15 group relative">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white text-sm">
          {initials}
        </div>
        <div className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold group-hover:bg-cyan-500/30 transition">
          {score}/10
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-slate-400 mb-4">{title}</p>
      <p className="text-sm text-slate-300 leading-relaxed mb-4">{highlight}</p>
      
      {videoReady && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center group-hover:bg-cyan-500/50 transition">
            <Play size={20} className="text-cyan-300 ml-0.5" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
}