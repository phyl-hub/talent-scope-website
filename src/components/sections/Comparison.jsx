import React from 'react';
import { CheckCircle, XCircle, Sparkles, ShieldCheck, Timer, DollarSign, Flame } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6" id="compare">
      <div className="text-center mb-14 space-y-3">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
          Why Solar Dealers Switch
          <Sparkles className="w-4 h-4" />
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          Hire Solar Setters Without Recruiter Fees. Your <strong>Remote Solar Sales Team</strong> Puts Glass on Roofs.
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          <strong>Solar leads cost $50+.</strong> Every empty seat burns lead spend. Stop losing 5–10 solar installs monthly to turnover with our <strong>solar appointment setter staffing</strong>.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        {/* Traditional Recruiter */}
        <div className="bg-white border border-red-100 rounded-3xl p-8 shadow-lg flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-red-50 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-red-500">Traditional Recruiter</p>
              <p className="text-sm text-slate-500">Slow, expensive, high-churn gamble</p>
            </div>
            <XCircle className="w-6 h-6 text-red-200" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">$5k–$20k per hire</p>
                <p className="text-sm text-slate-500">Plus replacement fees when they quit. You pay again and again.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">2–4 weeks to see resumes</p>
                <p className="text-sm text-slate-500">Empty seats = burned leads = lost installs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Resume forwarding, minimal vetting</p>
                <p className="text-sm text-slate-500">You still screen, interview, and gamble on fit.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 text-sm text-slate-500">
            <Flame className="w-4 h-4 inline mr-1 text-red-400" />
            Hidden cost: lost pipeline, manager time, churn from empty territories.
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:flex flex-col items-center justify-center text-slate-300">
          <span className="h-full w-px bg-slate-200" aria-hidden></span>
        </div>

        {/* Talent Scope */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-amber-500 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between border-b border-amber-700 pb-4 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Talent Scope Solar Setter Bench</p>
              <p className="text-sm text-amber-100">Weekly AI-vetted remote solar sales reps with Zoom recordings</p>
            </div>
            <CheckCircle className="w-6 h-6 text-amber-400" />
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">$1,000/mo flat — unlimited hires</p>
                <p className="text-sm text-amber-100">The bench never runs dry. Grab a replacement Monday.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">New setters every Monday</p>
                <p className="text-sm text-amber-100">3–10 vetted candidates weekly—D2D vets and new talent, ready same-day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">AI-vetted via Zoom recordings</p>
                <p className="text-sm text-amber-100">Watch the raw tapes. See the 5-Point Solar Scorecard.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 relative z-10">
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-900">
              <span className="bg-amber-400 px-3 py-1 rounded-full">3–10 Solar Setters Weekly</span>
              <span className="bg-white/90 px-3 py-1 rounded-full">$0 Recruiter Fees</span>
              <span className="bg-amber-100 px-3 py-1 rounded-full">Unlimited Hires</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
