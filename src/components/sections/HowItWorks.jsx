import React from 'react';
import { Search, CheckCircle2, CalendarClock } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
            <CalendarClock className="w-4 h-4" />
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            How Talent Scope Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Running a remote MCA sales team means constant motion. Reps churn. Seats open. Dials drop. Most companies feel this pain too late.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Talent Scope exists to solve that operational gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-lg">01</div>
              <Search className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1: We source and screen remote MCA outbound talent</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We continuously source remote Outbound Funding Specialists with experience in high-volume, performance-driven environments. Resumes are secondary. Every candidate completes a short video audition designed to test:
            </p>
            <ul className="text-slate-700 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Real-time objection handling under rejection pressure</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Tonal authority on outbound financial calls</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Comfort with commission-driven compensation</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Technical readiness for sustained dial capacity and CRM workflows</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Only candidates who meet our baseline make it into the platform.
            </p>
          </div>

          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-lg">02</div>
              <CalendarClock className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2: Weekly talent drops</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every week, new candidates are released into the Talent Scope portal. You get access to:
            </p>
            <ul className="text-slate-700 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Outbound Funding Specialists optimized for sustained dial capacity and real-time objection handling</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Candidates vetted for rejection pressure resilience and front-end qualification</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              You review, contact, and decide who you want to move forward with. We don’t interfere with your hiring decisions.
            </p>
          </div>

          <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-lg">03</div>
              <CheckCircle2 className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Step 3: You hire directly, on your terms</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Talent Scope does not employ reps and does not charge per hire.
            </p>
            <p className="text-slate-600 font-semibold mb-2">You:</p>
            <ul className="text-slate-700 text-base space-y-2 mb-4">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Interview candidates directly</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Decide compensation and structure</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />Hire, trial, or pass</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              You pay a flat monthly subscription for access to the talent flow. No recruiter markups. No per-head fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}