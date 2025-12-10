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
            Cost-Effective Scaling
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Build Your Talent Pipeline.
          </h2>
          <p className="text-2xl text-slate-600 mt-4 max-w-2xl mx-auto">
            <strong>Stack talent weekly.</strong> Keep a bench of top performers ready to deploy. <strong>$0 placement fees.</strong>
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
              <p className="text-lg text-slate-600 mt-2">For dealers who need to keep seats filled.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>3-5 Fresh Reps</strong> dropped every Monday</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Stack up to 20 Candidates</strong> in your portal</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>The Tape Don't Lie</strong> (90-120 sec auditions)</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>Instant Replacement.</strong> Rep quits? Grab another.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900"><strong>$0 Placement Fees. Hire unlimited.</strong></span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                Start Stacking
              </Link>
              <p className="text-slate-500 mt-4 text-sm text-center">
                Cancel anytime. No contracts. Just talent.
              </p>
            </div>
          </div>

          {/* VIRTUAL FLOOR SCALE */}
          <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-3xl shadow-3xl overflow-hidden text-white">
            <div className="absolute top-0 left-0 bg-amber-400 text-black px-6 py-2 rounded-br-2xl font-bold text-sm">
              HIGH VOLUME
            </div>
            <div className="pt-12 pb-10 px-10">
              <h3 className="text-3xl font-black">Virtual Floor Scale</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-black">$1,800</span>
                <span className="text-xl opacity-90">/month</span>
              </div>
              <p className="text-lg opacity-90 mt-2">For floors scaling fast and needing constant talent flow.</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>6-10 Fresh Reps</strong> dropped every Monday</span>
                </li>
                <li className="flex items-start gap-4">
                  <Flame className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold"><strong>Stack up to 50 Candidates</strong> in your portal</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Everything in Dealer Core</span>
                </li>
                <li className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">High volume bench for rapid scaling</span>
                </li>
              </ul>

              <Link to="/schedule" className="mt-12 block w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-5 rounded-xl text-center shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
                Start Stacking
              </Link>
              <p className="opacity-60 mt-4 text-sm text-center">
                Cancel anytime. No contracts. Just talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
