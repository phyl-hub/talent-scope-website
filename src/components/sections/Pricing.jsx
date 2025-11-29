import React from 'react';
import FeatureItem from '../ui/FeatureItem';

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Left: Value */}
            <div className="p-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Simple, Flat Pricing.</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Hire as many SDRs as you want. No placement fees. No hidden costs. Just a simple monthly subscription.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="3-5 Verified Candidates Weekly" />
                <FeatureItem text="Video Pitches Included" />
                <FeatureItem text="0% Placement Fees" />
                <FeatureItem text="Hungry, Coachable Talent" />
              </ul>
              
              {/* Massive Cancel Emphasis */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-blue-600 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Pause or Cancel Anytime
                </p>
                <p className="text-xs text-slate-400 mt-1 pl-4">No contracts. No long-term lock-in.</p>
              </div>
            </div>

            {/* Right: Price */}
            <div className="bg-slate-900 p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
              
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Membership</p>
              <div className="text-6xl font-black mb-2">$1,000</div>
              <p className="text-slate-400 mb-8">/month</p>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-blue-600/25">
                Get This Monday's Menu
              </button>
              <p className="text-xs text-slate-500 mt-4">7-day free trial available.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}