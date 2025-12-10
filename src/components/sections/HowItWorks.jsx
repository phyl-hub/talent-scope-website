import React from 'react';
import { Search, Video, CheckCircle2, CalendarClock, Zap, Mic, Wifi, DollarSign, MessageCircle, Flame, Users } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-amber-600" />,
      title: 'We Source Top Solar Talent',
      body: 'We recruit from top D2D teams, virtual sales floors, and competitive markets. We filter for experience, drive, and professionalism. We only present reps who are ready to produce.',
      stat: '500+ sourced weekly',
    },
    {
      icon: <Video className="w-6 h-6 text-amber-500" />,
      title: 'The Tape Don\'t Lie',
      body: 'Every rep records a 90-120 sec Loom. You see their energy. You hear their tonality. You know if they can sell in the first 10 seconds. No resume fluff.',
      stat: 'AI-scored + human review',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: 'We Build Your Pipeline',
      body: 'Every Monday, fresh talent drops into your portal. They don\'t disappear. They STACK. Build a reserve army of 20, 30, 50 reps ready to deploy. Candidates are automatically removed after 30 days to ensure your bench stays fresh and active.',
      stat: 'Talent accumulates weekly',
    },
  ];

  const scorecard = [
    { 
      icon: <Mic className="w-5 h-5" />, 
      label: 'English Clarity', 
      desc: 'No language barrier. Instant trust with US homeowners.' 
    },
    { 
      icon: <DollarSign className="w-5 h-5" />, 
      label: 'Commission Hungry', 
      desc: 'Wants to kill what they eat. Not looking for a salary safety net.' 
    },
    { 
      icon: <Wifi className="w-5 h-5" />, 
      label: 'Tech Ready', 
      desc: 'Hardwired internet. Noise-canceling headset. Ready to dial.' 
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: 'Tonal Authority', 
      desc: 'Sounds like an expert, not a telemarketer.' 
    },
    { 
      icon: <Zap className="w-5 h-5" />,
      label: 'Objection Handling', 
      desc: 'Doesn\'t fold when the homeowner says "Not interested."' 
    },
  ];

  return (
    <section className="py-24 bg-white" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Stock Your Floor. <span className="text-amber-600">Fast.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            <strong>Velocity, not a database.</strong> Every Monday, your <strong>private Notion portal</strong> is stacked with fresh, pre-vetted solar reps. <strong>90-120 sec Loom auditions</strong> prove the skill. <span className="text-amber-600 font-bold">Candidates are automatically removed after 30 days</span>—no stale inventory, no "damaged goods." If you see them, they're fresh. You draft the winners.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="grid md:grid-cols-3 gap-6 relative mb-16">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100" aria-hidden></div>
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
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
              {idx === 2 && (
                <div className="mt-4 text-xs text-amber-600 font-bold bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
                  Candidates are visible for <span className="font-black">30 days max</span>. After that, they're purged. No job board. No stale inventory. Only live, high-velocity talent.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stacking Explainer */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-400" />
                The Power of "Stacking"
              </h3>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">The Staple:</strong> We deliver a reliable, high-volume stream of Solar Setters to keep your calendars full and stop lead burn. Every Monday. No exceptions.
              </p>
              <p className="text-slate-300">
                <strong className="text-amber-400">The Prize:</strong> We occasionally drop vetted High-Ticket Closers onto the bench. We never guarantee a Closer drop—they're rare. First-come, first-served. If you're fast, you might snag one for $0 recruitment fees.
              </p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-xs text-slate-400 font-bold uppercase mb-4">What You Get Every Monday</p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-white font-bold">3-10 Solar Setters</p>
                    <p className="text-slate-400 text-xs">The grind. Keep calendars full.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-white font-bold">Closers When Available</p>
                    <p className="text-slate-400 text-xs">Rare drops. Move fast. 🔥</p>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <p className="text-green-400 font-bold">$0 placement fees. Hire unlimited.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Point Solar Scorecard */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-black mb-6 text-center">The 5-Point Solar Scorecard</h3>
          <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
            What actually sells solar over the phone. Not resume buzzwords.
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
            <span>Bench drop</span>
            <span className="text-amber-300">Every Monday 9 AM EST</span>
          </div>
          <div className="bg-amber-50 text-amber-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Weekly Setters</span>
            <span className="font-black">3-10 per drop</span>
          </div>
          <div className="bg-red-50 text-red-900 rounded-xl px-4 py-3 flex items-center justify-between">
            <span>Closers</span>
            <span className="font-black">🔥 Rare drops only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
