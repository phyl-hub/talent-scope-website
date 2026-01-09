import React from 'react';
import { Zap } from 'lucide-react';

export default function CandidateRow({ name, role, score, media }) {
  const shouldBlur = typeof score === 'number' && score >= 8.5;

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-900/60 transition cursor-pointer group bg-slate-900/40 relative">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold group-hover:bg-slate-700 transition">
            {name.charAt(0)}
          </div>
          {shouldBlur && (
            <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center">
              <span className="text-[6px] font-bold text-amber-400 text-center px-1">ELITE</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className={`font-bold text-slate-100 ${shouldBlur ? 'filter blur-sm' : ''}`}>{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
          {shouldBlur && (
            <p className="text-xs text-amber-400 font-semibold mt-1">Enterprise Only: Elite access (Score ≥ 8.5). Upgrade to unlock.</p>
          )}
        </div>
      </div>

      {media ? <div className={shouldBlur ? 'filter blur-sm' : ''}>{media}</div> : null}

      <div className="text-right">
        <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-xs font-bold border border-emerald-500/20">
          <Zap size={12} fill="currentColor" /> {score}
        </div>
      </div>
    </div>
  );
}