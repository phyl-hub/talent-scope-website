import React from 'react';
import { Zap, Video } from 'lucide-react';

export default function CandidateRow({ name, role, score, userTier = 'Growth' }) {
  const isTopTen = Number(score) >= 8.5;
  const isGated = userTier === 'Growth' && isTopTen;

  return (
    <div className="relative flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition cursor-pointer group bg-white overflow-hidden">
      {isGated && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
          <div className="text-center px-4">
            <p className="text-xs font-black text-slate-900">
              Enterprise Only: Top 10% Asset. Upgrade to Unlock.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-blue-200 group-hover:text-blue-700 transition">
          {name.charAt(0)}
        </div>
        <div>
          <p className={`font-bold text-slate-900 ${isGated ? 'blur-gaussian select-none' : ''}`}>{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex flex-col items-end gap-2">
          <div className={isTopTen ? 'badge-top-10' : 'inline-flex items-center rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200'}>
            {isTopTen ? 'Top 10% Elite Batch' : 'Standard Batch'}
          </div>

          <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
            <Zap size={12} fill="currentColor" /> {score}
          </div>

          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold border ${isGated ? 'blur-gaussian select-none bg-slate-100 text-slate-500 border-slate-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
            <Video size={12} /> Video Audit
          </div>
        </div>
      </div>
    </div>
  );
}