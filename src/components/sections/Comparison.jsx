import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, ShieldCheck, Timer, DollarSign, Flame } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6" id="compare">
      <div className="text-center mb-14 space-y-3">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
          <AlertTriangle className="w-4 h-4" />
          The Elite Operator Solution
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          Variable Placement Fees <span className="text-red-600">Destroy Your P&L.</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          <strong>$5K-$20K per hire is unsustainable</strong> when you lose 50% of your floor every quarter. Every placement fee spikes your CAC. Switch to a fixed-cost pipeline that keeps your MCA desks full.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        {/* Traditional Recruiter */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Traditional Agencies</p>
              <p className="text-sm text-slate-500">Slow. Expensive. Inefficient.</p>
            </div>
            <XCircle className="w-6 h-6 text-slate-300" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">$5K-$20K Per Placement</p>
                <p className="text-sm text-slate-500">Variable costs that spike every time you hire. Zero guarantee they perform.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">4–6 Weeks Downtime</p>
                <p className="text-sm text-slate-500">Every empty seat costs you $20k/mo in lost opportunity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Resume Fluff</p>
                <p className="text-sm text-slate-500">You waste hours interviewing candidates who can't close.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 text-sm text-slate-500">
            <Flame className="w-4 h-4 inline mr-1 text-red-500" />
            Result: CAC spikes with every hire. LTV erodes with every departure.
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:flex flex-col items-center justify-center text-slate-300">
          <span className="h-full w-px bg-slate-200" aria-hidden></span>
        </div>

        {/* Talent Scope */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-amber-500 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between border-b border-amber-800 pb-4 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Talent Scope</p>
              <p className="text-sm text-amber-100">Revenue-First MCA Recruiting.</p>
            </div>
            <CheckCircle className="w-6 h-6 text-amber-500" />
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <p className="font-semibold text-white">$1,000–$1,800/mo. Unlimited Hires.</p>
                <p className="text-sm text-amber-100">Hire for energy and grit, not experience. CAC stays fixed.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Remote-Ready Inventory.</p>
                <p className="text-sm text-amber-100">Vetted for tech-readiness and the discipline to hit 300+ dials/day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <p className="font-semibold text-white">90-120s Video Auditions</p>
                <p className="text-sm text-amber-100">Verify dial-pressure resilience before you interview.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 text-sm text-amber-100 relative z-10">
            <Flame className="w-4 h-4 inline mr-1 text-green-400" />
            Result: CAC protected. LTV preserved. Revenue uptime maximized.
          </div>
        </div>
      </div>
    </section>
  );
}
