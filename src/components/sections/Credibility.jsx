import React from 'react';
import { CheckCircle2, XCircle, Zap } from 'lucide-react';

export default function Credibility() {
  return (
    <section className="py-24 bg-white" id="credibility">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            Why MCA companies use Talent Scope
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Built for high-churn, high-volume sales floors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Traditional recruiting breaks down when you need speed and throughput over resumes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pain Points */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Traditional recruiting breaks down in high-churn sales environments:</h3>
            <ul className="text-slate-700 text-base space-y-2">
              <li className="flex items-start gap-3"><XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />Recruiter fees don’t scale</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />Time-to-hire kills momentum</li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />Resumes don’t predict call performance</li>
            </ul>
          </div>

          {/* Operator Value */}
          <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Talent Scope is built for operators who need:</h3>
            <ul className="text-slate-700 text-base space-y-2">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Speed over polish</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Throughput over perfection</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />A reliable system instead of one-off hires</li>
            </ul>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm font-semibold">
          <div className="bg-slate-900 text-white rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Avg. time-to-first interview</span>
            <span className="text-amber-300">Under 24 hours</span>
          </div>
          <div className="bg-amber-50 text-amber-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Weekly candidate drop</span>
            <span className="font-black">Mon 9 AM & 2 PM EST</span>
          </div>
          <div className="bg-slate-100 text-slate-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Hiring model</span>
            <span className="font-black">Unlimited hires, flat fee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
