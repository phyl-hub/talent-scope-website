import React from 'react';
import { ArrowRight, CheckCircle2, Play, Users } from 'lucide-react';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Pill Badge - Scarcity */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Accepting New Founders (Beta)
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Hire a Top 1% SDR. <br />
              <span className="text-blue-600">By Monday.</span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Stop reading resumes. We auto-reject the 95% of candidates who can't pitch. You only see the top 5 video-verified candidates ready to close.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                Get This Monday's Menu
                <ArrowRight size={20} />
              </button>
              
              {/* Trust Indicator - Beta Cohort */}
              <div className="flex items-center gap-4 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                 <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600">
                    <Users size={20} />
                 </div>
                <span className="text-sm font-semibold text-slate-600">Join the Beta Cohort</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-600" /> No Placement Fees</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-600" /> Cancel Anytime</span>
            </div>
          </div>

          {/* Right: Clean UI Mockup */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 rotate-1 hover:rotate-0 transition duration-500 max-w-md mx-auto">
              {/* Mock Window Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  5 Verified Matches
                </div>
              </div>

              {/* Candidate List - Visual Proof of Quality */}
              <div className="space-y-3">
                <CandidateRow name="Sarah M." role="Hungry Grads (0-2 Yrs)" score={9.4} />
                <CandidateRow name="James C." role="Coachability: High" score={9.1} />
                <CandidateRow name="Elena R." role="Pitch Energy: High" score={8.8} />
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-6 bottom-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">Verification</p>
                  <p className="text-sm font-bold text-slate-900">Video Included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}