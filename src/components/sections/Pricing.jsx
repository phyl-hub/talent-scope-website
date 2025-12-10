import React from 'react';
import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Flat-Fee Solar Sales Staffing for <strong>Solar Dealers & Virtual Sales Floors</strong>.
          </h2>
          <p className="text-2xl text-slate-600 mt-4 max-w-2xl mx-auto">
            Pick your volume. Get fresh, <strong>AI-vetted solar appointment setters</strong> every Monday. No recruiter fees. No placement costs. Ever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          
          {/* DEALER CORE */}
          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
              MOST POPULAR
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black text-slate-900">Dealer Core</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black text-slate-900">$1,000</span>
                <span className="text-xl text-slate-600">/month</span>
              </div>
              <p className="text-lg text-slate-600 mt-2">For solar dealers hiring 2–5 remote solar appointment setters</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>3–5 Vetted Solar Setters Weekly</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Access to 'Hidden Gem' Closers (When Available)</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">Private Notion bench (yours forever)</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>AI-Vetted via Zoom</strong> + recordings included</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>$0 Placement Fees</strong></span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                See Actual Setters FREE — Book Demo
              </Link>
              <p className="text-slate-500 mt-4 text-sm text-center">
                Month-to-month. Cancel anytime. No long-term contracts.
              </p>
            </div>
          </div>

          {/* VIRTUAL FLOOR SCALE */}
          <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-3xl shadow-3xl overflow-hidden text-white">
            <div className="absolute top-0 left-0 bg-amber-400 text-black px-6 py-2 rounded-br-2xl font-bold text-sm">
              HIGH TURNOVER / SCALING
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black">Virtual Floor Scale</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black">$1,800</span>
                <span className="text-xl opacity-90">/month</span>
              </div>
              <p className="text-lg opacity-90 mt-2">For solar dealers scaling 10+ remote solar setters or fighting high churn</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>6–10 remote solar sales reps</strong> delivered every Monday</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>Priority Access to Closer Drops</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Everything in Dealer Core</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Larger candidate pool, ideal for scaling</span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                See Actual Setters FREE — Book Demo
              </Link>
              <p className="text-slate-500 mt-4 text-sm text-center">
                Month-to-month. Cancel anytime. No long-term contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Pain Reminder */}
        <div className="text-center">
          <p className="text-3xl font-black text-slate-900">
            Recruiters charge <span className="text-red-600">$5k for a Setter, $20k for a Closer</span>. Then they quit.
          </p>
          <p className="text-2xl text-slate-600 mt-4">
            We charge $1,000 flat. Hire unlimited. Access both Setters & Closers. Grab a replacement next Monday.
          </p>
          <p className="text-xl text-slate-500 mt-8 font-medium">
            Stop burning lead spend on empty seats.
          </p>
        </div>
      </div>
    </section>
  );
}
