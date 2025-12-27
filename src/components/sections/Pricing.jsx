import React from 'react';
import { Zap, ShieldCheck, CheckCircle2, Flame, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Scalable Volume. Fixed Cost.
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Stop Paying <span className="text-red-600">$5K-$20K</span> Per Hire.
          </h2>
          <p className="text-2xl text-slate-600 mt-4 max-w-2xl mx-auto">
            <strong>Your MCA floor loses 50% of reps every quarter. Variable fees destroy your P&L.</strong></p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          
          {/* CORE PLAN */}
          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
              MOST POPULAR
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black text-slate-900">Growth Core</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black text-slate-900">$1,000</span>
                <span className="text-xl text-slate-600">/month</span>
              </div>
              <p className="text-lg text-slate-600 mt-2">For 5–10-seat virtual floors ready to eliminate hiring friction.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900"><strong>3–5 Outbound Funding Specialists</strong> dropped every Monday @ 2 PM EST</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Remote-Ready:</strong> Vetted for tech-readiness and remote discipline.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Stack up to 20 Candidates</strong> in your portal</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>The Tape Don't Lie</strong>—verify dial-pressure resilience</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Instant Replacement.</strong> Rep quits? Draft another.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>$0 Placement Fees. Unlimited hires.</strong></span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                View first candidates for FREE
              </Link>
              <p className="text-slate-500 mt-4 text-sm text-center">
                Month-to-month. Cancel anytime. Weekly Inventory Drops.
              </p>
            </div>
          </div>

          {/* SCALE PLAN */}
          <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-3xl shadow-3xl overflow-hidden text-white">
            <div className="absolute top-0 left-0 bg-amber-400 text-black px-6 py-2 rounded-br-2xl font-bold text-sm">
              HIGH VOLUME
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black">Enterprise Scale</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black">$1,800</span>
                <span className="text-xl opacity-90">/month</span>
              </div>
              <p className="text-lg opacity-90 mt-2">For 10+ seat teams that need continuous dial capacity.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>8–12 Outbound Funding Specialists</strong> dropped every Monday @ 9 AM EST (Priority)</span>
                </li>
                <li className="flex items-start gap-4">
                  <Flame className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>Stack up to 50 Candidates</strong> in your portal</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Everything in Growth Core</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Keep your 10+ seat floor at max dial capacity</span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                View first candidates for FREE
              </Link>
              <p className="opacity-60 mt-4 text-sm text-center">
                Month-to-month. Cancel anytime. Weekly Inventory Drops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
