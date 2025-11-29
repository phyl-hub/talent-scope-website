import React from 'react';
import { Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Founders Switch</h2>
          <p className="text-slate-500 mt-4">The agency model is broken. We fixed it.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm opacity-80">
            <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
              <Clock size={24} /> Traditional Agency
            </h3>
            <ul className="space-y-5 text-slate-500">
              <li className="flex items-center gap-3"><span className="text-red-400 text-xl font-bold">×</span> Expensive (20% of Salary)</li>
              <li className="flex items-center gap-3"><span className="text-red-400 text-xl font-bold">×</span> 4-6 weeks to hire</li>
              <li className="flex items-center gap-3"><span className="text-red-400 text-xl font-bold">×</span> Resume spam, no vetting</li>
              <li className="flex items-center gap-3"><span className="text-red-400 text-xl font-bold">×</span> "Salesy" recruiters</li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl shadow-blue-900/5 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <Zap size={24} fill="currentColor" /> Talent Scope
            </h3>
            <ul className="space-y-5 text-slate-900 font-medium">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Flat $1,000/month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Candidates every Monday</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> Video-Verified Quality</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20} /> <strong>Hungry, coachable talent (0-2 Yrs)</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}