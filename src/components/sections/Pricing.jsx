import React from 'react';
import { Zap } from 'lucide-react';
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
              <p className="text-sm text-slate-500 mt-2">Candidates remain on your bench for up to 30 days.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">📬</span>
                  <span><strong className="text-slate-900">2–4 Standard Batch</strong> candidates delivered weekly.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">⏰</span>
                  <span>Standard midday drop at <strong className="text-slate-900">2 PM EST</strong> every Monday.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🧑‍💻</span>
                  <span><strong className="text-slate-900">Remote-ready:</strong> Vetted for tech readiness and remote discipline.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🗂️</span>
                  <span><strong className="text-slate-900">Stack up to 20 candidates</strong> in your portal.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🎬</span>
                  <span><strong className="text-slate-900">The tape don’t lie:</strong> Verify dial-pressure resilience.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🔄</span>
                  <span><strong className="text-slate-900">Instant replacement:</strong> Rep quits? Draft another.</span>
                </li>
                <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🆓</span>
                  <span><strong className="text-slate-900">$0 placement fees</strong> with unlimited hires.</span>
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
              <p className="text-sm opacity-70 mt-2">Candidates remain on your bench for up to 30 days.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-3 text-base leading-relaxed opacity-95">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">📋</span>
                  <span>Everything in <strong>Growth Core</strong>.</span>
                </li>

                <li className="flex items-start gap-3 text-base leading-relaxed opacity-95">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🌅</span>
                  <span><strong>Priority early morning drop</strong> at 9 AM EST every Monday.</span>
                </li>

                <li className="flex items-start gap-3 text-base leading-relaxed opacity-95">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">👑</span>
                  <span><strong>5–8 Elite Batch</strong> candidates delivered weekly.</span>
                </li>

                <li className="flex items-start gap-3 text-base leading-relaxed opacity-95">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">⚡</span>
                  <span><strong>Priority access</strong> to the top 10% Elite Batch.</span>
                </li>

                <li className="flex items-start gap-3 text-base leading-relaxed opacity-95">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">🗄️</span>
                  <span><strong>Stack up to 50 candidates</strong> in your portal.</span>
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
