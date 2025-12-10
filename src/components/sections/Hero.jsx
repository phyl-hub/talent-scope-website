import React from 'react';
import { ArrowRight, CheckCircle2, Play, Lock, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CandidateRow from '../ui/CandidateRow';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white" id="product-promise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold border border-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Next Bench Drop: This Monday @ 9:00 AM EST
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-3">
                The #1 Bench for <span className="text-amber-600">Remote Solar Sales Talent.</span>
              </h1>
              <p className="text-lg text-slate-900 font-semibold">
                We stock your sales floor with AI-vetted <strong>Appointment Setters</strong> every Monday. Plus, get exclusive access to <strong className="text-amber-600">High-Ticket Closers</strong> when they drop.
              </p>
            </div>

            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              <strong>3–10 pre-vetted reps weekly. $0 recruiter fees. Unlimited hiring from $1,000/mo flat.</strong>
            </p>

            <Link
              to="/schedule"
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-amber-500/30 transition hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              See The Talent Bench FREE
              <ArrowRight size={20} />
            </Link>

            <p className="text-sm text-amber-700 font-bold bg-amber-50 px-4 py-2 rounded-lg border border-amber-200 inline-block">
              🎥 Watch Zoom recordings of Setters & Closers before you hire. 100% free.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-start gap-1">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Always Stocked</span>
                <span className="text-sm font-bold text-slate-900">Setters + Closers</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Zero Friction</span>
                <span className="text-sm font-bold text-slate-900">Private Notion Link</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI-Vetted</span>
                <span className="text-sm font-bold text-slate-900">Watch Their Zoom Calls</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-amber-600" /> Used by 50+ Solar Dealers & Virtual Floors</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-amber-600" /> $0 placement fees</span>
            </div>
          </div>

          {/* Right Column: The "Vault" Visual */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100 rounded-full blur-3xl opacity-40 -z-10"></div>

            <div className="absolute top-0 right-0 w-[420px] h-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 z-0 transform rotate-2 hover:rotate-0 transition duration-500 group cursor-pointer">
              <img 
                src="/images/high-energy-sdr-team.jpg" 
                alt="Remote solar sales team of AI-vetted appointment setters working on video calls"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Setters Drop Weekly • Closers Drop Rare
              </div>
            </div>

            <div className="absolute bottom-10 left-0 w-[380px] z-10">
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 -rotate-1 hover:rotate-0 transition duration-500">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Lock size={10} />
                    Your Private Bench
                  </div>
                </div>

                <div className="space-y-3">
                  <CandidateRow name="Marcus Torres" role="Solar Setter • D2D Vet" score={9.8} />
                  <div className="relative">
                    <CandidateRow name="Jordan Mills" role="High-Ticket Closer" score={9.4} />
                    <div className="absolute -right-2 -top-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg animate-pulse">
                      🔥 RARE DROP
                    </div>
                  </div>
                  <CandidateRow name="Ashley Chen" role="Lead Generator" score={9.6} />
                </div>

                <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-slate-900 text-white p-4 rounded-xl shadow-xl flex flex-col items-center gap-1">
                  <span className="text-xs text-slate-400 font-bold uppercase">Action</span>
                  <span className="text-lg font-bold text-green-400">Book Now</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="/images/high-energy-sdr-team.jpg" className="w-full h-48 object-cover" alt="Virtual solar sales floor with remote appointment setters on Zoom calls" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play size={40} fill="white" className="text-white" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6">
              <CandidateRow name="Marcus Torres" role="Solar Setter • D2D Vet" score={9.8} />
              <CandidateRow name="Ashley Chen" role="Virtual Consultant" score={9.6} />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
