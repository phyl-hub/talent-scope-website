import React from 'react';
import { Zap } from 'lucide-react';

export default function CandidateRow({ name, role, score }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition cursor-pointer group bg-white">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-blue-200 group-hover:text-blue-700 transition">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
          <Zap size={12} fill="currentColor" /> {score}
        </div>
      </div>
    </div>
  );
}