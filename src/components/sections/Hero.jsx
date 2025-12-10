import React from 'react';
import { ArrowRight, CheckCircle2, Play, Lock, Zap, Video, Flame, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold border border-amber-200">
              <Zap size={14} />
              Weekly Talent Drops: Mondays @ 9AM EST
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
                Pre-Vetted Solar Reps. <br />
                <span className="text-amber-600">Delivered Weekly.</span>
              </h1>
              
              <p className="text-lg text-slate-900 font-medium mb-4">
                <strong>Simplify solar sales recruiting. Eliminate high placement fees.</strong> We stock your private bench with 3–10 vetted Setters every Monday. Watch the 90-120 sec audition. Hire instantly. <strong>$1,000/mo flat.</strong>
              </p>

              <p className="text-lg text-slate-500 leading-relaxed">
                You don't need "ammunition." You need a <strong>reliable supply chain of talent.</strong> Never let an empty seat burn your leads again.
              </p>
            </div>

            <Link
              to="/schedule"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              See Actual Candidates Free
              <ArrowRight size={20} />
            </Link>

            <p className="text-sm text-slate-600 font-medium flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 inline-block">
              <Video size={16} className="text-slate-400" /> 
              Watch 90-120 sec Loom auditions before you interview.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100 mt-4">
              <div className="flex flex-col items-start gap-1">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Weekly Drops</span>
                <span className="text-sm font-bold text-slate-900">3-10 New Reps/Wk</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Bench</span>
                <span className="text-sm font-bold text-slate-900">Talent Stacks Up</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flat Rate</span>
                <span className="text-sm font-bold text-slate-900">$0 Placement Fees</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm font-medium text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-600" /> Trusted by 50+ Dealers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-600" /> Unlimited Hires</span>
            </div>
          </div>

          {/* Right Column: The Bench Visual */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Main Video Card */}
            <div className="absolute top-0 right-0 w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 z-0 transform rotate-2 hover:rotate-0 transition duration-500 group cursor-pointer border border-slate-100">
              <img 
                src="/images/high-energy-sdr-team.jpg" 
                alt="Remote solar sales floor"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Bench UI */}
            <div className="absolute bottom-12 left-0 w-[380px] z-10">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 -rotate-1 hover:rotate-0 transition duration-500">
                
                {/* Header of Card */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1 border border-amber-100">
                    <Lock size={10} />
                    Your Private Bench
                  </div>
                </div>

                {/* Candidate List */}
                <div className="space-y-3 relative">
                  <CandidateRow name="Marcus Torres" role="Solar Setter • D2D Vet" score={9.8} />
                  
                  {/* Active Candidate with Popover */}
                  <div className="relative">
                    <CandidateRow name="Jordan Mills" role="Closer • $80K Avg" score={9.4} />
                    <div className="absolute -right-2 -top-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg animate-pulse">
                      🔥 RARE DROP
                    </div>
                  </div>

                  <CandidateRow name="Ashley Chen" role="Lead Generator" score={9.6} />
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Closers Drop Rare</span>
                    <span className="text-slate-300">● ● ●</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-100">
              <img src="/images/high-energy-sdr-team.jpg" className="w-full h-48 object-cover" alt="Remote solar sales floor" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <Play size={40} fill="white" className="text-white" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6">
              <CandidateRow name="Marcus Torres" role="Solar Setter • D2D Vet" score={9.8} />
              <CandidateRow name="Jordan Mills" role="High-Ticket Closer" score={9.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}