import React from 'react';
import { Search, Video, CheckCircle2, CalendarClock, Sparkles, Mic, Wifi, DollarSign, MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-amber-600" />,
      title: 'We Source D2D Solar Sales Talent',
      body: 'We headhunt D2D solar sales veterans tired of door-knocking plus high-potential remote solar closers. LinkedIn, solar communities, and commission-driven talent pools—sourced daily for your solar sales team.',
      stat: '500+ sourced weekly',
    },
    {
      icon: <Video className="w-6 h-6 text-amber-500" />,
      title: 'They Submit a Zoom Recording',
      body: 'Candidates record a Zoom call answering our Solar-specific screening questions. Our AI vets tone, clarity, energy, and rebuttal handling. No retakes. Just raw performance.',
      stat: 'AI-vetted via Zoom',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: 'You Hire Solar Appointment Setters',
      body: 'Your private Notion bench goes live Monday 9 AM. Watch Zoom recordings of solar setters, review AI-generated Scorecards, and contact your picks directly via email or LinkedIn.',
      stat: '3–10 solar setters weekly',
    },
  ];

  const scorecard = [
    { icon: <Mic className="w-5 h-5" />, label: 'English Clarity', desc: 'Native / Near-Native verified' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Income Ambition', desc: 'Chasing $100k+, not minimum wage' },
    { icon: <Wifi className="w-5 h-5" />, label: 'Tech Check', desc: 'Hardwired internet + headset ready' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Tonal Authority', desc: 'Do they sound like an expert?' },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Rebuttal Instinct', desc: "No freeze at 'Not Interested'" },
  ];

  return (
    <section className="py-24 bg-white" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
            How Solar Setter Hiring Works
            <Sparkles className="w-4 h-4" />
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Hire Pre-Vetted Solar Appointment Setters. Watch Zoom Recordings. Book Instantly.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            No logins. No passwords. Just a secure Notion link with <strong>AI-vetted solar telesales</strong> Zoom recordings, the <strong>5-Point Solar Scorecard</strong>, and direct contact info.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="grid md:grid-cols-3 gap-6 relative mb-16">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100" aria-hidden></div>
          {steps.map((step, idx) => (
            <div key={step.title} className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-lg">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{step.body}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                <CalendarClock className="w-4 h-4" />
                {step.stat}
              </div>
            </div>
          ))}
        </div>

        {/* 5-Point Solar Scorecard */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-black mb-6 text-center">The 5-Point Solar Scorecard</h3>
          <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
            We vet for the things that actually matter in <strong>solar telesales</strong>—not generic recruiter fluff.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scorecard.map((item) => (
              <div key={item.label} className="bg-slate-800 rounded-xl p-4 text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  {item.icon}
                </div>
                <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm font-semibold">
          <div className="bg-slate-900 text-white rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Delivery cadence</span>
            <span className="text-amber-300">Every Monday @ 9 AM</span>
          </div>
          <div className="bg-amber-50 text-amber-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Recruiter fees</span>
            <span className="font-black">$0</span>
          </div>
          <div className="bg-emerald-50 text-emerald-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Hires allowed</span>
            <span className="font-black">Unlimited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
