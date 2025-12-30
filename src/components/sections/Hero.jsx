import React from 'react';
import { ArrowRight, CheckCircle2, Play, Lock, Zap, Video, Flame, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden bg-slate-950" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-500/20">
              <Flame size={14} className="fill-emerald-400 text-emerald-400" />
              Remote-First MCA Talent. Delivered Weekly.
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-6">
                Your Fixed-Cost<br/>
                <span className="text-emerald-400">Remote Bench</span><br/>
                for MCA shops.
              </h1>
                <p className="text-lg text-slate-300 mb-4 leading-relaxed max-w-lg">Access a vetted bench of <strong>Outbound Funding Specialists</strong> so empty seats never slow dial capacity.
                </p>
              <div className="space-y-3 mb-8 text-base text-slate-300">
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Weekly Inventory:</strong> Remote-ready outbound specialists.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Video Auditions:</strong> Verify dial-pressure resilience.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-bold"><strong>Fixed Cost:</strong> Flat monthly fee. Month-to-month.</span>
                </p>
              </div>
            </div>

            {/* Founder */}
            <div className="flex items-center gap-3">
              <img
                src="/images/Philipp-Hoffschroer.jpg"
                alt="Philipp Hoffschroer, Founder of ISO Bench"
                className="w-11 h-11 rounded-full object-cover border border-slate-800"
                loading="lazy"
              />
              <div className="text-sm leading-tight">
                <div className="text-slate-200 font-semibold">Philipp Hoffschroer</div>
                <div className="text-slate-400">Founder, ISO Bench</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/schedule"
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-10 py-3.5 min-w-[270px] rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/10 transition hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Preview Candidates Free
                <ArrowRight size={20} />
              </Link>
              <a
                href="#faq"
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/40 rounded-xl border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-900/70 transition-colors cursor-pointer"
              >
                <ShieldCheck size={18} className="text-slate-400" />
                No placement fees.
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              Month-to-month. Cancel anytime. Weekly Inventory Drops.
            </p>
          </div>

          {/* Right Column: The Bench Visual */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-3xl opacity-60 -z-10"></div>

            {/* Main Video Card */}
            <div className="absolute top-0 right-0 w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 z-0 transform rotate-2 hover:rotate-0 transition duration-500 group cursor-pointer border border-slate-800">
              <img 
                src="/images/high-energy-sdr-team.jpg" 
                alt="Remote financial services sales floor"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-slate-950/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700 shadow-lg group-hover:scale-110 transition">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Bench UI */}
            <div className="absolute bottom-12 left-0 w-[380px] z-10">
              <div className="bg-slate-900/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-slate-800 p-5 -rotate-1 hover:rotate-0 transition duration-500">
                
                {/* Header of Card */}
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1 border border-emerald-500/20">
                    <Lock size={10} />
                    Your Outbound Inventory
                  </div>
                </div>

                {/* Candidate List */}
                <div className="space-y-2.5 relative">
                  <CandidateRow name="Marcus Torres" role="Outbound Specialist • Bilingual" score={8.1} />
                  
                  {/* Active Candidate with Popover */}
                  <div className="relative">
                    <CandidateRow name="Enterprise Only:" role="Top 10% Asset. Upgrade to Unlock." score={9.5} />
                    <div className="absolute -right-2 -top-2 bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
                      TOP
                    </div>
                  </div>

                  <CandidateRow name="Enterprise Only:" role="Top 10% Asset. Upgrade to Unlock." score={8.6} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-800">
              <img src="/images/high-energy-sdr-team.jpg" className="w-full h-48 object-cover" alt="MCA sales floor" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                <Play size={40} fill="white" className="text-white" />
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-xl shadow-xl border border-slate-800 p-5">
              <CandidateRow name="Enterprise Only:" role="Top 10% Asset. Upgrade to Unlock." score={9.8} />
              <CandidateRow name="Enterprise Only:" role="Top 10% Asset. Upgrade to Unlock." score={9.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}